import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const aprendizajes = [
  "-Aplicar conceptos de electrónica y programación en un proyecto físico real.",
  "-Integrar sensores infrarrojos con un microcontrolador para lograr autonomía en el movimiento.",
  "-Trabajar en equipo distribuyendo responsabilidades de hardware, software y documentación.",
  "-Desarrollar una aplicación móvil como complemento digital de un proyecto de ingeniería.",
];

const dificultades = [
  "-Calibrar los sensores infrarrojos para que detectaran correctamente la línea en distintas condiciones de luz.",
  "-Ajustar la velocidad de los motores para lograr un recorrido estable sin desviaciones.",
  "-Sincronizar la comunicación Bluetooth entre el carrito y la computadora.",
  "-Gestionar el tiempo entre el desarrollo del hardware y el de la aplicación móvil.",
];

const mejoras = [
  "-Agregar más sensores para mejorar la precisión en curvas cerradas.",
  "-Mejorar el mapeo, para que sea mucho mas exacto.",
  "-Comprar materiales de mejor calidad para aumentar la durabilidad.",
];

const secciones = [
  { titulo: "¿Qué aprendimos?", items: aprendizajes },
  { titulo: "Dificultades presentadas", items: dificultades },
  { titulo: "Posibles mejoras", items: mejoras },
];

export default function Conclusiones() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Conclusiones</Text>

      {secciones.map((seccion) => (
        <View key={seccion.titulo} style={styles.card}>
          <View style={styles.info}>
            <Text style={styles.info_titulo}>{seccion.titulo}</Text>
            {seccion.items.map((item, index) => (
              <View key={index} style={styles.item_fila}>
                <View style={styles.punto} />
                <Text style={styles.item_texto}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#26528F",
    padding: 15,
    paddingBottom: 30,
  },
  titulo: {
    fontSize: 22,
    color: "white",
    textAlign: "center",
    fontWeight: "700",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    width: "95%",
  },
  info: {
    padding: 14,
  },
  info_titulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#26528F",
    textAlign: "center",
    marginBottom: 12,
  },
  item_fila: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  punto: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#26528F",
    marginTop: 5,
    marginRight: 10,
  },
  item_texto: {
    flex: 1,
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
});