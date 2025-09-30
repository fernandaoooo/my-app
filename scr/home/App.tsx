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
  const[largura, setLargura] = useState<number>();
  const[comprimento, setComprimento] = useState<number>();

  function handleClick() {
    console.log("Calculo");
    setNome(nome);
    setTipo(tipo);
    setLargura(largura);
    setComprimento(comprimento);
    
}
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Imóvel</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome do proprietário"
          placeholderTextColor="black"
          value={nome}
          onChangeText={setNome}
        />
        </View>
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tipo de imóvel"
          placeholderTextColor="black"
          value={tipo}
          onChangeText={setTipo}
        />
        </View>
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Largura do terreno"
          placeholderTextColor="black"
          value={largura}
          onChangeText={setLargura}
        />
        </View>
        <View style={styles.inputContainer}>
        <TextInput
        style={styles.input}
        placeholder="Comprimento do terreno"
        placeholderTextColor="black"
        value={comprimento}
        onChangeText={setComprimento}
      />
      </View>
        <Button onPress={handleClick} title='Calcular tamanho'/>
        <View style={styles.container}>
        <Text>Nome do proprietário: {nome}</Text>
        <Text>Tipo do imóvel: {tipo}</Text>
        <Text>Tamanho do terreno: {largura*comprimento} metros quadrados</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    paddingTop: 50,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "black",
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: "lightgray",
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
