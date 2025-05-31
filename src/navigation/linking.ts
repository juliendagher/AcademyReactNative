import {LinkingOptions} from '@react-navigation/native';
import {RootStackParamList} from './RootNavigator.type';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['academyreactnative://'],
  config: {
    screens: {
      Protected: {
        screens: {
          Home: {
            screens: {
              Details: 'details/:id',
            },
          },
        },
      },
    },
  },
};

export default linking;
