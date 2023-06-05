import { useState, useEffect } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Keyboard } from "react-native";
import axios from "axios";
import Cabecalho from "./Cabecalho";
import { AntDesign } from '@expo/vector-icons';

export default function Inserir({navigation}){

    const [texto, settexto] = useState ('');

    const pegarMudanca = (val) => {
        settexto(val);
    }
    
    const subInfo = (texto) => {
        axios.post( "http://10.0.0.110:3001/item", {item: texto}  )
        .then(
            // Navegue de volta para a página inicial
            navigation.navigate('Home'))
       }

    const [showButton, setShowButton] = useState(true);
    useEffect(() => {

        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
          // O teclado exibido
          setShowButton(false)
        });
    
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
          // O teclado oculto
          setShowButton(true)
        });
    
        return () => {
          keyboardDidShowListener.remove();
          keyboardDidHideListener.remove();
        };
      }, []);
   
    return(
        <View style={styles.body}>
           
            <View style={styles.tex}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite aqui..."
                    onChangeText={pegarMudanca}
                    textAlignVertical="top"
                    multiline={true}
                />
            </View>
            {showButton && (
                <View style={styles.fundo}>
                    <View style={styles.icone}>
                        <TouchableOpacity onPress={() => subInfo(texto)}>
                            <AntDesign name="checkcircleo" size={35} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
             )}
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex:1,
        backgroundColor: 'white',
    },
    input: {
        backgroundColor: 'white',
        fontWeight: '600',
        fontSize: 17,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        height: 450,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'gray',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOpacity: 1,
        shadowRadius: 4,
    },
    fundo: {
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
        backgroundColor: 'black',
        padding: 8,
        width: 330,
        height: 55,
        borderRadius: 30,
    },
    icone: {
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 5,
        paddingBottom: 8.3,
        width: 75,
        paddingTop: 1,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
})