import React, { useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import styles from './styles';

import { useAppDispatch } from '../../../../../../store/hooks';
import { switchAutomation } from '../../../../../../store/slices/automationSlice';
import LightbulbIcon from '../../../../../../components/Icons/LightbulbIcon';
import TVSetIcon from '../../../../../../components/Icons/TVSetIcon';
import SpeakerIcon from '../../../../../../components/Icons/SpeakerIcon';

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
    dispatch(switchAutomation(id));
  }, [dispatch, id]);
  
  // Icon Colors
  let iconColor;
  if (selected)
    iconColor = '#3A6598';
  else
    iconColor= '#A0A0A0';

  return (
    <TouchableOpacity
      style={[
        styles.checkbox,
        {backgroundColor: selected ? '#E6F4FC' : '#D9D9D94D'},
      ]}
      onPress={handleSwitch}>
      <View style={[
        styles.icon,
        {backgroundColor: selected ? '#D3E9FC' : '#F1F1F1'},
      ]}>
        {icon === 'lightbulb'
          ? <LightbulbIcon color={iconColor} />
          : icon === 'tvset'
            ? <TVSetIcon color={iconColor} />
            : <SpeakerIcon color={iconColor} />
        }
      </View>
      <View style={{ maxWidth: '75%', flexDirection: 'column', flex: 1 }}>
        <Text
          style={[
            styles.title,
            {color: selected ? '#000' : '#343434'},
          ]}>
          {title}
        </Text>
        <Text
          style={[
            styles.subtitle,
            {color: selected ? '#000' : '#343434'},
          ]}>
          {subtitle}
        </Text>
      </View>
      <View
        style={[
          styles.tick,
          {backgroundColor: selected ? '#008EE6' : "#E8E8E8"},
        ]}>
        {selected && <FeatherIcon name="check" color="#FFF" />}
      </View>
    </TouchableOpacity>
  );
};