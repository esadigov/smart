import React, { memo } from 'react';
import { View, Text, Switch } from 'react-native';

import styles from './styles';

interface ISwitchButton {
  title: string;
  subtitle: string;
  isEnabled: boolean;
  setIsEnabled: any;
  disabled?: boolean;
  style?: any;
}

// NOTE: add logic to change text color animated
const SwitchButton: React.FC<ISwitchButton> = ({
  title,
  subtitle,
  isEnabled,
  setIsEnabled,
  disabled,
  style,
}) => (
  <View style={[styles.container, style]}>
    <View style={styles.titleContainer}>
      <Text style={[styles.title, isEnabled ? styles.enabledText : {}]}>
        {title}
      </Text>
      {subtitle ? (
        <Text style={[styles.subtitle, isEnabled ? styles.enabledText : {}]}>
          {subtitle}
        </Text>
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
