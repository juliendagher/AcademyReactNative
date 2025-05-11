import {FlatList} from 'react-native';
import React from 'react';
import {ProductCard} from '../../molecules/ProductCard';
import {data} from '../../../assets/jsons/Products.json';
import {styles} from './Products.style';
import {SafeAreaView} from 'react-native-safe-area-context';

const Products = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.productContainer}
        renderItem={({item}) => (
          <ProductCard
            id={item._id}
            title={item.title}
            price={item.price}
            mainImageUri={item.images[0].url}
          />
        )}
        keyExtractor={item => item._id}
      />
    </SafeAreaView>
  );
};

export {Products};
