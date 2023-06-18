import React, { useCallback } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import { SearchInput } from '../../../../components/SearchBox';
import FilterIcon from '../../../../components/Icons/FilterIcon';
import { LogsList } from './components/LogsList';

AntDesign.loadFont();

const DATE_LIST = [
  {
    id: 'date1',
    date: '30 September / Friday',
    collapsed: false
  },
  {
    id: 'date2',
    date: '29 September / Thursday',
    collapsed: true
  }
];

const LOG_LIST = [
  {
    id: 'log1',
    time: '14:16',
    title: "If the weather's sunny then push the alarm",
    message: 'Executed Successfully',
    state: true
  },
  {
    id: 'log2',
    time: '13:16',
    title: "If the weather's sunny then push the alarm",
    message: 'Executed Successfully',
    state: true
  },
  {
    id: 'log3',
    time: '12:16',
    title: "If the weather's sunny then push the alarm",
    message: 'Execution Failed',
    state: false
  }
];

export const LogsHistory = () => {
  const navigate = useNavigation();
  const goBack = useCallback(() => navigate.goBack(), [navigate]);

  const Item = ({ date, collapsed }: { date: string; collapsed: boolean }) => (
    <View>
      <TouchableOpacity style={styles.list}>
        <View style={styles.row}>
          <View style={styles.text}>
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
        <View style={styles.forward}>
          <AntDesign
            name={collapsed ? 'right' : 'down'}
            color={'#8D8D8D'}
            size={20}
          />
        </View>
      </TouchableOpacity>
      {collapsed ? <LogsList logs={LOG_LIST} /> : null}
    </View>
  );

  const renderItem = ({ item }: any) => (
    <Item date={item.date} collapsed={item.collapsed} />
  );

  return (
    <View style={styles.container}>
      <Text key='homeManagementsTitle' style={styles.header}>
        Logs history
      </Text>
      <TouchableOpacity
        key='backButton'
        onPress={goBack}
        style={styles.backButton}>
        <AntDesign key='backIcon' name='left' color={'#1A5EAF'} size={20} />
      </TouchableOpacity>
      <View style={styles.searchContainer}>
        <SearchInput
          onChange={() => console.log('Search Logs Here')}
          style={styles.searchStyles}
          value=''
          placeholder='Search'
        />
        <TouchableOpacity style={styles.filterIcon}>
          <FilterIcon color={'#FFF'} />
        </TouchableOpacity>
      </View>
      <FlatList
        keyExtractor={item => item.id}
        data={DATE_LIST}
        renderItem={renderItem}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
