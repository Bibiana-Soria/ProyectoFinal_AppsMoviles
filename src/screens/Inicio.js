/*
nombre del proyecto
nombre del equipo
imagen relacionada con el carrito
boton o accesos a las otras pantallas
*/
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function Inicio({ navigation }) {
  return (
    <ScrollView contentContainerStyle = {styles.container}>
      <Text style = {styles.titulo}>Carrito Seguidor de Linea</Text>
      <Text style = {styles.titulo}>Equipo: Chick and Duck</Text>
      <TouchableOpacity style = {styles.boton} onPress={()=>{navigation.navigate('Equipo')}}><Text style = {styles.texto_boton}>Hola</Text></TouchableOpacity>
    </ScrollView>
  );
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
