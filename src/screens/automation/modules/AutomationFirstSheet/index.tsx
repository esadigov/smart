import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { AutomationFirstSheetHeader } from '../../components/AutomationFirstSheetHeader';
import { AutomationFirstSheetCondition } from '../../components/AutomationFirstSheetCondition';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

AntDesign.loadFont();

// Mock Object
const CREATE_ACTIONS = [
  {
    id: 'sendAlarm',
    title: 'Send alarm notification',
    icon: 'alarm',
  },
];

export const AutomationFirstSheet = () => {
  const navigate = useNavigation();
  // const goToAutomationConditionSheet = () => navigate.navigate('AutomationSheet');
  const [ actionOpen, setActionOpen ] = useState(true);
  const handleActionDrop = () => {
    setActionOpen(!actionOpen);
  }

  return (
    <SafeAreaView style={styles.container}>
      <AutomationFirstSheetHeader />
      <AutomationFirstSheetCondition />
      <View style={styles.box}>
        <View style={styles.upper}>
          <Text style={styles.primaryText}>
            Action
          </Text>
          <TouchableOpacity
            onPress={handleActionDrop}
            style={styles.dropdownKey}>
            <AntDesign name={actionOpen ? "down" : "right"} color={'#A5A5A5'} size={24} />
          </TouchableOpacity>
          <Text style={styles.subText}>
            Add the action you want to perform
          </Text>
        </View>
        {actionOpen ?
        <View style={styles.lower}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Add action</Text>
          </TouchableOpacity>
        </View> : null}
      </View>
    </SafeAreaView>
  )
}