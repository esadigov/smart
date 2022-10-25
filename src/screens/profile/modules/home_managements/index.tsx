import React, { useCallback } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { HomeIconMini } from '../../../../components/Icons/ProfilePageIcons';

import styles from './styles';

AntDesign.loadFont();

const HOME_LIST = [
  {
    id: 'home1',
    title: 'Home 1',
  },
  {
    id: 'home2',
    title: 'Home 2',
  },
  {
    id: 'home3',
    title: 'Office 1',
  },
  {
    id: 'home4',
    title: 'Office 2',
  },
];

const HomeList = ({ title }) => (
  <TouchableOpacity style={styles.list}>
    <View style={styles.row}>
      <View style={styles.icon}>
        <HomeIconMini />
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
    <View style={styles.forward}>
      <AntDesign name="right" color={'#3A6598'} size={20} />
    </View>
  </TouchableOpacity>
);

export const HomeManagements = () => {
  const navigate = useNavigation();
  const goBack = useCallback(() => navigate.goBack(), [navigate]);


  const renderItem = ({ item }) => (
    <HomeList title={item.title} />
  );

  return (
    <View style={styles.container}>
      <Text key="homeManagementsTitle" style={styles.header}>
        Home managements
      </Text>
      <TouchableOpacity
        key="backButton"
        onPress={goBack}
        style={styles.backButton}>
        <AntDesign key="backIcon" name="left" color={'#3A6598'} size={20} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.plusButton}>
          <AntDesign name="plus" color={'#9AA4C9'} size={20} />
      </TouchableOpacity>
      <FlatList
        keyExtractor={item => item.id}
        data={HOME_LIST}
        renderItem={renderItem}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
