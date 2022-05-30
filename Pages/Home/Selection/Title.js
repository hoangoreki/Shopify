import { View, Image, Text, StyleSheet } from "react-native";

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.textview}>
        Đưa ra lựa chọn lý tưởng nhất
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:20,
    backgroundColor: "#004C3F",
    alignItems: "center",
    
  },
  textview: {
    fontWeight: 400,
    fontSize: 26,
    alignItems:'center',
    width:"100%",
    color: "#ffffff",
  },
});
