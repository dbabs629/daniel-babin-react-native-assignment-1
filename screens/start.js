import React from 'react';
import { Text, View, StyleSheet, Image, Button, Alert } from 'react-native';
//added class
class StartScreen extends React.Component {
  //render function
    render() {
      //return function
      return (
        //view container for text, button & image. Styled button inline as well and used a function to navigate between screens
        <View style={styles.container}>
          <Text style={styles.title}>Beginning!</Text>
          <Button 
          title="Start"
          color="green"
          onPress={() => this.props.navigation.navigate('Halfway')}/>
          <Image style={{width: 200, height: 150, margin: 10}} source = {require('../assets/arrow.jpg')}></Image>
        </View>
      );
    }
}

export default StartScreen;
// created style sheet and styles for View component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  //styles for the text component
  title: {
    padding: 10,
    textDecorationLine: "underline",
    fontSize: 30,
    fontWeight: "bold",
  },
});
