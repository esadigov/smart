import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

AntDesign.loadFont();

export const AutomationFirstSheetHeader = (props: any) => {
  return (
    <SafeAreaView>
      <Text key="automationFirstSheetTitle" style={styles.header}>
        Create Automation
      </Text>
      <TouchableOpacity
        key="backButton"
        onPress={props.onPress}
        style={styles.backButton}>
        <AntDesign key="backIcon" name="left" color={'#3A6598'} size={20} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.saveContainer}>
        <Text style={styles.save}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}