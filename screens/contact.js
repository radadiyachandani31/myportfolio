import React from "react";
import { View,Text ,StyleSheet, TouchableOpacity,Alert} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome"
import AntDesign from "@expo/vector-icons/AntDesign";
import * as Yup from "yup";
import { Formik } from 'formik';

import { TextInput } from "react-native-gesture-handler";

const ContactSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().min(10, 'Message should be at least 10 characters').required('Message is required'),
  });
const Contact=()=>{
    const handleSubmit = (values) => {
        Alert.alert('Submitted', `Name: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`);
      };
    return(
        <View style={styles.mainbox}>
            <View style={styles.contactview}>
                <FontAwesome name="phone-square" size={32} marginLeft={10} />
                <Text style={styles.contacttext}>Contact Me...</Text>
            </View>
           <View style={styles.phoneview}>
               <FontAwesome name="phone" size={23} color={'#fff'} marginTop={10}  marginLeft={10}/>
               <Text style={styles.phonetext}>6344348133</Text>
           </View>
           <View style={styles.phoneview}>
               <AntDesign name="mail" size={23} color={'#fff'} marginTop={10}  marginLeft={10}/>
               <Text style={styles.phonetext}>radadiyachandani1@gmail.com</Text>
           </View>
           <View style={styles.phoneview}>
               <FontAwesome name="map-marker"  size={23} color={'#fff'} marginTop={10}  marginLeft={10}/>
               <Text style={styles.phonetext}>Patel Chowk,Jamkandorna,Rajkot</Text>
           </View>
           <Text style={styles.touchtext}>Get In Touch</Text>
           <View style={styles.container}>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            {touched.name && errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Message"
              onChangeText={handleChange('message')}
              onBlur={handleBlur('message')}
              value={values.message}
              multiline={true}
              numberOfLines={4}
            />
            {touched.message && errors.message && <Text style={styles.errorText}>{errors.message}</Text>}

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Send message</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
        </View>
    )
}
export default Contact;
const styles=StyleSheet.create({
    mainbox:{
        flex:1,
        backgroundColor:'#000'
    },
    contactview:{
        height:50,
        width:220,
        backgroundColor:'#2a9df4',
        marginTop:10,
        marginLeft:20,
        borderRadius:10,
        justifyContent:'center',
        borderWidth:1,
        borderColor:'orange',
    },
    contacttext:{
        fontWeight:'700',
        fontSize:20,
        color:'#2a9df4',
        marginLeft:45,
        color:'#000',
        marginTop:-35
    },
    phoneview:{
        flexDirection:'row',
        height:50,
        width:350,
        backgroundColor:'#5F6363',
        marginLeft:20,
        borderRadius:10,
        marginTop:10,
        marginVertical:10
        
    },
    phonetext:{
        color:'white',
        fontSize:14,
        marginLeft:10,
        marginTop:10
    },
    touchtext:{
        color:'orange',
        fontSize:17,
        marginLeft:20,
        marginTop:10,
        fontWeight:'600'
    },
    textinputstyle:{
      height:45,
      width:350,
      backgroundColor:'#708090',
      marginLeft:20,
      marginTop:10,
      borderRadius:10
    },
    messagetext:{
        height:140,
        width:350,
        backgroundColor:'#708090',
        marginLeft:20,
        marginTop:10,
        borderRadius:10,
        paddingBottom:100
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#000',
      },
      input: {
        borderWidth: 1,
        backgroundColor:'#708090',
        borderRadius: 5,
        padding: 10,
        marginVertical:-1,
        fontSize: 16,
        borderRadius:10
      },
      textArea: {
        height: 100,
        textAlignVertical: 'top',
      },
      button: {
        height:50,
        width:220,
        backgroundColor:'orange',
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:70,
        borderRadius:10
      },
      buttonText: {
        fontSize:16,
       fontWeight:'600'
      },
      errorText: {
        color:'orange',
        fontSize:13,
        marginLeft:20,
        marginTop:5,
        fontWeight:'600'
      },

})