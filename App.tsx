import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { Guests } from "@src/screens";

export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <SafeAreaView>
      {/* <SearchResults /> */}
      {/* <DestinationSearch /> */}
      <Guests />
    </SafeAreaView>
    </>
  );
}
