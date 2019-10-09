import React from 'react';
import { Text, View, StyleSheet, Image, Button, Alert } from 'react-native';

class StartScreen extends React.Component {
    render() {
      return (
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    padding: 10,
    textDecorationLine: "underline",
    fontSize: 30,
    fontWeight: "bold",
  },
});
