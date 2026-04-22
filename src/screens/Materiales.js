/*
lista de componentes electronicos , programacion, etc
nombre y funcion de cada componente
imagenes o iconos cuando sea posible
*/
import { View, Text, FlatList, StyleSheet, Image } from "react-native";

export default function MaterialesScreen() {
  const materiales = [
    {name: "Placa ESP32", image: "https://sandorobotics.com.mx/wp-content/uploads/2023/09/HS0204.jpg", descripcion: "Es el microcontrolador principal del carrito. Procesa datos de sensores y controla los motores.", categoria: "Electronica y control" },
    {name: "Arduino IDE", image: "https://content.instructables.com/F8K/LF0A/K87PGNUO/F8KLF0AK87PGNUO.png?auto=webp", descripcion:"Software utilizado para programar el ESP32. Permite cargar el código que controla el carrito.", categoria: "Electronica y control" },
    {name: "Cable de datos", image: "https://www.steren.com.mx/media/catalog/product/cache/bb0cad18a6adb5d17b0efd58f4201a2f/image/20517f371/cable-usb-a-micro-usb-tipo-cordon-de-1-m.jpg" , descripcion: "Conecta el ESP32 a la computadora. Se usa para transferir el programa a la placa.", categoria: "Electronica y control"},
    {name: "Visual Studio Code", image:"https://miro.medium.com/v2/resize:fit:1400/1*1PhjsPrD69GadqQx067IBg.jpeg", descripcion: "Editor usado para desarrollar la aplicación de mapeo. Permite programar y analizar el recorrido del carrito.", categoria: "Programación y software"},
    {name: "C++", image:"https://liora.io/app/uploads/sites/9/2023/12/c-1.webp", descripcion:"Lenguaje utilizado para programar el carrito en el ESP32. Controla sensores, lógica y movimiento.",categoria: "Programación y software"},
    {name: "Python", image:"https://freesvg.org/img/387.png", descripcion:"Lenguaje usado para la aplicación de mapeo. Permite procesar y visualizar los datos del recorrido.", categoria: "Programación y software"},
    {name: "Puente H", image: "https://www.taloselectronics.com/cdn/shop/products/puente_h_doble_l298n_mexico_jalisco_guadalajara_700x700.jpg?v=1593817164" , descripcion: "Controla la dirección y velocidad de los motores. Perimte avanzar, retrooceder o girar.", categoria: "Electronica y control"},
    {name: "Motores", image: "https://media.master.com.mx/images/prods/AR-DCMOTOR.jpg", descripcion:"Generan el movimiento del carrito. Se fijaron con estaño para asegurar la conexión", categoria:"Movimiento y energía"},
    {name: "Portapilas", image: "https://www.taloselectronics.com/cdn/shop/products/porta-pilas_para_2_pilas_aa_mexico_jalisco_guadalajara_1200x1200.jpg?v=1593817026" , descripcion: "Sostiene y conecta las n¿baterías. Permite alimentar todos los componentes",  categoria:"Movimiento y energía"},
    {name: "Pilas de 3.7 V recargables", image: "https://http2.mlstatic.com/D_NQ_NP_646824-MLM105022435791_012026-O.webp", descripcion: "Proveen la energía del carrito. Permiten funcionamiento autónomo",  categoria:"Movimiento y energía" },
    {name: "Switch", image: "https://www.tecneu.com/cdn/shop/files/switch-interruptor-2-terminales-2-posiciones-10a-125v-6a-250v-445806.jpg?v=1747674618&width=1200", descripcion:"Permite encender o apagar el carrito. Controla el paso de corriente desde las baterías.",  categoria:"Movimiento y energía" },
    {name: "Sensores Opticos", image: "https://sonrobots.com/wp-content/uploads/2021/01/TCRT5000M-1.jpg", descripcion:"Detectan la línea en el suelo. Envían señales al ESP32 para corregir dirección.", categoria:"Sensores y mapeo" },
    {name: "Giroscopio", image: "https://mvelectronica.s3.us-east-2.amazonaws.com/productos/MPU6050/613fc3a977860.webp", descripcion:"Mide la orientación y los cambios de dirección del carrito. Se utilizó para mejorar la precisión del mapeo del recorrido.", categoria:"Sensores y mapeo" },
    {name: "Chasis", image: "https://tiendadeelectronica.mx/wp-content/uploads/2018/05/chasis-de-acrilico-kit-para-seguidor-de-linea.jpg", descripcion:"Estructura base del carrito. Soporta todos los componentes.", categoria: "Estructura y montaje" },
    {name: "Carcasa", image: require('../../assets/carcasa.jpeg') , descripcion:"Cubierta externa del carrito. Protege los componentes y mejora la apariencia.",  categoria: "Estructura y montaje"},
    {name: "Tornillos", image: "https://sandorobotics.com.mx/wp-content/uploads/2023/09/0J2952.1200.jpg", descripcion:"Fijan los componentes al chasis. Aseguran estabilidad.",  categoria: "Estructura y montaje" },
    {name: "Jumpers", image: "https://www.lacasadelabanda.com/wp-content/uploads/2023/03/male-male-jumpers-x10-10-cm.jpg", descripcion:"Cables de conexión entre componentes. Permiten el flujo de señales y energía.",  categoria: "Estructura y montaje" },
    {name: "Protoboard", image: "https://portalacademico.cch.unam.mx/sites/default/files/cyc1u2oa5p04e01b.jpg", descripcion: "Placa para conexiones sin soldar. Facilita pruebas del circuito.", categoria: "Estructura y montaje" },
    {name: "Estaño", image: "https://www.steren.com.mx/media/catalog/product/cache/295a12aacdcb0329a521cbf9876b29e7/image/18700f899/tubo-de-soldadura-con-aleacion-esta-o-plomo-60-40.jpg" , descripcion:"Material para unir componentes. Se usó en conexiones permanentes.", categoria: "Materiales de apoyo"},
    {name: "Cinta adhesiva", image: "https://www.steren.com.mx/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/18371c757/cinta-de-aislar-de-18-3-m.jpg", descripcion: "Se usa para fijar algunas piezas y ordenar el cableado.",categoria: "Materiales de apoyo" }
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de Materiales</Text>

            <FlatList
                data={materiales}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image 
                              source={typeof item.image === "string" ? { uri: item.image } : item.image} 
                              style={styles.image} 
                          />
                        <View style={styles.info}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style = {styles.descripcion}>{item.descripcion}</Text>
                            <Text style = {styles.categoria}>Categoria: {item.categoria}</Text>
                        </View>
                    </View>
                )}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26528F',
    paddingHorizontal: 15,
    paddingTop: 25
    },
  titulo: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: 15
    },
card: {
  flexDirection: "row", // mantiene la imagen a la izquierda y texto a la derecha
  backgroundColor: "#fff",
  borderRadius: 12,
  marginBottom: 12,
  elevation: 3,
  shadowColor: "#000",
  shadowOpacity: 0.08,
  shadowRadius: 5,
  shadowOffset: { width: 0, height: 2 },
  overflow: "hidden" // importante para que la imagen respete los bordes redondeados
},
image: {
  width: 120,          // ancho fijo para la columna de la imagen
  height: "100%",      // ocupa todo el alto de la card
  resizeMode: "cover", // se adapta al espacio sin deformarse
  borderTopLeftRadius: 12,
  borderBottomLeftRadius: 12,
  backgroundColor: "#eee"
},
info: {
  flex: 1,
  padding: 12,
  justifyContent: "center",
  alignItems: "center"
},
 name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#26528F",
    textAlign: "center"
    },
  listContainer: {
    paddingBottom: 20
    },
  descripcion: {
    fontSize: 14,
    textAlign: "center",
    fontWeight:"400",
    color: "#666"
    },
  categoria: {
    fontSize: 12, 
    textAlign: "center",
    color:"#111",
    fontWeight: "600",
    marginTop: 5
    }
});
