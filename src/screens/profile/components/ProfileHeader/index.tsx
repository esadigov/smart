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
        <View style={styles.relative}>
          <Image style={styles.avatar} source={{ uri: user.avatar }} />
          <TouchableOpacity style={styles.editButton}>
            <ProfileEditIcon color={'#255B99'} />
          </TouchableOpacity>
        </View>
        <View style={styles.spacing}>
          <Text style={styles.userName}>{user.name}</Text>
          <View style={styles.profileStatus}>
            <Text style={styles.statusText}>{user.status}</Text>
          </View>
        </View>
      </View>
    );
  });
};
