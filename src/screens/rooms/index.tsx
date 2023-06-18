import React, { useCallback, useEffect, useState, useRef } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  useWindowDimensions
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { SearchInput } from '../../components/SearchBox';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  searchRooms,
  setSearchQuery,
  switchRoom,
  setSheet
} from '../../store/slices/roomSlice';

import { RoomsViewMode } from './components/RoomsViewMode';
import { RoomSwitch } from './components/RoomSwitch.tsx';
import { RoomSwitchRow } from './components/RoomSwitchRow.tsx';
import { AddPhoto } from './modules/AddPhoto';
import { AttachDevice } from './modules/AttachDevice';
import { ChooseRoom } from './modules/ChooseRoom';
import { CreateRoom } from './modules/CreateRoom';
import { RoomOptions } from './modules/RoomOptions';
import styles from './styles';

AntDesign.loadFont();

export const RoomsScreen: React.FC = () => {
  const [twoColumnView, setTwoColumnView] = useState(false);

  const { filteredRooms, searchQuery, selectedSheet } = useAppSelector(
    state => state.roomSlice
  );
  const dispatch = useAppDispatch();
  const handleSwitch = useCallback(
    (id: string | number) => {
      dispatch(switchRoom(id));
    },
    [dispatch]
  );

  const handleToggleViewMode = useCallback(
    () => setTwoColumnView(!twoColumnView),
    [twoColumnView]
  );

  const handleSearch = useCallback(
    (value: string) => dispatch(setSearchQuery(value)),
    [dispatch]
  );

  useEffect(() => {
    dispatch(searchRooms(searchQuery));
  }, [dispatch, searchQuery]);

  // Sheets
  const refRBSheet = useRef<RBSheet>(null);
  const targetOpen = () => {
    refRBSheet.current?.open();
    dispatch(setSheet('RoomOptions'));
  };
  const targetClose = () => refRBSheet.current?.close();
  const sheetHeight = useWindowDimensions().height * 0.7;
  let currentSheet: JSX.Element = <></>;

  switch (selectedSheet) {
    case 'RoomOptions':
      currentSheet = <RoomOptions />;
      break;
    case 'CreateRoom':
      currentSheet = <CreateRoom />;
      break;
    case 'ChooseRoom':
      currentSheet = <ChooseRoom />;
      break;
    case 'AttachDevice':
      currentSheet = <AttachDevice />;
      break;
    case 'AddPhoto':
      currentSheet = <AddPhoto closeSheet={targetClose} />;
  }

  const renderHeader = () => (
    <>
      <View>
        <Text style={styles.header}>Rooms</Text>
        <TouchableOpacity onPress={targetOpen} style={styles.plusButton}>
          <AntDesign name='plus' color={'#3A6598'} size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <SearchInput
          onChange={handleSearch}
          style={styles.searchStyles}
          value={searchQuery}
          placeholder='Search'
        />
        <RoomsViewMode
          twoColumnsView={twoColumnView}
          onPress={handleToggleViewMode}
        />
      </View>
    </>
  );

  const renderRowItem = ({ item }: any) => (
    <RoomSwitchRow
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
      image={item.image}
      user={item.user}
    />
  );

  const renderItem = ({ item }: any) => (
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
      image={item.image}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {twoColumnView ? (
        <FlatList
          key='rooms-row'
          data={filteredRooms}
          scrollEnabled={true}
          renderItem={renderRowItem}
          ListHeaderComponent={renderHeader()}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <FlatList
          key='rooms'
          data={filteredRooms}
          numColumns={2}
          scrollEnabled={true}
          renderItem={renderItem}
          ListHeaderComponent={renderHeader()}
          contentContainerStyle={styles.listContainer}
          columnWrapperStyle={styles.listItems}
          showsVerticalScrollIndicator={false}
        />
      )}
      <RBSheet
        ref={refRBSheet}
        height={sheetHeight}
        closeOnDragDown={true}
        openDuration={200}
        closeDuration={200}
        customStyles={{
          wrapper: {
            backgroundColor: '#20202020'
          },
          container: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30
          },
          draggableIcon: {
            backgroundColor: '#000',
            width: 100
          }
        }}>
        <FlatList
          key='bottomSheet'
          data={null}
          scrollEnabled={true}
          renderItem={null}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={null}
          ListFooterComponent={currentSheet}
        />
      </RBSheet>
    </SafeAreaView>
  );
};
