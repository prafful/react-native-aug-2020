import React from 'react';


import { createStackNavigator } from "@react-navigation/stack";
import HomeComponent from "../components/home";
import AboutComponent from "../components/about";
import { NavigationContainer } from "@react-navigation/native";
import ContactComponent from '../components/contact';

const Stack = createStackNavigator()


function MyStackNavigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' 
                            screenOptions={{
                                gestureEnabled:true,
                                headerStyle:{
                                    backgroundColor:'wheat',
                                    height:100
                                }
                                }} 
                                headerMode='float'>
                <Stack.Screen name="About" component={AboutComponent}></Stack.Screen>
                <Stack.Screen name="Home" component={HomeComponent}></Stack.Screen>
                <Stack.Screen name="Contact" component={ContactComponent}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStackNavigator