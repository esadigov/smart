import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MarkerIcon from '../../../../components/Icons/MarkerIcon';
import { ProfileEditIcon } from '../../../../components/Icons/ProfilePageIcons';
import styles from './styles';

AntDesign.loadFont();

// Mock Object
const CREATE_CONDITIONS = [
  {
    id: 'condition1',
    title: '1 condition',
    icon: 'marker',
    specifications: {
      id: 'chooseSpecs',
      title: 'Choose specifications',
      icon: 'edit',
    }
  },
];

export const AutomationFirstSheetCondition = () => {
  const [ conditionOpen, setConditionOpen ] = useState(true);
  const handleConditionDrop = () => {
    setConditionOpen(!conditionOpen);
  }

  const Item = ({ title, specTitle }) => (
    <View style={styles.combined}>
      <TouchableOpacity style={styles.conditions}>
        <MarkerIcon />
        <Text style={styles.conditionsText}>
          {title}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.specifications}>
        <ProfileEditIcon color='#3A6598' />
        <Text style={styles.specificationsText}>
          {specTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} specTitle={item.specifications.title} />
  );

  return (
    <SafeAreaView>
      <View style={styles.box}>
        <View style={styles.upper}>
          <Text style={styles.primaryText}>
            Condition
          </Text>
          <TouchableOpacity
            onPress={handleConditionDrop}
            style={styles.dropdownKey}>
            <AntDesign 
              name={conditionOpen ? "down" : "right"}
              color={'#A5A5A5'} size={24} />
          </TouchableOpacity>
          <Text style={styles.subText}>
            Add the condition you want to perform
          </Text>
        </View>
        {conditionOpen
          ? <View style={styles.lower}>
              <FlatList
                listKey='addConditionSheet'
                contentContainerStyle={styles.conditionsContainer}
                keyExtractor={item => item.id}
                data={CREATE_CONDITIONS}
                scrollEnabled={true}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
              />
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  // onPress={goToAutomationConditionSheet}
                  style={styles.button}>
                  <Text style={styles.text}>
                    Add condition
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          : null}
      </View>
    </SafeAreaView>
  );
}