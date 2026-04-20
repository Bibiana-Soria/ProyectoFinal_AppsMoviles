import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const datos = [
  { etiqueta: "Materia", valor: "Desarrollo de Aplicaciones Móviles" },
  { etiqueta: "Docente", valor: "Ing. Ana Laura Lara Chairez" },
  { etiqueta: "Grado y Grupo", valor: "5° B BIS TI" },
  { etiqueta: "Cuatrimestre", valor: "Enero - Abril 2025" },
  { etiqueta: "Fecha de entrega", valor: "27 de Abril de 2025" },
];

export default function Creditos() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Créditos</Text>

      <Text style={styles.subtitulo}>Carrito Seguidor de Línea</Text>
      <Text style={styles.subtitulo2}>Proyecto Final</Text>

      <View style={styles.card}>
        {datos.map((item, index) => (
          <View
            key={index}
            style={[
              styles.fila,
              index < datos.length - 1 && styles.fila_borde,
            ]}
          >
            <Text style={styles.etiqueta}>{item.etiqueta}</Text>
            <Text style={styles.valor}>{item.valor}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.pie}>
        Desarrollado con mucho esfuerzo por el equipo: Chick and Duck.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#26528F",
    padding: 15,
    paddingBottom: 40,
  },
  titulo: {
    fontSize: 22,
    color: "white",
    textAlign: "center",
    fontWeight: "700",
    marginBottom: 20,
  },

  // Ícono decorativo
  icono_container: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  icono: {
    fontSize: 48,
  },

  subtitulo: {
    fontSize: 18,
    color: "white",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 4,
  },
  subtitulo2: {
    fontSize: 14,
    color: "rgba(255,255,255,0.7)",
    textAlign: "center",
    marginBottom: 24,
  },

  // Card de datos
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    width: "95%",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 20,
    overflow: "hidden",
  },
  fila: {
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  fila_borde: {
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  etiqueta: {
    fontSize: 12,
    color: "#888",
    fontWeight: "600",
    marginBottom: 3,
  },
  valor: {
    fontSize: 15,
    color: "#26528F",
    fontWeight: "700",
  },

  pie: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 13,
    textAlign: "center",
    marginTop: 10,
  },
});