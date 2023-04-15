import React, { useCallback, useEffect, useRef } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { SearchInput } from '../../components/SearchBox';
import { AutomationFirstSheet } from './modules/AutomationFirstSheet';
import { AutomationFirstSheetHeader } from './components/AutomationFirstSheetHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RobotImage from '../../components/Images/RobotImage';
import styles from './styles';
AntDesign.loadFont();
// Redux
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  searchAutomations,
  setSearchQuery,
} from '../../store/slices/automationSlice';

export const AutomationScreen: React.FC = () => {
  // Navigation
  const navigate = useNavigation();
  const goBack = useCallback(() => navigate.goBack(), [navigate]);
  const refRBSheet = useRef(null);
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
      {!filteredAutomations
        ? <SafeAreaView style={styles.container}>
            <FlatList
              key="device-sections"
              data={filteredAutomations}
              numColumns={2}
              scrollEnabled={true}
              renderItem={null}
              showsVerticalScrollIndicator={false}
            />
          </SafeAreaView>
        : <SafeAreaView style={styles.robotImage}>
            <RobotImage />
          </SafeAreaView>
      }

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
        <FlatList
          key="automationSheets"
          data={null}
          renderItem={null}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <AutomationFirstSheetHeader
              onPress={() => refRBSheet.current?.close()}
            />
          }
          ListFooterComponent={<AutomationFirstSheet />}
        />
      </RBSheet>
    </SafeAreaView>
  );
}