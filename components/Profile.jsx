import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LocalStore from "sync-storage"
import { TextInput } from 'react-native'
import { useState } from 'react'

const Profile = () => {
  const [q,setq]=useState('easy')
  
  return (
    <View style={styles.container}>
      <View>
        <TextInput
        
        />
      </View>
      <Text style={styles.text}>Versiya: 1.0.0</Text>
      <Text style={{...styles.text,color:"green"}}>Dasturchi :  Ma'murov Javohir</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    marginLeft:15
  },
  text:{
    width:"auto",
    height:35,
    marginTop:2,
    marginBottom:2,
    fontSize:23,
    color:"white"
  }
})

export default Profile

