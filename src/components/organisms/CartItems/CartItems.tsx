import {FlatList, View} from 'react-native';
import React from 'react';
import {Label} from '../../atoms/Label';
import {PressableWrapper} from '../../atoms/PressableWrapper';
import {useCartStore} from '../../../stores/cart';
import {InCartProduct} from '../../molecules/InCartProduct';
import {scale} from '../../../utils/scaling/scale';

const CartItems = () => {
  const {items, clear} = useCartStore();
  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Label title="Cart" />
        <PressableWrapper
          style={{width: scale(75)}}
          label="Clear"
          onPress={clear}
        />
      </View>
      <FlatList
        data={items}
        renderItem={item => (
          <InCartProduct
            id={item.item.id}
            name={item.item.name}
            quantity={item.item.quantity}
          />
        )}
      />
    </View>
  );
};

export {CartItems};
