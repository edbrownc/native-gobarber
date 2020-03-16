import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        options={() => ({
          headerShown: false,
        })}
        component={SignIn}
      />
      <Stack.Screen
        name="SignUp"
        options={() => ({
          headerShown: false,
        })}
        component={SignUp}
      />
    </Stack.Navigator>
  );
}
