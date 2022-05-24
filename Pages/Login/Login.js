import React, { Component, useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../shared/layout/Header/Header";
import {
  loginfail,
  loginfailemail,
  loginfailpassword,
  loginSuccess,
  logout,
} from "./redux/action";

export default function Login({ navigation }) {
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state);
  const { message } = useSelector((state) => state);

  const [email, setEmail] = useState("");
  const [isValidEmail, setValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [isValidPassword, setValidPassword] = useState(true);

  const verifyEmail = (email) => {
    let regex = new RegExp(
      /([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])/
    );

    if (regex.test(email)) {
      return true;
    }
    return false;
  };

  const verifyPass = (password) => {
    let regex = new RegExp(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/);
    if (regex.test(password)) {
      return true;
    }
    return false;
  };
  const onHandlerLogin = () => {
    if (isLoggedIn === false) {
      console.log("email", email);
      if (email === "hoang@gmail.com") {
        if (password === "hoangkun6") {
          navigation.navigate("Home");
          dispatch(loginSuccess());
        } else {
          dispatch(loginfailpassword());
        }
      } else {
        dispatch(loginfailemail());
      }
    } else {
      dispatch(logout());
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/shopify.png")}
      />
      <Text style={{ padding: 5, fontSize: 20 }}>Email</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="example@gmail.com."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => {
            const isvalid = verifyEmail(text);
            isvalid ? setValidEmail(true) : setValidEmail(false);
            setEmail(text);
          }}
          value={email}
        />
      </View>

      <Text style={{ fontSize: 20, color: "red" }}>
        {isValidEmail ? "" : "Email is valid!!"}
      </Text>

      <Text style={{ padding: 5, fontSize: 20 }}> Password</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(text) => {
            const isvalid = verifyPass(text);
            isvalid ? setValidPassword(true) : setValidPassword(false);
            setPassword(text);
          }}
          value={password}
        />
      </View>

      <Text style={{ padding: 10, fontSize: 20, color: "red" }}>
        {isValidPassword ? "" : "Password is valid!!"}
      </Text>
      <Text>{message}</Text>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtn}
        title="button"
        onPress={onHandlerLogin}
      >
        <Text>{isLoggedIn ? "LogOut" : "Login"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 10,
          width: "50%",
          borderRadius: 25,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0800FF",
        }}
        title="button"
      >
        <Text>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#06C1A2",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    height: "10%",
    width: "80%",
  },

  inputView: {
    backgroundColor: "#DCDCDC",
    borderRadius: 30,
    width: "50%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0800FF",
  },
});
