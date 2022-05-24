import { View, Image, Text, StyleSheet, ScrollView, Button } from "react-native";
import Header from "../../shared/layout/Header/Header";
import Discription from "./Discription/Discription";
import introduce from "./Introduction/introduce";
import Introduction from "./Introduction/introduction";

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Header navigation = {navigation}/>
      <ScrollView>
        <View style={{flex:1,}}>
          <Introduction />
          <Image
            style={styles.imgview}
            source={require("../../assets/intro.png")}
          />
        <View>
          <Discription style={{backgroundColor:'#004C3F'}}/>
        </View>
        </View>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent:'space-around',
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  imgview: {
    display:'flex',
    width: "100%",
    height: "100%",
  },
});
