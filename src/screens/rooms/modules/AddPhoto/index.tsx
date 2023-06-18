import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { BackButton } from '../../../../components/BackButton';
import { Button } from '../../../../components/Button';
import { useAppDispatch } from '../../../../store/hooks';
import { setSheet } from '../../../../store/slices/roomSlice';

import styles from './styles';

AntDesign.loadFont();


export const AddPhoto: React.FC = (props: any) => {
  const dispatch = useAppDispatch();
  return (
    <KeyboardAvoidingView
      {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
      keyboardVerticalOffset={50}
      style={styles.container}>
      <BackButton onPress={() => dispatch(setSheet('AttachDevice'))} />
      <ScrollView
        scrollEnabled={false}
        contentContainerStyle={{
          paddingHorizontal: 20
        }}>
        <View style={styles.header}>
          <Text style={styles.headline}>Add photo</Text>
          <TouchableOpacity onPress={props.closeSheet}>
            <Text style={styles.skip}>Skip</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: '#C0C0C0',
            fontWeight: '500',
            fontSize: 14,
            lineHeight: 22,
            marginTop: 44,
          }}>
          Recommended photos
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginVertical: 10
          }}>
        </View>
        <Button
          style={{ marginTop: 20 }}
          text='Create room'
          onPress={props.closeSheet}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
