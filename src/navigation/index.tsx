// Primary Imports
import * as React from 'react';
import 'react-native-gesture-handler';
// Navigation Imports
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Icon Imports
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AutomationPageIcon from '../components/Icons/AutomationPageIcon';
import DevicesPageIcon from '../components/Icons/DevicesPageIcon';
import HomePageIcon from '../components/Icons/HomePageIcon';
import RoomsPageIcon from '../components/Icons/RoomsPageIcon';
// Component Imports
import { AutomationScreen } from '../screens/automation';
import { DevicesScreen } from '../screens/devices';
import { HomeScreen } from '../screens/home';
import { ProfileScreen } from '../screens/profile';
import { RoomsScreen } from '../screens/rooms';
import { HomeManagements } from '../screens/profile/modules/HomeManagements';
import { SignIn } from '../screens/signIn';
import { Password } from '../screens/signIn/modules/Password';
import { OTP } from '../screens/signIn/modules/OTP';
import { DeletionModal } from '../screens/profile/components/DeletionModal'; // Temporary
// Loading Fonts
FeatherIcon.loadFont();
MaterialIcons.loadFont();
MaterialCommunityIcons.loadFont();
// Declaring Stacks
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
      />
      <Stack.Screen
        name="HomeManagements"
        component={HomeManagements}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen
        name="Password"
        component={Password}
      />
      <Stack.Screen
        name="OTP"
        component={OTP}
      />
      {/* Temporary Start */}
      <Stack.Screen
        name="DeletionModal"
        component={DeletionModal}
      />
      {/* Temporary End */}
    </Stack.Navigator>
  );
};

const RoomsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Rooms"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Rooms"
        component={RoomsScreen}
        options={{ title: 'Rooms' }}
      />
    </Stack.Navigator>
  );
};

const DevicesStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Devices"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Devices"
        component={DevicesScreen}
        options={{ title: 'Devices' }}
      />
    </Stack.Navigator>
  );
};

const AutomationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Automation"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Automation"
        component={AutomationScreen}
        options={{ title: 'Automation' }}
      />
    </Stack.Navigator>
  );
};

export const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Feed">
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: ({ color }) => <HomePageIcon color={color} />,
          }}
        />
        <Tab.Screen
          name="DevicesStack"
          component={DevicesStack}
          options={{
            tabBarLabel: 'Devices',
            headerShown: false,
            tabBarIcon: ({ color }) => <DevicesPageIcon color={color} />,
          }}
        />
        <Tab.Screen
          name="RoomsStack"
          component={RoomsStack}
          options={{
            tabBarLabel: 'Rooms',
            headerShown: false,
            tabBarIcon: ({ color }) => <RoomsPageIcon color={color} />,
          }}
        />
        <Tab.Screen
          name="AutomationStack"
          component={AutomationStack}
          options={{
            tabBarLabel: 'Automation',
            headerShown: false,
            tabBarIcon: ({ color }) => <AutomationPageIcon color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
