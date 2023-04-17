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
import { AttachDevice } from '../screens/attach-device';
import { AutomationScreen } from '../screens/automation';
import { CreateAutomation } from '../screens/create-automation';
import { CreateRoom } from '../screens/create-room';
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

const TabNavigator = () => (
  <Tab.Navigator initialRouteName="Feed">
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        headerShown: false,
        tabBarIcon: ({ color }) => <HomePageIcon color={color} />,
      }}
    />
    <Tab.Screen
      name="DevicesStack"
      component={DevicesScreen}
      options={{
        tabBarLabel: 'Devices',
        headerShown: false,
        tabBarIcon: ({ color }) => <DevicesPageIcon color={color} />,
      }}
    />
    <Tab.Screen
      name="RoomsStack"
      component={RoomsScreen}
      options={{
        tabBarLabel: 'Rooms',
        headerShown: false,
        tabBarIcon: ({ color }) => <RoomsPageIcon color={color} />,
      }}
    />
    <Tab.Screen
      name="AutomationStack"
      component={AutomationScreen}
      options={{
        tabBarLabel: 'Automation',
        headerShown: false,
        tabBarIcon: ({ color }) => <AutomationPageIcon color={color} />,
      }}
    />
  </Tab.Navigator>
);

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Rooms"
          component={RoomsScreen}
          options={{ title: 'Rooms' }}
        />
        <Stack.Screen
          name="Devices"
          component={DevicesScreen}
          options={{ title: 'Devices' }}
        />
        <Stack.Screen
          name="Automation"
          component={AutomationScreen}
          options={{ title: 'Automation' }}
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
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
          headerShown: false,
        }}>
        <Stack.Screen name="Create-room" component={CreateRoom} />
        <Stack.Screen name="Attach-device" component={AttachDevice} />
        <Stack.Screen name="Create-automation" component={CreateAutomation} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};
