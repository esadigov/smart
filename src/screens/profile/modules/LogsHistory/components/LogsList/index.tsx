import React, { useCallback } from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';

AntDesign.loadFont();

export const LogsList: React.FC = (props: any) => {
  const Item = ({
    time,
    title,
    message,
    state
  }: {
    time: string;
    title: string;
    message: string;
    state: boolean;
  }) => (
    <View>
      <View>
      <Text>{time}</Text>
      <Text>{title}</Text>
      </View>
      <View>
        <Text>{message}</Text>
      </View>
    </View>
  );

  const renderItem = ({ item }: any) => (
    <Item
      time={item.time}
      title={item.title}
      message={item.message}
      state={item.state}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={props.logs}
        renderItem={renderItem}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
