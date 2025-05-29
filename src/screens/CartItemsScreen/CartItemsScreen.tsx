import React from 'react';
import {CartItems} from '../../components/organisms/CartItems/CartItems';
import { SafeAreaView } from 'react-native-safe-area-context';

const CartItemsScreen = () => {
  return (
    <SafeAreaView style={{padding: '10%'}}>
      <CartItems />
    </SafeAreaView>
  );
};

export {CartItemsScreen};
