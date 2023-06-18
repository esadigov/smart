import React from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { BackButton } from '../../../../components/BackButton';
import AlarmIcon from '../../../../components/Icons/AlarmIcon';
import DevicesPageIcon from '../../../../components/Icons/DevicesPageIcon';
import { useAppDispatch } from '../../../../store/hooks';
import { setSheet } from '../../../../store/slices/automationSlice';

import styles from './styles';

AntDesign.loadFont();

interface DataProps {
  id: string;
  title: string;
  icon: string;
}

const ACTIONS: DataProps[] = [
  {
    id: 'Devices',
    title: 'Devices',
    icon: 'device'
  },
  {
    id: 'SendAlarm',
    title: 'Send alarm notification',
    icon: 'alarm'
  }
];

export const AutomationActionSheet = () => {
  const dispatch = useAppDispatch();
  const handleChange = (id: string) => {
    id === 'Devices' ? dispatch(setSheet('Room')) : null;
  };

  const Item = ({ id, title, icon }: DataProps) => (
    <TouchableOpacity onPress={() => handleChange(id)} style={styles.box}>
      <View style={styles.row}>
        <View
          style={[
            styles.icon,
            icon === 'alarm' ? { backgroundColor: '#FFEAEA' } : null
          ]}>
          {icon === 'device' ? (
            <DevicesPageIcon color='#008EE6' />
          ) : icon === 'alarm' ? (
            <AlarmIcon color='#952323' />
          ) : null}
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }: { item: DataProps }) => (
    <Item id={item.id} icon={item.icon} title={item.title} />
  );

  return (
    <View style={styles.container}>
      <BackButton onPress={() => dispatch(setSheet('FirstSheet'))} />
      <Text key='automationActionsSheetTitle' style={styles.header}>
        Action
      </Text>
      <FlatList
        keyExtractor={item => item.id}
        data={ACTIONS}
        renderItem={renderItem}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
