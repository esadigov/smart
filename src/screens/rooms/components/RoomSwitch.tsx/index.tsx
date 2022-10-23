import React from 'react';
import { Switch, Text, View } from 'react-native';

import styles from './styles';

interface IRoomSwitch {
  isEnabled: boolean;
  setIsEnabled: () => void;
  circleColor: string;
}

export const RoomSwitch: React.FC<IRoomSwitch> = ({
  isEnabled,
  setIsEnabled,
  circleColor = '#3A7670',
}) => {
  return (
    <View
      style={[
        styles.container,
        isEnabled ? { backgroundColor: circleColor } : {},
      ]}>
      <Text style={[styles.titleText, isEnabled ? styles.textEnabled : {}]}>
        Living Room
      </Text>
      <Text style={[styles.subtitle, isEnabled ? styles.textEnabled : {}]}>
        10 Devices
      </Text>
      <Switch
        value={isEnabled}
        onValueChange={setIsEnabled}
        trackColor={{ true: '#fff', false: '#fff' }}
        thumbColor={circleColor}
      />
      <View
        style={[
          !isEnabled ? styles.circle : {},
          {
            backgroundColor: circleColor,
          },
        ]}
      />
    </View>
  );
};
