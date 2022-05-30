import { View, Image, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function Item4() {
  return (
    <View style={styles.container}>

        <Image
          style={styles.imgview}
          source={require("../../../../assets/mini4.png")}
        />
        <View style={styles.textView}>
          <Text style={styles.text}>LÀM ĐẸP VÀ MỸ PHẨM</Text>
          <Text style={styles.text2}>Then I Met You</Text>
        </View>
      
    </View>
     );
    }
    
    const styles = StyleSheet.create({
      container: {
        gap:10,
         marginVertical: "2%",
        width: "40%",
        height: 500,
      },
      imgview: {
        height: "80%",
        width: "100%",
      },
      textView:{
        width:'100%',
        height: 90,
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
    })