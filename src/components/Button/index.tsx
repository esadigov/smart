import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface IButton {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  style?: any;
}

export const Button: React.FC<IButton> = ({
  text,
  onPress,
  disabled,
  style,
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    style={[
      {
        backgroundColor: disabled ? '#CBCBCB' : '#3A6598',
        paddingVertical: 14.5,
        borderRadius: 6,
      },
      style,
    ]}>
    <Text
      style={{
        color: disabled ? '#7A7A7A' : '#fff',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 20,
        textAlign: 'center',
      }}>
      {text}
    </Text>
  </TouchableOpacity>
);
