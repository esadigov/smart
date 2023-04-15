import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

AntDesign.loadFont();

export const AutomationFirstSheet = () => {
  const [ conditionOpen, setConditionOpen ] = useState(true);
  const [ actionOpen, setActionOpen ] = useState(true);
  const handleConditionDrop = () => {
    setConditionOpen(!conditionOpen);
  }

  const handleActionDrop = () => {
    setActionOpen(!actionOpen);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <View style={styles.upper}>
          <Text style={styles.primaryText}>
            Condition
          </Text>
          <TouchableOpacity
            onPress={handleConditionDrop}
            style={styles.dropdownKey}>
            <AntDesign name={conditionOpen ? "down" : "right"} color={'#A5A5A5'} size={24} />
          </TouchableOpacity>
          <Text style={styles.subText}>
            Add the condition you want to perform
          </Text>
        </View>
        {conditionOpen ?
          <View style={styles.lower}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Add condition</Text>
            </TouchableOpacity>
          </View> : null}
      </View>
      <View style={styles.box}>
        <View style={styles.upper}>
          <Text style={styles.primaryText}>
            Action
          </Text>
          <TouchableOpacity
            onPress={handleActionDrop}
            style={styles.dropdownKey}>
            <AntDesign name={actionOpen ? "down" : "right"} color={'#A5A5A5'} size={24} />
          </TouchableOpacity>
          <Text style={styles.subText}>
            Add the action you want to perform
          </Text>
        </View>
        {actionOpen ?
        <View style={styles.lower}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Add action</Text>
          </TouchableOpacity>
        </View> : null}
      </View>
    </SafeAreaView>
  )
}