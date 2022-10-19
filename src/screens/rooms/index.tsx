import React, {useCallback, useState} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {SearchInput} from '../../components/SearchBox';

import {RoomsViewMode} from './components/RoomsViewMode';
import styles from './styles';

AntDesign.loadFont();

export const RoomsScreen: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [twoColumnView, setTwoColumnView] = useState(false);

  const handleToggleViewMode = useCallback(
    () => setTwoColumnView(!twoColumnView),
    [twoColumnView],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>Rooms</Text>
        <TouchableOpacity style={styles.plusButton}>
          <AntDesign name="plus" color={'#9AA4C9'} size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.spacing}>
        <SearchInput
          style={styles.searchBar}
          onChange={setSearch}
          value={search}
          placeholder="Search"
        />
        <RoomsViewMode
          twoColumnsView={twoColumnView}
          onPress={handleToggleViewMode}
        />
      </View>
    </SafeAreaView>
  );
};
