import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  ProfileMessageIcon,
  ProfileShieldIcon,
  ProfileLogOutIcon,
  RingbellIcon,
} from '../../../../components/Icons/ProfilePageIcons';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

AntDesign.loadFont();

interface DataProps {
  id: string,
  title: string,
  icon: string,
}

const PROFILE_SETTINGS: DataProps[] = [
  {
    id: 'Notifications',
    title: 'Notifications',
    icon: 'ringbell',
  },
  {
    id: 'ThirdParty',
    title: 'Third party authorization',
    icon: 'shield',
  },
  {
    id: 'HelpFeedback',
    title: 'Help & Feedback',
    icon: 'message',
  },
  {
    id: 'LogOut',
    title: 'Log out',
    icon: 'logout',
  },
];


export const ProfileList = () => {
  const navigate = useNavigation();
  const goToNotifications = () => navigate.navigate('Notifications');

  const Item = ({ id, title, icon }: DataProps) => (
    <TouchableOpacity
      onPress={
        id === 'Notifications'
          ? goToNotifications
          : undefined}
      style={styles.list}>
      <View style={styles.row}>
        <View style={styles.icon}>
          {icon === 'ringbell' ? (
            <RingbellIcon />
          ) : icon === 'shield' ? (
            <ProfileShieldIcon />
          ) : icon === 'message' ? (
            <ProfileMessageIcon />
          ) : icon === 'logout' ? (
            <ProfileLogOutIcon />
          ) : null}
        </View>
        <View style={styles.text}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      <View style={styles.forward}>
        {icon !== 'logout' ? (
          <AntDesign name="right" color={'#3A6598'} size={20} />
        ) : null}
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({item}: {item: DataProps}) => (
    <Item
      id={item.id}
      icon={item.icon}
      title={item.title} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={PROFILE_SETTINGS}
        renderItem={renderItem}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
