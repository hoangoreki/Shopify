import { View, Image, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function CategoryItem() {
  return (
    <View style={styles.container}>
      {/* <ImageItem/>
      <ImageItem/>
      <ImageItem/>
      <ImageItem/> */}



      <View style={styles.viewImage}>
        <Image
          style={styles.imgview}
          source={require("../../../assets/mini1.png")}
        />
        <View style={styles.textView}>
          <Text style={styles.text}>THỰC PHẨM VÀ ĐỒ UỐNG</Text>
          <Text style={styles.text2}>Alfred</Text>
        </View>
      </View>





      <View style={styles.viewImage}>
        <Image
          style={styles.imgview}
          source={require("../../../assets/mini2.png")}
        />
        <View style={styles.textView}>
          <Text style={styles.text}>TRANG SỨC </Text>
          <Text style={styles.text2}>Corei Moranis</Text>
        </View>
      </View>
      <View style={styles.viewImage}>
        <Image
          style={styles.imgview}
          source={require("../../../assets/mini3.png")}
        />
        <View style={styles.textView}>
          <Text style={styles.text}>THỰC PHẨM VÀ ĐỒ UỐNG</Text>
          <Text style={styles.text2}>Detour Coffee</Text>
        </View>
      </View>
      <View style={styles.viewImage}>
        <Image
          style={styles.imgview}
          source={require("../../../assets/mini4.png")}
        />
        <View style={styles.textView}>
          <Text style={styles.text}>LÀM ĐẸP VÀ MỸ PHẨM</Text>
          <Text style={styles.text2}>Then I Met You</Text>
        </View>
      </View>
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
  text: {
    fontWeight: 600,
    fontSize: 17,
    alignItems: "center",
    marginRight: 10,
    color: "#ffffff",
  },
  text2:{
    fontWeight: 400,
    fontSize: 17,
    alignItems: "center",
    marginRight: 10,
    color: "#ffffff",
  },
  imgview: {
    height: "80%",
    width: "100%",
  },
  viewImage: {
    gap:10,
    marginVertical: "2%",
    width: "40%",
    height: 500,
  },
  textView:{
    width:'100%',
    height: 90,
  }
});
