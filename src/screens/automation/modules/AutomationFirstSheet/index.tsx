import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import { BackButton } from '../../components/BackButton';
import { AutomationFirstSheetHeader } from '../../components/AutomationFirstSheetHeader';
import { AutomationFirstSheetCondition } from '../../components/AutomationFirstSheetCondition';
import { AutomationFirstSheetAction } from '../../components/AutomationFirstSheetAction';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

AntDesign.loadFont();

export const AutomationFirstSheet = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <BackButton
        onPress={props.closeSheet}
      />
      <AutomationFirstSheetHeader
        onPress={props.closeSheet}
      />
      <AutomationFirstSheetCondition />
      <AutomationFirstSheetAction />
    </SafeAreaView>
  )
}