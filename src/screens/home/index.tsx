import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export const HomeScreen: React.FC = () => {
  const navigate = useNavigation();
  const goToProfile = () => navigate.navigate('Profile');

  return (
    <SafeAreaView>
      <Text>HOME</Text>
      <TouchableOpacity onPress={goToProfile}>
        <Text>Profile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
