import React from 'react';
import { TouchableOpacity } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';

AntDesign.loadFont();

export const BackButton = (props: any) => {
  return (
    <TouchableOpacity
      key='backButton'
      onPress={props.onPress}
      style={styles.backButton}>
      <AntDesign key='backIcon' name='left' color={'#3A6598'} size={20} />
    </TouchableOpacity>
  );
};
