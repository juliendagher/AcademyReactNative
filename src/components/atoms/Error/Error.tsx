import {Text} from 'react-native';
import React from 'react';
import {ErrorProps} from './Error.type';
import {styles} from './Error.style';

const Error = ({errorMessage}: ErrorProps) => {
  return (
    <>
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </>
  );
};

export {Error};
