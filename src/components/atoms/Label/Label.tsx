import {Text} from 'react-native';
import React from 'react';
import {LabelProps} from './Label.type';
import {styles} from './Label.style';
import {useTheme} from '../../../hooks/theme';

const Label = ({title}: LabelProps) => {
  const {colors} = useTheme();
  const themedStyles = styles(colors);
  return <>{title && <Text style={themedStyles.label}>{title}</Text>}</>;
};

export {Label};
