import { View, Image, Text, StyleSheet } from "react-native";
import Category from "./Category/Category";
import CategoryItem from "./CategoryItem";
import Discuss from "./Discuss";
import Intro from "./Intro";
import More from "./More";


export default function Description() {
  return (
    <View style={styles.container}>
        <Intro/>
        <Discuss/>
        <More/>
        <Category/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    width: "100%",
    backgroundlor: "#D0DAD8",
  },
  imgview: {
    width: "100%",
    height: "100%",
  },
});
