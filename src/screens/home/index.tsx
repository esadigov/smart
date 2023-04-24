import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import styles from './styles';
import { HomeHeader } from './components/HomeHeader';
// TEMPORARY
import { TemporaryNavigation } from './components/TemporaryNavigation';
import { HomeCards } from './components/HomeCards';

export const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <HomeCards />
      {/* TEMPORARY START */}
      <TemporaryNavigation />
      {/* TEMPORARY END */}
    </SafeAreaView>
  );
}