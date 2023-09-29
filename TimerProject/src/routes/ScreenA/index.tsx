/* eslint-disable prettier/prettier */
import {Button, Text, View} from 'react-native';
import React, { useState } from 'react';
import * as RootNavigation from './../../Navigations/rootNavigations';
import routes from '..';
import styles from './styles';

const ScreenA = () => {

  const [timer, setTimer] = useState(0);
  const [timeInterval, setTimeInterval] = useState(null);

  // Function to start the timer
  const startTimer = () => {
    // Use setInterval to update the timer every 1000 milliseconds (1 second)
    setTimeInterval(setInterval(() => {
      // Update the timer by incrementing the previous value by 1
      setTimer((prev) => prev + 1);
    }, 1000));
  }

  const pauseTimer = () => {
    // Clear the interval to stop the timer from updating
    clearInterval(timeInterval);
  }
   
  const handleScreenB = () => {
    startTimer();
    RootNavigation.navigate(routes.ScreenB,(timer));
    // startTimer();
  };
  const handleScreenC = () => {
    RootNavigation.navigate(routes.ScreenC,(timer));
    pauseTimer();
  };
  const resetTimer = () => {
    // Reset the timer value to 0
    setTimer(0);
    // Clear the interval to stop the timer
    clearInterval(timeInterval);
  }
  return (
    <View>
      <Text>{'ScreenA'}</Text>
      <Text> {timer}</Text>
      {/* <Timer/> */}

      <View style={styles.row}>
        <Button title={"start"} onPress={startTimer}/>
        <Button title={"Reset"} onPress={resetTimer}/>
        <Button title={'Pause'} onPress={pauseTimer}/>
      </View>
      <View style={styles.container}>

      <Button title="ScreenB" onPress={handleScreenB} />
      <Button title="ScreenC" onPress={handleScreenC} />
      </View>
      </View>
  );
};
export default ScreenA;
