
import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';


export default function App(){
// [stateName, function-Who-Will-Change-This-State] = useState('intialValue')
 const [friendName, setFriendName]   = useState('Add Friend')
 const [friendDetail, setFriendDetail] = useState({
                                                    location:'Chennai',
                                                    years: 4                 
                                                  })


  const captureFriendLocation=(value)=>{
    console.log(value);
    setFriendDetail({
                      location: value,
                      years: friendDetail.years
                    })
  }

  
  return (
    <View style={mystyles.maincontainer}>
      <View style={mystyles.header}>
        <Text style={mystyles.textformat}>{friendName}</Text>
      </View>
      <View style={mystyles.content}>
        <TextInput 
              style={mystyles.inputfriend} 
              placeholder='friend location...'
              onChangeText={captureFriendLocation}>
        </TextInput>
        <TextInput 
              style={mystyles.inputfriend} 
              keyboardType='numeric'
              placeholder='friend since years...'
              onChangeText={(value)=>{setFriendDetail({
                                                        location:friendDetail.location,
                                                        years: value
                                                      })}}>
        </TextInput>
        <TextInput style={mystyles.inputfriend} placeholder='about friend...' multiline></TextInput>
        <Text></Text>
        <Text>Location: {friendDetail.location}</Text>
        <Text>Years: {friendDetail.years}</Text>

        
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
  },
  inputfriend:{
    borderWidth:1,
    borderColor:'pink',
    padding:8,
    margin:8,
    width:184
  }

})
