import React, { useState } from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Switch,
} from 'react-native';

import styles from './styles';
import SpeakerIcon from '../../../../components/Icons/SpeakerIcon';
import LightbulbIcon from '../../../../components/Icons/LightbulbIcon';
import TVSetIcon from '../../../../components/Icons/TVSetIcon';

interface DataProps {
  id: string,
  title: string,
  subtitle: string,
  icon: string,
}

const FREQUENTLY_USED: DataProps[] = [
  {
    id: 'device1',
    title: 'Speaker',
    subtitle: 'Living room',
    icon: 'speaker',
  },
  {
    id: 'device2',
    title: 'Light',
    subtitle: 'Living room',
    icon: 'lightbulb',
  },
  {
    id: 'device3',
    title: 'Smart TV',
    subtitle: 'Bedroom',
    icon: 'tvset',
  },
  {
    id: 'device4',
    title: 'Light',
    subtitle: 'Hall',
    icon: 'lightbulb',
  },
]


export const HomeFrequent = () => {
  const [isEnabled, setIsEnabled ] = useState(false);

  const Item = ({ title, subtitle, icon }: DataProps) => (
    <TouchableOpacity style={styles.box}>
      <View style={styles.row}>
        <View style={styles.icon}>
          {icon === 'speaker'
            ? <SpeakerIcon color='#1A5EAF' />
            : icon === 'lightbulb'
                ? <LightbulbIcon color='#1A5EAF' />
                : <TVSetIcon color='#1A5EAF' />
          }
        </View>
        <View style={styles.main}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <View style={styles.switchContainer}>
          <Switch
            style={styles.switch}
            value={isEnabled}
            onValueChange={handleSwitch}
            trackColor={{ true: '#fff', false: '#fff' }}
            thumbColor={isEnabled ? '#3A6598' : '#E3E0E0'}
          />
        </View>
      </View>
    </TouchableOpacity>
  )

  const handleSwitch = () => {
    setIsEnabled(!isEnabled);
  }

  const renderItem = ({item}: {item: DataProps}) => (
    <Item
      id={item.id}
      title={item.title}
      subtitle={item.subtitle}
      icon={item.icon}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.frequentHeader}>
        <Text style={styles.frequentText}>
          Frequently used
        </Text>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        keyExtractor={item => item.id}
        data={FREQUENTLY_USED}
        renderItem={renderItem}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}