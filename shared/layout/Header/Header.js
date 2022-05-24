import { View,Image,Text,StyleSheet ,TouchableOpacity} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import {DrawerActions } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


export default function Header({navigation}){
    return(
        <View style={styles.bgHeader}>
            <Image style={styles.imgview} source={require('../../../assets/shopify.png')} />
            <TouchableOpacity style={styles.textview} onPress={() => navigation.openDrawer()}>
                <FontAwesome5  name="bars" size={24} color="black" />
            </TouchableOpacity>
            
        </View>
        
    )
};

const styles= StyleSheet.create({
    bgHeader:{
        width:'90%',
        height: 50,
        backgroundColor: "#FFFFE0",
        flexDirection: "row",
    },
    imgview:{
        marginTop:'1%',
        flex:1,
        height:55,
        width:1,
       
    },
    textview:{
        padding:8,
        textAlign:'right',
        flex:1,
        color: '#246485',
        
        fontStyle: "italic", 
        justifyContent: "flex-end",
        fontWeight: "bold"
        
    }
})