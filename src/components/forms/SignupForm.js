import { View } from "react-native";
import React from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function LoginForm({ navigation }) {
  const [showPass, setShowPass] = React.useState(false);
  const [showRePass, setShowRePass] = React.useState(false);
  return (
    <View styles={{ flex: 1 }}>
      <Text variant="displayMedium">Register</Text>
      <TextInput
        mode="outlined"
        placeholder="Email"
        label="Email"
        style={{ marginTop: 10 }}
        error={true}
      />
      <TextInput
        mode="outlined"
        placeholder="Password"
        label="Password"
        secureTextEntry={showPass}
        right={
          <TextInput.Icon
            icon={!showPass ? "eye" : "eye-off"}
            onPress={() => setShowPass(!showPass)}
          />
        }
        style={{ marginTop: 10 }}
      />
      <TextInput
        mode="outlined"
        placeholder="Re-type Password"
        label="Re-type Password"
        secureTextEntry={showRePass}
        right={
          <TextInput.Icon
            icon={!showPass ? "eye" : "eye-off"}
            onPress={() => setShowRePass(!showRePass)}
          />
        }
        style={{ marginTop: 10 }}
      />
      <Button icon="account-plus" mode="contained" style={{ marginTop: 10 }}>
        Register
      </Button>
      <Button
        onPress={() => navigation.pop()}
        icon="arrow-left"
        mode="contained"
        style={{ marginTop: 10 }}
      >
        Go Back
      </Button>
    </View>
  );
}
