import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import RobotImage from '../../../../components/Images/RobotImage';

import styles from './styles';

AntDesign.loadFont();

export const AutomationBlank = (props: any) => {
  return (
    <>
      <SafeAreaView style={styles.robotImage}>
        <RobotImage />
      </SafeAreaView>
      <TouchableOpacity
        key='createAutomationBlank'
        onPress={props.onPress}
        style={styles.createAutomation}>
        <Text style={styles.createAutomationText}>Create Automation</Text>
      </TouchableOpacity>
      <SafeAreaView />
    </>
  );
};
