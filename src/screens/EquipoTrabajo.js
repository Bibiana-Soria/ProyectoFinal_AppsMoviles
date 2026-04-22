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
        <View style = {styles.card}>
          <Text style = {styles.info_texto}>García Hernandez Ana Gabriela</Text>
          <Text style ={styles.info_texto}>Soria Muñoz Bibiana Paola</Text>
        </View>
        <Text style = {styles.titulo}>Roles del Equipo</Text>
        <View style={styles.card}>
          <Text style={styles.info_titulo}>García Hernandez Ana:</Text>
           <Text style ={styles.info_texto}>Programación del carrito y diseño de la aplicación de mapeo y aplicación móvil </Text>
        </View>
        <View style = {styles.card}>
          <Text style ={styles.info_titulo}>Soria Muñoz Bibiana:</Text>
         <Text style ={styles.info_texto}>Conexión de los componentes del carrito, diseño de la carcasa y aplicación movil</Text>
        </View>
        
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
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    width: "80%",
    alignContent: "center",
    alignItems: "center"
  },
  info_titulo:{
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    color: "#26528F"
  },
  info_texto:{
    fontSize: 15,
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: '400',
    color: "#333"
  },
  
});