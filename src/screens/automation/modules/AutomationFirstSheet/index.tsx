import React from 'react';
import { SafeAreaView } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { BackButton } from '../../../../components/BackButton';
import { AutomationFirstSheetAction } from '../../components/AutomationFirstSheetAction';
import { AutomationFirstSheetCondition } from '../../components/AutomationFirstSheetCondition';
import { AutomationFirstSheetHeader } from '../../components/AutomationFirstSheetHeader';

import styles from './styles';

AntDesign.loadFont();

export const AutomationFirstSheet = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <BackButton onPress={props.closeSheet} />
      <AutomationFirstSheetHeader onPress={props.closeSheet} />
      <AutomationFirstSheetCondition />
      <AutomationFirstSheetAction />
    </SafeAreaView>
  );
};
