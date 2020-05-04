import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TouchableButton extends Component {
  
  _onPress(){
    alert('You tapped a button')
  }
  render(){
  return (
    <View style={styles.container}>
     <View style={styles.containerButton}>
      <Button
        onPress={this._onPress}
        title="Press Button 1"
      />
    </View>

     <View style={styles.containerButton}>
        <Button
          onPress={this._onPress}
          title="Press Button 2"
        />
        <Button
          onPress={this._onPress}
          title="Great!"
          color='green'
        />
     </View>

     <View style={styles.containerButton}>
        <Button
            onPress={this._onPress}
            title="Tap Me!"
          />
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },

  containerButton: {
    margin: 20,
  },

  containerLayoutButton: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
