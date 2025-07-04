import {FlatList, TextInput, View} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import {ProductCard, ProductCardSkeleton} from '../../molecules/ProductCard';
import {styles} from './Products.style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAuthStore} from '../../../stores/authentication';
import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import {getProducts} from '../../../api/products';
// import {LoadingScreen} from '../../../screens/LoadingScreen';
import {useTheme} from '../../../hooks/theme';
import {getProductsWithQuery} from '../../../api/products/products';
import {PressableWrapper} from '../../atoms/PressableWrapper';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProtectedStackParamList} from '../../../navigation';

const Products = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProtectedStackParamList, 'Main'>>();

  const accessToken = useAuthStore(state => state.accessToken);

  const {colors} = useTheme();

  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<'ascending' | 'descending' | null>(null);

  const {
    data: productsWrapper,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  } = useInfiniteQuery({
    queryKey: ['products'],
    queryFn: ({pageParam}) => getProducts(accessToken as string, pageParam),
    getNextPageParam: lastPage => {
      const currentPage = lastPage.pagination.currentPage;
      const totalPages = lastPage.pagination.totalPages;
      if (currentPage === totalPages) {
        return undefined;
      }
      return currentPage + 1;
    },
    initialPageParam: 1,
  });

  const {data: searchResultWrapper, isError} = useQuery({
    queryKey: ['search', query],
    queryFn: () => getProductsWithQuery(accessToken as string, query),
    enabled: query.length > 0,
  });

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, [refetch]);

  const toggleSortButton = useCallback(
    () =>
      setSort(prev => {
        if (prev === 'ascending') {
          return 'descending';
        } else if (prev === 'descending') {
          return null;
        } else {
          return 'ascending';
        }
      }),
    [],
  );

  const themedStyles = useMemo(() => styles(colors), [colors]);

  const products = useMemo(
    () => productsWrapper?.pages.flatMap(page => page.data) ?? [],
    [productsWrapper?.pages],
  );
  const searchResult = useMemo(
    () => !isError && (searchResultWrapper?.data.data ?? []),
    [searchResultWrapper?.data.data, isError],
  );

  const productsToDisplay = useMemo(() => {
    const base = query.length > 0 ? searchResult : products;

    const sorted = [...base];

    if (sort === 'ascending') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sort === 'descending') {
      sorted.sort((a, b) => b.price - a.price);
    }

    return sorted;
  }, [query, sort, products, searchResult]);
  return (
    <SafeAreaView>
      <View style={themedStyles.inputContainer}>
        <TextInput
          style={themedStyles.input}
          placeholder="Search ..."
          placeholderTextColor={'#888'}
          value={query}
          onChangeText={setQuery}
        />
        <PressableWrapper
          label={sort === null ? 'latest' : sort}
          style={themedStyles.sort}
          onPress={toggleSortButton}
        />
        <PressableWrapper
          label={'Add'}
          style={themedStyles.sort}
          onPress={() => {
            navigation.navigate('NewProduct');
          }}
        />
      </View>
      {isLoading || isRefetching ? (
        <FlatList
          data={Array.from({length: 6})}
          numColumns={2}
          columnWrapperStyle={themedStyles.columnWrapper}
          contentContainerStyle={themedStyles.productContainer}
          keyExtractor={(_, index) => `skeleton-${index}`}
          renderItem={() => <ProductCardSkeleton />}
        />
      ) : (
        <FlatList
          data={productsToDisplay}
          numColumns={2}
          columnWrapperStyle={themedStyles.columnWrapper}
          contentContainerStyle={themedStyles.productContainer}
          renderItem={({item}) => (
            <ProductCard
              id={item._id}
              title={item.title}
              price={item.price}
              mainImageUri={item.images[0].url}
            />
          )}
          keyExtractor={item => item._id}
          onEndReached={() => {
            if (hasNextPage && !isFetchingNextPage) {
              fetchNextPage();
            }
          }}
          onEndReachedThreshold={2}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      )}
    </SafeAreaView>
  );
};

export {Products};
