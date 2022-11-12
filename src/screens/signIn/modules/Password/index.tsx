import React, { useCallback, useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';
import { NextButtonOff, NextButtonOnOTP } from '../../components/NextButton';

AntDesign.loadFont();

export const Password = () => {  
  const navigate = useNavigation();
  const goBack = useCallback(() => navigate.goBack(), [navigate]);
  
  const [input, setInput] = useState(false);
  // Next Button Handler
  const handleNext = () => {
    setInput(true)
  };

  return (
    <SafeAreaView key="signInFirst" style={styles.container}>
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
          Password
        </Text>
      </View>
      <View style={styles.subTextContainer}>
        <Text style={styles.subText}>
          Add necessary information to continue
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>
          Password
        </Text>
        <TextInput
          style={styles.input} // TODO: Change to 'wrongInput' if HandleNext
          underlineColorAndroid="transparent"
          autoCapitalize='none'
          autoComplete='password'
          textContentType='password'
          autoCorrect={false}
          spellCheck={false}
          secureTextEntry={true}
          onChange={handleNext} // TODO: Next Button Logic Hook with API
        ></TextInput>
      </View>
      <View style={styles.inputLowerContainer}>
        <Text style={styles.inputText}>
          Repeat password
        </Text>
        <TextInput
          style={styles.input} // TODO: Change to 'wrongInput' if HandleNext
          underlineColorAndroid="transparent"
          autoCapitalize='none'
          autoComplete='password'
          textContentType='password'
          autoCorrect={false}
          spellCheck={false}
          secureTextEntry={true}
          onChange={handleNext} // TODO: Next Button Logic Hook with API
        ></TextInput>
        {/* NOTE: Appears AFTER Initial Input & Wrong Info/Empty
        <Text style={styles.error}>Incorrect Password</Text>
        */}
      </View>
      <View style={{flex: 1,justifyContent: 'flex-end'}}>
        { input ? <NextButtonOnOTP /> : <NextButtonOff /> }
      </View>
    </SafeAreaView>
  );
};