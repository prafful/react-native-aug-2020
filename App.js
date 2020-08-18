
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios'

import Header from './components/header';



export default function App(){
// [stateName, function-Who-Will-Change-This-State] = useState('intialValue')

                               
 const [users, setUsers] = useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
          .then(res =>{
            console.log(res.data)
            setUsers(res.data)
          })
  })                                      


  

  return (
    <View style={mystyles.maincontainer}>
        <Header></Header>
       
        <ScrollView>
        {
          users.map(user =>{
            return (
              <View key={user.id}>
                <TouchableOpacity onPress={()=>{console.log(user.name)}}>
                  <Text style={mystyles.listitem}>{user.name}</Text>
                </TouchableOpacity>
              </View>
            )
          })
        }
      </ScrollView>
 
        
    </View>
  )
}

const mystyles = StyleSheet.create({
  maincontainer:{
    backgroundColor:'pink',
    flex:1,
    //alignItems:'center',
    //justifyContent:'center'
  },
  listitem:{
    marginTop:20,
    fontSize:30,
    backgroundColor:'goldenrod',
    padding:20,
    color:'purple'
  }
})
