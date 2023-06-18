import React, { useCallback, useRef } from 'react';
import { Animated, Switch, View, Image } from 'react-native';

import styles from './styles';

interface IRoomSwitch {
  isEnabled: boolean;
  setIsEnabled: () => void;
  color: string;
  title: string;
  subtitle: string;
  image: any;
}

export const RoomSwitch: React.FC<IRoomSwitch> = ({
  isEnabled,
  setIsEnabled,
  color = '#3A6598',
  title,
  subtitle,
  image
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
    outputRange: [135, 300]
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
      <Animated.Text style={[styles.titleText, { color: textInterpolate }]}>
        {title}
      </Animated.Text>
      <Animated.Text style={[styles.subtitle, { color: subTextInterpolate }]}>
        {subtitle}
      </Animated.Text>
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
