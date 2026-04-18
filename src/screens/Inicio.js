import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,Image } from 'react-native';


export default function Inicio({ navigation }) {
  return (
    <ScrollView contentContainerStyle = {styles.container}>
      <Text style = {styles.titulo}>Proyecto</Text>
      <Text style = {styles.texto}>Carrito Seguidor de Linea</Text>
      <Text style = {styles.titulo}>Equipo:</Text>
      <Text style = {styles.texto}>Garcia Hernandez Ana Gabriela</Text>
      <Text style = {styles.texto}>Soria Muñoz Bibiana Paola</Text>
      <Text style = {styles.texto}>5°B BIS</Text>
      <Image source={require('../../assets/malvavisco.jpeg')}style ={styles.imagen}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#26528F"
  },
  titulo: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 10
  },
  texto:{
    fontSize: 15,
    marginBottom: 5,
    color: 'white',
    textAlign: 'center',
    fontWeight: '400'
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
  },
  imagen:{
    height:180,
    width: 198,
    borderRadius: 35,
    margin: 20
  }
  
});
