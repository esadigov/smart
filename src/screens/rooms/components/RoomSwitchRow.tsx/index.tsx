import React, { useCallback, useRef } from 'react';
import { Animated, Switch, View, Image } from 'react-native';

import styles from './styles';

interface IRoomSwitchRow {
  isEnabled: boolean;
  setIsEnabled: () => void;
  color: string;
  title: string;
  subtitle: string;
  image: any;
  user: any;
}

export const RoomSwitchRow: React.FC<IRoomSwitchRow> = ({
  isEnabled,
  setIsEnabled,
  color = '#3A6598',
  title,
  subtitle,
  image,
  user
}) => {
  const filledBox = useRef(new Animated.Value(isEnabled ? 1 : 0)).current;

  const handleSwitch = useCallback(() => {
    setIsEnabled();
    Animated.timing(filledBox, {
      toValue: isEnabled ? 0 : 1,
      duration: 500,
      useNativeDriver: false
    }).start();
  }, [filledBox, isEnabled, setIsEnabled]);

  const sizeInterpolate = filledBox.interpolate({
    inputRange: [0, 1],
    outputRange: [140, 500]
  });

  const textInterpolate = filledBox.interpolate({
    inputRange: [0, 1],
    outputRange: ['#353535', '#fff']
  });

  const subTextInterpolate = filledBox.interpolate({
    inputRange: [0, 1],
    outputRange: ['#B3B3B3', '#fff']
  });

  const animatedStyle = {
    height: sizeInterpolate,
    width: sizeInterpolate
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1
        }}
      />
      <View
        style={{
          flex: 1,
          marginRight: 45,
          marginLeft: -45
        }}>
        <Animated.Text style={[styles.titleText, { color: textInterpolate }]}>
          {title}
        </Animated.Text>
        <Animated.Text style={[styles.subtitle, { color: subTextInterpolate }]}>
          {subtitle}
        </Animated.Text>
        <Image style={styles.users} source={user} />
      </View>
      <View style={styles.switchContainer}>
        <Switch
          style={styles.switch}
          value={isEnabled}
          onValueChange={handleSwitch}
          trackColor={{ true: '#fff', false: '#fff' }}
          thumbColor={isEnabled ? color : '#CDCDCD'}
        />
      </View>
      <Image style={styles.images} source={image} />
      <Animated.View
        style={[
          styles.circle,
          animatedStyle,
          {
            backgroundColor: color
          }
        ]}
      />
    </View>
  );
};
