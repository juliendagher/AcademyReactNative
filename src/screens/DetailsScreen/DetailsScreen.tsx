import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {DetailsRouteProp} from './DetailsScreen.type';
import {data} from '../../assets/Products.json';
import {Error} from '../../components/atoms/Error';
import {Label} from '../../components/atoms/Label';
import {PressableWrapper} from '../../components/atoms/PressableWrapper';
import { styles } from './DetailsScreen.style';

const DetailsScreen = () => {
  const {params} = useRoute<DetailsRouteProp>();
  const {id} = params;

  const product = data.find(item => item._id === id);

  return product ? (
    <ScrollView>
      <Image style={styles.image} source={{uri: product.images[0].url}} />
      <Label title={product.title} />
      <Text>Price: {product.price}$</Text>
      <Text>{product.description}</Text>
      <PressableWrapper label="Add to cart" />
      <PressableWrapper label="Share" />
    </ScrollView>
  ) : (
    <View>
      <Error errorMessage="Couldn't find requested product" />
    </View>
  );
};

export {DetailsScreen};
