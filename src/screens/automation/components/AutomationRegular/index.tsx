import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
  View,
  Switch
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import CloudIcon from '../../../../components/Icons/CloudIcon';

import styles from './styles';

AntDesign.loadFont();

interface DataProps {
  id: string;
  title: string;
  condition: string;
  icon: string;
}

const AUTOMATIONS: DataProps[] = [
  {
    id: 'SummerTime1',
    title: 'Summer time',
    condition: "If the weather's sunny...",
    icon: 'Cloud'
  },
  {
    id: 'SummerTime2',
    title: 'Summer time',
    condition: "If the weather's sunny...",
    icon: 'Cloud'
  }
];

export const AutomationRegular = () => {
  const Item = ({ title, condition }: DataProps) => {
    const [isEnabled, setIsEnabled] = useState(false);
    return (
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
              onValueChange={() => setIsEnabled(!isEnabled)}
              trackColor={{ true: '#fff', false: '#fff' }}
              thumbColor={isEnabled ? '#3A6598' : '#CDCDCD'}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }: { item: DataProps }) => (
    <Item
      id={item.id}
      title={item.title}
      condition={item.condition}
      icon={item.icon}
    />
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
};
