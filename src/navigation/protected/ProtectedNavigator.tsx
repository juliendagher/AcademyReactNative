import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailsScreen} from '../../screens/DetailsScreen';
import {MainScreen} from '../../screens/MainScreen';
import {
  ProtectedStackParamList,
  ProtectedTabParamList,
} from './ProtectedNavigator.type';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SettingsScreen} from '../../screens/SettingsScreen';
import {useTheme} from '../../hooks/theme';
import {verticalScale} from '../../utils/scaling/scale';
import {NewProductScreen} from '../../screens/NewProductScreen';
import {CartItemsScreen} from '../../screens/CartItemsScreen';
import {getCrashlytics, setUserId} from '@react-native-firebase/crashlytics';
import {PermissionsAndroid} from 'react-native';

const Stack = createNativeStackNavigator<ProtectedStackParamList>();
const Tab = createBottomTabNavigator<ProtectedTabParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="NewProduct" component={NewProductScreen} />
    </Stack.Navigator>
  );
};

const ProtectedNavigator = () => {
  const {colors} = useTheme();

  const crashlytics = getCrashlytics();
  setUserId(crashlytics, '123');

  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarIcon: () => null,
        tabBarIconStyle: {height: 0, width: 0},
        tabBarLabelStyle: {
          marginTop: verticalScale(10),
        },
        tabBarStyle: {
          backgroundColor: colors.background,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Shop',
          tabBarActiveTintColor: colors.tertiary,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartItemsScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarActiveTintColor: colors.tertiary,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarActiveTintColor: colors.tertiary,
        }}
      />
    </Tab.Navigator>
  );
};

export {ProtectedNavigator};
