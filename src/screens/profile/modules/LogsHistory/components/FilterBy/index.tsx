import React, {useState} from 'react';
import { SafeAreaView, TouchableOpacity, Text, ScrollView, View } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import { BackButton } from '../../../../../../components/BackButton';
import { Button } from '../../../../../../components/Button';

AntDesign.loadFont();

interface IFilters {
  name: string;
  onPress: () => void;
  isActive: boolean;
}

const processData = [
  'All',
  'Executed Successfully',
  'Exectuion Failed'
];

const dateData = [
  'All',
  'Last day',
  'Last 7 days',
  'Last 14 days',
  'Last 30 days'
]

export const FilterTag: React.FC<IFilters> = ({
  name,
  onPress,
  isActive
}) => (
  <TouchableOpacity
    style={{
      paddingHorizontal: 24,
      paddingVertical: 16,
      borderColor: '#D9D9D9',
      borderWidth: 1,
      borderRadius: 6,
      backgroundColor: isActive ? '#3A6598' : '#fff',
      margin: 2.5
    }}
    onPress={onPress}>
    <Text
      style={{
        color: isActive ? '#fff' : '#3A6598',
        fontWeight: '500',
        fontSize: 14
      }}>
      {name}
    </Text>
  </TouchableOpacity>
);

export const FilterBy: React.FC = (props: any) => {
  const [filteredProcessTo, setFilteredProcessTo] = useState('All');
  const [filteredDateTo, setFilteredDateTo] = useState('All')
  const [filteredProcesses] = useState(processData);
  const [filteredDates] = useState(dateData);

  const selectProcess = (value: string) => {
    setFilteredProcessTo(value);
  }

  const selectDate = (value: string) => {
    setFilteredDateTo(value);
  }

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView>
        <BackButton onPress={props.closeSheet} />
        <Text key='filterBy' style={styles.header}>
          Filter by
        </Text>
        <TouchableOpacity
          onPress={props.closeSheet}
          style={styles.saveContainer}>
          <Text style={styles.save}>Save</Text>
        </TouchableOpacity>
      </SafeAreaView>

      <ScrollView
        scrollEnabled={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          marginTop: 21,
        }}>
        <Text
          style={{
            fontFamily: 'Inter',
            fontStyle: 'normal',
            color: '#353535',
            fontWeight: '600',
            fontSize: 16,
            lineHeight: 24
          }}>
          Process
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginVertical: 10
          }}>
          {filteredProcesses.map(item => (
            <FilterTag
              key={item}
              name={item}
              onPress={() => selectProcess(item)}
              isActive={item === filteredProcessTo}
            />
          ))}
        </View>
        <Text
          style={{
            fontFamily: 'Inter',
            fontStyle: 'normal',
            color: '#353535',
            fontWeight: '600',
            fontSize: 16,
            lineHeight: 24
          }}>
          Date
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginVertical: 10
          }}>
          {filteredDates.map(item => (
            <FilterTag
              key={item}
              name={item}
              onPress={() => selectDate(item)}
              isActive={item === filteredDateTo}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
