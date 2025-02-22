import { StatusBar } from 'expo-status-bar';
import { Alert, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import MeuBotao from './components/MeuBotao';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <MeuBotao titulo='Clique aqui' onPress={()=> {Alert.alert("Atenção","Botão Clicado")}}></MeuBotao>
      <StatusBar style="auto" />
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
});
