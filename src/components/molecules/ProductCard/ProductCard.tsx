import {Text, Pressable, Image, View} from 'react-native';
import React from 'react';
import {Label} from '../../atoms/Label';
import {ProductCardProps} from './ProductCard.type';
import {styles} from './ProductCard.style';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProtectedStackParamList} from '../../../navigation';

const ProductCard = ({id, title, price, mainImageUri}: ProductCardProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProtectedStackParamList, 'Main'>>();
  console.log(id);
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('Details', {id: id})}>
      <Image style={styles.image} source={{uri: mainImageUri}} />
      <View>
        <Label title={title} />
        <Text>Price: {price}$</Text>
      </View>
    </Pressable>
  );
};

export {ProductCard};
