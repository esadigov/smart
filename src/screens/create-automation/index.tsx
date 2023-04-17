import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';

AntDesign.loadFont();

export const CreateAutomation = () => {
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
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                lineHeight: 17,
                color: '#3A6598',
              }}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <View style={styles.upper}>
            <Text style={styles.primaryText}>Condition</Text>
            <TouchableOpacity style={styles.dropdownKey}>
              <AntDesign name="down" color={'#A5A5A5'} size={24} />
            </TouchableOpacity>
            <Text style={styles.subText}>
              Add the condition you want to perform
            </Text>
          </View>
          <View style={styles.lower}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Add condition</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.upper}>
            <Text style={styles.primaryText}>Action</Text>
            <TouchableOpacity style={styles.dropdownKey}>
              <AntDesign name="down" color={'#A5A5A5'} size={24} />
            </TouchableOpacity>
            <Text style={styles.subText}>
              Add the action you want to perform
            </Text>
          </View>
          <View style={styles.lower}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Add action</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
