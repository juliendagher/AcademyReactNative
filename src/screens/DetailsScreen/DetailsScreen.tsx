import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {DetailsRouteProp} from './DetailsScreen.type';
import {data} from '../../assets/jsons/Products.json';
import {Error} from '../../components/atoms/Error';
import {Label} from '../../components/atoms/Label';
import {PressableWrapper} from '../../components/atoms/PressableWrapper';
import {styles} from './DetailsScreen.style';
import {useTheme} from '../../hooks/theme';

const DetailsScreen = () => {
  const {colors} = useTheme();
  const themedStyles = styles(colors);
  const {params} = useRoute<DetailsRouteProp>();
  const {id} = params;

  const product = data.find(item => item._id === id);

  return product ? (
    <ScrollView style={{backgroundColor: colors.background, height: '100%', padding: '10%', gap:'2%'}}>
      <Image style={themedStyles.image} source={{uri: product.images[0].url}} />
      <Label title={product.title} />
      <Text style={themedStyles.text}>Price: {product.price}$</Text>
      <Text style={themedStyles.description}>{product.description}</Text>
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
