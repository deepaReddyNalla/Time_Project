/* eslint-disable prettier/prettier */
import {Text, View} from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const ScreenC = () => {
  const route = useRoute();
  const timer = route?.params?.timer;
  return (
    <View>

  <Text>{'Screen C'}</Text>
  <Text>{timer}</Text>

  </View>
  );
};
export default ScreenC;
