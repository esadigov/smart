import React, { useCallback } from 'react';
import { Text, TouchableOpacity, ImageBackground } from 'react-native';

import { setSelectedDevice } from '../../../../store/deviceSlice';
import { useAppDispatch } from '../../../../store/hooks';
import { DEVICES } from '../../mock';

import styles from './styles';
interface IDeviceCard {
  item: any;
}

export const DeviceCard: React.FC<IDeviceCard> = ({ item }) => {
  const dispatch = useAppDispatch();

  const handleOpenDevice = useCallback(
    () => dispatch(setSelectedDevice(DEVICES)),
    [dispatch],
  );

  return (
    <TouchableOpacity onPress={handleOpenDevice} style={styles.container}>
      <ImageBackground
        source={{ uri: item.img }}
        style={styles.backgroundImg}
        resizeMode="cover">
        <Text style={styles.text}>{item.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};
