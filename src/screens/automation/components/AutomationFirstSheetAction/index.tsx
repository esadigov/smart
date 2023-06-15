import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
  View
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import AlarmIcon from '../../../../components/Icons/AlarmIcon';
import { useAppDispatch } from '../../../../store/hooks';
import { setSheet } from '../../../../store/slices/automationSlice';

import styles from './styles';

AntDesign.loadFont();

// Mock Object
const CREATE_ACTIONS = [
  {
    id: 'sendAlarm',
    title: 'Send alarm notification',
    icon: 'alarm'
  }
];

export const AutomationFirstSheetAction = () => {
  const dispatch = useAppDispatch();
  const [actionOpen, setActionOpen] = useState(true);
  const handleActionDrop = () => {
    setActionOpen(!actionOpen);
  };

  const Item = ({ title }) => (
    <TouchableOpacity style={styles.actions}>
      <AlarmIcon color='#952323' />
      <Text style={styles.actionsText}>{title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaView>
      <View style={styles.box}>
        <View style={styles.upper}>
          <Text style={styles.primaryText}>Action</Text>
          <TouchableOpacity
            onPress={handleActionDrop}
            style={styles.dropdownKey}>
            <AntDesign
              name={actionOpen ? 'down' : 'right'}
              color={'#A5A5A5'}
              size={24}
            />
          </TouchableOpacity>
          <Text style={styles.subText}>Add the action you want to perform</Text>
        </View>
        {actionOpen ? (
          <View style={styles.lower}>
            <FlatList
              listKey='addActionSheet'
              contentContainerStyle={styles.actionsContainer}
              keyExtractor={item => item.id}
              data={CREATE_ACTIONS}
              scrollEnabled={true}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => dispatch(setSheet('Action'))}
                style={styles.button}>
                <Text style={styles.text}>Add action</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};
