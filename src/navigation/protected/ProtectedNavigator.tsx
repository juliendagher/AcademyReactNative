import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailsScreen} from '../../screens/DetailsScreen';
import {MainScreen} from '../../screens/MainScreen';
import {ProtectedStackParamList} from './ProtectedNavigator.type';

const Stack = createNativeStackNavigator<ProtectedStackParamList>();

const ProtectedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export {ProtectedNavigator};
