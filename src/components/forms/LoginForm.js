import { View, ToastAndroid } from "react-native";
import React from "react";
import { Button, Text, TextInput } from "react-native-paper";
import fetchServices from "../services/fetchServices";

export default function LoginForm({ navigation }) {
  const [showPass, setShowPass] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const showToast = (message = "Something wen't wrong") => {
    ToastAndroid.show(message, 3000);
  };
  const handleLogin = async () => {
    try {
      setLoading(true);
      if (email === "") {
        setErrors({ email: true });
        return false;
      }

      if (password === "") {
        setErrors({ password: true });
        return false;
      }

      const url = "http://172.20.9.250/api/v1/login";
      const data = {
        email,
        password,
      };
      const result = await fetchServices.postData(url, data);  
      console.debug(result);     
      if (result.message != null) {
        showToast(result?.message);
      } else {
        navigation.navigate("Home");
      }
    } catch (e) {
      console.debug(e.toString());
    } finally {
      setLoading(false);
    }
  };

  return (
    <View styles={{ flex: 1 }}>
      <Text variant="displayMedium">Login</Text>
      <TextInput
        mode="outlined"
        placeholder="Email"
        label="Email"
        style={{ marginTop: 10 }}
        value={email}
        onChangeText={setEmail}
        error={errors?.email}
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
        value={password}
        onChangeText={setPassword}
        error={errors?.password}
      />
      <Button
        loading={loading}
        disabled={loading}
        onPress={handleLogin}
        icon="login"
        mode="contained"
        style={{ marginTop: 10 }}
      >
        Login
      </Button>
      <Button
        disabled={loading}
        onPress={() => navigation.navigate("Register")}
        icon="account-plus"
        mode="contained"
        style={{ marginTop: 10 }}
      >
        Register
      </Button>
    </View>
  );
}
