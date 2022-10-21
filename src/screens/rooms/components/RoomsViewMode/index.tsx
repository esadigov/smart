import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Octicons from 'react-native-vector-icons/Octicons';

import styles from './styles';

Octicons.loadFont();

interface ViewSwitch {
  twoColumnsView: boolean;
  onPress: () => void;
}

export const RoomsViewMode: React.FC<ViewSwitch> = ({
  twoColumnsView,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    {twoColumnsView ? (
      <Octicons name="apps" color={'#FFF'} size={28} />
    ) : (
      <Octicons name="rows" color={'#FFF'} size={24} />
    )}
  </TouchableOpacity>
);
