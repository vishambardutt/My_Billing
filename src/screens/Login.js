import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../../../assets/images/back-arrow.png")}
              style={styles.backButton}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.text}>Let's sign you in!</Text>
        <Text style={styles.textTwo}>Welcome back. You've been missed!</Text>
      </View>

      <View style={styles.registerFormContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
          />
        </View>

        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
          />
        </View>

        <TouchableOpacity style={styles.forgotPasswordButton} onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate("Home")}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.haveAnAccount}>
          <Text>
            Dont Have an Account?
            <Text
              style={styles.haveAnAccountText}
              onPress={() => props.navigation.navigate("Register")}
            >
              {" "}
              Create One
            </Text>
          </Text>
        </View>
        
      </View>
    </View>
  );
};

export default Login;

