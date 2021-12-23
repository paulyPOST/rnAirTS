import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TGuestRow } from "@src/types";
import tw from "tailwind-rn";
import { ButtonIncrement } from "@src/elements";

interface IGuestRowProps {
  guestRow: TGuestRow;
}

export const GuestRow = ({ guestRow }: IGuestRowProps) => {
  const [count, setCount] = useState(0);

  useEffect(() =>
    guestRow.onNumberChange(count),
    [count]
  );

  return (
    <View style={tw("flex-row justify-between px-3 py-8 mx-2 border-b border-gray-200")}>
      {/* Titles */}
      <View>
        <Text style={tw("font-bold")}>{guestRow.title}</Text>
        <Text style={tw("text-gray-400")}>{guestRow.description}</Text>
      </View>

      {/* Buttons with value */}
      <View style={tw("flex-row items-center")}>
        <ButtonIncrement
          disabled={count === 0}
          text="-"
          onPress={() => setCount(count - 1)}
        />

        <Text style={tw("mx-3 font-semibold text-base")}>{count}</Text>

        <ButtonIncrement
          disabled={false}
          text="+"
          onPress={() => setCount(count + 1)}
        />
      </View>
    </View>
  );
};
