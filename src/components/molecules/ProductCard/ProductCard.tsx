import {Text, Pressable, Image, View, Share} from 'react-native';
import React, { useMemo } from 'react';
import {Label} from '../../atoms/Label';
import {ProductCardProps} from './ProductCard.type';
import {styles} from './ProductCard.style';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProtectedStackParamList} from '../../../navigation';
import {useTheme} from '../../../hooks/theme';
import Config from 'react-native-config';
import {PressableWrapper} from '../../atoms/PressableWrapper';
import {useCartStore} from '../../../stores/cart';

const ProductCard = ({id, title, price, mainImageUri}: ProductCardProps) => {
  const {add, exists} = useCartStore();
  const {colors} = useTheme();
  const themedStyles = useMemo(()=>styles(colors),[colors]);
  const navigation =
    useNavigation<NativeStackNavigationProp<ProtectedStackParamList, 'Main'>>();

  const disabled = exists(id);
  const fullImageUrl = `${Config.BASE_URL}${mainImageUri}`;
  return (
    <Pressable
      style={themedStyles.container}
      onPress={() => navigation.navigate('Details', {id: id})}
      onLongPress={() =>
        Share.share({
          message: `Check out this product! academyreactnative://details/${id}`,
        })
      }>
      <Image style={themedStyles.image} source={{uri: fullImageUrl}} />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{width: '75%'}}>
          <Label title={title} />
          <Text style={themedStyles.text}>Price: {price}$</Text>
        </View>
        <PressableWrapper
          disabled={disabled}
          style={{width: '25%'}}
          label={disabled ? 'In' : '+'}
          onPress={() => add(id, title)}
        />
      </View>
    </Pressable>
  );
};

export {ProductCard};
