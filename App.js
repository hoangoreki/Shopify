import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import * as React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerScreens } from "./shared/Navigation/DrawerScreens";
import store from "./Pages/Login/redux/store";

export default function App() {
  return (
    <Provider store={store} style={styles.container}>
      <NavigationContainer>
        <DrawerScreens />
      </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
  