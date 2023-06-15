import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export const TemporaryNavigation: React.FC = () => {
  const navigate = useNavigation();
  const goToSignIn = () => navigate.navigate('SignIn');
  const goToDeletionModal = () => navigate.navigate('DeletionModal');

  return (
    <View
      style={{
        alignItems: 'center',
        paddingTop: 8,
        marginBottom: 20
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: '#1A5EAF',
          borderRadius: 12,
          marginVertical: 2,
          marginTop: 4,
          width: 120,
          height: 30,
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onPress={goToSignIn}>
        <Text
          style={{
            color: '#FFF'
          }}>
          Go to Sign in
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#1A5EAF',
          borderRadius: 12,
          marginVertical: 4,
          width: 150,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onPress={goToDeletionModal}>
        <Text
          style={{
            color: '#FFF'
          }}>
          Go to Deletion Modal
        </Text>
      </TouchableOpacity>
    </View>
  );
};
