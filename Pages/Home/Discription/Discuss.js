import { View, Image, Text, StyleSheet } from "react-native";

export default function Discuss() {
  return (
    <View style={styles.container}>
      <Text style={styles.textview}>
        Tạo một trang web thương mại điện tử với hỗ trợ của các công cụ mạnh mẽ
        giúp bạn tìm khách hàng, thúc đẩy doanh số và quản lí công việc hằng
        ngày.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:20,
    alignContent: "space-around",
    backgroundColor: "#004C3F",
    alignItems: "center",
  },
  textview: {
    flex: 1,
    fontWeight: 400,
    fontSize: 16,
    alignItems: "center",
    width: "100%",
    color: "#ffffff",
  },
});
