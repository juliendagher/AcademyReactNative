import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {skeletonStyles} from './ProductCard.style';
import { View } from 'react-native';

const ProductCardSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      <View style={skeletonStyles.container}>
        <View style={skeletonStyles.image} />
        <View>
          <View style={skeletonStyles.title} />
          <View style={skeletonStyles.price} />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export {ProductCardSkeleton};
