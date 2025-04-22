import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ backgroundColor: "blue" }}>
          <Text>Search</Text>
        </View>
        <View style={{ backgroundColor: "green", flex: 1 }}>
          <Text>Search</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});
