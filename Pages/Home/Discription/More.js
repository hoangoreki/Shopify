import { View, Image, Text, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
export default function More() {
  return (
    <View style={styles.container}>
      <Text style={styles.textview}>
        Khám phá thêm các trường hợp khác    
      </Text>
      <AntDesign name="arrowright" size={20} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:20,
    justifyContent: "flex-start",
    backgroundColor: "#004C3F",
    alignItems: "center",
    width:'100%',
    flexDirection:'row'
  },
  textview: {
    fontWeight: 700,
    fontSize: 16,
    alignItems: "center",
    marginRight:10,
    color: "#ffffff",
  },
});
