import React from "react";
import { globalstyles } from "../globalstyles/globalstyles";
import { View, Text, TouchableOpacity } from "react-native";

export default function HomeComponent({navigation}){

    const details= {
        name:'OBB',
        location:'Chennai',
        id:'1'
    }

    return(
        <View style={globalstyles.containerStyle}>
            <Text style={globalstyles.textStyle}>I am at home!</Text>
            <TouchableOpacity style={globalstyles.touchButtonContainer}
                              onPress={()=>{navigation.navigate('About', {item: details})}}      >
                <Text>Go To About Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={globalstyles.touchButtonContainer}
                              onPress={()=>{navigation.navigate('Contact')}}      >
                <Text>Go To Contact Screen</Text>
            </TouchableOpacity>
        </View>
    )
}