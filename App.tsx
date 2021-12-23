import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import { Home, SearchResults } from "@src/screens";

export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <SafeAreaView>
      {/* <Home /> */}
      <SearchResults />
    </SafeAreaView>
    </>
  );
}
