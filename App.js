import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-paper";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { RestaurantScreen } from "./src/components/screens/restaurant.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { Text, View } from "react-native";

const Tab = createBottomTabNavigator();
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style>Loading Fonts...</Text>
        {/* You could add an ActivityIndicator here */}
      </View>
    );
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({

              // tabbar colors
              tabBarActiveTintColor: "tomato", 
              tabBarInactiveTintColor: "gray",               tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === "Restaurants") {
                  iconName = "silverware-fork-knife";
                } else if (route.name === "Map") {
                  iconName = "map";
                } else if (route.name === "Settings") {
                  iconName = "cog-outline";
                }

                return <Icon source={iconName} color={color} size={size} />;
              },
              headerShown: false,
              tabBarLabelStyle: {
                fontFamily: "Oswald_400Regular",
                fontSize: 12,
                marginBottom: 25,
              },
              tabBarStyle: {
                paddingTop: 10,
                height: 75,
              }
            })}
          >
            <Tab.Screen name="Restaurants" component={RestaurantScreen} />
            <Tab.Screen name="Map" component={RestaurantScreen} />
            <Tab.Screen name="Settings" component={RestaurantScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
