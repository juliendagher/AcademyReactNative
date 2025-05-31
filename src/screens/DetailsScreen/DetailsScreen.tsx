import {
  View,
  Text,
  Image,
  ScrollView,
  Alert,
  Pressable,
  Share,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {DetailsRouteProp} from './DetailsScreen.type';
import {Label} from '../../components/atoms/Label';
import {PressableWrapper} from '../../components/atoms/PressableWrapper';
import {styles} from './DetailsScreen.style';
import {useTheme} from '../../hooks/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useQuery} from '@tanstack/react-query';
import {getProductById} from '../../api/products/products';
import {useAuthStore} from '../../stores/authentication';
import Config from 'react-native-config';
import {LoadingScreen} from '../LoadingScreen';
// console.log(CameraRoll);

// const requestStoragePermission = async () => {
//   if (Platform.OS === 'android') {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
//     );
//     return granted === PermissionsAndroid.RESULTS.GRANTED;
//   }
//   return true;
// };

// const saveToGallery = async (uri: string) => {
//   // const hasPermission = await requestStoragePermission();
//   // if (!hasPermission) {
//   //   ToastAndroid.show('Permission denied', ToastAndroid.SHORT);
//   //   return;
//   // }

//   try {
//     const savedUri = await CameraRoll.saveAsset(uri, {type: 'photo'});
//     ToastAndroid.show(
//       `Image saved to gallery! ${savedUri}`,
//       ToastAndroid.SHORT,
//     );
//   } catch (error) {
//     ToastAndroid.show(`Error saving to gallery: ${error}`, ToastAndroid.SHORT);
//   }
// };

const DetailsScreen = () => {
  const {colors} = useTheme();
  const themedStyles = styles(colors);
  const {params} = useRoute<DetailsRouteProp>();
  const accessToken = useAuthStore(state => state.accessToken);

  const {data} = useQuery({
    queryKey: ['product', params.id],
    queryFn: () => getProductById(accessToken as string, params.id),
  });

  const product = data?.data.data;

  return product ? (
    <SafeAreaView style={themedStyles.container}>
      <ScrollView>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={themedStyles.imageContainer}>
          {product.images.map((image: {url: string; _id: string}) => (
            <Pressable
              key={image._id}
              // onLongPress={() => saveToGallery(image.url)}
            >
              <Image
                source={{uri: `${Config.BASE_URL}${image.url}`}}
                style={themedStyles.image}
              />
            </Pressable>
          ))}
        </ScrollView>
        <View style={themedStyles.detailsWrapper}>
          <Label title={product.title} />
          <Text style={themedStyles.text}>Price: {product.price}$</Text>
          <Text style={themedStyles.description}>{product.description}</Text>
          <PressableWrapper
            label="Contact seller"
            onPress={() => Alert.alert(product.user.email)}
          />
          <PressableWrapper label="Add to cart" />
          <PressableWrapper
            label="Share"
            onPress={() =>
              Share.share({
                message: `Check out this product! academyreactnative://details/${params.id}`,
              })
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <LoadingScreen />
  );
};

export {DetailsScreen};
