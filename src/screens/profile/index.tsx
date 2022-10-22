import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import { ProfileHeader } from './components/ProfileHeader';
import { ProfileOptions } from './components/ProfileOptions';

export const ProfileScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Profile</Text>
      <TouchableOpacity style={styles.backButton}>
        <AntDesign name="left" color={'#3A6598'} size={20} />
      </TouchableOpacity>
      <ProfileHeader />
      <ProfileOptions />
    </SafeAreaView>
  );
};