import React from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import AlarmIcon from '../../../../components/Icons/AlarmIcon';
import { BackButton } from '../../components/BackButton';
import DevicesPageIcon from '../../../../components/Icons/DevicesPageIcon';
import styles from './styles';

AntDesign.loadFont();

const ACTIONS = [
  {
    id: 'Devices',
    title: 'Devices',
    icon: 'device',
  },
  {
    id: 'SendAlarm',
    title: 'Send alarm notification',
    icon: 'alarm',
  },
]

const Item = ({ title, icon }) => (
  <TouchableOpacity style={styles.box}>
    <View style={styles.row}>
      <View style={
        [styles.icon,
          icon === 'alarm'
            ? {backgroundColor: '#FFEAEA'}
            : null
        ]
      }>
        {icon === 'device'
          ? <DevicesPageIcon color='#008EE6' />
          : icon === 'alarm'
            ? <AlarmIcon color='#952323' />
            : null
        }
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  </TouchableOpacity>
)

export const AutomationActionSheet = (props: any) => {
  const renderItem = ({ item }) => (
    <Item icon={item.icon} title={item.title} />
  );

  return (
    <View style={styles.container}>
      <BackButton
        onPress={props.closeSheet}
      />
      <Text key="automationActionsSheetTitle" style={styles.header}>
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
  )
}