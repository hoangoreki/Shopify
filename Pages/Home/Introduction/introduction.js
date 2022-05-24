import { View, Image, Text, StyleSheet } from "react-native";
import EmailInput from "./EmailInput";
import Introduce from "./introduce";

export default function Introduction() {
  return (
    <View style={styles.container}>
      <Introduce />
      <EmailInput />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    color: "#6B7177",
    alignItems: "center",
  },
  
});
