import React, { useCallback, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { Button } from '../../components/Button';
import AutomationIcon from '../../components/Icons/AutomationIcon';
import { SearchInput } from '../../components/SearchBox';

import styles from './styles';

AntDesign.loadFont();

export const AutomationScreen: React.FC = () => {
  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState('');

  const goToCreateAutomation = useCallback(
    () => navigation.navigate('Create-automation'),
    [navigation],
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={{ position: 'relative', marginBottom: 27 }}>
          <Text style={styles.header}>Automation</Text>
          <TouchableOpacity
            style={styles.plusButton}
            onPress={goToCreateAutomation}>
            <AntDesign name="plus" color={'#9AA4C9'} size={20} />
          </TouchableOpacity>
        </View>
        <SearchInput
          value={searchQuery}
          placeholder="Search"
          onChange={setSearchQuery}
        />
        <View
          style={{ alignItems: 'center', marginTop: '43', marginBottom: 43 }}>
          <AutomationIcon />
        </View>
        <Button text="Create automation" onPress={goToCreateAutomation} />
      </ScrollView>
    </SafeAreaView>
  );
};
