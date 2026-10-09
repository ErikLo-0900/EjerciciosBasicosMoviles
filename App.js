// ==============================================================================
// VISOR Y LANZADOR INTERACTIVO DE EJERCICIOS - REACT NATIVE (UNIDAD 2)
// ==============================================================================
// Este componente principal permite explorar, ejecutar y probar en vivo TODOS
// los ejercicios y retos propuestos de los dos documentos PDF del curso.
// Puedes alternar entre ellos sin reiniciar el servidor de Expo.
// ==============================================================================

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// --- IMPORTACIÓN DE LOS EJERCICIOS DE Doc 1 ---
import HolaMundoBasico from './Doc1_Introduccion_y_Entorno/01_HolaMundo_Basico/App';
import HolaMundoEstilos from './Doc1_Introduccion_y_Entorno/02_HolaMundo_Estilos/App';
import HolaMundoBloques from './Doc1_Introduccion_y_Entorno/03_HolaMundo_Bloques_Boton/App';
import HolaMundoCompleto from './Doc1_Introduccion_y_Entorno/04_HolaMundo_Completo_Imagen/App';
import Reto1ComponentesNuevos from './Doc1_Introduccion_y_Entorno/06_Reto1_Componentes_Nuevos/App';
import Reto2TypeScript from './Doc1_Introduccion_y_Entorno/07_Reto2_TypeScript/App';

// --- IMPORTACIÓN DE LOS EJERCICIOS DE Doc 2 ---
import MostrarMensaje from './Doc2_Manejo_de_Eventos/01_MostrarMensaje/App';
import BotonPersonalizado from './Doc2_Manejo_de_Eventos/02_MostrarMensaje_BotonPersonalizado/App';
import Contador from './Doc2_Manejo_de_Eventos/03_Contador/App';
import SaludoTextInput from './Doc2_Manejo_de_Eventos/04_Saludo_TextInput/App';
import OperacionesSuma from './Doc2_Manejo_de_Eventos/05_Operaciones_Suma/App';
import OperacionesCalculadora from './Doc2_Manejo_de_Eventos/06_Operaciones_Calculadora_4Operaciones/App';
import SwitchLampara from './Doc2_Manejo_de_Eventos/07_Switch_Lampara/App';
import Propuesto1Switch from './Doc2_Manejo_de_Eventos/08_Propuesto1_Operaciones_con_Switch/App';
import Propuesto2TypeScript from './Doc2_Manejo_de_Eventos/09_Propuesto2_TypeScript/App';
import Propuesto3Personal from './Doc2_Manejo_de_Eventos/10_Propuesto3_App_Personal_Integradora/App';

// Catálogo estructurado de todos los ejercicios
const CATALOGO_EJERCICIOS = [
  // --- DOC 1 ---
  {
    id: 'pdf1_01',
    categoria: 'PDF 1',
    titulo: '1. Hola Mundo Básico',
    pagina: 'Pág. 10',
    descripcion: 'Estructura inicial en blanco con View, Text, StatusBar y StyleSheet centrado.',
    explicacion: 'Muestra el esqueleto mínimo de una app React Native con Expo. Utiliza View como contenedor (similar a div en HTML), Text para imprimir cadenas en pantalla, y StyleSheet para estilos.',
    componente: HolaMundoBasico,
  },
  {
    id: 'pdf1_02',
    categoria: 'PDF 1',
    titulo: '2. Personalización y Estilos',
    pagina: 'Pág. 14, 16',
    descripcion: 'Cambio de fondo a celeste (#add8e6), varios textos y estilos de fuente (fontSize, color).',
    explicacion: 'Introduce la propiedad backgroundColor para el fondo general y un estilo textStyle con fontSize: 24 y color: blue aplicado a un <Text>.',
    componente: HolaMundoEstilos,
  },
  {
    id: 'pdf1_03',
    categoria: 'PDF 1',
    titulo: '3. Segundo Bloque y Botón',
    pagina: 'Pág. 18-20',
    descripcion: 'Contenedores anidados, padding, borderRadius y botón interactivo con alerta.',
    explicacion: 'Demuestra cómo anidar una <View> dentro de otra con fondo amarillo y bordes redondeados. Incluye el componente <Button> nativo con el evento onPress ejecutando una alerta.',
    componente: HolaMundoBloques,
  },
  {
    id: 'pdf1_04',
    categoria: 'PDF 1',
    titulo: '4. Ejercicio Completo con Imagen',
    pagina: 'Pág. 22-25',
    descripcion: 'Inclusión de imágenes locales con <Image source={require(...)}>, resizeMode y bordes.',
    explicacion: 'Enseña a importar el componente Image y cargar archivos estáticos desde la carpeta assets mediante require("./assets/camaleon.jpg"). Requiere width y height obligatorios.',
    componente: HolaMundoCompleto,
  },
  {
    id: 'pdf1_reto1',
    categoria: 'PDF 1',
    titulo: '5. Reto 1: Componentes Nuevos',
    pagina: 'Pág. 26 (Reto)',
    descripcion: 'Ampliación con componentes de los Anexos: ScrollView, TextInput, TouchableOpacity, Switch y Spinner.',
    explicacion: 'Solución del Reto 1: Se integran ScrollView para desplazamiento seguro, TextInput para captura de texto, Switch para alternancia booleana, TouchableOpacity con respuesta táctil y ActivityIndicator de carga.',
    componente: Reto1ComponentesNuevos,
  },
  {
    id: 'pdf1_reto2',
    categoria: 'PDF 1',
    titulo: '6. Reto 2: Proyecto TypeScript',
    pagina: 'Pág. 26 (Reto)',
    descripcion: 'Recreación del ejercicio en TypeScript (App.tsx) con interfaces y tipado estático seguro.',
    explicacion: 'Solución del Reto 2: Código compilado con TypeScript. Define una interfaz UsuarioPerfil, tipado explícito en estados useState<number> y funciones con tipos de retorno :void.',
    componente: Reto2TypeScript,
  },

  // --- DOC 2 ---
  {
    id: 'pdf2_01',
    categoria: 'PDF 2',
    titulo: '7. Mostrar Mensaje (useState)',
    pagina: 'Pág. 4-6',
    descripcion: 'Uso del hook useState para almacenar y actualizar un mensaje al presionar un botón.',
    explicacion: 'Introduce el concepto de estado en React. const [message, setMessage] = useState(""). Al pulsar el botón, setMessage actualiza la variable y React repinta la interfaz en pantalla.',
    componente: MostrarMensaje,
  },
  {
    id: 'pdf2_02',
    categoria: 'PDF 2',
    titulo: '8. Botón con TouchableOpacity',
    pagina: 'Pág. 7',
    descripcion: 'Personalización avanzada de botones con TouchableOpacity y efecto visual de opacidad.',
    explicacion: 'Sustituye el Button rígido por un TouchableOpacity con fondo azul, padding y esquinas redondeadas. Ofrece respuesta táctil bajando la opacidad al toque.',
    componente: BotonPersonalizado,
  },
  {
    id: 'pdf2_03',
    categoria: 'PDF 2',
    titulo: '9. Contador Numérico',
    pagina: 'Pág. 8-10',
    descripcion: 'Manejo de estado numérico que se incrementa en 1 en cada pulsación del botón.',
    explicacion: 'Muestra un contador reactivo: const [count, setCount] = useState(0). La función updateCount ejecuta setCount(count + 1) e interpola {count} dentro del Text.',
    componente: Contador,
  },
  {
    id: 'pdf2_04',
    categoria: 'PDF 2',
    titulo: '10. Saludo con TextInput',
    pagina: 'Pág. 11-12',
    descripcion: 'Captura de texto con TextInput y evento onChangeText para saludo dinámico.',
    explicacion: 'Enseña el evento onChangeText, el cual recibe directamente el texto tipeado por el usuario y actualiza el estado. Al presionar Saludar, muestra un saludo personalizado.',
    componente: SaludoTextInput,
  },
  {
    id: 'pdf2_05',
    categoria: 'PDF 2',
    titulo: '11. Operaciones: Suma Básica',
    pagina: 'Pág. 13-15',
    descripcion: 'Entrada con keyboardType="numeric", validación con isNaN y cálculo de suma.',
    explicacion: 'Usa keyboardType="numeric" para forzar teclado numérico en móvil. Convierte con parseFloat() y comprueba con !isNaN() antes de sumar.',
    componente: OperacionesSuma,
  },
  {
    id: 'pdf2_06',
    categoria: 'PDF 2',
    titulo: '12. Calculadora: 4 Operaciones',
    pagina: 'Pág. 15 (Propuesto)',
    descripcion: 'Solución al ejercicio de pág. 15: Suma (+), Resta (-), Multiplicación (×) y División (÷).',
    explicacion: 'Amplía el ejemplo 4 agregando 3 operaciones matemáticas adicionales. Maneja validación de división entre cero y formato limpio de resultados.',
    componente: OperacionesCalculadora,
  },
  {
    id: 'pdf2_07',
    categoria: 'PDF 2',
    titulo: '13. Switch: Lámpara On/Off',
    pagina: 'Pág. 16-17',
    descripcion: 'Control de círculo simulando una lámpara (amarilla/gris) con evento onValueChange.',
    explicacion: 'Usa el componente Switch con props value y onValueChange={setIsOn}. El color del círculo cambia dinámicamente según si isOn es true (yellow) o false (gray).',
    componente: SwitchLampara,
  },
  {
    id: 'pdf2_08',
    categoria: 'PDF 2',
    titulo: '14. Propuesto 1: Operaciones con Switch',
    pagina: 'Pág. 18 (Propuesto 1)',
    descripcion: 'Sustitución del botón por un interruptor Switch para activar y controlar el cálculo.',
    explicacion: 'Resuelve el Ejercicio 1 de la pág. 18. Dos números de entrada y un Switch interactivo que al conmutarse a encendido realiza y valida la operación matemática.',
    componente: Propuesto1Switch,
  },
  {
    id: 'pdf2_09',
    categoria: 'PDF 2',
    titulo: '15. Propuesto 2: Contador TypeScript',
    pagina: 'Pág. 18 (Propuesto 2)',
    descripcion: 'Contador avanzado con sumar, restar y resetear desarrollado con TypeScript (.tsx).',
    explicacion: 'Resuelve el Ejercicio 2 de la pág. 18. Código tipado con TypeScript, botones de +1, -1 y reset, cambio dinámico de color según signo y tipado explícito.',
    componente: Propuesto2TypeScript,
  },
  {
    id: 'pdf2_10',
    categoria: 'PDF 2',
    titulo: '16. Propuesto 3: App Integradora',
    pagina: 'Pág. 18 (Propuesto 3)',
    descripcion: 'App Personal: Perfil con Modo Oscuro, View, Text, TextInput, Button, Switch y todos los eventos.',
    explicacion: 'Resuelve el Ejercicio 3 de la pág. 18. Integra en una sola app práctica todos los elementos: View, Text, TextInput, Button, Switch, StyleSheet, useState y eventos onPress, onChangeText y onValueChange.',
    componente: Propuesto3Personal,
  },
];

export default function App() {
  const [ejercicioSeleccionado, setEjercicioSeleccionado] = useState(null);
  const [filtroCategoria, setFiltroCategoria] = useState('TODOS');
  const [modalExplicacionVisible, setModalExplicacionVisible] = useState(false);

  // Filtrado de lista según categoría seleccionada
  const ejerciciosFiltrados = CATALOGO_EJERCICIOS.filter((item) => {
    if (filtroCategoria === 'TODOS') return true;
    return item.categoria === filtroCategoria;
  });

  // Si hay un ejercicio activo, renderizar la vista de ejecución
  if (ejercicioSeleccionado) {
    const ComponenteActivo = ejercicioSeleccionado.componente;

    return (
      <SafeAreaView style={styles.pantallaEjecucion}>
        {/* Barra superior de control */}
        <View style={styles.barraControl}>
          <TouchableOpacity
            style={styles.botonVolver}
            onPress={() => setEjercicioSeleccionado(null)}
          >
            <Text style={styles.textoBotonVolver}>⬅ Menú</Text>
          </TouchableOpacity>

          <View style={styles.infoTituloBarra}>
            <Text style={styles.tituloBarra} numberOfLines={1}>
              {ejercicioSeleccionado.titulo}
            </Text>
            <Text style={styles.paginaBarra}>{ejercicioSeleccionado.pagina}</Text>
          </View>

          <TouchableOpacity
            style={styles.botonInfo}
            onPress={() => setModalExplicacionVisible(true)}
          >
            <Text style={styles.textoBotonInfo}>ℹ Info</Text>
          </TouchableOpacity>
        </View>

        {/* Modal de información y notas del PDF */}
        <Modal
          visible={modalExplicacionVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setModalExplicacionVisible(false)}
        >
          <View style={styles.modalFondo}>
            <View style={styles.modalCaja}>
              <Text style={styles.modalTitulo}>{ejercicioSeleccionado.titulo}</Text>
              <Text style={styles.modalSubtitulo}>Referencia: {ejercicioSeleccionado.pagina}</Text>

              <ScrollView style={styles.modalScroll}>
                <Text style={styles.modalTextoSecundario}>Resumen:</Text>
                <Text style={styles.modalTexto}>{ejercicioSeleccionado.descripcion}</Text>

                <Text style={[styles.modalTextoSecundario, { marginTop: 12 }]}>
                  Explicación teórica y funcionamiento:
                </Text>
                <Text style={styles.modalTexto}>{ejercicioSeleccionado.explicacion}</Text>
              </ScrollView>

              <TouchableOpacity
                style={styles.modalBotonCerrar}
                onPress={() => setModalExplicacionVisible(false)}
              >
                <Text style={styles.modalTextoBotonCerrar}>Entendido / Volver</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Renderizado en vivo del componente seleccionado */}
        <View style={styles.areaComponente}>
          <ComponenteActivo />
        </View>

        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }

  // Vista principal: Catálogo de ejercicios
  return (
    <SafeAreaView style={styles.contenedorPrincipal}>
      {/* Encabezado Principal */}
      <View style={styles.encabezado}>
        <Text style={styles.encabezadoSub}>PROGRAMACIÓN DE DISPOSITIVOS MÓVILES</Text>
        <Text style={styles.encabezadoTitulo}>Unidad 2: Entorno y Eventos</Text>
        <Text style={styles.encabezadoAutor}>Prof. Jesús Minero • Solución Completa de Ejercicios</Text>

        {/* Filtros de Categoría */}
        <View style={styles.contenedorFiltros}>
          <TouchableOpacity
            style={[styles.botonFiltro, filtroCategoria === 'TODOS' && styles.botonFiltroActivo]}
            onPress={() => setFiltroCategoria('TODOS')}
          >
            <Text style={[styles.textoFiltro, filtroCategoria === 'TODOS' && styles.textoFiltroActivo]}>
              Todos (16)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.botonFiltro, filtroCategoria === 'PDF 1' && styles.botonFiltroActivo]}
            onPress={() => setFiltroCategoria('PDF 1')}
          >
            <Text style={[styles.textoFiltro, filtroCategoria === 'PDF 1' && styles.textoFiltroActivo]}>
              PDF 1: Entorno (6)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.botonFiltro, filtroCategoria === 'PDF 2' && styles.botonFiltroActivo]}
            onPress={() => setFiltroCategoria('PDF 2')}
          >
            <Text style={[styles.textoFiltro, filtroCategoria === 'PDF 2' && styles.textoFiltroActivo]}>
              PDF 2: Eventos (10)
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Lista de Tarjetas de Ejercicios */}
      <ScrollView contentContainerStyle={styles.listaEjercicios}>
        {ejerciciosFiltrados.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.tarjeta}
            activeOpacity={0.8}
            onPress={() => setEjercicioSeleccionado(item)}
          >
            <View style={styles.tarjetaTop}>
              <View style={styles.badgeCategoria}>
                <Text style={styles.badgeTexto}>{item.categoria}</Text>
              </View>
              <Text style={styles.tarjetaPagina}>{item.pagina}</Text>
            </View>

            <Text style={styles.tarjetaTitulo}>{item.titulo}</Text>
            <Text style={styles.tarjetaDescripcion}>{item.descripcion}</Text>

            <View style={styles.tarjetaFooter}>
              <Text style={styles.tarjetaBotonTexto}>▶ Probar y Ver Código</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

// Estilos visuales
const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },
  encabezado: {
    backgroundColor: '#1e293b',
    paddingTop: 45,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  encabezadoSub: {
    color: '#94a3b8',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  encabezadoTitulo: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 4,
  },
  encabezadoAutor: {
    color: '#cbd5e1',
    fontSize: 13,
    marginTop: 2,
    marginBottom: 16,
  },
  contenedorFiltros: {
    flexDirection: 'row',
    gap: 8,
  },
  botonFiltro: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#334155',
  },
  botonFiltroActivo: {
    backgroundColor: '#38bdf8',
  },
  textoFiltro: {
    color: '#cbd5e1',
    fontSize: 12,
    fontWeight: '600',
  },
  textoFiltroActivo: {
    color: '#0f172a',
    fontWeight: 'bold',
  },
  listaEjercicios: {
    padding: 16,
    paddingBottom: 40,
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  tarjetaTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  badgeCategoria: {
    backgroundColor: '#e0f2fe',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  badgeTexto: {
    color: '#0284c7',
    fontSize: 11,
    fontWeight: 'bold',
  },
  tarjetaPagina: {
    color: '#64748b',
    fontSize: 12,
    fontWeight: '500',
  },
  tarjetaTitulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 6,
  },
  tarjetaDescripcion: {
    fontSize: 13.5,
    color: '#475569',
    lineHeight: 18,
    marginBottom: 12,
  },
  tarjetaFooter: {
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    paddingTop: 10,
    alignItems: 'flex-end',
  },
  tarjetaBotonTexto: {
    color: '#2563eb',
    fontSize: 13,
    fontWeight: 'bold',
  },
  pantallaEjecucion: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  barraControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0f172a',
    paddingTop: 40,
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  botonVolver: {
    backgroundColor: '#334155',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  textoBotonVolver: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  infoTituloBarra: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  tituloBarra: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  paginaBarra: {
    color: '#94a3b8',
    fontSize: 11,
  },
  botonInfo: {
    backgroundColor: '#0284c7',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  textoBotonInfo: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  areaComponente: {
    flex: 1,
  },
  modalFondo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalCaja: {
    width: '90%',
    maxHeight: '75%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    elevation: 5,
  },
  modalTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 4,
  },
  modalSubtitulo: {
    fontSize: 13,
    color: '#0284c7',
    fontWeight: '600',
    marginBottom: 12,
  },
  modalScroll: {
    marginVertical: 10,
  },
  modalTextoSecundario: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#475569',
    marginBottom: 4,
  },
  modalTexto: {
    fontSize: 14,
    color: '#334155',
    lineHeight: 20,
  },
  modalBotonCerrar: {
    backgroundColor: '#0f172a',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  modalTextoBotonCerrar: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
