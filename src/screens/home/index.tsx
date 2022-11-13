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

export const HomeScreen: React.FC = () => {
  const navigate = useNavigation();
  const goToProfile = () => navigate.navigate('Profile');

  const { avatar, name } = user;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginTop: 30,
        }}
        onPress={goToProfile}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              position: 'relative',
            }}>
            <Image style={styles.avatar} source={{ uri: avatar }} />
            <View
              style={{
                position: 'absolute',
                backgroundColor: '#D7293E',
                paddingVertical: 3,
                paddingHorizontal: 7,
                borderRadius: 38,
                right: 4,
              }}>
              <Text style={{ color: '#fff', fontWeight: '600', fontSize: 12 }}>
                2
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                color: '#353535',
                fontSize: 16,
                lineHeight: 20,
                fontWeight: '600',
                marginBottom: 4,
              }}>
              Hello, {name.split(' ')[0]}
            </Text>
            <Text
              style={{
                color: '#D8D8D8',
                fontSize: 14,
                fontWeight: '600',
              }}>
              Welcome back to Bhouse
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.plusButton}>
          <AntDesign name="plus" color={'#9AA4C9'} size={20} />
        </TouchableOpacity>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
