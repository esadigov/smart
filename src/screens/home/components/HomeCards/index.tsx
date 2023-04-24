import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import AntDesign from 'react-native-vector-icons/AntDesign';
import LightbulbIcon from '../../../../components/Icons/LightbulbIcon';

import styles from './styles';

interface DataProps {
  id: string,
  title: string,
  lifetime: string,
  status: string
}

const DATA: DataProps[] = [
  {
    id: 'card1',
    title: 'Light',
    lifetime: '5 hours',
    status: 'Active',
  },
  {
    id: 'card2',
    title: 'Light',
    lifetime: '4 hours',
    status: 'Active',
  },
  {
    id: 'card3',
    title: 'Light',
    lifetime: '4 hours',
    status: 'Active',
  },
];

const Item = ({ title, lifetime, status }: DataProps) => (
  <TouchableOpacity style={styles.cardContainer}>
    <View style={styles.icon}>
      <LightbulbIcon color='#FFF' />
    </View>
    <View style={[
      styles.status,
      {backgroundColor: '#27C265'},
    ]}>
      <Text>{status}</Text>
    </View>
    <View style={styles.cardInfo}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.lifetime}>{lifetime}</Text>
    </View>
  </TouchableOpacity>
);

export const HomeCards: React.FC = () => {
  const renderItem = ({ item }) => (
    <Item id={item.id}
          title={item.title}
          lifetime={item.lifetime}
          status={item.status}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={DATA}
        scrollEnabled={true}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        horizontal={true}
      />
    </SafeAreaView>
  );
}