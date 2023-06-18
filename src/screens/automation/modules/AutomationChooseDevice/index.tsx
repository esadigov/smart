import React, { useCallback, useEffect, useMemo } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  Text,
  View
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { Button } from '../../../../components/Button';
import LightbulbIcon from '../../../../components/Icons/LightbulbIcon';
import SpeakerIcon from '../../../../components/Icons/SpeakerIcon';
import TVSetIcon from '../../../../components/Icons/TVSetIcon';
import { SearchInput } from '../../../../components/SearchBox';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {
  switchAutomation,
  searchAutomations,
  setSearchQuery,
  setSheet
} from '../../../../store/slices/automationSlice';

import { DeviceCheckBox } from './components/DeviceCheckBox';
import styles from './styles';

const SelectedComponent = ({
  icon,
  name,
  onPress
}: {
  icon: string;
  name: string;
  onPress: () => void;
}) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      backgroundColor: '#3A6598',
      marginRight: 7,
      marginBottom: 7,
      borderRadius: 6,
      paddingHorizontal: 10
    }}>
    <View style={{ marginRight: 10 }}>
      {icon === 'lightbulb' ? (
        <LightbulbIcon color={'#fff'} />
      ) : icon === 'tvset' ? (
        <TVSetIcon color={'#fff'} />
      ) : (
        <SpeakerIcon color={'#fff'} />
      )}
    </View>
    <Text
      style={{
        color: '#fff',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 17,
        marginRight: 10
      }}>
      {name}
    </Text>
    <TouchableOpacity onPress={onPress}>
      <AntDesign name='close' color='#fff' />
    </TouchableOpacity>
  </View>
);

export const AutomationChooseDevice: React.FC = () => {
  const { selectedAutomation, searchQuery } = useAppSelector(
    state => state.automationSlice
  );
  const dispatch = useAppDispatch();

  const chosen = useMemo(
    () => selectedAutomation.filter(automations => automations.enabled),
    [selectedAutomation]
  );

  const disable = useCallback(
    (id: string) => dispatch(switchAutomation(id)),
    [dispatch]
  );

  const renderSwitchButtons = useCallback(
    ({ item }: any) => (
      <DeviceCheckBox
        title={item.device}
        subtitle={item.room}
        selected={item.enabled}
        id={item.id}
        icon={item.icon}
      />
    ),
    []
  );

  const handleSearch = useCallback(
    (value: string) => dispatch(setSearchQuery(value)),
    [dispatch]
  );

  useEffect(() => {
    dispatch(searchAutomations(searchQuery));
  }, [dispatch, searchQuery]);

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.headline}>Choose Device</Text>
      </View>
      <View style={styles.spacing}>
        <SearchInput
          onChange={handleSearch}
          value={searchQuery}
          placeholder='Search'
        />
      </View>
      <View style={styles.selected}>
        {chosen.map(item => (
          <SelectedComponent
            key={item.id}
            icon={item.icon}
            name={item.room}
            onPress={() => disable(item.id)}
          />
        ))}
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
      keyboardVerticalOffset={50}
      style={styles.container}>
      <FlatList
        key='device'
        data={selectedAutomation}
        scrollEnabled={true}
        renderItem={renderSwitchButtons}
        ListHeaderComponent={renderHeader()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
      <View style={{ backgroundColor: '#fff', paddingTop: 20 }}>
        <Button
          text='Next'
          onPress={() => dispatch(setSheet('Name'))}
          style={{ marginBottom: 30 }}
          disabled={!chosen.length}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
