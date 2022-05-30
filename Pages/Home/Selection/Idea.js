import { View, Image, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
export default function Idea() {
  return (
    <View style={styles.container}>
      <Entypo name="browser" size={24} color="white" />
      <Text style={styles.textview}>Bắt đầu kinh doanh trực tuyến</Text>
      <Text style={styles.textview2}>
        Tạo cơ sở kinh doanh, dù bạn vừa nảy ra ý tưởng sáng tạo hay đang tìm
        cách thức kiếm tiền mới.
      </Text>
      <FontAwesome5 name="store" size={24} color="white" />
      <Text style={styles.textview}>Đưa cơ sở kinh doanh của bạn lên mạng</Text>
      <Text style={styles.textview2}>
        Biến cưa hàng bán lẻ của bạn thành cửa hàng online và tiếp tục phục vụ
        khác hàng mà không bị gián đoạn
      </Text>
      <MaterialIcons name="published-with-changes" size={24} color="white" />
      <Text style={styles.textview}>Chuyển sang Shopify</Text>
      <Text style={styles.textview2}>
        Đưa cơ sở kinh doanh của bạn lên Shopify, bất kể bạn hiện đang sử dụng
        nền tảng thương mại điện tử nào
      </Text>

      <Ionicons name="people-outline" size={24} color="white" />
      <Text style={styles.textview}>Thuê chuyên gia Shopify</Text>
      <Text style={styles.textview2}>
        Thiết lập cửa hàng với sự giúp đỡ của một đại lý dịch vụ hay người làm
        tự do đáng tin cậy từ Trung tâm chuyên gia Shopify.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    padding: 20,
    justifyContent: "flex-start",
    backgroundColor: "#004C3F",
    width: "100%",
  },
  textview: {
    fontWeight: 700,
    fontSize: 16,
    alignItems: "center",
    marginRight: 10,
    color: "#ffffff",
  },
  textview2: {
    marginBottom: 20,
    flex: 1,
    fontWeight: 400,
    fontSize: 16,
    alignItems: "center",
    width: "100%",
    color: "#ffffff",
  },
});
