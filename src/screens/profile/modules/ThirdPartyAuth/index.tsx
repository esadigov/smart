import React, { useCallback } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { BackButton } from '../../../../components/BackButton';
import {
  FireIcon,
  WaterIcon,
  ThiefIcon
} from '../../../../components/Icons/AlarmIcons';

import styles from './styles';

AntDesign.loadFont();

interface DataProps {
  id: string;
  title: string;
  author: string;
  icon: any;
  bgColor: string;
  onPress: () => void;
}

export const ThirdPartyAuth = () => {
  const navigate = useNavigation();
  const goBack = useCallback(() => navigate.goBack(), [navigate]);

  const ALARMS: DataProps[] = [
    {
      id: 'fireAlarm',
      title: 'Fire alarm',
      author: 'system',
      icon: <FireIcon color='#FACE34' />,
      bgColor: '#FEF0BD',
      onPress: () => console.log('Fire alarm')
    },
    {
      id: 'floodAlarm',
      title: 'Flood alarm',
      author: 'system',
      icon: <WaterIcon color='#76BAE4' />,
      bgColor: '#EAF3FF',
      onPress: () => console.log('Flood alarm')
    },
    {
      id: 'thiefAlarm',
      title: 'Thief alarm',
      author: 'system',
      icon: <ThiefIcon color='#707070' />,
      bgColor: '#F9F9F9',
      onPress: () => console.log('Thief alarm')
    }
  ];

  const Item = ({ title, bgColor, author, icon, onPress }: DataProps) => (
    <TouchableOpacity onPress={onPress} style={styles.list}>
      <View style={styles.row}>
        <View style={[styles.icon, { backgroundColor: bgColor }]}>{icon}</View>
        <View style={styles.text}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>Created by {author}</Text>
        </View>
      </View>
      <View style={styles.forward}>
        <AntDesign name='right' color='#C4C4C4' size={20} />
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }: { item: DataProps }) => (
    <Item
      bgColor={item.bgColor}
      author={item.author}
      id={item.id}
      onPress={item.onPress}
      icon={item.icon}
      title={item.title}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton onPress={goBack} />
        <Text style={styles.head}>Third party authorization</Text>
        <TouchableOpacity style={styles.plusButton}>
          <AntDesign name='plus' color='#3A6598' size={20} />
        </TouchableOpacity>
      </View>
      <FlatList
        keyExtractor={item => item.id}
        data={ALARMS}
        renderItem={renderItem}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
