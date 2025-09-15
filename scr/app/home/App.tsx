import { Alert, Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { styles } from "./styles";
import {Event} from "../../components/Event"
import { useState } from 'react';


export default function App(){
    const[count, setCount] = useState(0);
    const[countTen, setCountTen] = useState(10);
    const[countHundred, setCountHundred] = useState(100);

    function handleClick() {
        console.log("Botão foi clicado");
        setCount(val => val+1);
        setCountTen(val => val+10);
        setCountHundred(val => val+100);
    }

    return (
        <View style={styles.container}>
            <Text>Teste de netState</Text>
            <Button onPress={handleClick} title='Clique aqui'/>
            <Text>Contador 1: {count}</Text>
            <Text>Contador 10: {countTen}</Text>
            <Text>Contador 100: {countHundred}</Text>
        </View>
    );
}

// export default function App() {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.text}>Nome Evento</Text>
//             <View style={styles.form}>
//             <TextInput style={styles.input} placeholder='Digite o evento' placeholderTextColor={'#fff'}></TextInput>
//             <TouchableOpacity  style={styles.button} onPress={()=>{Alert.alert("Teste Botão")}}>
//                 <Text style={styles.buttonText}>+</Text>
//             </TouchableOpacity>
//             </View>
//             <Event name="Evento novo"/>
//             <Event name="Evento cancelado"/>

//         </View>
        
//     )
// }