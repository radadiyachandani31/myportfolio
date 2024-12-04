import React from "react";
import { View,Text,StyleSheet,Linking,Alert } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5"
const AboutScreen=()=>{
  const linkedinUrl="https://www/linkedin.com/in/chandani-radadiya-69260a312";
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
            {/* <Text style={styles.nicetext}>Nice to meet you</Text> */}
            <View style={styles.aboutbox}>
              <FontAwesome name="user-circle" size={33} marginTop={5 } marginLeft={10} />
                 <Text style={styles.welcometext}>ABOUT ME...</Text>
            </View>
            <View style={styles.paragraphview}>
                <Text style={styles.paragraphtext}>Hi, I'm chandani radadiya,  {'\n'}
                              I'm a passionate React Native Developer who loves building engaging and
                      functional mobile applications. As a fresher in this field, I'm eager 
                      to explore, learn, and contribute to creating user-friendly apps that make
                      a difference.
                 </Text>
            </View>
               <View style={styles.skillbox}>
                <FontAwesome name="sticky-note"  size={30} marginTop={5} marginLeft={10}/>
                    <Text style={styles.skillsstyle}>Skills :-</Text>
               </View>
            <View style={styles.mainskilbox}>
                    <Text style={styles.subskilltext}>- programming Language :</Text>
                    <Text style={styles.skills2}> Html,Css,Javascript,ES6+</Text>
            </View>
            <View style={styles.mainskilbox2}>
                    <Text style={styles.subskilltext2}>- Technologies,framework and libraries : </Text>
                    <Text style={styles.skills2}>React native,Redux,Redux-Toolkit,React-navigation,Context API,Responsive-UI</Text>
            </View>
            <View style={styles.mainskilbox3}>
                    <Text style={styles.subskilltext3}>- Devlopment Tools : <Text style={{color:'white'}}>vs-code,github</Text></Text>
            </View>
            <View style={styles.mainskilbox4}>
                    <Text style={styles.subskilltext4}>- AI Tools : <Text style={{color:'white'}}>Cheat-GPT,github</Text></Text>
            </View>
            <View style={styles.linkview}>
               <View style={styles.linkdinview}>
                   <FontAwesome name="linkedin-square" color={'black'} size={35} justifyContent={'center'} marginLeft={10}
                   onPress={handleButtonClick}/>
               </View>
               <View style={styles.linkdinview}>
                     <FontAwesome name="github-square" color={'black'} size={35} justifyContent={'center'} marginLeft={10}
                     onPress={handlegithubClick}/>
               </View>
            </View>
        </View>
     )
}
export default AboutScreen;
const styles=StyleSheet.create({
//   nicetext:{
//     color:'#fff',
//     fontWeight:'500',
//     marginLeft:10
//   },
aboutbox:{
  height:50,
  width:200,
  backgroundColor:'#2a9df4',
  marginTop:10,
  marginLeft:20,
  borderRadius:10,
  justifyContent:'center',
  borderWidth:1,
  borderColor:'orange',
 },
  welcometext:{
    fontWeight:'700',
    fontSize:20,
    color:'#2a9df4',
    marginLeft:50,
    color:'#000',
    marginTop:-33,
  },
  paragraphview:{
    marginTop:10,
    marginLeft:20,
    marginRight:20,
    height:175,
    width:350,
    backgroundColor:'#5F6363',
    borderRadius:10
  },
  paragraphtext:{
         color:'#fff',
         marginTop:10,
         marginLeft:10,
         marginRight:10,
         fontWeight:'400'
  },
  skillbox:{
    height:50,
    width:200,
    backgroundColor:'#2a9df4',
    marginTop:30,
    marginLeft:20,
    borderRadius:10,
    justifyContent:'center',
    borderWidth:1,
    borderColor:'orange'
   },
  skillsstyle:{
    color:'#2a9df4',
    marginLeft:40,
    fontSize:20,
    fontWeight:'700',
    flexDirection:'row',
    color:'#000',
    marginTop:-30
  },
  mainskilbox:{
     height:60,
     width:350,
     backgroundColor:'#5F6363',
     marginLeft:20,
     borderRadius:10,
     marginTop:10,
     marginVertical:10
  },
  
  subskilltext:{
       color:'orange',
       marginLeft:10,
       fontSize:14,
       marginTop:3,
       marginRight:10,
  },
  skills2:{
        color:'white',
        marginLeft:30,
        marginRight:30,
  },
  mainskilbox2:{
     height:100,
     width:350,
     backgroundColor:'#5F6363',
     marginLeft:20,
     borderRadius:10,
     marginTop:10,
     marginRight:10,
     marginVertical:10
  },
  subskilltext2:{
    color:'orange',
    marginLeft:10,
    fontSize:14,
    marginTop:3,
    marginRight:10,
},
mainskilbox3:{
    height:40,
    width:350,
    backgroundColor:'#5F6363',
    marginLeft:20,
    borderRadius:10,
    marginTop:10,
 },
 subskilltext3:{
   color:'orange',
   marginLeft:10,
   fontSize:14,
   marginTop:3,
   marginRight:40,
},
mainskilbox4:{
    height:40,
    width:350,
    backgroundColor:'#5F6363',
    marginLeft:20,
    borderRadius:10,
    marginTop:10,
 },
 subskilltext4:{
   color:'orange',
   marginLeft:10,
   fontSize:14,
   marginTop:3,
   marginRight:40,
},
linkview:{
  flexDirection:'row',
  marginTop:30,
  marginLeft:120
 } ,
 linkdinview:{
  height:50,
  width:50,
  backgroundColor:'#D4D4D4',
  justifyContent:'center',
  borderRadius:25,
  marginRight:30
 },
 githupview:{
  height:50,
  width:50,
  backgroundColor:'#D4D4D4',
  justifyContent:'center',
  borderRadius:25,
 },
 
})