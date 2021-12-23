import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import "react-native-gesture-handler";
// import { Home } from "@src/screens";
import { StackNavigator } from "@src/navigation";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <StackNavigator />
    </>
  );
}
