import React from 'react';
import {PressableWrapper} from './src/components/atoms/PressableWrapper';
import {TextInputWithError} from './src/components/molecules/TextInputWithError';

const App = () => {
  return (
    <>
      <TextInputWithError
        label={'email'}
        placeholder={'hello'}
        errorMessage={'hello'}
      />
      <TextInputWithError
        label={'email'}
        placeholder={'hello'}
        errorMessage={'hello'}
      />
      <TextInputWithError
        label={'email'}
        placeholder={'hello'}
        errorMessage={'hello'}
      />

      <PressableWrapper label={'hello'} />
    </>
  );
};

export default App;
