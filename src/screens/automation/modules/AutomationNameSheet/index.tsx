import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { BackButton } from '../../components/BackButton';
import styles from './styles';

AntDesign.loadFont();

export const AutomationNameSheet = (props: any) => {
  return (
    <View style={styles.container}>
      <BackButton
        onPress={props.closeSheet}
      />
      <Text key="automationConditionSheetTitle" style={styles.header}>
        Name
      </Text>
      <View>
        <Text style={styles.inputText}>
          Automation name
        </Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          autoCapitalize='none'
          autoComplete='off'
          autoCorrect={false}
          spellCheck={false}
        />
        <TouchableOpacity
          key="saveButton"
          style={styles.saveButton}
          ><Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}