import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import { ProfileEditIcon } from '../../../../components/Icons/ProfilePageIcons'

import styles from './styles';

export const ProfileHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
      />
      <TouchableOpacity style={styles.editButton}>
        <ProfileEditIcon color={'#255B99'} />
      </TouchableOpacity>
      <Text style={styles.userName}>Nihad Abdulalizada</Text>
      <View style={styles.profileStatus}>
        <Text style={{color: '#255B99'}}>owner</Text>
      </View>
    </View>
  );
};