import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { GuestRow } from "@src/components";

export const Guests = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  useEffect(() => console.log(`adults changed: ${adults}`), [adults, children, infants]);

  return (
    <View>
      {/* Row 1: Adults */}
      <GuestRow
        guestRow={{
          title: "Adults",
          description: "Ages 13 or above",
          onNumberChange: setAdults
        }}
      />
      
      {/* Row 1: Children */}
      <GuestRow
        guestRow={{
          title: "Children",
          description: "Ages 2-12",
          onNumberChange: setChildren
        }}
      />      

      {/* Row 1: Infants */}
      <GuestRow
        guestRow={{
          title: "Infants",
          description: "Under 2",
          onNumberChange: setInfants
        }}
      />
      

    </View>
  )
};
