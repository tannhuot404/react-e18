import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  Pressable,
  TouchableOpacity,
  TextInput,
  Modal,
} from "react-native";

import { useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AuthStackParamList from "../../navigation/Auth/AuthStackParamList";

const LoginScreen = () => {
  const imgPressed = () => {
    console.log("Image Pressesd");
  };

  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setmodalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* <Pressable onPress={imgPressed}>
        <Image
          style={styles.imgStyle}
          source={require("./assets/adaptive-icon.png")}
        ></Image>
      </Pressable>

      <TouchableOpacity onPress={imgPressed}>
        <Image
          style={styles.imgStyle}
          source={{ uri: "https://picsum.photos/200" }}
        />
      </TouchableOpacity>

      <Button
        title="Login"
        onPress={() => {
          console.log("login.");
        }}
      /> */}

      <Image
        style={styles.imgStyle}
        source={{ uri: "https://picsum.photos/200" }}
      />

      <View style={styles.textInputContainer}>
        <Text>Username: </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter username"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.textInputContainer}>
        <Text>Password: </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        ></TextInput>
      </View>
      <Button
        title="Login"
        onPress={() => {
          // if (username === "admin" && password === "123") {
          //   setmodalVisible(true);
          // } else {
          //   Alert.alert("Wrong username or password.");
          // }
          navigation.replace('MainStack');
        }}
      />
      <Text>
        Don't have account?{" "}
        <Text
          onPress={() => {
            // Alert.alert("register");
            navigation.navigate('Register');
          }}
          style={styles.registerTextStyle}
        >
          Register
        </Text>
      </Text>

      <Modal visible={modalVisible} animationType="slide">
        <Button
          title="Close"
          onPress={() => {
            setmodalVisible(false);
          }}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 25,
    gap: 30,
  },
  registerTextStyle: {
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "red",
  },
  imgStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textInputContainer: {
    flexDirection: "row",
    gap: 30,
    alignItems: "baseline",
  },
  textInput: {
    width: "70%",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    height: 40,
  },
});
