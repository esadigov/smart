import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';

AntDesign.loadFont();

export const AutomationFirstSheetHeader = (props: any) => {
  return (
    <SafeAreaView>
      <Text key='automationFirstSheetTitle' style={styles.header}>
        Create Automation
      </Text>
      <TouchableOpacity onPress={props.onPress} style={styles.saveContainer}>
        <Text style={styles.save}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
