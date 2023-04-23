import React, { useCallback, useEffect } from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { SearchInput } from '../../../../components/SearchBox';
// Redux START
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {
  searchDeviceSections,
  setSearchQuery,
} from '../../../../store/slices/deviceSlice';
// Redux END
import { DeviceCard } from './components/DeviceCard';
import styles from './styles';

AntDesign.loadFont();

export const AutomationChooseRoom: React.FC = () => {
  const { filteredSections, searchQuery } =
    useAppSelector(state => state.deviceSlice);
  const dispatch = useAppDispatch();

  const renderItem = useCallback(
    ({ item }) => <DeviceCard key={item.id} item={item} />,
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
        <Text style={styles.headline}>Choose room</Text>
      </View>
      <View style={styles.spacing}>
        <SearchInput
          onChange={handleSearch}
          value={searchQuery}
          placeholder="Search"
        />
      </View>
    </View>
  );

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