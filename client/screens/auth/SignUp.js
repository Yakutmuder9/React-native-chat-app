import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import * as Animatable from "react-native-animatable";

const SignUp = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSignUp = () => {
    // validate form fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !age ||
      !gender ||
      !password ||
      !confirmPassword
    ) {
      setFormError("Please fill out all fields");
    } else if (password !== confirmPassword) {
      setFormError("Passwords do not match");
    } else {
      // submit sign-up data to server or navigate to next screen
      setFormError("Sign up successful!");
      console.log("Sign up successful!");
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeIn" style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
      </Animatable.View>
      <Animatable.View animation="fadeIn" style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
      </Animatable.View>
      <Animatable.View animation="fadeIn" style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      </Animatable.View>
      <Animatable.View animation="fadeIn" style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Age"
          value={age}
          onChangeText={setAge}
        />
      </Animatable.View>
      <Animatable.View animation="fadeIn" style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Gender"
          value={gender}
          onChangeText={setGender}
        />
      </Animatable.View>
      <Animatable.View animation="fadeIn" style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </Animatable.View>
      <Animatable.View animation="fadeIn" style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </Animatable.View>
      {formError && (
        <Animatable.Text animation="fadeIn" style={styles.error}>
          {formError}
        </Animatable.Text>
      )}
      <Animatable.View animation="fadeIn">
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    fontSize: 16,
    height: 40,
  },
  error: {
    color: "#f00",
    fontSize: 14,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#0066cc",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SignUp;
