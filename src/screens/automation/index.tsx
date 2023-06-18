import React, { useCallback, useEffect, useRef } from 'react';
import {
  useWindowDimensions,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { SearchInput } from '../../components/SearchBox';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  searchAutomations,
  setSearchQuery,
  setSheet
} from '../../store/slices/automationSlice';

import { AutomationBlank } from './components/AutomationBlank';
import { AutomationRegular } from './components/AutomationRegular';
// COMPONENTS TO NAVIGATE START
import { AutomationActionSheet } from './modules/AutomationActionSheet';
import { AutomationChooseDevice } from './modules/AutomationChooseDevice';
import { AutomationChooseRoom } from './modules/AutomationChooseRoom';
import { AutomationConditionSheet } from './modules/AutomationConditionSheet';
import { AutomationFirstSheet } from './modules/AutomationFirstSheet';
import { AutomationNameSheet } from './modules/AutomationNameSheet';
// COMPONENTS TO NAVIGATE END
import styles from './styles';

AntDesign.loadFont();
// Redux

const blank = true;
// COMMENT TO SWITCH SCREENS
// blank = false;

export const AutomationScreen: React.FC = () => {
  // Redux
  const { searchQuery, selectedSheet } = useAppSelector(
    state => state.automationSlice
  );
  const dispatch = useAppDispatch();
  const handleSearch = useCallback(
    (value: string) => dispatch(setSearchQuery(value)),
    [dispatch]
  );
  useEffect(() => {
    dispatch(searchAutomations(searchQuery));
  }, [dispatch, searchQuery]);
  // Sheets
  const refRBSheet = useRef<RBSheet>(null);
  const targetOpen = () => {
    refRBSheet.current?.open();
    dispatch(setSheet('FirstSheet'));
  };
  const targetClose = () => refRBSheet.current?.close();
  const sheetHeight = useWindowDimensions().height * 0.87;
  let currentSheet: JSX.Element = <></>;

  switch (selectedSheet) {
    case 'FirstSheet':
      currentSheet = <AutomationFirstSheet closeSheet={targetClose} />;
      break;
    case 'Condition':
      currentSheet = <AutomationConditionSheet />;
      break;
    case 'Action':
      currentSheet = <AutomationActionSheet />;
      break;
    case 'Room':
      currentSheet = <AutomationChooseRoom />;
      break;
    case 'Device':
      currentSheet = <AutomationChooseDevice />;
      break;
    case 'Name':
      currentSheet = <AutomationNameSheet closeSheet={targetClose} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text key='automationTitle' style={styles.header}>
        Automation
      </Text>
      <TouchableOpacity
        key='createAutomation'
        onPress={targetOpen}
        style={styles.plusButton}>
        <AntDesign name='plus' color={'#3A6598'} size={20} />
      </TouchableOpacity>
      <SafeAreaView style={styles.spacing}>
        <SearchInput
          onChange={handleSearch}
          value={searchQuery}
          placeholder='Search'
        />
      </SafeAreaView>

      {!blank ? (
        <AutomationRegular />
      ) : (
        <AutomationBlank onPress={targetOpen} />
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
