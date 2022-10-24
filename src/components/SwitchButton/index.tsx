import React, { memo } from 'react';
import { View, Text, Switch, Animated } from 'react-native';

import styles from './styles';

interface ISwitchButton {
  title: string;
  subtitle: string;
  isEnabled: boolean;
  setIsEnabled: any;
  disabled?: boolean;
  textInterpolate: any;
  style?: any;
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
}) => (
  <View style={[styles.container, style]}>
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
    <Switch
      value={isEnabled}
      onValueChange={setIsEnabled}
      disabled={disabled}
      trackColor={{ true: '#ffffff', false: '#ffffff' }}
      thumbColor={'#3A6598'}
    />
  </View>
);

export default memo(SwitchButton);
