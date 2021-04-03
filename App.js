import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Report from './screens/Report';

export default function App() {

  const Stack = createStackNavigator();

  return (
    /* Nawigacja podstawowa, w stylu Stosu */
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" 
          component={Home} 
          options={{title:'Strona Główna'}}
          />
          <Stack.Screen name="Report" component={Report} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
