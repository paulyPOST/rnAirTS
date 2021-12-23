import React, { useState } from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import tw from "tailwind-rn";
import { Destinations } from "@assets/data/mocks";
import { TDestination } from "@src/types";
import { Destination } from "@src/components/Destination";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "@src/navigation";
import { useNavigation } from "@react-navigation/native";

type destinationSearchScreenProp = StackNavigationProp<StackParamList, "DestinationSearch">;

export const DestinationSearch = () => {
  const navigation = useNavigation<destinationSearchScreenProp>();
  const [searchText, setSearchText] = useState("");

  return (
    <View style={tw("m-4")}>
      <TextInput
        style={tw("mb-4 text-lg")}
        placeholder="Where are you going?"
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* List of destination results */}
      <FlatList<TDestination>
        data={Destinations}
        renderItem={({ item }) =>
          <Destination
            destination={item}
            onPress={() => navigation.navigate("Guests")}
          />
        }
      />
    </View>
  );
};
