
import React from "react";
import { View,Text,Image,StyleSheet } from "react-native";
const ViewResume=()=>{
    return(
        <View style={styles.mainbox}>
            <Image source={require("../assets/Chandani radadiya.jpg")} style={styles.imgstyle} />
        </View>
    )
}
export default ViewResume;
const styles=StyleSheet.create({
    imgstyle:{
        height:740,
        width:400,
        resizeMode:'contain'
    },
    mainbox:{
        flex:1,
        backgroundColor:'black'
    }
})