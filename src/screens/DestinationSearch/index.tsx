import React, { useState } from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import tw from "tailwind-rn";
import { Destinations } from "@assets/data/mocks";
import { TDestination } from "@src/types";
import { Destination } from "@src/components/Destination";

export const DestinationSearch = () => {
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
        renderItem={({ item }) => <Destination destination={item} />}
      />
    </View>
  );
};
