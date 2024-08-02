import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
const App = () => {
  const skills=[
    {id:1,name:"JAVA"},
    {id:2,name:"PHP"},
    {id:3,name:"NODE"},
    {id:4,name:"CSS"},
    {id:5,name:"SQL"}
  ]
  const [radio,setRadio]=useState(1)
  return (
    <View style={styles.main}>
      {
     skills.map((item,index)=> <TouchableOpacity onPress={()=>setRadio(item.id) } style={styles.setting}
     key={index}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio} >
            {
              radio===item.id ? <View style={styles.radiobg}></View> : null
            }
          </View>
          <Text style={styles.radiotext}>{item.name}</Text>
        </View>
  </TouchableOpacity>)
}
    </View>
  )
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  radiotext: {
    fontSize: 20,
    color:'skyblue'
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: "skyblue",
    borderWidth: 2,
    borderRadius: 20,
    margin: 10
  },
  radioWrapper: {
    
    flexDirection: "row",
    alignItems: "center"  
  },
  radiobg:{
    backgroundColor:"skyblue",
    height:28,
    width:28,
    borderRadius:20,
    margin:4
  
  }
})


export default App
