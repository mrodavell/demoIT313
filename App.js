import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import globalstyles from "./src/config/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import colors from "./src/config/colors";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./src/components/screens/LoginScreen";
import RegisterScreen from "./src/components/screens/RegisterScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: colors.colors,
    mode: "exact",
  };

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={LoginScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Register"
              component={RegisterScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create(globalstyles);
