import React, { useRef } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { HomeBottomSheet } from '../HomeBottomSheet';

import styles from './styles';

const user = {
  id: 'user1',
  name: 'Nihad Abdulalizada',
  status: 'owner'
};

export const HomeHeader: React.FC = () => {
  const navigate = useNavigation();
  const goToProfile = () => navigate.navigate('Profile');
  const sheetHeight = useWindowDimensions().height * 0.39;
  const refRBSheet = useRef<RBSheet>(null);

  const { name } = user;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flexSet}>
        <TouchableOpacity style={styles.buttonField} onPress={goToProfile}>
          <View style={styles.header}>
            <View>
              <Image
                style={styles.avatar}
                source={require('../../../../components/Images/User.png')}
              />
              <View style={styles.notification}>
                <Text style={styles.notificationText}>2</Text>
              </View>
            </View>
            <View>
              <Text style={styles.title}>Hello, {name.split(' ')[0]}</Text>
              <Text style={styles.subtitle}>Welcome back to Bhouse</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.plusButton}
          onPress={() => refRBSheet.current?.open()}>
          <AntDesign name='plus' color={'#1A5EAF'} size={20} />
        </TouchableOpacity>
      </View>
      {/* BottomSheet */}
      <RBSheet
        ref={refRBSheet}
        height={sheetHeight}
        closeOnDragDown={true}
        openDuration={200}
        closeDuration={200}
        customStyles={{
          wrapper: {
            backgroundColor: '#20202020'
          },
          container: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30
          },
          draggableIcon: {
            backgroundColor: '#000',
            width: 100
          }
        }}>
        <HomeBottomSheet />
      </RBSheet>
    </SafeAreaView>
  );
};
