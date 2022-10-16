import React from 'react';
import {TextInput, View} from 'react-native';

import AntIcon from 'react-native-vector-icons/AntDesign';

import styles from './styles';

interface ISearchInput {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  style?: any;
}

export const SearchInput: React.FC<ISearchInput> = ({
  value,
  onChange,
  placeholder,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.inputContainer}>
        <View>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={'#9AA4C9'}
            value={value}
            onChangeText={onChange}
          />
        </View>
        <AntIcon
          name="search1"
          size={24}
          color={'#9AA4C9'}
          style={styles.inputIcon}
        />
      </View>
    </View>
  );
};
