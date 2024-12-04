import React from "react";
import { View,Text,StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome"
const ProjectDetails=()=>{
    return(
        <View style={styles.mainbox}>
           <View style={styles.projectbox}>
               <FontAwesome name="pencil-square" size={33} marginTop={-5} marginLeft={10}/>
               <Text style={styles.projecttext}>Project Details</Text>
           </View>
           <View>
             <View style={styles.box1}>
                <Text style={styles.ecommercetext}>1].E-Commerce App</Text>
                <Text style={styles.details1}>-Created E-commerce app with product listing to Async and local storage and search functionalities. </Text>
                <Text style={styles.details1}>-User can add , remove , update cart and get total price of items their cart managing state Redux-toolkit</Text>
                <Text style={styles.details1}>-Display the product of categories,price and rating menus and product details functionalities</Text>
             </View>
             <View style={styles.box1}>
                <Text style={styles.ecommercetext}>2].Food App</Text>
                <Text style={styles.details1}>-Display list of restaurants with their categories , menus and price search.</Text>
                <Text style={styles.details1}>-Once items are added , users can view their order summary ,including total cost and item breakdown</Text>
                <Text style={styles.details1}>--User Can browse customizable option for specific orders like offer foods,such as toppings or sides
                </Text>
             </View>
             <View style={styles.box1}>
                <Text style={styles.ecommercetext}>3].Todo-List</Text>
                <Text style={styles.details1}>-User can add task with title, modify ,delete with description</Text>
                <Text style={styles.details1}>-Tasks are saved loacally using asyncstorage , so they are available even after closing the app.</Text>
                <Text style={styles.details1}>-Check off tasks as done , with the option to undo.</Text>
                </View>
           </View>
        </View>
    )
}
export default ProjectDetails;
const styles=StyleSheet.create({
      mainbox:{
        flex:1,
        backgroundColor:'#000'
      },
      projectbox:{
        height:50,
        width:300,
        backgroundColor:'#2a9df4',
        marginTop:10,
        marginLeft:20,
        borderRadius:10,
        justifyContent:'center',
        borderWidth:1,
        borderColor:'orange',
      },
      projecttext:{
        fontWeight:'700',
        fontSize:20,
        color:'#2a9df4',
        marginLeft:45,
        color:'#000',
        marginTop:-35
      },
      box1:{
        marginTop:10,
        marginLeft:20,
        marginRight:20,
        backgroundColor:'#5F6363',
        borderRadius:20
      },
      ecommercetext:{
        color:'#fff',
        marginLeft:10,
        marginTop:3,
        fontWeight:'bold',
        fontSize:17,
        color:'orange',
        marginRight:10
      },
      details1:{
        color:'#fff',
        marginTop:2,
        marginLeft:5,
        marginRight:5,
        fontWeight:'400'
      }

})