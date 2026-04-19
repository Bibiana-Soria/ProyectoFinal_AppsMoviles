/*
que es el carrito seguidor de linea
que problema resuelve o para que fue desarrollado
objetivo del proyecto
descripción del funcionamiento
*/
import react from "react";
import { View, Text , StyleSheet, ScrollView } from "react-native";

export default function DescripcionProyecto() {
    return (
      <ScrollView contentContainerStyle = {styles.container}>
        <Text style = {styles.titulo}>Descripcion del Proyecto</Text>
        <View style = {styles.card}>
          <View style = {styles.info}>
            <Text style={styles.info_titulo}>¿Qué es un carrito seguidor de línea?</Text>
            <Text style = {styles.info_texto}>
              Un carrito seguidor de línea es un pequeño robot móvil diseñado para seguir una trayectoria marcada en el suelo, normalmente una línea negra sobre fondo blanco (o al revés).
            </Text>
          </View>
        </View>
        <View style = {styles.card}>
          <View style = {styles.info}>
            <Text style={styles.info_titulo}>¿Qué problema resuelve o para qué fue desarrollado?</Text>
            <Text style = {styles.info_texto}>
              Fue creado como herramienta educativa y de investigación para introducir conceptos de estructuras de datos, programación y control automático. También se utiliza en competencias de robótica para demostrar precisión y eficiencia en el seguimiento de trayectorias.
            </Text>
          </View>
        </View>
        <View style = {styles.card}>
          <View style = {styles.info}>
            <Text style={styles.info_titulo}>Objetivo del proyecto</Text>
            <Text style = {styles.info_texto}>
              El objetivo principal es diseñar y construir un sistema autónomo capaz de desplazarse siguiendo una línea, aplicando principios de electrónica, sensores y programación. Busca fomentar el aprendizaje práctico y el desarrollo de habilidades en ingeniería y tecnología.
            </Text>
          </View>
        </View>
        <View style = {styles.card}>
          <View style = {styles.info}>
            <Text style={styles.info_titulo}>Descripción del funcionamiento</Text>
            <Text style = {styles.info_texto}>
              El carrito utiliza sensores ópticos (generalmente infrarrojos) que detectan el contraste entre la línea y el fondo. Según la información recibida, el microcontrolador ajusta el movimiento de los motores para mantener el vehículo sobre la trayectoria. Si el sensor detecta desviación, el sistema corrige la dirección en tiempo real. Y a su vez puede enviar los datos del recorrido a través de una conexión bluethoot a una computadora.
            </Text>
          </View>
        </View>

      </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#26528F",
    padding: 15
  },
  titulo: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: 15
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    width: "95%"
  },
  info: {
    flex: 1,
    padding: 12,
    justifyContent: "center"
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
  }
});