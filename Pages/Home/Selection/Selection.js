import { View, Image, Text, StyleSheet } from "react-native";
import Idea from "./Idea";
import Title from "./Title";
export default function Selection() {
  return (
    <View style={styles.container}>
        <Title/>
        <Idea/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height:"100%",
    width: "100%",
    backgroundlor: "#004C3F",
  },
 
});
