import React, { useCallback, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { SearchInput } from '../../components/SearchBox';

import { RoomsViewMode } from './components/RoomsViewMode';
import { RoomSwitch } from './components/RoomSwitch.tsx';
import styles from './styles';

AntDesign.loadFont();

export const RoomsScreen: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [twoColumnView, setTwoColumnView] = useState(false);

  const handleToggleViewMode = useCallback(
    () => setTwoColumnView(!twoColumnView),
    [twoColumnView],
  );

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
          onChange={setSearch}
          style={styles.searchStyles}
          value={search}
          placeholder="Search"
        />
        <RoomsViewMode
          twoColumnsView={twoColumnView}
          onPress={handleToggleViewMode}
        />
      </View>
    </>
  );

  const renderItem = ({ item }) => <RoomSwitch isEnabled={item.enabled} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        key="device-sections"
        data={[{ enabled: true }, { enabled: false }]}
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
