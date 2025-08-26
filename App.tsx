import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Novo Evento</Text>
      <TextInput style={styles.input} placeholder='Digite o evento' placeholderTextColor={"white"}></TextInput>
      <Button title='Botão' onPress={()=>console.log("Teste")}/>
      <TouchableOpacity style={styles.button} activeOpacity={0.1}>
        <Text style={styles.buttonText}>Botão Teste</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding:16,
    paddingTop:50,
  },
  text: {
    color: '#fff',
    fontSize:36
  },
  input: {
    backgroundColor: '#1f1e25',
    borderRadius:8,
    height: 56,
    marginTop:30
  },
  buttonText: {
    color: '#fff'
  },
  button: {
    backgroundColor:"lightgreen",
    width: '70%',
    height:56,
    borderRadius:8
  }
});
