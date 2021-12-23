import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeTabNavigator } from "./HomeTabNavigator";
import { DestinationSearch, Guests } from "@src/screens";

export type StackParamList = {
  Home: undefined;
  DestinationSearch: undefined;
  Guests: undefined;
};

const Stack = createStackNavigator<StackParamList>();

export const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
        />
        <Stack.Screen
          name="DestinationSearch"
          component={DestinationSearch}
          options={{
            headerShown: true,
            title: "Search your destination"
          }}
        />
        <Stack.Screen
          name="Guests"
          component={Guests}
          options={{
            headerShown: true,
            title: "How many guests?"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
