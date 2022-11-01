import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export const HomeScreen: React.FC = () => {
  const navigate = useNavigation();
  const goToProfile = () => navigate.navigate('Profile');
  const goToSignIn = () => navigate.navigate('SignIn');
  const goToDeletionModal = () => navigate.navigate('DeletionModal'); // Temporary

  return (
    <SafeAreaView>
      <Text>HOME</Text>
      <TouchableOpacity onPress={goToProfile}>
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToSignIn}>
        <Text>Sign-in</Text>
      </TouchableOpacity>
      {/* Temporary Start */}
      <TouchableOpacity onPress={goToDeletionModal}>
        <Text>Deletion Modal</Text>
      </TouchableOpacity>
      {/* Temporary End */}
    </SafeAreaView>
  );
};
