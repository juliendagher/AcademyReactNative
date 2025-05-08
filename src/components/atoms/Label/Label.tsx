import {Text} from 'react-native';
import React from 'react';
import {LabelProps} from './Label.type';
import {styles} from './Label.style';

const Label = ({title}: LabelProps) => {
  return <>{title && <Text style={styles.label}>{title}</Text>}</>;
};

export {Label};
