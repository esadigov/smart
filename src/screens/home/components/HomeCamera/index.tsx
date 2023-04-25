import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import styles from './styles';
import CameraIcon from '../../../../components/Icons/CameraIcon';

interface DataProps {
  id: string,
  title: string,
  img: string,
}

const DATA: DataProps[] = [
  {
    id: 'camera1',
    title: 'Garage',
    img: 'https://st.hzcdn.com/simgs/pictures/garages/harney-bungalow-m-2405crd-mark-stewart-home-design-img~99c1b4b105ae8e03_16-7330-1-107f142.jpg',
  },
  {
    id: 'camera2',
    title: 'Garden',
    img: 'https://f7e5m2b4.rocketcdn.me/wp-content/uploads/2015/01/Contemporary-garden-design-Ideas-and-Tips-www.homeworlddesign.-com-2.jpg',
  },
];

const Item = ({ title, img }: DataProps) => (
  <TouchableOpacity style={styles.cardContainer}>
    <ImageBackground
      source={{ uri: img }}
      style={styles.backgroundImg}
      resizeMode='cover'>
      <View style={styles.cardInfo}>
        <CameraIcon />
        <Text style={styles.title}>{title}</Text>
      </View>
    </ImageBackground>
  </TouchableOpacity>
);

export const HomeCamera: React.FC = () => {
  const renderItem = ({item}: {item: DataProps}) => (
    <Item id={item.id} title={item.title} img={item.img} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cameraHeader}>
        <Text style={styles.cameraText}>Camera</Text>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        keyExtractor={item => item.id}
        data={DATA}
        scrollEnabled={true}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        horizontal={true}
      />
    </SafeAreaView>
  );
}