import React from 'react';
import {Text, TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View>
      <Text>My name is {props.name} and I am a student in CIS340!</Text>
    </View>
  );
}

export default function MultiComp(){
  return(
    <View style={{
      flex: 1,
      justifyContent: 'Center',
      alignItems: 'center'
    }}>
    <Text> Welcome to CIS340 </Text>
      <Student name = "Bob" />
      <Student name = "Karley"/>
      <Student name = "Joe"/>
      <Student name = "Faith" />
    </View>
  );

}

