import React from "react";
import { View, Text , StyleSheet, ScrollView, Image} from "react-native";

const pasos = [
  {numero:"1", texto: "Los sesnores infrarrojos emiten luz hacia el suelo."},
  {numero:"2", texto: "Si la luz se refleja, el sensor detecta la presencia de una línea."},
  {numero:"3", texto: "El microcontrolador procesa la información de los sensores."},
  {numero:"4", texto: "Si el sensor izquierdo detecta la línea, el carrito gira a la izquierda."},
  {numero:"5", texto: "Si el sensor derecho detecta la línea, el carrito gira a la derecha."},
  {numero:"6", texto: "Si ambos sensores detectan la línea, el carrito avanza recto."},
  {numero:"7", texto: "Si ningún sensor detecta la línea, el carrito se detiene o busca la línea."}
];

const etapas = [
  {titulo: "Detección", descripcion: "Los sensores infrarrojos detectan la presencia de la línea en el suelo."},
  {titulo: "Procesamiento", descripcion: "El microcontrolador interpreta la información de los sensores para determinar la posición de la línea."},
  {titulo: "Control", descripcion: "Se envían señales PWM a los motores para ajustar la dirección del carrito según la posición de la línea."},
  {titulo: "Transición", descripcion: "Los datos del recorrido se envian via Bluetooth a una computadora."}
];

export default function Funcionamiento() {
    return (
        <ScrollView contentContainerStyle = {styles.container}>
            <Text style = {styles.titulo}>Funcionamiento</Text>

            <View style = {styles.card}>
              <View style = {styles.info}>
                <Text style = {styles.info_titulo}>¿Como detecta la línea?</Text>
                <Text style = {styles.info_texto}>Los sensores infrarrojos emiten luz hacia el suelo. Si la luz se refleja, el sensor detecta la presencia de una línea.</Text>
              </View>
            </View>

            <View style = {styles.card}>
              <View style = {styles.info}>
                <Text style = {styles.info_titulo}>¿Como responde al cambio de trayectoria?</Text>
                <Text style = {styles.info_texto}>Si el sensor izquierdo detecta la línea, el carrito gira a la izquierda. Si el sensor derecho detecta la línea, el carrito gira a la derecha. Si ambos sensores detectan la línea, el carrito avanza recto. Si ningún sensor detecta la línea, el carrito se detiene o busca la línea.</Text>
              </View>
            </View>

            <View style = {styles.card}>
              <View style = {styles.info}>
                <Text style = {styles.info_titulo}>Flujo básico de funcionamiento</Text>
                {pasos.map((paso) => (
                  <View key={paso.numero} style = {styles.paso_fila}>
                    <View style = {styles.paso_circulo}>
                      <Text style = {styles.paso_numero}>{paso.numero}</Text>
                    </View>
                    <Text style = {styles.paso_texto}>{paso.texto}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style = {styles.card}>
              <View style = {styles.info}>
                <Text style = {styles.info_titulo}>Etapas de proceso</Text>
                {etapas.map((etapa) => (
                  <View key={etapa.titulo} style = {styles.etapa_fila}>
                    <View style = {styles.etapa_contenido}>
                      <Text style = {styles.etapa_titulo}>{etapa.titulo}</Text>
                      <Text style = {styles.etapa_descripcion}>{etapa.descripcion}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.info}>
                <Text style={styles.info_titulo}>Vista del carrito</Text>
                <Image
                  source={require("../../assets/delantera.jpeg")}
                  style={styles.imagen_carrito}
                  resizeMode="contain"
                />
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
    padding: 25,
    backgroundColor: "#26528F"
  },
  titulo: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: 15
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    width: '95%',
  },
  info: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
    info_titulo: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: "center",
    fontWeight: "bold",
    color: "#26528F",
  },
  info_texto: {
    fontSize: 15,
    marginBottom: 5,
    textAlign: "center",
    fontWeight: "400",
    color: "#333",
  },
  paso_fila: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  paso_circulo: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#26528F",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  paso_numero: {
    color: "white",
    fontWeight: "700",
    fontSize: 13,
  },
  paso_texto: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  etapa_fila: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  etapa_icono: {
    fontSize: 24,
    marginRight: 10,
    marginTop: 2,
  },
  etapa_contenido: {
    flex: 1,
  },
  etapa_titulo: {
    fontSize: 14,
    fontWeight: "700",
    color: "#26528F",
    marginBottom: 2,
  },
  etapa_descripcion: {
    fontSize: 13,
    color: "#333",
  },
  imagen_carrito: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginTop: 4,
  },
});