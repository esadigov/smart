import React from 'react';
import { SafeAreaView, TouchableOpacity, Text } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import { BackButton } from '../../../../../../components/BackButton';

AntDesign.loadFont();

export const FilterBy: React.FC = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView>
        <BackButton onPress={props.closeSheet} />
        <Text key='automationFirstSheetTitle' style={styles.header}>
          Filter by
        </Text>
        <TouchableOpacity
          onPress={props.closeSheet}
          style={styles.saveContainer}>
          <Text style={styles.save}>Save</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
};
