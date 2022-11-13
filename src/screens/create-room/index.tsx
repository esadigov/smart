import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { Button } from '../../components/Button';
import { SearchInput } from '../../components/SearchBox';

import styles from './styles';

AntDesign.loadFont();

interface IRecommendation {
  name: string;
  onPress: () => void;
  isActive: boolean;
}

const recommendationsData = [
  'Living room',
  'Bathroom',
  'Hall',
  'Bedroom',
  'Kitchen',
  'Kid room',
];

export const Recommendation: React.FC<IRecommendation> = ({
  name,
  onPress,
  isActive,
}) => (
  <TouchableOpacity
    style={{
      paddingHorizontal: 24,
      paddingVertical: 16,
      borderColor: '#3A6598',
      borderWidth: 1,
      borderRadius: 6,
      backgroundColor: isActive ? '#3A6598' : '#fff',
      margin: 2.5,
    }}
    onPress={onPress}>
    <Text
      style={{
        color: isActive ? '#fff' : '#353535',
        fontWeight: '500',
        fontSize: 14,
      }}>
      {name}
    </Text>
  </TouchableOpacity>
);

export const CreateRoom: React.FC = () => {
  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState('');
  const [recommendations] = useState(recommendationsData);

  const selectRecommendation = (value: string) => {
    setSearchQuery(value);
  };

  const onNextPress = () => {
    // logic here

    navigation.navigate('Attach-device');
  };

  return (
    <KeyboardAvoidingView
      {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
      keyboardVerticalOffset={50}
      style={styles.container}>
      <ScrollView style={{ paddingHorizontal: 20 }} scrollEnabled={false}>
        <View style={styles.header}>
          <Text style={styles.headline}>Room Name</Text>
        </View>
        <View style={{ marginTop: 35, marginBottom: 14 }}>
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            style={{ flex: 0 }}
            hideIcon
          />
        </View>
        <Text
          style={{
            color: '#C0C0C0',
            fontWeight: '500',
            fontSize: 14,
            lineHeight: 22,
          }}>
          We recommend
        </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
          {recommendations.map(recommendation => (
            <Recommendation
              key={recommendation}
              name={recommendation}
              onPress={() => selectRecommendation(recommendation)}
              isActive={recommendation === searchQuery}
            />
          ))}
        </View>
      </ScrollView>
      <Button
        text="Next"
        onPress={onNextPress}
        style={{ marginHorizontal: 20, marginBottom: 30 }}
        disabled={!searchQuery.length}
      />
    </KeyboardAvoidingView>
  );
};
