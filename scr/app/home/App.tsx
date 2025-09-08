import { Alert, Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { styles } from "./styles";
import {Event} from "../../components/Event"

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Grocery List</Text>
            <Input placeH='Type the product'/>
            <View style={styles.area}>
            <ScrollView>
            <Itens name="Apple"/>
            <Itens name="Banana"/>
            <Itens name="Watermelon"/>
            </ScrollView>
            </View>
        

        </View>
        
    )
}