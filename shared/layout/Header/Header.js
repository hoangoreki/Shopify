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
            <View style={{height:50,width:100}}>
                <Image style={styles.imgview} source={require('../../../assets/shopify.png')} />
            </View>
            
            <TouchableOpacity style={styles.textview} onPress={() => navigation.openDrawer()}>
                <FontAwesome5  name="bars" size={24} color="black" />
            </TouchableOpacity>
            
        </View>
        
    )
};

const styles= StyleSheet.create({
    bgHeader:{
        paddingHorizontal:10,
        width:'100%',
        height: 50,
        backgroundColor: "#FFFFE0",
        flexDirection: "row",
    },
    imgview:{
        height:'100%',
        width:'100%',
       
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