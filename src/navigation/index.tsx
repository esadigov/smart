import 'react-native-gesture-handler';

import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

MaterialCommunityIcons;
import { AutomationScreen } from '../screens/automation';
import { DevicesScreen } from '../screens/devices';
import { HomeScreen } from '../screens/home';
import { RoomsScreen } from '../screens/rooms';

FeatherIcon.loadFont();
MaterialIcons.loadFont();
MaterialCommunityIcons.loadFont();

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
            tabBarIcon: ({ color, size }) => (
              <FeatherIcon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="DevicesStack"
          component={DevicesStack}
          options={{
            tabBarLabel: 'Devices',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="devices" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="RoomsStack"
          component={RoomsStack}
          options={{
            tabBarLabel: 'Rooms',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="door" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="AutomationStack"
          component={AutomationStack}
          options={{
            tabBarLabel: 'Automation',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FeatherIcon name="play" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
