import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  InitialScreen,
  SignupScreen,
  SigninScreen,
  DateScreen,
  NameScreen,
  WorkoutFrequencyScreen,
  SuccessScreen,
} from '../screens';
import {NavigationContainer} from '@react-navigation/native';

export type MainStackParamList = {
  InitialScreen: undefined;
  SignupScreen: undefined;
  SigninScreen: undefined;
  DateScreen: undefined;
  NameScreen: undefined;
  WorkoutFrequencyScreen: undefined;
  SuccessScreen: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

export default function Screens() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="InitialScreen"
        screenOptions={{headerShown: false}}>
        <MainStack.Screen name="InitialScreen" component={InitialScreen} />
        <MainStack.Screen name="SignupScreen" component={SignupScreen} />
        <MainStack.Screen name="SigninScreen" component={SigninScreen} />
        <MainStack.Screen name="DateScreen" component={DateScreen} />
        <MainStack.Screen name="NameScreen" component={NameScreen} />
        <MainStack.Screen
          name="WorkoutFrequencyScreen"
          component={WorkoutFrequencyScreen}
        />
        <MainStack.Screen name="SuccessScreen" component={SuccessScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
