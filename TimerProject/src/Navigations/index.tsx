/* eslint-disable prettier/prettier */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import {navigationRef} from './rootNavigations';
import ScreenA from '../routes/ScreenA';
import ScreenB from '../routes/ScreenB';
import ScreenC from '../routes/ScreenC';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  // eslint-disable-next-line prettier/prettier
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="ScreenA" component={ScreenA} />
        <Stack.Screen name="ScreenB" component={ScreenB} />
        <Stack.Screen name="ScreenC" component={ScreenC} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
