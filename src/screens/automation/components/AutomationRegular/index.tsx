import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
  View,
  Switch,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import CloudIcon from '../../../../components/Icons/CloudIcon';
import styles from './styles';

AntDesign.loadFont();

const AUTOMATIONS = [
  {
    id: 'SummerTime',
    title: 'Summer time',
    condition: "If the weather's sunny...",
    icon: 'Cloud',
  },
];

export const AutomationRegular = () => {
  const [isEnabled, setIsEnabled ] = useState(false);

  const Item = ({ title, condition }) => (
    <TouchableOpacity style={styles.box}>
      <View style={styles.row}>
        <View style={styles.icon}>
          <CloudIcon color='#3A6598' />
        </View>
        <View style={styles.main}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.condition}>{condition}</Text>
        </View>
        <View style={styles.switchContainer}>
          <Switch
            style={styles.switch}
            value={isEnabled}
            onValueChange={handleSwitch}
            trackColor={{ true: '#fff', false: '#fff' }}
            thumbColor={isEnabled ? '#3A6598' : '#CDCDCD'}
          />
        </View>
      </View>
    </TouchableOpacity>
  );

  const handleSwitch = () => {
    setIsEnabled(!isEnabled);
  }

  const renderItem = ({ item }) => (
    <Item title={item.title} condition={item.condition} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={AUTOMATIONS}
        scrollEnabled={true}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
