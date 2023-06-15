import React, { memo } from 'react';
import { View, Switch, Animated } from 'react-native';

import LightbulbIcon from '../../components/Icons/LightbulbIcon';
import SpeakerIcon from '../../components/Icons/SpeakerIcon';
import TVSetIcon from '../../components/Icons/TVSetIcon';

import styles from './styles';

interface ISwitchButton {
  title: string;
  subtitle: string;
  isEnabled: boolean;
  setIsEnabled: any;
  disabled?: boolean;
  textInterpolate: any;
  style?: any;
  icon?: string;
}

// NOTE: add logic to change text color animated
const SwitchButton: React.FC<ISwitchButton> = ({
  title,
  subtitle,
  isEnabled,
  setIsEnabled,
  textInterpolate,
  disabled,
  style,
  icon
}) => (
  <View style={[styles.container, style]}>
    <View style={styles.icon}>
      {icon === 'speaker' ? (
        <SpeakerIcon color='#1A5EAF' />
      ) : icon === 'lightbulb' ? (
        <LightbulbIcon color='#1A5EAF' />
      ) : (
        <TVSetIcon color='#1A5EAF' />
      )}
    </View>
    <View style={styles.titleContainer}>
      <Animated.Text style={[styles.title, { color: textInterpolate }]}>
        {title}
      </Animated.Text>
      {subtitle ? (
        <Animated.Text style={[styles.subtitle, { color: textInterpolate }]}>
          {subtitle}
        </Animated.Text>
      ) : null}
    </View>
    <View style={styles.switchContainer}>
      <Switch
        style={styles.switch}
        value={isEnabled}
        onValueChange={setIsEnabled}
        disabled={disabled}
        trackColor={{ true: '#ffffff', false: '#ffffff' }}
        thumbColor={isEnabled ? '#3A6598' : '#E3E0E0'}
      />
    </View>
  </View>
);

export default memo(SwitchButton);
