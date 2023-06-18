import React, { useMemo, useState, useCallback } from 'react';
import {
  Image,
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
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { setSheet, switchRoom } from '../../../../store/slices/roomSlice';

import styles from './styles';

AntDesign.loadFont();

interface IPhotos {
  id: string;
  color: string;
  source: any;
  onPress: () => void;
  isActive: boolean;
}

const PHOTOS_DATA = [
  {
    id: 'living',
    color: '#3A7670',
    source: require('../../../../components/Images/LivingRoom.png')
  },
  {
    id: 'kitchen',
    color: '#D1B19A',
    source: require('../../../../components/Images/Kitchen.png')
  },
  {
    id: 'bath',
    color: '#AFC6CB',
    source: require('../../../../components/Images/Bathroom.png')
  },
  {
    id: 'bed',
    color: '#444756',
    source: require('../../../../components/Images/Bedroom.png')
  }
];

export const PhotoItem: React.FC<IPhotos> = ({
  id,
  color,
  source,
  onPress,
  isActive
}) => (
  <TouchableOpacity
    key={id}
    style={{
      borderWidth: 1,
      borderRadius: 6,
      borderColor: '#F0F0F0',
      width: 106,
      height: 106,
      backgroundColor: isActive ? color : 'transparent',
      alignItems: 'center',
      justifyContent: 'center'
    }}
    onPress={onPress}>
    <Image source={source} />
  </TouchableOpacity>
);

export const AddPhoto: React.FC = (props: any) => {
  const [identify, setIdentify] = useState('');
  const [photos] = useState(PHOTOS_DATA);
  const selectPhoto = (value: string) => {
    setIdentify(value);
  };
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
            marginTop: 44
          }}>
          Recommended photos
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginVertical: 20,
            gap: 10
          }}>
          {photos.map(item => (
            <PhotoItem
              onPress={() => selectPhoto(item.id)}
              isActive={item.id === identify}
              id={item.id}
              color={item.color}
              source={item.source}
            />
          ))}
        </View>
        <Button
          disabled={!identify.length}
          style={{ marginTop: 20 }}
          text='Create Room'
          onPress={props.closeSheet}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
