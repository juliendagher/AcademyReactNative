import {FlatList} from 'react-native';
import React from 'react';
import {ProductCard} from '../../molecules/ProductCard';
import {data} from '../../../assets/Products.json';
import {styles} from './Products.style';

const Products = () => {
  return (
      <FlatList
        data={data}
        numColumns={2}
        contentContainerStyle={styles.productContainer}
        renderItem={({item}) => (
          <ProductCard
            id={item._id}
            title={item.title}
            price={item.price}
            mainImageUri={item.images[0].url}
          />
        )}
        keyExtractor={item => item._id}
      />
  );
};

export {Products};
