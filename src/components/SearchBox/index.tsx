import React from 'react';
import { TextInput, View } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

AntDesign.loadFont();

interface ISearchInput {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  hideIcon?: boolean;
  style?: any;
}

export const SearchInput: React.FC<ISearchInput> = ({
  value,
  onChange,
  placeholder,
  hideIcon,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={'#9AA4C9'}
          value={value}
          onChangeText={onChange}
        />
      </View>
      {!hideIcon && (
        <AntDesign
          name="search1"
          size={24}
          color={'#9AA4C9'}
          style={styles.inputIcon}
        />
      )}
    </View>
  );
};
