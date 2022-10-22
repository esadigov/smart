import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';

import ProfileHomeIcon from '../../../../components/Icons/ProfileHomeIcon';
import ProfileLogsIcon from '../../../../components/Icons/ProfileLogsIcon';
import ProfileUsersIcon from '../../../../components/Icons/ProfileUsersIcon';

import styles from './styles';

const OPTIONS = [
  {
    id: 'HomeManagements',
    title: 'Home managements',
    color: '#3A6598',
    icon: 'home',
  },
  {
    id: 'LogsHistory',
    title: 'Logs history',
    color: '#27A69E',
    icon: 'logs',
  },
  {
    id: 'ManageUsers',
    title: 'Manage users',
    color: '#169E4D',
    icon: 'users',
  },
];

const Item = ({ title, color, icon }) => (
  <View>
    <TouchableOpacity style={{
      borderRadius: 6,
      width: 164,
      margin: 10,
      paddingVertical: 76,
      paddingHorizontal: 20,
      backgroundColor: color,
    }}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.icons}>
        { icon === 'home'
          ? <ProfileHomeIcon style={{left: 70, bottom: 13}}/>
          : icon === 'logs'
          ? <ProfileLogsIcon style={{left: 65, bottom: 22}}/>
          : icon === 'users'
          ? <ProfileUsersIcon style={{left: 79, bottom: 7}}/>
          : null }
      </View>
    </TouchableOpacity>
  </View>
);

export const ProfileOptions = () => {
  const renderOptions = ({ item }) => (
    <Item icon={item.icon} color={item.color} title={item.title} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={OPTIONS}
        renderItem={renderOptions}
        numColumns={2}
        scrollEnabled={true}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.listItems}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}