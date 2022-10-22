import React from 'react';
import { SafeAreaView, FlatList, View, Text, TouchableOpacity } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import { ProfileHeader } from './components/ProfileHeader';
import { ProfileOptions } from './components/ProfileOptions';
import { ProfileList } from './components/ProfileList';

export const ProfileScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        key="profile"
        data={null}
        renderItem={null}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
        <>
          <Text key="profileTitle" style={styles.header}>Profile</Text>
          <TouchableOpacity key="backButton" style={styles.backButton}>
            <AntDesign key="backIcon" name="left" color={'#3A6598'} size={20} />
          </TouchableOpacity>
          <ProfileHeader key="profileHeader" />
          <ProfileOptions key="profileOptions" />
          <View key="separator" style={styles.line}></View>
        </>
        }
        ListFooterComponent={
          <ProfileList key="profileList" />
        }/>
    </SafeAreaView>
  );
};