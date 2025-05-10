import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailsScreen} from '../../screens/DetailsScreen';
import {MainScreen} from '../../screens/MainScreen';
import {
  ProtectedStackParamList,
  ProtectedTabParamList,
} from './ProtectedNavigator.type';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SettingsScreen} from '../../screens/SettingsScreen';

const Stack = createNativeStackNavigator<ProtectedStackParamList>();
const Tab = createBottomTabNavigator<ProtectedTabParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

const ProtectedNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export {ProtectedNavigator};
