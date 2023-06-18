import React, { useCallback, useRef, useState } from 'react';
import { Animated, View } from 'react-native';

import SwitchButton from '../../../../components/SwitchButton';
import { useAppDispatch } from '../../../../store/hooks';
import { switchDevice } from '../../../../store/slices/deviceSlice';

import styles from './styles';

interface IDeviceSwitch {
  item: any;
}

export const DeviceSwitch: React.FC<IDeviceSwitch> = ({ item }) => {
  const dispatch = useAppDispatch();

  const [switchHeight, setSwitchHeight] = useState<number | null>(null);

  const filledBox = useRef(new Animated.Value(item.enabled ? 1 : 0)).current;

  const handleSwitch = useCallback(() => {
    dispatch(switchDevice(item.id));

    Animated.timing(filledBox, {
      toValue: item.enabled ? 0 : 1,
      duration: 500,
      useNativeDriver: false
    }).start();
  }, [dispatch, filledBox, item.enabled, item.id]);

  const widthInterpolate = filledBox.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '120%']
  });
  const textInterpolate = filledBox.interpolate({
    inputRange: [0, 1],
    outputRange: ['#343434', '#fff']
  });

  const animatedStyle = {
    height: switchHeight ? switchHeight : 0,
    width: widthInterpolate
  };

  return (
    <View
      onLayout={event => {
        const { height } = event.nativeEvent.layout;

        if (height) {
          setSwitchHeight(height);
        }
      }}
      style={styles.container}>
      <Animated.View style={[styles.animated, animatedStyle]} />
      <SwitchButton
        title={item.device}
        subtitle={item.room}
        isEnabled={item.enabled}
        setIsEnabled={handleSwitch}
        textInterpolate={textInterpolate}
        icon={item.icon}
      />
    </View>
  );
};
