import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';

AntDesign.loadFont();

export const CreateCondition = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 20, marginTop: 33 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 47,
          }}>
          <TouchableOpacity key="backButton" style={styles.backButton}>
            <AntDesign key="backIcon" name="left" color={'#3A6598'} size={20} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              lineHeight: 22,
              color: '#353535',
            }}>
            Create Automation
          </Text>
          <View />
        </View>
      </View>
    </SafeAreaView>
  );
};
