import React, { useCallback, useRef, useState } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  useWindowDimensions
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import FilterIcon from '../../../../components/Icons/FilterIcon';
import { SearchInput } from '../../../../components/SearchBox';
import { FilterBy } from './components/FilterBy';
import { LogsList } from './components/LogsList';
import styles from './styles';

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
  // Sheets
  const refRBSheet = useRef<RBSheet>(null);
  const targetOpen = () => {
    refRBSheet.current?.open();
  };
  const targetClose = () => refRBSheet.current?.close();
  const sheetHeight = useWindowDimensions().height * 0.87;

  const Item = ({ date, collapsed }: { date: string; collapsed: boolean }) => {
    const [closed, setClosed] = useState(collapsed);
    return (
      <View>
        <TouchableOpacity
          onPress={() => setClosed(!closed)}
          style={[
            styles.list,
            {
              borderBottomStartRadius: closed ? 6 : 0,
              borderBottomEndRadius: closed ? 6 : 0
            }
          ]}>
          <View style={styles.row}>
            <View style={styles.text}>
              <Text style={styles.date}>{date}</Text>
            </View>
          </View>
          <View style={styles.forward}>
            <AntDesign
              name={closed ? 'right' : 'down'}
              color={'#8D8D8D'}
              size={20}
            />
          </View>
        </TouchableOpacity>
        {!closed ? <LogsList logs={LOG_LIST} /> : null}
      </View>
    );
  };

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
        <TouchableOpacity onPress={targetOpen} style={styles.filterIcon}>
          <FilterIcon color={'#FFF'} />
        </TouchableOpacity>
      </View>
      <FlatList
        keyExtractor={item => item.id}
        data={DATE_LIST}
        renderItem={renderItem}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 9 }}
        style={{ marginBottom: 20 }}
      />
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
        <FilterBy closeSheet={targetClose} />
      </RBSheet>
    </View>
  );
};
