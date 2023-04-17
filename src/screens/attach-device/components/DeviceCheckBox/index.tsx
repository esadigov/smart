import React, { useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';

import { useAppDispatch } from '../../../../store/hooks';
import { switchDevice } from '../../../../store/slices/deviceSlice';

FeatherIcon.loadFont();

interface IDeviceCheckBox {
  title: string;
  subtitle: string;
  selected: boolean;
  id: string;
}

export const DeviceCheckBox: React.FC<IDeviceCheckBox> = ({
  title,
  subtitle,
  selected,
  id,
}) => {
  const dispatch = useAppDispatch();

  const handleSwitch = useCallback(() => {
    dispatch(switchDevice(id));
  }, [dispatch, id]);

  return (
    <TouchableOpacity
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: selected ? '#3A6598' : '#fff',
        marginBottom: 10,

        padding: 14,
        borderColor: '#E9E9E9',
        borderWidth: 1,
        borderRadius: 6,
      }}
      onPress={handleSwitch}>
      <View style={{ maxWidth: '75%', flexDirection: 'column', flex: 1 }}>
        <Text
          style={{
            color: selected ? '#fff' : '#343434',
            fontSize: 16,
            fontWeight: '600',
            lineHeight: 20,
          }}>
          {title}
        </Text>
        <Text
          style={{
            color: selected ? '#fff' : '#343434',
            fontSize: 14,
            marginTop: 4,
            fontWeight: '400',
            lineHeight: 17,
          }}>
          {subtitle}
        </Text>
      </View>
      <View
        style={{
          borderColor: '#3A6598',
          borderWidth: 1,
          borderRadius: 4,
          width: 20,
          height: 20,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
        }}>
        {selected && <FeatherIcon name="check" color="#3A6598" />}
      </View>
    </TouchableOpacity>
  );
};
