import React, { useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';

AntDesign.loadFont();
// TODO: Add Object for Checking

// Next Button Handler
const handleNext = () => {

};

export const SignIn = () => {
  const navigate = useNavigation();
  const goBack = useCallback(() => navigate.goBack(), [navigate]);

  return (
      <View key="signInFirst" style={styles.container}>
        <Text key="signHeader" style={styles.header}>
          Sign in
        </Text>
        <TouchableOpacity
          key="backButton"
          onPress={goBack}
          style={styles.backButton}>
          <AntDesign key="backIcon" name="left" color={'#3A6598'} size={20} />
        </TouchableOpacity>
        <View style={styles.personalContainer}>
          <Text style={styles.personal}>
            Personal information
          </Text>
        </View>
        <View style={styles.subTextContainer}>
          <Text style={styles.subText}>
            Add necessary information to continue
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>
            Username, phone number or e-mail
          </Text>
          <TextInput
            style={styles.input} // TODO: Change to 'wrongInput' if HandleNext
            placeholder="place@holder.az"
            placeholderTextColor="#8E8E8E"
            underlineColorAndroid="transparent"
            autoCapitalize='none'
            autoComplete='off'
            autoCorrect={false}
            spellCheck={false}
            onChange={handleNext} // TODO: Next Button Logic Hook with API
          ></TextInput>
          {/* NOTE: Appears AFTER Initial Input & Wrong Info/Empty
          <Text style={styles.error}>Incorrect Credentials</Text>
          */}
        </View>
        <TouchableOpacity
          key="nextButton"
          // onPress={goTo}
          style={styles.nextButtonOff} // TODO: Change to 'nextButtonOff'
        ><Text >Next</Text>
        </TouchableOpacity>
      </View>
    )}