import React  from "react";
import { View,Text,StyleSheet,Linking,Alert } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome"
const Eduction=()=>{
    const handleButtonClick = () => {
        const linkedinUrl="https://www/linkedin.com/in/chandani-radadiya-69260a312";
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
        <View style={styles.mainview}>
            <View style={styles.detailbox}>
                <Text style={styles.educationtext}>🎓Education Details :-</Text>
            </View>
            <View>
                <View style={styles.box1}>
                    <Text style={styles.textstyle1}>- Bachelor of computer application(BCA)</Text>
                    <Text style={styles.textstyle2}>shree v.n.borad college  Graduated with 81% in 2024</Text>
                    <Text style={styles.textstyle3}>Bhakta kavi narshih maheta university,Junagadh</Text>
                </View>
                <View style={styles.box1}>
                    <Text style={styles.textstyle1}>-Gujarat higher secondary education board(HSC)</Text>
                    <Text style={styles.textstyle2}>Bhagyoday academy-jamkandorna</Text>
                    <Text style={styles.textstyle3}>with 81% in 2020-21</Text>
                </View>
                <View style={styles.box1}>
                    <Text style={styles.textstyle1}>-Gujarat secondary education board(SSC)</Text>
                    <Text style={styles.textstyle2}>Bhagyoday academy-jamkandorna</Text>
                    <Text style={styles.textstyle3}>with 82% in 2018-19</Text>
                </View>
            </View>
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
    )
}
export default Eduction;
const styles=StyleSheet.create({
    mainview:{
        flex:1,
        backgroundColor:'black'
    },
    detailbox:{
        height:50,
        width:300,
        backgroundColor:'#2a9df4',
        marginTop:20,
        marginLeft:20,
        borderRadius:10,
        justifyContent:'center',
        borderWidth:1,
        borderColor:'orange',
       },
       educationtext:{
        fontWeight:'700',
        fontSize:20,
        color:'#2a9df4',
        marginLeft:10,
        color:'#000',
        marginTop:1
       },
       box1:{
           marginTop:20,
           marginLeft:20,
           marginRight:20,
           backgroundColor:'#5F6363',
           borderRadius:20
       },
       textstyle1:{
        color:'#fff',
        marginLeft:20,
        marginTop:10,
        fontWeight:'bold',
        fontSize:17,
        color:'orange'
       },
       textstyle2:{
        color:'#fff',
        marginLeft:20,
        marginTop:5
       },
       textstyle3:{
        color:'#fff',
        marginLeft:20,
        marginBottom:10
       },
       linkview:{
        flexDirection:'row',
        marginTop:90
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