import React from 'react';
import { FlatList } from 'react-native';

import { HomeCamera } from './components/HomeCamera';
import { HomeCards } from './components/HomeCards';
import { HomeFrequent } from './components/HomeFrequent';
import { HomeHeader } from './components/HomeHeader';
// TEMPORARY
import { TemporaryNavigation } from './components/TemporaryNavigation';
import styles from './styles';

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
};
