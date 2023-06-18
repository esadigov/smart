import React, { useCallback } from 'react';
import { Text, TouchableOpacity, ImageBackground } from 'react-native';

import { useAppDispatch } from '../../../../../../store/hooks';
import { AUTOMATIONS } from '../../../../../../store/mock';
import { setAutomation } from '../../../../../../store/slices/automationSlice';
import { setSheet } from '../../../../../../store/slices/automationSlice';

import styles from './styles';

interface IDeviceCard {
  item: any;
}

export const DeviceCard: React.FC<IDeviceCard> = ({ item }) => {
  const dispatch = useAppDispatch();

  const handleOpenDevice = useCallback(() => {
    dispatch(setAutomation(AUTOMATIONS));
    dispatch(setSheet('Device'));
  }, [dispatch]);

  return (
    <TouchableOpacity onPress={handleOpenDevice} style={styles.container}>
      <ImageBackground
        source={{ uri: item.img }}
        style={styles.backgroundImg}
        resizeMode='cover'>
        <Text style={styles.text}>{item.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};
