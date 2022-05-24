import { View, Image, Text, StyleSheet } from "react-native";

export default function Intro() {
  return (
    <View style={styles.container}>
      <Text style={styles.textview}>
        Khởi sự kinh doanh trực tuyến - bất kể trong lĩnh vực nào
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent:'space-around',
    backgroundColor: "#fff",
    alignItems: "center",
  },
  textview: {
    paddingLeft:10,
    paddingRight:10,
    flex: 1,
    fontWeight: 800,
    fontSize: 26,
    width:"100%",
    color: "#004C3F",
  },
});
