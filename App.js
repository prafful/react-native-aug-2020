
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default function App(){
  


  
  return (
    <View style={mystyles.maincontainer}>
      <View style={mystyles.header}>
        <Text style={mystyles.textformat}>React Native</Text>
      </View>
      <View style={mystyles.content}>
        <Text>Lorem Ispsum lodor dormot ikea meth!</Text>
        <Text>Lorem Ispsum lodor dormot ikea meth!</Text>
        <Text>Lorem Ispsum lodor dormot ikea meth!</Text>
        <Text>Lorem Ispsum lodor dormot ikea meth!</Text>
      </View>
    </View>
  )
}

const mystyles = StyleSheet.create({
  maincontainer:{
    backgroundColor:'pink',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  header:{
    backgroundColor:'lightgrey',
    padding:20,
    width:240,
    alignItems:'center',
    justifyContent:'center'
  },
  textformat:{
    color:'blue'
    
  },
  content:{
    backgroundColor:'coral',
    padding:20
  }

})
