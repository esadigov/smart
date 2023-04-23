import React from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { BackButton } from '../../components/BackButton';
import DevicesPageIcon from '../../../../components/Icons/DevicesPageIcon';
import styles from './styles';

AntDesign.loadFont();

const CONDITIONS = [
  {
    id: 'Devices',
    title: 'Devices',
  },
  {
    id: 'SetTime',
    title: 'Set time',
  },
]

const Item = ({ title }) => (
  <TouchableOpacity style={styles.box}>
    <View style={styles.row}>
      <View style={styles.icon}>
        <DevicesPageIcon color='#008EE6' />
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  </TouchableOpacity>
)

export const AutomationConditionSheet = (props: any) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <View style={styles.container}>
      <BackButton
        onPress={props.closeSheet}
      />
      <Text key="automationConditionSheetTitle" style={styles.header}>
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
  )
}