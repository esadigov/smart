import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { BackButton } from '../../../../components/BackButton';
import styles from './styles';
import { Button } from '../../../../components/Button';

AntDesign.loadFont();

export const AutomationNameSheet = (props: any) => {
  const [ automationName, setAutomationName ] = useState('');

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
          onChangeText={text => setAutomationName(text)}
          spellCheck={false}
        />
        <Button
          onPress={props.closeSheet}
          key="saveButton"
          style={styles.saveButton}
          disabled={!automationName.length}
          text='Save'
        />
      </View>
    </View>
  )
}