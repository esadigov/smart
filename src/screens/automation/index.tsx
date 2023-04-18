import React, { useCallback, useEffect, useRef } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';

import RBSheet from 'react-native-raw-bottom-sheet';
import { SearchInput } from '../../components/SearchBox';
import { AutomationBlank } from './components/AutomationBlank';
import { AutomationRegular } from './components/AutomationRegular';
// COMPONENTS TO NAVIGATE
import { AutomationFirstSheet } from './modules/AutomationFirstSheet';
import { AutomationConditionSheet } from './modules/AutomationConditionSheet';
import { AutomationActionSheet } from './modules/AutomationActionSheet';
import { AutomationNameSheet } from './modules/AutomationNameSheet';

import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
AntDesign.loadFont();
// Redux
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  searchAutomations,
  setSearchQuery,
} from '../../store/slices/automationSlice';

let blank = true;
// COMMENT TO SWITCH SCREENS
blank = false;

export const AutomationScreen: React.FC = () => {
  // Redux
  const { filteredAutomations, searchQuery } =
  useAppSelector(state => state.automationSlice);
  const dispatch = useAppDispatch();
  const handleSearch = useCallback(
    (value: string) => dispatch(setSearchQuery(value)),
    [dispatch],
  );
  useEffect(() => {
    dispatch(searchAutomations(searchQuery));
  }, [dispatch, searchQuery]);
  // Sheets
  const refRBSheet = useRef<RBSheet>(null);

  return (
    <SafeAreaView style={styles.container}>
      <Text key="automationTitle" style={styles.header}>
        Automation
      </Text>
      <TouchableOpacity
        key="createAutomation"
        onPress={() => refRBSheet.current?.open()}
        style={styles.plusButton}>
        <AntDesign name="plus" color={'#3A6598'} size={20} />
      </TouchableOpacity>
      <SafeAreaView style={styles.spacing}>
        <SearchInput
          onChange={handleSearch}
          value={searchQuery}
          placeholder="Search"
        />
      </SafeAreaView>

      {!blank
        ? <AutomationRegular />
        : <AutomationBlank
            onPress={() => refRBSheet.current?.open()}
          />
      }

      <RBSheet
        ref={refRBSheet}
        height={678}
        closeOnDragDown={true}
        openDuration={200}
        customStyles={{
          wrapper: {
            backgroundColor: "#20202020",
          },
          container: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
          draggableIcon: {
            backgroundColor: "#000",
            width: 100,
          },
        }}>

        <TouchableOpacity
          key="backButton"
          onPress={() => refRBSheet.current?.close()}
          style={styles.backButton}>
          <AntDesign key="backIcon" name="left" color={'#3A6598'} size={20} />
        </TouchableOpacity>
        {/* COMPONENTS TO NAVIGATE START */}

        {/* <AutomationFirstSheet /> */}
        {/* <AutomationConditionSheet /> */}
        {/* <AutomationActionSheet /> */}
        <AutomationNameSheet />

        {/* COMPONENTS TO NAVIGATE END */}
      </RBSheet>
    </SafeAreaView>
  );
}