import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bgimage} source={{ uri: 'https://i.pinimg.com/originals/ec/35/fd/ec35fd09f1402cf4828c617d30096487.gif'}}>
      <h1 style={styles.titulo} >THIS IS FINE</h1>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Image style={styles.image} 
        source={{ uri:'https://media.tenor.com/ZGXm_DhIu5gAAAAM/this-is-fine-fine.gif'}}></Image>
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 380,
    height: 260,
  },
  titulo:{
    color: 'white'
  },
  bgimage: {
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
