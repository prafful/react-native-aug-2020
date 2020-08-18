import React, { useState } from 'react';

import { StyleSheet, Text, View, TextInput, Button} from "react-native";

export default function AddFriend({addFriend}){

    const [friendName, setFriendName] = useState('')

    const captureFriend =(value)=>{
        setFriendName(value)
        console.log(friendName);
    }

    return (
        <View>
            <TextInput 
                style = {mystyles.inputFriend}
                placeholder='add new friend....'
                onChangeText={captureFriend}
            ></TextInput>
            <Button
                title="Add Friend"
                onPress={()=>addFriend(friendName)}
            />
        </View>
    )

}

const mystyles = StyleSheet.create({
    inputFriend:{
        marginBottom:10,
        paddingHorizontal:10,
        paddingVertical:10,
        borderBottomWidth:1,
        borderBottomColor:'grey',
        fontSize:20
    }
})