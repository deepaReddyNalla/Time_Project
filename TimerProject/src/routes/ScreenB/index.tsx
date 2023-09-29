/* eslint-disable prettier/prettier */
import {Text, View} from 'react-native';
import React from 'react';
import Timer from '../../Components/TimerComponent';
import { useRoute } from '@react-navigation/native';
//import Timer from '../../Components/TimerComponent';
const ScreenB = () => {
  const route = useRoute();
  const timer = route?.params?.timer;
  return (
    <View>
   <Text>{'Screen B'}</Text>
   <Text>{timer}</Text>
   </View>
  )
};
export default ScreenB;
