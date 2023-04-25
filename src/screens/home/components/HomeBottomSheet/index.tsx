import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import AutomationPageIcon from '../../../../components/Icons/AutomationPageIcon';
import RoomsPageIcon from '../../../../components/Icons/RoomsPageIcon';

AntDesign.loadFont();

interface DataProps {
  id: string,
  title: string,
  icon: string,
}

const DATA: DataProps[] = [
  {
    id: 'addMember',
    title: 'Add new member',
    icon: 'room',
  },
  {
    id: 'addRoom',
    title: 'Add new room',
    icon: 'room',
  },
  {
    id: 'addAutomation',
    title: 'Add new automation',
    icon: 'automation',
  },
];

const Item = ({ title, icon }: DataProps) => (
  <TouchableOpacity style={styles.list}>
    <View style={styles.row}>
      <View style={styles.icon}>
        {icon === 'room'
          ? <RoomsPageIcon color='#3A6598' />
          : <AutomationPageIcon color='#3A6598' />
        }
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
    <View style={styles.plus}>
      <AntDesign name="plus" color={'#3A6598'} size={20} />
    </View>
  </TouchableOpacity>
);

export const HomeBottomSheet = () => {
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
        data={DATA}
        renderItem={renderItem}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};