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
import {SafeAreaView} from 'react-native-safe-area-context';
import { useAuthStore } from '../../stores/authentication';

const DetailsScreen = () => {
  const {colors} = useTheme();
  const themedStyles = styles(colors);
  const {params} = useRoute<DetailsRouteProp>();
  //remove next 2 lines later
  const authState = useAuthStore(state=>state);
  console.log(authState);
  const {id} = params;

  const product = data.find(item => item._id === id);

  return product ? (
    <SafeAreaView style={themedStyles.container}>
      <ScrollView>
        <Image
          style={themedStyles.image}
          source={{uri: product.images[0].url}}
        />
        <View style={themedStyles.detailsWrapper}>
          <Label title={product.title} />
          <Text style={themedStyles.text}>Price: {product.price}$</Text>
          <Text style={themedStyles.description}>{product.description}</Text>
          <PressableWrapper label="Add to cart" />
          <PressableWrapper label="Share" />
        </View>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <View>
      <Error errorMessage="Couldn't find requested product" />
    </View>
  );
};

export {DetailsScreen};
