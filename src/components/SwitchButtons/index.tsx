import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export interface SwitchOption {
  label: string;
  value: string;
}

interface ISwitchButton {
  options: SwitchOption[];
  onPress: any;
  selectedValue: string;
}

const SwitchButton: React.FC<ISwitchButton> = ({
  options,
  selectedValue,
  onPress
}) => {
  return (
    <View style={styles.container}>
      {options.map((option, index) => {
        const active = option.value === selectedValue;
        return (
          <TouchableOpacity
            key={index}
            onPress={() => onPress(option.value)}
            style={[styles.button, active ? styles.active : {}]}>
            <Text style={[styles.text, active ? styles.activeText : {}]}>
              {option.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default SwitchButton;
