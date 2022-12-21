import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { db } from './backend/firebaseSetup';
import { createUser, login } from './backend/authentication';

export default function App() {
  const test = async () => {
    console.log("test")
    login("a@gmail.com","password")
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title='backend testing lol' onPress={test}/>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
