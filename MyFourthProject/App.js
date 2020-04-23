import React from 'react';
import { Text, View , SectionList } from 'react-native';
  

  export default StatesApp = () => {
    return (
      <View style={{flex: 1, paddingTop:22}}>
          <SectionList
            sections={[
              {title: 'A', data: ['Alabama','Alaska','Arizona','Arkansas']},
              {title: 'C', data: ['California','Colorado','Connecticut']},
              {title: 'D', data: ['Delaware']},
              {title: 'M', data: ['Maine','Massachuttes','Missouri','Minesotta']},

            ]}
            renderItem={({item}) => <Text style={{padding: 10, fontSize:20, height:44,}}> {item} </Text>}

            renderSectionHeader={({section}) => <Text style={{paddingTop: 5, 
              paddingLeft: 8, 
              paddingRight: 8, 
              paddingBottom: 5, 
              fontSize: 14,
              fontWeight: 'bold',
            backgroundColor: '#9FA8DA',}}>{section.title}</Text>} //set custom color

            keyExtractor={(item,index) =>index}
          />
      </View>
    );
  
  }