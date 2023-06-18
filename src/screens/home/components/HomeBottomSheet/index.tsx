import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import AutomationPageIcon from '../../../../components/Icons/AutomationPageIcon';
import RoomsPageIcon from '../../../../components/Icons/RoomsPageIcon';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

AntDesign.loadFont();

interface DataProps {
  id: string;
  title: string;
  icon: string;
  nav: Function;
}

export const HomeBottomSheet = (props: any) => {
  const navigate = useNavigation();
  const goToRooms = () => navigate.navigate('RoomsStack');
  const goToAutomation = () => navigate.navigate('AutomationStack');

  const DATA: DataProps[] = [
    {
      id: 'addMember',
      title: 'Add new member',
      icon: 'room',
      nav: () => console.log()
    },
    {
      id: 'addRoom',
      title: 'Add new room',
      icon: 'room',
      nav: goToRooms
    },
    {
      id: 'addAutomation',
      title: 'Add new automation',
      icon: 'automation',
      nav: goToAutomation
    }
  ];

  const Item = ({ title, icon, nav }: DataProps) => (
    <TouchableOpacity
      onPress={() => {
        props.closeSheet();
        nav();
      }}
      style={styles.list}>
      <View style={styles.row}>
        <View style={styles.icon}>
          {icon === 'room' ? (
            <RoomsPageIcon color='#3A6598' />
          ) : (
            <AutomationPageIcon color='#3A6598' />
          )}
        </View>
        <View style={styles.text}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      <View style={styles.plus}>
        <AntDesign name='plus' color={'#3A6598'} size={20} />
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }: { item: DataProps }) => (
    <Item id={item.id} icon={item.icon} title={item.title} nav={item.nav} />
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
