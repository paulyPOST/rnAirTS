import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import tw from "tailwind-rn";

interface IButtonIncrementProps {
  disabled: boolean;
  text: string;
  onPress: () => void;
}

export const ButtonIncrement = ({ disabled, text, onPress }: IButtonIncrementProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={tw("border border-gray-400 rounded-full w-6 h-6 justify-center items-center")}
      onPress={onPress}
    >
      <Text style={tw("font-semibold text-gray-400")}>{text}</Text>
    </TouchableOpacity>
  )
};