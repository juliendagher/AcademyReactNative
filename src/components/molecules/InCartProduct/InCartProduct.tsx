import {View} from 'react-native';
import React from 'react';
import {Label} from '../../atoms/Label';
import {PressableWrapper} from '../../atoms/PressableWrapper';
import {useCartStore} from '../../../stores/cart';
import {scale} from '../../../utils/scaling/scale';
import {Swipeable} from 'react-native-gesture-handler';

const renderDeleteButton = (
  id: string,
  remove: (id: string) => void
) => {
  return (
    <>
      <PressableWrapper label="Delete" onPress={() => remove(id)} />
    </>
  );
};

const InCartProduct = (data: {id: string; name: string; quantity: number}) => {
  const {increment, decrement, remove} = useCartStore();
  return (
    <Swipeable renderRightActions={()=>renderDeleteButton(data.id, remove)}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Label title={data.name} />
        <View style={{flexDirection: 'row'}}>
          <PressableWrapper
            style={{width: scale(30)}}
            label="-"
            onPress={() => decrement(data.id)}
          />
          <Label title={data.quantity ? data.quantity.toString() : '-1'} />
          <PressableWrapper
            style={{width: scale(30)}}
            label="+"
            onPress={() => increment(data.id)}
          />
        </View>
      </View>
    </Swipeable>
  );
};

export {InCartProduct};
