import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import Constants from "expo-constants";
import { RestaurantInfoCard } from "../restaurantInfoCard.components";

export const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <Searchbar style={styles.searchBarStyle} />
      </View>
      <View style={{ flex: 1 }}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  searchBar: {
    padding: 10,
  },
  searchBarStyle: {
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
  },
});
