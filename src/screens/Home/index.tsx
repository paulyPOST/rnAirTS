import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import styles from "./styles";
import tw from "tailwind-rn";

const BACKGROUND_IMAGE = require("../../../assets/images/wallpaper.jpg");

export const Home = () => {
  return (
    <View>
      {/* Search Bar component */}

      <ImageBackground
        source={BACKGROUND_IMAGE}
        style={styles.image}
      >
        <Text style={styles.title}>Go Near</Text>
        <TouchableOpacity
        style={tw("ml-4 w-48 bg-white rounded-md")}
          onPress={() => console.warn("Explore btn clicked")}
        >
          <Text style={tw("px-2 py-1 text-base font-semibold")}>Explore nearby stays</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
