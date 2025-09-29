import React, { useState } from "react";
import { View, Text } from "react-native";
import InputProduct from "../components/Input/input.js"
import ShoppingList from "../components/Lista/listaDeCompras.js";
import styles from "./styles";

export default function App() {
  const [items, setItems] = useState<string[]>(["Apple", "Banana", "Watermelon"]);

  const addItem = (item: string) => {
    setItems((prev) => [...prev, item]);
  };
  const removeItem = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grocery List</Text>
      <InputProduct onAdd={addItem} />
      <ShoppingList items={items} onRemove={removeItem} />
    </View>
  );
}