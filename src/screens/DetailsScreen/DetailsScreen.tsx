import {View, Text} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {DetailsRouteProp} from './DetailsScreen.type';

const DetailsScreen = () => {
  const {params} = useRoute<DetailsRouteProp>();

  return (
    <View>
      <Text>{params.id}</Text>
    </View>
  );
};

export {DetailsScreen};
