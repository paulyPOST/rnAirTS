import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { GuestRow } from "@src/components";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "@src/navigation";
import { useNavigation } from "@react-navigation/native";
import tw from "tailwind-rn";

type guestsScreenProp = StackNavigationProp<StackParamList, "Guests">;

export const Guests = () => {
  const navigation = useNavigation<guestsScreenProp>();
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  useEffect(
    () => console.log(`adults changed: ${adults}`),
    [adults, children, infants]
  );

  return (
    <View style={tw("justify-between h-full")}>
      <View>
        {/* Row 1: Adults */}
        <GuestRow
          guestRow={{
            title: "Adults",
            description: "Ages 13 or above",
            onNumberChange: setAdults,
          }}
        />

        {/* Row 1: Children */}
        <GuestRow
          guestRow={{
            title: "Children",
            description: "Ages 2-12",
            onNumberChange: setChildren,
          }}
        />

        {/* Row 1: Infants */}
        <GuestRow
          guestRow={{
            title: "Infants",
            description: "Under 2",
            onNumberChange: setInfants,
          }}
        />
      </View>

      <TouchableOpacity
        disabled={!adults && !children && !infants}
        style={tw("mx-5 mb-10 py-3 rounded-2xl bg-red-500 justify-center items-center")}
        onPress={() => navigation.navigate("Home", {
          screen: "Explore",
          params: {
            screen: "SearchResults"
          }
        })}
      >
        <Text style={tw("text-lg font-bold text-white")}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};
