import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../components/BackButton';
import { AutomationFirstSheetHeader } from '../../components/AutomationFirstSheetHeader';
import { AutomationFirstSheetCondition } from '../../components/AutomationFirstSheetCondition';
import { AutomationFirstSheetAction } from '../../components/AutomationFirstSheetAction';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

AntDesign.loadFont();

export const AutomationFirstSheet = (props: any) => {
  const navigate = useNavigation();
  // const goToAutomationConditionSheet = () => navigate.navigate('AutomationSheet');

  return (
    <SafeAreaView style={styles.container}>
      <BackButton
        onPress={props.closeSheet}
      />
      <AutomationFirstSheetHeader />
      <AutomationFirstSheetCondition />
      <AutomationFirstSheetAction />
    </SafeAreaView>
  )
}