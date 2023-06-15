import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';

AntDesign.loadFont();

interface ISearchInput {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  style?: any;
  hideIcon?: boolean;
}

export const SearchInput: React.FC<ISearchInput> = ({
  value,
  onChange,
  placeholder,
  style,
  hideIcon
}) => {
  const [focus, setFocus] = useState(false);
  return (
    <View style={[styles.container, style]}>
      <View
        style={[
          styles.inputContainer,
          focus
            ? {
                backgroundColor: '#E9F3FF',
                borderColor: '#3A6598'
              }
            : {
                backgroundColor: '#F8F8F8',
                borderColor: '#ECECEC'
              }
        ]}>
        <TextInput
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={styles.input}
          placeholder={focus ? '' : placeholder}
          placeholderTextColor={'#CCC'}
          value={value}
          onChangeText={onChange}
        />
      </View>
      {!focus && !hideIcon ? (
        <AntDesign
          name='search1'
          size={24}
          color='#CCC'
          style={styles.inputIcon}
        />
      ) : null}
    </View>
  );
};
