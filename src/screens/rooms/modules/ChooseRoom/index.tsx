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

import { SearchInput } from '../../../../components/SearchBox';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { DeviceCard } from './components/DeviceCard';
import { BackButton } from '../../../../components/BackButton';
import {
  switchRoom,
  searchRooms,
  setSearchQuery,
  setSheet,
} from '../../../../store/slices/roomSlice';
import styles from './styles';
import { ROOM_SECTIONS } from '../../../../store/mock';

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

export const ChooseRoom: React.FC = (props: any) => {
  const {
    filteredRooms,
    searchQuery,
  } =
    useAppSelector(state => state.roomSlice);
  const dispatch = useAppDispatch();

  const chosen = useMemo(
    () => filteredRooms.filter(rooms => rooms.enabled),
    [filteredRooms],
  );

  const disable = useCallback(
    (id: string) => dispatch(switchRoom(id)),
    [dispatch],
  );

  const renderItem = useCallback(
    ({ item }) => <DeviceCard key={item.id} item={item} />,
    [],
  );

  const handleSearch = useCallback(
    (value: string) => dispatch(setSearchQuery(value)),
    [dispatch],
  );

  useEffect(() => {
    dispatch(searchRooms(searchQuery));
  }, [dispatch, searchQuery]);

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.headline}>Attach device</Text>
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
      <View style={{left: -20}}>
        <BackButton onPress={() => dispatch(setSheet('CreateRoom'))} />
      </View>
      <FlatList
        key="room-sections"
        data={ROOM_SECTIONS}
        numColumns={2}
        scrollEnabled={true}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader()}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.listItems}
        showsVerticalScrollIndicator={false}
      />
    </KeyboardAvoidingView>
  );
}