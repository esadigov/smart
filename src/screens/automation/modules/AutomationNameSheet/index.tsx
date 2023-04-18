import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

AntDesign.loadFont();

export const AutomationNameSheet = () => {
  return (
    <View style={styles.container}>
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