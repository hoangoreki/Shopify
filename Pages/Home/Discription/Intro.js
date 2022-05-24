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
      padding:20,
      flex:1,
    alignContent:'space-around',
    backgroundColor: "#004C3F",
    alignItems: "center",
    
  },
  textview: {
    flex: 1,
    fontWeight: 400,
    fontSize: 26,
    alignItems:'center',
    width:"100%",
    color: "#ffffff",
  },
});
