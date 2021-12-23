import { TDestination } from "@src/types";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import tw from "tailwind-rn";

interface IDestinationProps {
  destination: TDestination;
  onPress: () => void;
}

export const Destination = ({ destination, onPress }: IDestinationProps) => {
  return (
    <TouchableOpacity
      style={tw("flex-row items-center py-3 border-gray-300 border-b")}
      onPress={onPress}
    >
      <View style={tw("bg-gray-200 rounded-lg mr-3")}>
        <Entypo name="location-pin" size={35} color="black" />
      </View>
      <Text style={tw("")}>{destination.description}</Text>
    </TouchableOpacity>
  );
};
