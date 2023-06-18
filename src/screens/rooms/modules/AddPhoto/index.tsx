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

export const AddPhoto: React.FC = (props: any) => {
  const dispatch = useAppDispatch();
  const { filteredRooms } = useAppSelector(state => state.roomSlice);
  const [disabled, setDisabled] = useState(true);
  const photos = useMemo(() => filteredRooms, [filteredRooms]);

  const handleSwitch = useCallback(
    (id: string | number) => {
      dispatch(switchRoom(id));
    },
    [dispatch]
  );

  const RecommendedPhoto = ({
    id,
    setSelected,
    selected,
    image,
    color
  }: {
    id: string;
    setSelected: () => void;
    selected: boolean;
    image: any;
    color: string;
  }) => {
    const handleMode = useCallback(() => {
      setSelected();
      setDisabled(false);
    }, [selected, setSelected]);

    return (
      <TouchableOpacity
        key={id}
        style={{
          borderWidth: 1,
          borderRadius: 6,
          borderColor: '#F0F0F0',
          width: 106,
          height: 106,
          backgroundColor: selected ? color : 'transparent',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onPress={handleMode}>
        <Image source={image} />
      </TouchableOpacity>
    );
  };

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
            <RecommendedPhoto
              setSelected={() => handleSwitch(item.id)}
              selected={item.enabled}
              id={item.id}
              color={item.color}
              image={item.image}
            />
          ))}
        </View>
        <Button
          disabled={disabled}
          style={{ marginTop: 20 }}
          text='Create Room'
          onPress={props.closeSheet}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
