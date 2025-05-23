import {Text, Pressable, Image, View} from 'react-native';
import React from 'react';
import {Label} from '../../atoms/Label';
import {ProductCardProps} from './ProductCard.type';
import {styles} from './ProductCard.style';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProtectedStackParamList} from '../../../navigation';
import {useTheme} from '../../../hooks/theme';
import Config from 'react-native-config';

const ProductCard = ({id, title, price, mainImageUri}: ProductCardProps) => {
  const {colors} = useTheme();
  const themedStyles = styles(colors);
  const navigation =
    useNavigation<NativeStackNavigationProp<ProtectedStackParamList, 'Main'>>();
  const fullImageUrl = `${Config.BASE_URL}${mainImageUri}`;
  return (
    <Pressable
      style={themedStyles.container}
      onPress={() => navigation.navigate('Details', {id: id})}>
      <Image
        style={themedStyles.image}
        source={{uri: fullImageUrl}}
      />
      <View>
        <Label title={title} />
        <Text style={themedStyles.text}>Price: {price}$</Text>
      </View>
    </Pressable>
  );
};

export {ProductCard};
