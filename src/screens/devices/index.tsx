import React, { useCallback, useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { SearchInput } from '../../components/SearchBox';
import SwitchButton, { SwitchOption } from '../../components/SwitchButtons';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  searchDeviceSections,
  setSearchQuery,
} from '../../store/slices/deviceSlice';

import { DeviceCard } from './components/DeviceCard';
import { DeviceSwitch } from './components/DeviceSwitch';
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
  const { selectedDeviceSection, filteredSections, searchQuery } =
    useAppSelector(state => state.deviceSlice);
  const dispatch = useAppDispatch();

  const [option, setOption] = useState(SWITCH_OPTIONS[0].value);

  const renderItem = useCallback(
    ({ item }) => <DeviceCard key={item.id} item={item} />,
    [],
  );

  const renderSwitchButtons = useCallback(
    ({ item }) => <DeviceSwitch item={item} />,
    [],
  );

  const handleSearch = useCallback(
    (value: string) => dispatch(setSearchQuery(value)),
    [dispatch],
  );

  useEffect(() => {
    dispatch(searchDeviceSections(searchQuery));
  }, [dispatch, searchQuery]);

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <View>
        {/* Back Button Functionality Like on Figma */}
        <TouchableOpacity
          key="backButton"
          style={styles.backButton}>
          <AntDesign key="backIcon" name="left" color={'#3A6598'} size={20} />
        </TouchableOpacity>
        {/* Back Button End */}
        <Text style={styles.headline}>Devices</Text>
        <TouchableOpacity style={styles.plusButton}>
          <AntDesign name="plus" color={'#3A6598'} size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.spacing}>
        <SearchInput
          onChange={handleSearch}
          value={searchQuery}
          placeholder="Search"
        />
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
          key="device"
          data={selectedDeviceSection}
          scrollEnabled={true}
          renderItem={renderSwitchButtons}
          ListHeaderComponent={renderHeader()}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        key="device-sections"
        data={filteredSections}
        numColumns={2}
        scrollEnabled={true}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader()}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.listItems}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
