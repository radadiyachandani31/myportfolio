import React, { useState } from "react";
import { View,Text,Image ,StyleSheet, TouchableOpacity, Linking,Alert} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
// import { useNavigation } from "@react-navigation/native";
// import BackColor from "../componet/backcolor";
// import ViewResume from "../componet/viewresum";
//const Stack=createStaticNavigation();
import ViewResume from "../componet/viewresum";
const HomeScreen=({navigation})=>{
   const linkedinUrl="https://linkedin.com/in/chandani-radadiya-69260a312";
   const handleButtonClick = () => {
     
      Linking.openURL(linkedinUrl)
        .catch((err) => {
          Alert.alert("Error", "Something went wrong while opening the link");
        });
    };
   
    const githubUrl="https://github.com/radadiyachandani31/reactnativeproject.git";
    const handlegithubClick = () => {
      
       Linking.openURL(githubUrl)
         .catch((err) => {
           Alert.alert("Error", "Something went wrong while opening the link");
         });
     };
     return(
     <View style={{backgroundColor:'black',flex:1}}>
           
           <View>
             <View>
                 <View style={styles.view1}>
               <Image source={require('../assets/p1.png')} style={styles.cimage}></Image>
               <Text style={styles.myname}>ortfolio</Text>
            </View>
            <Image source={require("../assets/bioimagw1.jpg")} style={styles.image}/>
            <Text style={styles.iname}>Hi,I am <Text style={{color:'#2a9df4'}}>Chandani Radadiya</Text></Text>
            <Text style={styles.reacttext}> React-Native Intern</Text>
         </View>
         <TouchableOpacity onPress={()=>navigation.navigate('ViewResume')} style={styles.touchstyle}>
            <Text style={styles.viewstyle}>view resume</Text>
         </TouchableOpacity>
         <View style={styles.linkview}>
             <View style={styles.linkdinview}>
                 <FontAwesome name="linkedin-square" color={'black'} size={35} justifyContent={'center'} marginLeft={10}
                 onPress={handleButtonClick}  /> 
             </View>
            <View style={styles.githupview}>
                <FontAwesome name="github-square" color={'black'} size={40} marginLeft={10}
                onPress={handlegithubClick}/> 
            </View>
            
         </View>
        </View>
        </View>
     )
}
export default HomeScreen;
const styles=StyleSheet.create({
   
   view1:{
      flexDirection:'row',
   },
   cimage:{
      height:47,
      width:70,
      marginLeft:1,
      marginTop:10,
      resizeMode:'cover'
   },
   myname:{
      marginTop:10,
      fontSize:18,
      fontWeight:'600',
      marginLeft:-20,
      color:'white'
   },
   ctext:{
      fontSize:17,
      color:'skyblue',
      fontWeight:'600',
   },
   image:{
      height:180,
      width:180,
      borderRadius:90,
      marginTop:70,
      marginHorizontal:100,
      borderBlockColor:'white',
      borderWidth:1,
      borderColor:'white'
   },
   iname:{
      color:'white',
      fontWeight:'700',
      textAlign:'center',
      fontSize:18,
      marginTop:10
   },
   reacttext:{
      color:'white',
      fontWeight:'500',
      fontSize:12,
      textAlign:'center'
   },
   touchstyle:{
      height:50,
      width:200,
      backgroundColor:'orange',
      justifyContent:'center',
      alignSelf:'center',
      marginTop:30,
      },
      viewstyle:{
      color:'#fff',
      textAlign:'center',
      fontSize:18,
      fontWeight:'500'
   },
  linkview:{
   flexDirection:'row',
   marginTop:30
  } ,
  linkdinview:{
   height:50,
   width:50,
   backgroundColor:'#D4D4D4',
   justifyContent:'center',
   borderRadius:25,
   marginLeft:120
  },
  githupview:{
   height:50,
   width:50,
   backgroundColor:'#D4D4D4',
   justifyContent:'center',
   borderRadius:25,
   marginHorizontal:40
  }
})