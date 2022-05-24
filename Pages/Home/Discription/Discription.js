import { View, Image, Text, StyleSheet } from "react-native";
import Discuss from "./Discuss";
import Intro from "./Intro";


export default function Discription() {
  return (
    <View style={styles.container}>
        <Intro/>
        <Discuss/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    alignItems:'center',
    flex: 1,
    width: "100%",
    backgroundlor: "#004c3f",
  },
  imgview: {
    width: "100%",
    height: "100%",
  },
});
