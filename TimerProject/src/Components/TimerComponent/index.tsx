/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';



const Timer = () => {
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

  const resetTimer = () => {
    // Reset the timer value to 0
    setTimer(0);
    // Clear the interval to stop the timer
    clearInterval(timeInterval);
  }


  return (
    <View>
      {/* <Text>Timer: {timer}</Text> */}
      <TouchableOpacity onPress={startTimer}>
        <Text>{timer}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={pauseTimer}>
        <Text>{timer}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={resetTimer}>
        <Text>{timer}</Text>
        </TouchableOpacity>

    </View>
  );
};

export default Timer;
