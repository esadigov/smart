import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export const HomeScreen: React.FC = () => {
  const navigate = useNavigation();
  const goToProfile = () => navigate.navigate('Profile');
  const goToDeletionModal = () => navigate.navigate('DeletionModal'); // Temporary

  return (
    <SafeAreaView>
      <Text>HOME</Text>
      <TouchableOpacity onPress={goToProfile}>
        <Text>Profile</Text>
      </TouchableOpacity>
      {/* Temporary Start */}
      <TouchableOpacity onPress={goToDeletionModal}>
        <Text>Deletion Modal</Text>
      </TouchableOpacity>
      {/* Temporary End */}
    </SafeAreaView>
  );
};
