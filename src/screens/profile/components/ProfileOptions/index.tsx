import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
  ProfileHomeIcon,
  ProfileLogsIcon
  // ProfileUsersIcon, Temporarily Removed
} from '../../../../components/Icons/ProfilePageIcons';

import styles from './styles';

const Item = ({ title, color, icon, goTo }) => (
  <View>
    <TouchableOpacity
      onPress={goTo}
      style={[
        styles.profileOptionContainer,
        {
          backgroundColor: color
        }
      ]}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.icons}>
        {icon === 'home' ? (
          <ProfileHomeIcon style={{ left: 70, bottom: 13.2 }} />
        ) : icon === 'logs' ? (
          <ProfileLogsIcon style={{ left: 65, bottom: 22 }} />
        ) : /* : icon === 'users' ? (
          <ProfileUsersIcon style={{ left: 79, bottom: 7 }} /> Temporarily Removed
        ) */ null}
      </View>
    </TouchableOpacity>
  </View>
);

export const ProfileOptions = () => {
  const navigate = useNavigation();
  const goToHomeManagements = () => navigate.navigate('HomeManagements');
  const goToLogsHistory = () => navigate.navigate('LogsHistory');

  const OPTIONS = [
    {
      id: 'HomeManagements',
      title: 'Home managements',
      color: '#3A6598',
      icon: 'home',
      nav: goToHomeManagements
    },
    {
      id: 'LogsHistory',
      title: 'Logs history',
      color: '#27A69E',
      icon: 'logs',
      nav: goToLogsHistory
    }
    /* { Temporarily Removed
      id: 'ManageUsers',
      title: 'Manage users',
      color: '#169E4D',
      icon: 'users',
      nav: goToManageUsers
    }, */
  ];

  const renderOptions = ({ item }) => (
    <Item
      goTo={item.nav}
      icon={item.icon}
      color={item.color}
      title={item.title}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={OPTIONS}
        renderItem={renderOptions}
        numColumns={2}
        scrollEnabled={false}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.listItems}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
