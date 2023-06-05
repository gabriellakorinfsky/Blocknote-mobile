import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Cabecalho(){
    return(
        <View style={styles.cabecalho}>
            <Text style={styles.titulo}>My Notes</Text>
            <StatusBar style="light"/>
        </View>
    );
}

const styles = StyleSheet.create({
    cabecalho: {
        height: 80,
        paddingTop: 38,
        borderBottomWidth: 1.5,
        borderBottomColor: "white",
        
    },
    titulo: {
        fontSize: 25,
        marginLeft: 25,
        fontWeight: "bold",
        color: '#fff',
    },
})