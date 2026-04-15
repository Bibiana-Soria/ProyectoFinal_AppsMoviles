/*
como detecta la linea
como responde al cambio de trayectoria
flujo basico de funcionamiento
etapas de proceso o logica general
(texto , listas de pasos, diagrama imagen o esquema)
*/
import react from "react";
import { View, Text , StyleSheet, TouchableOpacity } from "react-native";

export default function Funcionamiento() {
    return (
        <View style = {styles.container}>
            <Text style = {styles.titulo}>Funcionamiento</Text>
            <TouchableOpacity style = {styles.boton}>
                <Text style = {styles.texto_boton}>Helow</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 20,
    fontWeight: '600',
    margin: 10,
    backgroundColor: 'blue',
    padding: 15,
    color: 'white',
    textAlign: 'center'
  },
  boton: {
    backgroundColor: "#e3e3e3", 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 100,
    height: 40,
    marginTop: 10
  },
  texto_boton: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black'
  }
});