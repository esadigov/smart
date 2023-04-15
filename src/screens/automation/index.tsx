import React, { useCallback, useEffect } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { SearchInput } from '../../components/SearchBox';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RobotImage from '../../components/Images/RobotImage';
import styles from './styles';
AntDesign.loadFont();
// Temporary Redux
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  searchDeviceSections,
  setSearchQuery,
} from '../../store/slices/deviceSlice';

export const AutomationScreen: React.FC = () => {
  const navigate = useNavigation();
  const goBack = useCallback(() => navigate.goBack(), [navigate]);
  // Temporary Redux
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
        style={styles.createAutomation}>
        <Text style={styles.createAutomationText}>
          Create Automation
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}