import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import DeleteNotifyIcon from '../../../../components/Icons/DeleteNotifyIcon';

import styles from './styles';

export const DeletionModal: any = () => {
  return (
    <View key="deletionWindow" style={styles.container}>
      <View style={styles.icon}>
        <DeleteNotifyIcon />
      </View>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>Delete user</Text>
      </View>
      <View style={styles.subTextContainer}>
        <Text style={styles.subText}>
          If you continue, the user will be deleted.
          {'\n'}
          Are you sure you want to continue?
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            {borderColor: '#959595'}
        ]}>
          <Text
            style={[
              styles.buttonText,
              {color: '#959595'}
          ]}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: '#B52A2A',
              borderColor: '#B52A2A' }
        ]}>
          <Text
            style={[
              styles.buttonText,
              {color: '#FFF'}
          ]}>Delete user</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};