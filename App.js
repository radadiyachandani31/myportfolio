import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import HomeScreen from './screens/home';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from "@react-navigation/stack"
import AboutScreen from './screens/about';
import ViewResume from './componet/viewresum';
import Eduction from './screens/education';
import ProjectDetails from './screens/projects';
import Contact from './screens/contact';
import ContactPage from './screens/contact2';
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import FontAwesome from '@expo/vector-icons/FontAwesome';
export default function App() {
 
  // //const Stack=createStackNavigator();
  // return (
  //   // <NavigationContainer>
  //   //     <Stack.Navigator>
  //   //       <Stack.Screen name='HomeScreen' component={HomeScreen}/>
  //   //       <Stack.Screen name="ViewResume" component={ViewResume}/>
  //   //     </Stack.Navigator>
  //   // </NavigationContainer>
  //   //  );   

      const Drower=createDrawerNavigator();
      return(
        <NavigationContainer >
        <Drower.Navigator>
          <Drower.Screen  name="Home" component={HomeScreen} options={{
    drawerIcon: ({ focused, size }) => (
      <MaterialIcons name="home" size={size} color={focused ? 'blue' : 'gray'} />
    ),
  }}></Drower.Screen>
          <Drower.Screen  name="About" component={AboutScreen}
          options={{
            drawerIcon: ({ focused, size }) => (
              <FontAwesome name="user-circle" size={size} color={focused ? 'blue' : 'gray'} />
            ),
          }} ></Drower.Screen>
          <Drower.Screen name='Education' component={Eduction}
          options={{
            drawerIcon: ({ focused, size }) => (
              <FontAwesome name='graduation-cap' size={size} color={focused ? 'blue' : 'gray'} />
            ),
          }}/>
          <Drower.Screen name='Project' component={ProjectDetails}
          options={{
            drawerIcon: ({ focused, size }) => (
              <FontAwesome name='pencil-square' size={size} color={focused ? 'blue' : 'gray'} />
            ),
          }}/>
           <Drower.Screen name='Contact' component={Contact}
           options={{
            drawerIcon: ({ focused, size }) => (
              <FontAwesome name='phone-square' size={size} color={focused ? 'blue' : 'gray'} />
            ),
          }}/> 
          <Drower.Screen name='ViewResume' component={ ViewResume}
          options={{
            drawerIcon: ({ focused, size }) => (
              <FontAwesome name='pencil' size={size} color={focused ? 'blue' : 'gray'} />
            ),
          }}/> 
          
        </Drower.Navigator>
       </NavigationContainer>

      )
     }



