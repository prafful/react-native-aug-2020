
import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';


export default function App(){
// [stateName, function-Who-Will-Change-This-State] = useState('intialValue')
 const [friendName, setFriendName]   = useState('OBB')
 const [friendDetail, setFriendDetail] = useState({
                                                    location:'Chennai',
                                                    years: 4                 
                                                  })
  
  const changeName =()=>{
    setFriendName('CAS')
    setFriendDetail({
                       location:'Japan',
                       years:12
                    })
  }

  
  return (
    <View style={mystyles.maincontainer}>
      <View style={mystyles.header}>
        <Text style={mystyles.textformat}>{friendName}</Text>
      </View>
      <View style={mystyles.content}>
        <Text>Location: {friendDetail.location}</Text>
        <Text>Location: {friendDetail.years}</Text>
        <Text></Text>
        <Button title="Update State" onPress={changeName} />
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
