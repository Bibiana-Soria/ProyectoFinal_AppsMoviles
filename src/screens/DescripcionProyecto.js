/*
que es el carrito seguidor de linea
que problema resuelve o para que fue desarrollado
objetivo del proyecto
descripción del funcionamiento
*/
import react from "react";
import { View, Text , StyleSheet, TouchableOpacity } from "react-native";

export default function DescripcionProyecto() {
    return (
        <View style = {styles.container}>
            <Text style = {styles.titulo}>Descripcion del proyecto</Text>
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