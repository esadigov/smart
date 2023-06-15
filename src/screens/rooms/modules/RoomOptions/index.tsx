import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { ProfileEditIcon } from '../../../../components/Icons/ProfilePageIcons';
import RoomsPageIcon from '../../../../components/Icons/RoomsPageIcon';
import { useAppDispatch } from '../../../../store/hooks';
import { setSheet } from '../../../../store/slices/roomSlice';

import styles from './styles';

AntDesign.loadFont();

interface DataProps {
  id: string;
  title: string;
  icon: string;
}

const DATA: DataProps[] = [
  {
    id: 'addRoom',
    title: 'Add new room',
    icon: 'plus'
  },
  {
    id: 'editRoom',
    title: 'Edit rooms',
    icon: 'edit'
  }
];

export const RoomOptions = () => {
  const dispatch = useAppDispatch();
  const handleChange = (id: string) => {
    id === 'addRoom' ? dispatch(setSheet('CreateRoom')) : null;
  };

  const Item = ({ id, title, icon }: DataProps) => (
    <TouchableOpacity onPress={() => handleChange(id)} style={styles.list}>
      <View style={styles.row}>
        <View style={styles.icon}>
          <RoomsPageIcon color='#3A6598' />
        </View>
        <View style={styles.text}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      <View style={styles.plus}>
        {icon === 'plus' ? (
          <AntDesign name='plus' color={'#3A6598'} size={20} />
        ) : (
          <ProfileEditIcon color='#3A6598' width={20} height={18} />
        )}
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }: { item: DataProps }) => (
    <Item id={item.id} icon={item.icon} title={item.title} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={DATA}
        renderItem={renderItem}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
