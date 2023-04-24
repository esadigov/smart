import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';

const user = {
  id: 'user1',
  name: 'Nihad Abdulalizada',
  avatar: 'https://reactnative.dev/img/tiny_logo.png',
  status: 'owner',
};

export const HomeHeader: React.FC = () => {
  const navigate = useNavigation();
  const goToProfile = () => navigate.navigate('Profile');

  const { avatar, name } = user;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.buttonField}
        onPress={goToProfile}>
        <View style={styles.header}>
          <View>
            <Image style={styles.avatar} source={{ uri: avatar }} />
            <View style={styles.notification}>
              <Text style={styles.notificationText}>
                2
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.title}>
              Hello, {name.split(' ')[0]}
            </Text>
            <Text style={styles.subtitle}>
              Welcome back to Bhouse
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.plusButton}>
          <AntDesign name="plus" color={'#1A5EAF'} size={20} />
        </TouchableOpacity>
      </TouchableOpacity>
    </SafeAreaView>
  );
}