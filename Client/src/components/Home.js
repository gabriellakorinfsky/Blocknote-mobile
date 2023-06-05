import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import { AntDesign } from '@expo/vector-icons';
import axios from "axios";
import NewItens from './NewItens';
import Cabecalho from './Cabecalho';

export default function Home({navigation}) {
  
  const [lista, setlista] = useState ();
  //DELETE
  const deletarItem = (key) => {
    axios.delete(`http://10.0.0.110:3001/item/${key}`,
    )
  }
  //READ
  useEffect(() => {
    axios.get("http://10.0.0.110:3001/itens").then(
        (response) => {
            setlista(response.data)
        }
    )
}, [lista])


  return (
      
      <View style={styles.container}>
        
        <ScrollView>
          <View style={styles.body}>
          
            <View style={styles.list}>
                    <FlatList
                      data={lista}
                      renderItem={({item}) => (
                        <NewItens props={item} funcao={deletarItem}/>
                      )}
                    />
            </View>
                  
          </View>
          <StatusBar style="light" /> 
        </ScrollView> 
        <View style={styles.fundo}>
            <View style={styles.icone}>
                <TouchableOpacity onPress={() => navigation.navigate('Inserir')}>
                    <AntDesign name="pluscircleo" size={35} color="black" />
                </TouchableOpacity>
            </View>
        </View>
      </View>    
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    marginTop: 10,
    backgroundColor: '#fff',
    padding: 1000,
    paddingTop: 15,
    paddingRight: 10,
    paddingLeft: 10,
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
  
});
