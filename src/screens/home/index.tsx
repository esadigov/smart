import React from 'react';
import {
  FlatList,
} from 'react-native';

import styles from './styles';
import { HomeHeader } from './components/HomeHeader';
// TEMPORARY
import { TemporaryNavigation } from './components/TemporaryNavigation';
import { HomeCards } from './components/HomeCards';
import { HomeCamera } from './components/HomeCamera';
import { HomeFrequent } from './components/HomeFrequent';

export const HomeScreen: React.FC = () => {
  return (
    <FlatList
      key='homeScreen'
      data={null}
      renderItem={null}
      scrollEnabled={true}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      ListHeaderComponent={<HomeHeader />}
      ListFooterComponent={
        <>
          <HomeCards />
          <HomeCamera />
          <HomeFrequent />
          {/* TEMPORARY START */}
          <TemporaryNavigation />
          {/* TEMPORARY END */}
        </>
      }
    />
      
  );
}