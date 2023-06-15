import React, { useCallback } from 'react';
import { Text, TouchableOpacity, ImageBackground } from 'react-native';

import { useAppDispatch } from '../../../../../../store/hooks';
import { ROOM_DEVICES } from '../../../../../../store/mock';
import { setDevice } from '../../../../../../store/slices/roomSlice';
import { setSheet } from '../../../../../../store/slices/roomSlice';

import styles from './styles';

interface IDeviceCard {
  item: any;
}

export const DeviceCard: React.FC<IDeviceCard> = ({ item }) => {
  const dispatch = useAppDispatch();

  const handleOpenDevice = useCallback(() => {
    dispatch(setDevice(ROOM_DEVICES));
    dispatch(setSheet('AttachDevice'));
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
