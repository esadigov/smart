import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {SearchInput} from '../../components/SearchBox';
import SwitchButton, {SwitchOption} from '../../components/SwitchButtons';

import styles from './styles';

const SWITCH_OPTIONS: SwitchOption[] = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Active',
    value: 'active',
  },
];

export const DevicesScreen: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [option, setOption] = useState(SWITCH_OPTIONS[0].value);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>Devices</Text>
        <TouchableOpacity style={styles.plusButton}>
          <AntDesign name="plus" color={'#9AA4C9'} size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.spacing}>
        <SearchInput onChange={setSearch} value={search} placeholder="Search" />
      </View>
      <View style={styles.spacing}>
        <SwitchButton
          selectedValue={option}
          onPress={setOption}
          options={SWITCH_OPTIONS}
        />
      </View>
    </SafeAreaView>
  );
};
