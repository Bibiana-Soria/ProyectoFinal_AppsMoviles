import React, { useState, useRef } from "react";
import {
  View, Text, StyleSheet, ScrollView,
  Image, TouchableOpacity, Dimensions, Modal
} from "react-native";
import { Video } from "expo-av";

const { width } = Dimensions.get("window");

const fotos = [
  { src: require("../../assets/delantera.jpeg"), descripcion: "Vista frontal del carrito" },
  { src: require("../../assets/derecha.jpeg"), descripcion: "Vista derecha del carrito" },
  { src: require("../../assets/izquierda.jpeg"), descripcion: "Vista izquierda del carrito" },
  { src: require("../../assets/arriba.jpeg"), descripcion: "Vista superior del carrito" },
  { src: require("../../assets/parte_baja.jpeg"), descripcion: "Vista de la panza del carrito" },
];

const videos = [
  { src: require("../../assets/primer_prueba.mp4"), descripcion: "Primera prueba del carrito en acción" },
  { src: require("../../assets/recorrido_carcasa.mp4"), descripcion: "Recorrido del carrito con carcasa" },
  { src: require("../../assets/app.mp4"), descripcion: "Recorrido del carrito sin carcasa" },
];

export default function Galeria() {
  const [fotoModal, setFotoModal] = useState(false);
  const [videoModal, setVideoModal] = useState(false);
  const [itemSeleccionado, setItemSeleccionado] = useState(null);
  const videoRef = useRef(null);

  const abrirFoto = (src) => {
    setItemSeleccionado(src);
    setFotoModal(true);
  };

  const abrirVideo = (src) => {
    setItemSeleccionado(src);
    setVideoModal(true);
  };

  const cerrarVideo = async () => {
    if (videoRef.current) {
      await videoRef.current.pauseAsync();
    }
    setVideoModal(false);
    setItemSeleccionado(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Galería</Text>

      <View style={styles.seccion}>
        <Text style={styles.seccion_titulo}>Fotos del Carrito</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {fotos.map((foto, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => abrirFoto(foto.src)}
              activeOpacity={0.8}
            >
              <Image source={foto.src} style={styles.imagen} resizeMode="cover" />
              <View style={styles.descripcion_box}>
                <Text style={styles.descripcion_texto}>{foto.descripcion}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.seccion_titulo}>Videos</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {videos.map((video, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => abrirVideo(video.src)}
              activeOpacity={0.85}
            >
              <View style={styles.video_preview}>
                <Text style={styles.play_icono}>▶</Text>
              </View>
              <View style={styles.descripcion_box}>
                <Text style={styles.descripcion_texto}>{video.descripcion}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Modal Fotos */}
      <Modal visible={fotoModal} transparent animationType="fade">
        <View style={styles.modal_fondo}>
          <TouchableOpacity
            style={styles.modal_cerrar_boton}
            onPress={() => setFotoModal(false)}
          >
            <Text style={styles.modal_cerrar_texto}>✕</Text>
          </TouchableOpacity>
          {itemSeleccionado && (
            <Image
              source={itemSeleccionado}
              style={styles.modal_imagen}
              resizeMode="contain"
            />
          )}
        </View>
      </Modal>

      {/* Modal Videos */}
      <Modal visible={videoModal} transparent animationType="slide">
        <View style={styles.modal_fondo}>
          <TouchableOpacity
            style={styles.modal_cerrar_boton}
            onPress={cerrarVideo}
          >
            <Text style={styles.modal_cerrar_texto}>✕</Text>
          </TouchableOpacity>
          {itemSeleccionado && (
            <Video
              ref={videoRef}
              source={itemSeleccionado}
              style={styles.modal_video}
              useNativeControls
              resizeMode="contain"
              shouldPlay
            />
          )}
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#26528F",
    padding: 15,
    paddingBottom: 30,
  },
  titulo: {
    fontSize: 22,
    color: "white",
    textAlign: "center",
    fontWeight: "700",
    marginBottom: 20,
  },
  seccion: {
    marginBottom: 25,
  },
  seccion_titulo: {
    fontSize: 16,
    fontWeight: "700",
    color: "white",
    marginBottom: 10,
    marginLeft: 4,
  },
  card: {
    width: width * 0.55,
    marginRight: 12,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  imagen: {
    width: "100%",
    height: 160,
  },
  video_preview: {
    width: "100%",
    height: 160,
    backgroundColor: "#1a3a6b",
    justifyContent: "center",
    alignItems: "center",
  },
  play_icono: {
    fontSize: 48,
    color: "white",
  },
  descripcion_box: {
    padding: 8,
  },
  descripcion_texto: {
    fontSize: 13,
    color: "#26528F",
    fontWeight: "600",
    textAlign: "center",
  },
  modal_fondo: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.92)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal_cerrar_boton: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 20,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  modal_cerrar_texto: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
  modal_imagen: {
    width: width * 0.95,
    height: width * 0.95,
    borderRadius: 10,
  },
  modal_video: {
    width: width * 0.95,
    height: width * 0.6,
    borderRadius: 10,
  },
});