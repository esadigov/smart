import React, { useCallback } from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { ProfileHeader } from './components/ProfileHeader';
import { ProfileList } from './components/ProfileList';
import { ProfileOptions } from './components/ProfileOptions';
import styles from './styles';

AntDesign.loadFont();

export const ProfileScreen: React.FC = () => {
  const navigate = useNavigation();

  const goBack = useCallback(() => navigate.goBack(), [navigate]);

  const renderHeader = useCallback(
    () => (
      <>
        <Text key="profileTitle" style={styles.header}>
          Profile
        </Text>
        <TouchableOpacity
          key="backButton"
          onPress={goBack}
          style={styles.backButton}>
          <AntDesign key="backIcon" name="left" color={'#3A6598'} size={20} />
        </TouchableOpacity>
        <ProfileHeader key="profileHeader" />
        <ProfileOptions key="profileOptions" />
        <View key="separator" style={styles.line} />
      </>
    ),
    [goBack],
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        key="profile-list"
        data={null}
        renderItem={null}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader()}
        ListFooterComponent={<ProfileList />}
      />
    </SafeAreaView>
  );
};
