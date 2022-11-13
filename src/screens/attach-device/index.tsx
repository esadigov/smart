import React, { useCallback, useEffect, useMemo } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { Button } from '../../components/Button';
import { SearchInput } from '../../components/SearchBox';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  searchDeviceSections,
  setSearchQuery,
  switchDevice,
} from '../../store/slices/deviceSlice';
import { DeviceCard } from '../devices/components/DeviceCard';

import { DeviceCheckBox } from './components/DeviceCheckBox';
import styles from './styles';

const ChosenComponent = ({
  name,
  onPress,
}: {
  name: string;
  onPress: () => void;
}) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      backgroundColor: '#3A6598',
      marginRight: 7,
      marginBottom: 7,
      borderRadius: 6,
      paddingHorizontal: 10,
    }}>
    <Text
      style={{
        color: '#fff',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 17,
        marginRight: 10,
      }}>
      {name}
    </Text>
    <TouchableOpacity onPress={onPress}>
      <AntDesign name="close" color="#fff" />
    </TouchableOpacity>
  </View>
);

export const AttachDevice: React.FC = () => {
  const { selectedDeviceSection, filteredSections, searchQuery } =
    useAppSelector(state => state.deviceSlice);
  const dispatch = useAppDispatch();

  const chosen = useMemo(
    () => selectedDeviceSection.filter(device => device.enabled),
    [selectedDeviceSection],
  );

  const disable = useCallback(
    (id: string) => dispatch(switchDevice(id)),
    [dispatch],
  );

  const renderItem = useCallback(
    ({ item }) => <DeviceCard key={item.id} item={item} />,
    [],
  );

  const renderSwitchButtons = useCallback(
    ({ item }) => (
      <DeviceCheckBox
        title={item.device}
        subtitle={item.room}
        selected={item.enabled}
        id={item.id}
      />
    ),
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
        <Text style={styles.headline}>Attach Device</Text>
      </View>
      <View style={styles.spacing}>
        <SearchInput
          onChange={handleSearch}
          value={searchQuery}
          placeholder="Search"
        />
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 20 }}>
        {chosen.map(item => (
          <ChosenComponent
            key={item.id}
            name={item.room}
            onPress={() => disable(item.id)}
          />
        ))}
      </View>
    </View>
  );

  if (selectedDeviceSection.length) {
    return (
      <KeyboardAvoidingView
        {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
        keyboardVerticalOffset={50}
        style={styles.container}>
        <FlatList
          key="device"
          data={selectedDeviceSection}
          scrollEnabled={true}
          renderItem={renderSwitchButtons}
          ListHeaderComponent={renderHeader()}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
        <View style={{ backgroundColor: '#fff', paddingTop: 20 }}>
          <Button
            text="Done"
            onPress={() => {}}
            style={{ marginHorizontal: 15, marginBottom: 30 }}
            disabled={!chosen.length}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }

  return (
    <KeyboardAvoidingView
      {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
      keyboardVerticalOffset={50}
      style={styles.container}>
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
      <View style={{ backgroundColor: '#fff', paddingTop: 20 }}>
        <Button
          text="Done"
          onPress={() => {}}
          style={{ marginHorizontal: 15, marginBottom: 30 }}
          // add selecting
          disabled={!chosen.length}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
