import React, { useCallback } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { HomeIconMini } from '../../../../components/Icons/ProfilePageIcons';

import styles from './styles';

AntDesign.loadFont();

interface DataProps {
  id: string,
  title: string,
  sender: string,
}

const HOME_LIST: DataProps[] = [
  {
    id: 'notif1',
    title: 'Kitchen',
    sender: 'Sənan Məmmədov',
  },
  {
    id: 'notif2',
    title: 'Garage',
    sender: 'Sənan Məmmədov',
  },
];


export const Notifications = () => {
  const navigate = useNavigation();
  const goBack = useCallback(() => navigate.goBack(), [navigate]);

  const Item = ({ title, sender }: DataProps) => (
    <TouchableOpacity style={styles.list}>
      <View style={styles.row}>
        <View style={styles.icon}>
          <HomeIconMini />
        </View>
        <View style={styles.text}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>by {sender}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({item}: {item: DataProps}) => (
    <Item
      id={item.id}
      title={item.title}
      sender={item.sender} />
  );

  return (
    <View style={styles.container}>
      <Text key="homeManagementsTitle" style={styles.header}>
        Notifications
      </Text>
      <TouchableOpacity
        key="backButton"
        onPress={goBack}
        style={styles.backButton}>
        <AntDesign key="backIcon" name="left" color={'#3A6598'} size={20} />
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
