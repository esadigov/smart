import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

interface IDeviceCard {
  title: string;
}

export const DeviceCard: React.FC<IDeviceCard> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};
