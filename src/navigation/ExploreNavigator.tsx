import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home, SearchResults } from "@src/screens";

export type ExploreParamList = {
  Home: undefined;
  SearchResults: undefined;
};

const Stack = createStackNavigator<ExploreParamList>();

export const ExploreNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Home"}
        component={Home}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name={"SearchResults"}
        component={SearchResults}
        options={{
          title: "Select your destination"
        }}
      />
    </Stack.Navigator>
  )
};
