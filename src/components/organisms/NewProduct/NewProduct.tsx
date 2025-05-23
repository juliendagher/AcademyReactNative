import {KeyboardAvoidingView, ScrollView, View, Text} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import React, {useState} from 'react';
import {NewProductFormData, schema} from './NewProduct.type';
import {zodResolver} from '@hookform/resolvers/zod';
import {TextInputWithError} from '../../molecules/TextInputWithError';
import {PressableWrapper} from '../../atoms/PressableWrapper';
import {Error} from '../../atoms/Error';
import {styles} from './NewProduct.style';
import {useMutation} from '@tanstack/react-query';
import {useAuthStore} from '../../../stores/authentication';
import {addProduct} from '../../../api/products/products';
import {launchImageLibrary} from 'react-native-image-picker';
import {Image} from 'react-native';

export const pickMultipleImages = async () => {
  return await launchImageLibrary({
    mediaType: 'photo',
    selectionLimit: 5, // or 0 for unlimited
    quality: 0.8,
  });
};

const NewProduct = () => {
  const [globalError, setGlobalError] = useState<string | undefined>();

  const {accessToken} = useAuthStore();

  const {mutate, isPending} = useMutation({
    mutationFn: (data: NewProductFormData) =>
      addProduct(accessToken as string, data),
    onSuccess: () => {
      setGlobalError(undefined);
      reset();
    },
    onError: error => setGlobalError(error.message),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<NewProductFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: '',
      description: '',
      price: '',
      location: {},
      images: [],
    },
  });
  const onSubmit = (data: NewProductFormData) => {
    mutate(data);
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInputWithError
            label={'Title'}
            placeholder="My Product"
            onBlur={onBlur}
            onChangeText={onChange}
            errorMessage={errors.title?.message}
            value={value}
          />
        )}
        name="title"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInputWithError
            label={'Description'}
            placeholder="Describe your product"
            onBlur={onBlur}
            onChangeText={onChange}
            errorMessage={errors.description?.message}
            value={value}
          />
        )}
        name="description"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInputWithError
            label={'Price'}
            placeholder="$"
            onBlur={onBlur}
            onChangeText={onChange}
            errorMessage={errors.price?.message}
            value={value}
          />
        )}
        name="price"
      />
      <Controller
        control={control}
        name="images"
        render={({field: {onChange, value}}) => (
          <View>
            <ScrollView horizontal>
              {value.map((uri, index) => (
                <Image
                  key={index}
                  source={{uri}}
                  style={{
                    width: 100,
                    height: 100,
                    marginRight: 8,
                    borderRadius: 8,
                  }}
                />
              ))}
            </ScrollView>
            <PressableWrapper
              label="Pick Images"
              onPress={async () => {
                const result = await pickMultipleImages();
                if (result.assets) {
                  const uris = result.assets
                    .map(a => a.uri)
                    .filter(Boolean) as string[];
                  onChange(uris);
                }
              }}
            />
            {errors.images?.message && (
              <Text style={{color: 'red'}}>{errors.images.message}</Text>
            )}
          </View>
        )}
      />
      <Error errorMessage={globalError} />
      <PressableWrapper
        disabled={isPending}
        label={isPending ? 'Adding...' : 'Add'}
        onPress={handleSubmit(onSubmit)}
      />
    </KeyboardAvoidingView>
  );
};

export {NewProduct};
