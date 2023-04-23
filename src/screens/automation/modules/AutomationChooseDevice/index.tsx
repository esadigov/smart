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

import { Button } from '../../../../components/Button';
import { SearchInput } from '../../../../components/SearchBox';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {
  searchDeviceSections,
  setSearchQuery,
  switchDevice,
} from '../../../../store/slices/deviceSlice';

import { DeviceCheckBox } from './components/DeviceCheckBox';
import styles from './styles';

const SelectedComponent = ({
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

export const AutomationChooseDevice: React.FC = () => {
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

  const renderSwitchButtons = useCallback(
    ({ item }) => (
      <DeviceCheckBox
        title={item.device}
        subtitle={item.room}
        selected={item.enabled}
        id={item.id}
        icon={item.icon}
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
        <Text style={styles.headline}>Choose Device</Text>
      </View>
      <View style={styles.spacing}>
        <SearchInput
          onChange={handleSearch}
          value={searchQuery}
          placeholder="Search"
        />
      </View>
      <View style={styles.selected}>
        {chosen.map(item => (
          <SelectedComponent
            key={item.id}
            name={item.room}
            onPress={() => disable(item.id)}
          />
        ))}
      </View>
    </View>
  );

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
            text="Next"
            onPress={() => {}}
            style={{ marginBottom: 30 }}
            disabled={!chosen.length}
          />
        </View>
      </KeyboardAvoidingView>
    );
};
