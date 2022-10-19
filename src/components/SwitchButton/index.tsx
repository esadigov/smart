import React, {memo} from 'react';
import {View, Text, Switch} from 'react-native';

import styles from './styles';

interface ISwitchButton {
  title: string;
  subtitle: string;
  isEnabled: boolean;
  setIsEnabled: any;
  disabled?: boolean;
  style?: any;
}

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
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
    <Switch
      value={isEnabled}
      onValueChange={setIsEnabled}
      disabled={disabled}
      trackColor={{true: '#3A6598', false: '#F3F1F8'}}
    />
  </View>
);

export default memo(SwitchButton);
