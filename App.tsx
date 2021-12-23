import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import { Home } from "@src/screens";
import { Post } from "@src/components";
import { Posts } from "@assets/data/mocks";

export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <SafeAreaView>
      {/* <Home /> */}
      <Post post={Posts[0]}/>
    </SafeAreaView>
    </>
  );
}
