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

import styles from './styles';

AntDesign.loadFont();

export const SignIn = () => {
  const navigate = useNavigation();

  const goBack = useCallback(() => navigate.goBack(), [navigate]);

  return (
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
        
        <View key="separator" style={styles.line} />
      </>
    )}