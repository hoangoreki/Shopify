import { View, Image, Text, StyleSheet } from "react-native";

export default function Intro() {
  return (
    <View style={styles.container}>
      <Text style={styles.textview}>
        Đưa doanh nghiệp của bạn lên mạng
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:25,
    backgroundColor: "#004C3F",
    alignItems: "center",
  },
  textview: {
    flex:1,
    fontWeight: 700,
    fontSize: 26,
    alignItems:'center',
    width:"100%",
    color: "#ffffff",
  },
});
