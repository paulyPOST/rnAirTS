import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "@src/screens";
import { AntDesign, EvilIcons, Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { ExploreNavigator } from "./ExploreNavigator";

export type TabParamList = {
  Explore: undefined;
  Inbox: undefined;
  Profile: undefined;
  Saved: undefined;
  Trips: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Explore"
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" size={24} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="heart-o" size={24} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Trips"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="airbnb" size={24} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="message-square" size={24} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons name="user" size={24} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
};
