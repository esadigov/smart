import React, { useCallback, useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { SearchInput } from '../../components/SearchBox';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  searchRooms,
  setSearchQuery,
  switchRoom,
} from '../../store/slices/roomSlice';

import { RoomsViewMode } from './components/RoomsViewMode';
import { RoomSwitch } from './components/RoomSwitch.tsx';
import styles from './styles';

AntDesign.loadFont();

export const RoomsScreen: React.FC = () => {
  const [twoColumnView, setTwoColumnView] = useState(false);

  const { filteredRooms, searchQuery } = useAppSelector(
    state => state.roomSlice,
  );
  const dispatch = useAppDispatch();

  const handleSwitch = useCallback(
    (id: string | number) => {
      dispatch(switchRoom(id));
    },
    [dispatch],
  );

  const handleToggleViewMode = useCallback(
    () => setTwoColumnView(!twoColumnView),
    [twoColumnView],
  );

  const handleSearch = useCallback(
    (value: string) => dispatch(setSearchQuery(value)),
    [dispatch],
  );

  useEffect(() => {
    dispatch(searchRooms(searchQuery));
  }, [dispatch, searchQuery]);

  const renderHeader = () => (
    <>
      <View>
        <Text style={styles.header}>Rooms</Text>
        <TouchableOpacity style={styles.plusButton}>
          <AntDesign name="plus" color={'#9AA4C9'} size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <SearchInput
          onChange={handleSearch}
          style={styles.searchStyles}
          value={searchQuery}
          placeholder="Search"
        />
        <RoomsViewMode
          twoColumnsView={twoColumnView}
          onPress={handleToggleViewMode}
        />
      </View>
    </>
  );

  const renderItem = ({ item }) => (
    <RoomSwitch
      key={item.id}
      title={item.name}
      subtitle={
        item.numDevices > 1
          ? `${item.numDevices} devices`
          : `${item.numDevices} device`
      }
      color={item.color}
      isEnabled={item.enabled}
      setIsEnabled={() => handleSwitch(item.id)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        key="device-sections"
        data={filteredRooms}
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
