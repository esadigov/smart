import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export const NextButtonOff = () => {
  return (
    <TouchableOpacity key="nextButton" style={styles.nextButtonOff}>
      <Text style={styles.nextTextOff}>Next</Text>
    </TouchableOpacity>
  );
};

export const NextButtonOnPass = () => {
  const navigate = useNavigation();
  const goPassword =  () => navigate.navigate('Password')

  return (
    <TouchableOpacity
      key="nextButton"
      style={styles.nextButtonOn}
      onPress={goPassword}
      ><Text style={styles.nextTextOn}>Next</Text>
    </TouchableOpacity>
  );
};

export const NextButtonOnOTP = () => {
  const navigate = useNavigation();
  const goOTP =  () => navigate.navigate('OTP')

  return (
    <TouchableOpacity
      key="nextButton"
      style={styles.nextButtonOn}
      onPress={goOTP}
      ><Text style={styles.nextTextOn}>Next</Text>
    </TouchableOpacity>
  );
};