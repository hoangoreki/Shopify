import { View, Image, Text, StyleSheet, ScrollView, Button } from "react-native";
import Header from "../../shared/layout/Header/Header";
import Description from "./Discription/Description";
import introduce from "./Introduction/introduce";
import Introduction from "./Introduction/introduction";
import Selection from "./Selection/Selection";

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Header navigation = {navigation}/>
      <ScrollView>
          <Introduction />
          <View style={{width:'100%',height:300}}>
            <Image
            style={styles.imgview}
            source={require("../../assets/intro.png")}
          />
          </View>  
          <Description style={{backgroundColor:'#004C3F'}}/>
          <Selection style={{backgroundColor:'#004C3F'}}/>
        
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
    width: "100%",
    height: "100%",
  },
  //image in 1 view
});
