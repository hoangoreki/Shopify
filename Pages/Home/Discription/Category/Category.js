import { View, Image, Text, StyleSheet } from "react-native";
import Item from "./Item";
import Item2 from "./Item2";
import Item3 from "./Item3";
import Item4 from "./Item4";
export default function Category() {
  return (
    <View style={styles.container}>
      <Item/>
      <Item2/>
      <Item3/>
      <Item4/>
    </View>
     );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex:1,
        flexWrap: "wrap",
        gap:10,
        justifyContent: "space-evenly",
        backgroundColor: "#004C3F",
        alignItems: "center",
        width: "100%",
        flexDirection: "row",
      },
    })