/*
nombre del equipo
integrantes
rol de cada integrante
foto o avatar de cada miembro (si quires o no)
*/
import React from "react";
import { View, Text , StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";

export default function EquipoTrabajo() {
    return (
      <ScrollView contentContainerStyle = {styles.container}>
        <Text style ={ styles.titulo}>Equipo: Chick and Duck</Text>
        <Text style = {styles.texto}>García Hernandez Ana Gabriela</Text>
        <Text style ={styles.texto}>Soria Muñoz Bibiana Paola</Text>
        <Image style = {styles.imagen} source = {require('../../assets/IMG-20250509-WA0020.jpg')}/>
      </ScrollView>
    )
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
  imagen:{
    height:180,
    width: 198,
    borderRadius: 35,
    margin: 20
  }
  
});