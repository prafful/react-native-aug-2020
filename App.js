
import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';


export default function App(){
// [stateName, function-Who-Will-Change-This-State] = useState('intialValue')
 const [friends, setFriends]   = useState([
                                            {
                                              name:'OBB',
                                              key:1,
                                              location:'Chennai'
                                            },
                                            {
                                              name:'CAS',
                                              key:2,
                                              location:'Bengaluru'
                                            },
                                            {
                                              name:'OWIOH',
                                              key:3,
                                              location:'Japan'
                                            },
                                            {
                                              name:'BNP',
                                              key:4,
                                              location:'Ahmedabad'
                                            },
                                            {
                                              name:'OBB',
                                              key:5,
                                              location:'Chennai'
                                            },
                                            {
                                            name:'CAS',
                                            key:6,
                                            location:'Bengaluru'
                                          },
                                          {
                                            name:'OWIOH',
                                            key:7,
                                            location:'Japan'
                                          },
                                          {
                                            name:'BNP',
                                            key:8,
                                            location:'Ahmedabad'
                                          }
                                      ])
 

  
  return (
    <View style={mystyles.maincontainer}>
      <ScrollView>
        {
          friends.map(friend =>{
            return (
              <View key={friend.key}>
                <TouchableOpacity onPress={()=>{console.log(friend.name)}}>
                  <Text style={mystyles.listitem}>{friend.name}</Text>
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
    fontSize:65,
    backgroundColor:'goldenrod',
    padding:20,
  }
})
