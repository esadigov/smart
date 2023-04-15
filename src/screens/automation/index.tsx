import React, { useCallback, useEffect, useRef } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { SearchInput } from '../../components/SearchBox';
import { AutomationFirstSheet } from './modules/AutomationFirstSheet';
import { ConditionSheetHeader } from './components/ConditionSheetHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RobotImage from '../../components/Images/RobotImage';
import styles from './styles';
AntDesign.loadFont();
// TEMPORARY Redux
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  searchDeviceSections,
  setSearchQuery,
} from '../../store/slices/deviceSlice';

export const AutomationScreen: React.FC = () => {
  // Navigation
  const navigate = useNavigation();
  const goBack = useCallback(() => navigate.goBack(), [navigate]);
  const refRBSheet = useRef(null);
  // TEMPORARY Redux
  const dispatch = useAppDispatch();
  const { searchQuery } =
    useAppSelector(state => state.deviceSlice);
  useEffect(() => {
    dispatch(searchDeviceSections(searchQuery));
  }, [dispatch, searchQuery]);
  const handleSearch = useCallback(
    (value: string) => dispatch(setSearchQuery(value)),
    [dispatch],
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        key="backButton"
        onPress={goBack}
        style={styles.backButton}>
        <AntDesign key="backIcon" name="left" color={'#3A6598'} size={20} />
      </TouchableOpacity>
      <Text key="automationTitle" style={styles.header}>
        Automation
      </Text>
      <TouchableOpacity style={styles.plusButton}>
        <AntDesign name="plus" color={'#3A6598'} size={20} />
      </TouchableOpacity>
      <SafeAreaView style={styles.spacing}>
        <SearchInput
          onChange={handleSearch}
          value={searchQuery}
          placeholder="Search"
        />
      </SafeAreaView>
      <SafeAreaView style={styles.robotImage}>
        <RobotImage />
      </SafeAreaView>
      <TouchableOpacity
        key="createAutomation"
        onPress={() => refRBSheet.current?.open()}
        style={styles.createAutomation}>
        <Text style={styles.createAutomationText}>
          Create Automation
        </Text>
      </TouchableOpacity>
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
        <ConditionSheetHeader onPress={() => refRBSheet.current?.close()} />
        <AutomationFirstSheet />
      </RBSheet>
    </SafeAreaView>
  );
}