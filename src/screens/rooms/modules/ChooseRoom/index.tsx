import React, { useCallback } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Text,
  View
} from 'react-native';

import { BackButton } from '../../../../components/BackButton';
import { SearchInput } from '../../../../components/SearchBox';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { ROOM_SECTIONS } from '../../../../store/mock';
import { setSearchQuery, setSheet } from '../../../../store/slices/roomSlice';

import { DeviceCard } from './components/DeviceCard';
import styles from './styles';

export const ChooseRoom: React.FC = () => {
  const { searchQuery } = useAppSelector(state => state.roomSlice);
  const dispatch = useAppDispatch();

  const renderItem = useCallback(
    ({ item }) => <DeviceCard key={item.id} item={item} />,
    []
  );

  const handleSearch = useCallback(
    (value: string) => dispatch(setSearchQuery(value)),
    [dispatch]
  );

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.headline}>Attach device</Text>
      </View>
      <View style={styles.spacing}>
        <SearchInput
          onChange={handleSearch}
          value={searchQuery}
          placeholder='Search'
        />
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
      keyboardVerticalOffset={50}
      style={styles.container}>
      <View style={{ left: -20 }}>
        <BackButton onPress={() => dispatch(setSheet('CreateRoom'))} />
      </View>
      <FlatList
        key='room-sections'
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
};
