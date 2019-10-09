import React from 'react';
import { Text, View, StyleSheet, Image, Button, Alert } from 'react-native';

class HalfwayScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.title}>Halfway!</Text>
          <Button 
          title="Next"
          color="#ffcc00"
          onPress={() => this.props.navigation.navigate('Finish')}/>
          <Image style={{width: 200, height: 150, margin: 10}} source = {require('../assets/road.jpg')}></Image>
        </View>
      );
    }
}

export default HalfwayScreen;

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