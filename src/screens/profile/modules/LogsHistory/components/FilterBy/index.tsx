import React from 'react';
import { SafeAreaView, FlatList, View, Text } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';

AntDesign.loadFont();

export const FilterBy: React.FC = (props: any) => {
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
    <View style={{ gap: 6 }}>
      <View style={styles.main}>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View
        style={[
          styles.message,
          { backgroundColor: state ? '#F3FFEA' : '#FFEEEE' }
        ]}>
        <Text
          style={[
            styles.messageText,
            { color: state ? '#248F2F' : '#B42A2A' }
          ]}>
          {message}
        </Text>
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
        style={styles.spacing}
      />
    </SafeAreaView>
  );
};
