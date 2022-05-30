import { View, Image, Text, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";

export default function EmailInput() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setValidEmail] = useState(true);

  const verifyEmail= (email) => {
    let regex = new RegExp(/([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])/);

    if(regex.test(email)){
      return true;
    }
    return false;
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputemail}>
        <TextInput
          placeholder="Nhap dia chi email cua ban"
          onChangeText={(text) => {
            const isvalid = verifyEmail(text);
            isvalid ? setValidEmail(true) : setValidEmail(false);
            setEmail(text);
          }}
          value={email}
          style={styles.inputtxt}
        />
         <Text style={{ fontSize: 20, color: "red" }}>
        {isValidEmail ? "" : "Email is valid!!"}
      </Text>
        <View style={styles.btn}>
          <Button
            title="Bat dau dung thu mien phi"
            onPress={() => Alert.alert("ok")}
          />
        </View>
        <Text
          style={{
            textAlign: "left",
            marginTop: 16,
            fontSize: 12,
            width: "100%",
            marginBottom:16
          }}
        >
          Dùng thử miễn phí trong 14 ngày, không cần thẻ tín dụng. Bằng việc
          nhập email, bạn đồng ý nhận email tiếp thị từ Shopify.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  inputtxt: {
    width: "100%",
    minWidth: 300,
    borderWidth: 1,
    padding: 15,
    marginBottom: 8,
  },
  inputemail: {
    width: "100%",
    flexWrap: "wrap",
  },
  btn: {
    justifyContent: "center",
    borderRadius: 4,
    elevation: 3,
  },
});
