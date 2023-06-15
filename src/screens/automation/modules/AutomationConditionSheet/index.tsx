import React from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { BackButton } from '../../../../components/BackButton';
import DevicesPageIcon from '../../../../components/Icons/DevicesPageIcon';
import { useAppDispatch } from '../../../../store/hooks';
import { setSheet } from '../../../../store/slices/automationSlice';

import styles from './styles';

AntDesign.loadFont();

interface DataProps {
  id: string;
  title: string;
}

const CONDITIONS: DataProps[] = [
  {
    id: 'Devices',
    title: 'Devices'
  },
  {
    id: 'SetTime',
    title: 'Set time'
  }
];

export const AutomationConditionSheet = () => {
  const dispatch = useAppDispatch();
  const handleChange = (id: string) => {
    id === 'Devices' ? dispatch(setSheet('Room')) : null;
  };

  const Item = ({ title, id }: DataProps) => (
    <TouchableOpacity onPress={() => handleChange(id)} style={styles.box}>
      <View style={styles.row}>
        <View style={styles.icon}>
          <DevicesPageIcon color='#008EE6' />
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }: { item: DataProps }) => (
    <Item id={item.id} title={item.title} />
  );

  return (
    <View style={styles.container}>
      <BackButton onPress={() => dispatch(setSheet('FirstSheet'))} />
      <Text key='automationConditionSheetTitle' style={styles.header}>
        Condition
      </Text>
      <FlatList
        keyExtractor={item => item.id}
        data={CONDITIONS}
        renderItem={renderItem}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
