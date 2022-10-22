import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { ProfileMessageIcon, ProfileShieldIcon, ProfileLogOutIcon } from '../../../../components/Icons/ProfilePageIcons'

import styles from './styles';

const LIST = [
  {
    id: 'Locations',
    title: 'Locations',
    icon: 'shield',
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

const Item = ({ title, icon }) => (
  <View>
    <TouchableOpacity style={styles.list}>
      <View style={styles.icon}>
        { icon === 'shield'
          ? <ProfileShieldIcon/>
          : icon === 'message'
          ? <ProfileMessageIcon/>
          : icon === 'logout'
          ? <ProfileLogOutIcon/>
          : null }
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.forward}>
        { icon !== 'logout'
          ? <AntDesign name="right" color={'#3A6598'} size={20} />
          : null }
      </View>
    </TouchableOpacity>
  </View>
);

export const ProfileList = () => {
  const renderList = ({ item }) => (
    <Item icon={item.icon} title={item.title} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={LIST}
        renderItem={renderList}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};