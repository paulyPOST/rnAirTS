import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "@src/navigation";
import { AntDesign } from '@expo/vector-icons'; 
import styles from "./styles";
import tw from "tailwind-rn";

const BACKGROUND_IMAGE = require("@assets/images/wallpaper.jpg");

type homeScreenProp = StackNavigationProp<StackParamList, "Home">;

export const Home = () => {
  const navigation = useNavigation<homeScreenProp>();

  return (
    <View>
      {/* Search Bar component */}
      <TouchableOpacity
        style={tw("absolute z-50 bg-white rounded-full flex-row justify-center items-center py-4 my-5 w-full mt-16")}
        onPress={() => navigation.navigate("DestinationSearch")}
      >
        <AntDesign name="search1" size={20} color="red" />
        <Text style={tw("font-semibold")}>Where are you going?</Text>
      </TouchableOpacity>

      <ImageBackground
        source={BACKGROUND_IMAGE}
        style={styles.image}
      >
        <Text style={styles.title}>Go Near</Text>
        <TouchableOpacity
          style={tw("ml-4 w-48 bg-white rounded-md justify-center items-center")}
          onPress={() => console.log("Explore btn clicked")}
        >
          <Text style={tw("px-2 py-1 text-base font-semibold")}>Explore nearby stays</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
