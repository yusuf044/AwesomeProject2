import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Home } from '../../screen';
import bottomNavigatin from '../bottomNavigation/bottomNavigatin';

const Stack = createNativeStackNavigator();

function ScreenNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="bottomNavigatin" component={bottomNavigatin} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ScreenNavigation;