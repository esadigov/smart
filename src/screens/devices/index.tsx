import React, {useCallback, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {SearchInput} from '../../components/SearchBox';
import SwitchButton, {SwitchOption} from '../../components/SwitchButtons';
import {useAppSelector} from '../../store/hooks';

import {DeviceCard} from './components/DeviceCard';
import {DeviceSwitch} from './DeviceSwitch';
import {DEVICES, DEVICE_SECTIONS} from './mock';
import styles from './styles';

AntDesign.loadFont();

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
  const {selectedDeviceSection} = useAppSelector(state => state.deviceSlice);

  const [search, setSearch] = useState<string>('');
  const [option, setOption] = useState(SWITCH_OPTIONS[0].value);

  const renderItem = useCallback(
    ({item}) => <DeviceCard key={item.id} item={item} />,
    [],
  );

  const renderSwitchButtons = useCallback(
    ({item}) => <DeviceSwitch item={item} />,
    [],
  );

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.headline}>Devices</Text>
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
    </View>
  );

  if (selectedDeviceSection.length) {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={selectedDeviceSection}
          scrollEnabled={true}
          renderItem={renderSwitchButtons}
          ListHeaderComponent={renderHeader}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DEVICE_SECTIONS}
        numColumns={2}
        scrollEnabled={true}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.listItems}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
