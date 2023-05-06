import React, { useCallback, useRef } from 'react';
import { Animated, Switch, View } from 'react-native';

import styles from './styles';

interface IRoomSwitchRow {
  isEnabled: boolean;
  setIsEnabled: () => void;
  color: string;
  title: string;
  subtitle: string;
}

export const RoomSwitchRow: React.FC<IRoomSwitchRow> = ({
  isEnabled,
  setIsEnabled,
  color = '#3A7670',
  title,
  subtitle,
}) => {
  const filledBox = useRef(new Animated.Value(isEnabled ? 1 : 0)).current;

  const handleSwitch = useCallback(() => {
    setIsEnabled();

    Animated.timing(filledBox, {
      toValue: isEnabled ? 0 : 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [filledBox, isEnabled, setIsEnabled]);

  const sizeInterpolate = filledBox.interpolate({
    inputRange: [0, 1],
    outputRange: [160, 500],
  });

  const textInterpolate = filledBox.interpolate({
    inputRange: [0, 1],
    outputRange: ['#353535', '#fff'],
  });

  const subTextInterpolate = filledBox.interpolate({
    inputRange: [0, 1],
    outputRange: ['#B3B3B3', '#fff'],
  });

  const animatedStyle = {
    height: sizeInterpolate,
    width: sizeInterpolate,
  };

  return (
    <View style={styles.container}>
      <View style={{
        flex: 1,
      }} />
      <View
        style={{
          marginRight: 45,
          backgroundColor: 'transparent',
          flex: 1,
        }}>
        <Animated.Text style={[styles.titleText, { color: textInterpolate }]}>
          {title}
        </Animated.Text>
        <Animated.Text style={[styles.subtitle, { color: subTextInterpolate }]}>
          {subtitle}
        </Animated.Text>
      </View>
      <View style={{ flex: 1 }}>
        <Switch
          value={isEnabled}
          onValueChange={handleSwitch}
          trackColor={{ true: '#fff', false: '#fff' }}
          thumbColor={isEnabled ? color : '#CDCDCD'}
        />
      </View>
      <Animated.View
        style={[
          styles.circle,
          animatedStyle,
          {
            backgroundColor: color,
          },
        ]}
      />
    </View>
  );
};
