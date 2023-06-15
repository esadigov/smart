import React, { useCallback, useEffect, useState } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { NextButtonOff, NextButtonOnOTP } from '../../components/NextButton';

import styles from './styles';

AntDesign.loadFont();

export const Password = () => {
  const navigate = useNavigation();
  const goBack = useCallback(() => navigate.goBack(), [navigate]);
  const defaultError = 'Passwords do not match';

  const [input, setInput] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(defaultError);
  const [passwordText, setPasswordText] = useState('');
  const [repeatText, setRepeatText] = useState('');
  // Next Button Handler
  const errorCheck = () => {
    if (!passwordText.trim()) {
      setErrorMessage('Incorrect Password');
      setError(true);
    } else {
      setError(false);
    }
  };

  useEffect(() => {
    if (!passwordText.trim()) {
      setInput(false);
    } else if (passwordText !== repeatText) {
      setInput(false);
      setError(true);
      setErrorMessage(defaultError);
    } else {
      setError(false);
      setInput(true);
    }
  }, [passwordText, repeatText]);

  return (
    <SafeAreaView key='signInFirst' style={styles.container}>
      <Text key='signHeader' style={styles.header}>
        Sign in
      </Text>
      <TouchableOpacity
        key='backButton'
        onPress={goBack}
        style={styles.backButton}>
        <AntDesign key='backIcon' name='left' color={'#3A6598'} size={20} />
      </TouchableOpacity>
      <View style={styles.personalContainer}>
        <Text style={styles.personal}>Password</Text>
      </View>
      <View style={styles.subTextContainer}>
        <Text style={styles.subText}>
          Add necessary information to continue
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Password</Text>
        <TextInput
          style={error ? styles.wrongInput : styles.input} // TODO: Change to 'wrongInput' if HandleNext
          underlineColorAndroid='transparent'
          autoCapitalize='none'
          autoComplete='password'
          textContentType='password'
          autoCorrect={false}
          spellCheck={false}
          secureTextEntry={true}
          onSubmitEditing={errorCheck}
          onChangeText={text => setPasswordText(text)} // TODO: Next Button Logic Hook with API
        />
      </View>
      <View style={styles.inputLowerContainer}>
        <Text style={styles.inputText}>Repeat password</Text>
        <TextInput
          style={error ? styles.wrongInput : styles.input} // TODO: Change to 'wrongInput' if HandleNext
          underlineColorAndroid='transparent'
          autoCapitalize='none'
          autoComplete='password'
          textContentType='password'
          autoCorrect={false}
          spellCheck={false}
          secureTextEntry={true}
          onSubmitEditing={errorCheck}
          onChangeText={text => setRepeatText(text)} // TODO: Next Button Logic Hook with API
        />
        {error ? <Text style={styles.error}>{errorMessage}</Text> : null}
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        {input ? <NextButtonOnOTP /> : <NextButtonOff />}
      </View>
    </SafeAreaView>
  );
};
