import React, { useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import styles from './styles';

import { useAppDispatch } from '../../../../../../store/hooks';
import { switchDevice } from '../../../../../../store/slices/deviceSlice';
import LightbulbIcon from '../../../../../../components/Icons/LightbulbIcon';
import TVSetIcon from '../../../../../../components/Icons/TVSetIcon';

FeatherIcon.loadFont();

interface IDeviceCheckBox {
  title: string;
  subtitle: string;
  selected: boolean;
  id: string;
  icon: string;
}

export const DeviceCheckBox: React.FC<IDeviceCheckBox> = ({
  title,
  subtitle,
  selected,
  id,
  icon,
}) => {  
  const dispatch = useAppDispatch();

  const handleSwitch = useCallback(() => {
    dispatch(switchDevice(id));
  }, [dispatch, id]);
  
  // Icon Colors
  let iconColor;
  if (selected)
    iconColor = '#3A6598';
  else
    iconColor= '#A0A0A0';

  return (
    <TouchableOpacity
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: selected ? '#E6F4FC' : '#D9D9D94D',
        marginBottom: 10,
        padding: 14,
        borderColor: '#E9E9E9',
        borderWidth: 1,
        borderRadius: 6,
      }}
      onPress={handleSwitch}>
      <View style={[
        styles.icon,
        {backgroundColor: selected ? '#D3E9FC' : '#F1F1F1'},
      ]}>
        {icon === 'lightbulb'
          ? <LightbulbIcon color={iconColor} />
          : icon === 'tvset'
            ? <TVSetIcon color={iconColor}/>
            : ''}
      </View>
      <View style={{ maxWidth: '75%', flexDirection: 'column', flex: 1 }}>
        <Text
          style={{
            color: selected ? '#000' : '#343434',
            fontSize: 16,
            fontWeight: '600',
            lineHeight: 20,
          }}>
          {title}
        </Text>
        <Text
          style={{
            color: selected ? '#000' : '#343434',
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
          borderRadius: 58,
          width: 26,
          height: 26,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: selected ? '#008EE6' : "#E8E8E8",
        }}>
        {selected && <FeatherIcon name="check" color="#FFF" />}
      </View>
    </TouchableOpacity>
  );
};
