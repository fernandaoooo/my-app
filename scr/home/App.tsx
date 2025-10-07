import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface Item {
  id: string;
  nome: string;
}

export default function App() {
  const[nome, setNome] = useState<string>("");
  const[tipo, setTipo] = useState<string>("");
  const [lista, setLista] = useState<Item[]>([]);


  function handleClick() {
    console.log("Calculo");
    setNome(nome);
    setTipo(tipo);

}
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calorias</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o alimento"
          placeholderTextColor="grey"
          value={nome}
          onChangeText={setNome}
        />
        </View>
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite as calorias"
          placeholderTextColor="grey"
          value={tipo}
          onChangeText={setTipo}
        />
      </View>
        <Button onPress={handleClick} title='Adicionar' color="darkblue"/>
        <View style={styles.container}>
        <Text>Item: {nome}</Text>
        <Text>Calorias: {tipo}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    padding: 20,
    paddingTop: 50,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "darkblue",
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    color: "black",
    paddingHorizontal: 10,
    height: 50,
    borderRadius: 5,
    fontSize: 17
  },
  listaContainer: {
    borderColor: "#004d40",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    flex: 1,
    backgroundColor: "lightgreen",
  },

});
