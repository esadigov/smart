import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import { ProfileEditIcon } from '../../../../components/Icons/ProfilePageIcons';

import styles from './styles';

const USERS = [
  {
    id: 'user1',
    name: 'Nihad Abdulalizada',
    avatar: 'https://reactnative.dev/img/tiny_logo.png',
    status: 'owner',
  },
];

export const ProfileHeader: any = () => {
  return USERS.map(user => {
    return (
      <View key={user.id} style={styles.container}>
        <Image style={styles.avatar} source={{ uri: user.avatar }} />
        <TouchableOpacity style={styles.editButton}>
          <ProfileEditIcon color={'#255B99'} />
        </TouchableOpacity>
        <Text style={styles.userName}>{user.name}</Text>
        <View style={styles.profileStatus}>
          <Text style={styles.statusText}>{user.status}</Text>
        </View>
      </View>
    );
  });
};
