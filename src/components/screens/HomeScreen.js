import { View } from "react-native";
import { Button } from "react-native-paper";
import React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
      }}
    >
      <Button
        icon="logout"
        mode="contained"
        style={{ marginTop: 10 }}
        onPress={() => navigation.navigate("Login")}
      >
        Logout
      </Button>
    </View>
  );
}
