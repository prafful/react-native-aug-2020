
import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import Header from './components/header';
import AddFriend from './components/addfriend';


export default function App(){
// [stateName, function-Who-Will-Change-This-State] = useState('intialValue')
 const [friends, setFriends]   = useState([
                                            {
                                              name:'OBB',
                                              key:'1',
                                              location:'Chennai',
                                              myid: '1'
                                            },
                                            {
                                              name:'CAS',
                                              key:'2',
                                              location:'Bengaluru',
                                              myid: '2'
                                            }
                              
                                      ])
 

  const listItemPressed = (id) =>{
    console.log(id);
    setFriends((prevFriends)=>{
      console.log(prevFriends)
      //One with myid == id will be removed from friends state
      let newFriends = prevFriends.filter(friend => friend.myid != id)
      return newFriends
    })
  }

  const addFriend =(name)=>{
    console.log('addFriend function in App Component ' + name);
    setFriends(prevFriends=>{
      let tempKey = prevFriends.length + 1
      return [{name, location:'Chennai', key:tempKey.toString(), myid:tempKey.toString()}, ...prevFriends]
    })
  }

  return (
    <View style={mystyles.maincontainer}>
      <Header></Header>
     <AddFriend addFriend={addFriend}></AddFriend>
      <FlatList 
          //numColumns={2}
          keyExtractor={item => item.myid}
          data={friends}
          renderItem={(f)=>{
            console.log('Value of friends:');
            console.log(f);
            return (
                    <TouchableOpacity onPress={()=>{listItemPressed(f.item.myid)}}>
                      <Text style={mystyles.listitem}>{f.item.myid}.{f.item.name}</Text>
                    </TouchableOpacity>
            )
          }}
     />
        
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
    color:'purple'
  }
})
