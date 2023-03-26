import React, { memo, useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface IButton {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  style?: any;
}

export const Button: React.FC<IButton> = memo(
  ({ text, onPress, disabled, style }) => {
    const { backgroundStyle, colorStyle } = useMemo(
      () => ({
        backgroundStyle: {
          backgroundColor: disabled ? '#CBCBCB' : '#3A6598',
        },
        colorStyle: {
          color: disabled ? '#7A7A7A' : '#fff',
        },
      }),
      [disabled],
    );

    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[styles.container, backgroundStyle, style]}>
        <Text style={[styles.text, colorStyle]}>{text}</Text>
      </TouchableOpacity>
    );
  },
);
