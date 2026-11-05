export const materias = ["Matemáticas", "Español", "Ciencias", "Historia", "Inglés"];

export const datosAlumno = {
  nombrePersonaje: "Chispa",
  nivelGeneral: 8,
  experienciaActual: 68,
  experienciaSiguiente: 100,
  niveles: [
    { materia: "Matemáticas", nivel: 7, progreso: 72, color: "bar-violet" },
    { materia: "Español", nivel: 9, progreso: 88, color: "bar-coral" },
    { materia: "Ciencias", nivel: 6, progreso: 61, color: "bar-green" },
    { materia: "Historia", nivel: 5, progreso: 54, color: "bar-yellow" },
    { materia: "Inglés", nivel: 7, progreso: 76, color: "bar-blue" },
  ],
};

export const regiones = [
  { materia: "Matemáticas", icono: "∑", color: "region-violet", retos: [
    { titulo: "Calcula la altura de la torre de vigilancia", estado: "Completado" },
    { titulo: "Diseña un puente para cruzar el río", estado: "Disponible" },
    { titulo: "Traza la ruta más corta al campamento", estado: "Bloqueado" },
  ] },
  { materia: "Ciencias", icono: "✳", color: "region-green", retos: [
    { titulo: "Construye un filtro para el manantial", estado: "Disponible" },
    { titulo: "¿Qué plantas viven en cada zona?", estado: "Bloqueado" },
  ] },
  { materia: "Historia", icono: "⌂", color: "region-yellow", retos: [
    { titulo: "Reconstruye el camino de un mensajero", estado: "Disponible" },
    { titulo: "Ordena las pistas del antiguo mapa", estado: "Bloqueado" },
  ] },
  { materia: "Español", icono: "¶", color: "region-coral", retos: [
    { titulo: "Escribe una señal para los viajeros", estado: "Completado" },
    { titulo: "Cuenta la leyenda del bosque", estado: "Disponible" },
  ] },
  { materia: "Inglés", icono: "A", color: "region-blue", retos: [
    { titulo: "Guía a una persona visitante por la comunidad", estado: "Disponible" },
    { titulo: "Nombra los objetos del taller", estado: "Bloqueado" },
  ] },
];

export const misionesSemanales = [
  { titulo: "Mide las sombras de tu comunidad", materia: "Matemáticas · 2.º", fecha: "Lunes 19 de octubre" },
  { titulo: "Entrevista a alguien de tu familia", materia: "Historia · 1.º", fecha: "Miércoles 21 de octubre" },
  { titulo: "Un mensaje para cuidar el agua", materia: "Español · 3.º", fecha: "Viernes 23 de octubre" },
];

export const recompensas = [
  { icono: "✦", titulo: "Ojos de explorador", descripcion: "Completaste 5 retos de observación.", color: "reward-yellow" },
  { icono: "♧", titulo: "Amigo del bosque", descripcion: "Ayudaste a recuperar el manantial.", color: "reward-green" },
  { icono: "↗", titulo: "Paso a paso", descripcion: "Practicaste durante 3 semanas.", color: "reward-violet" },
];

export const tareasIniciales = [
  { materia: "Matemáticas", tema: "Proporcionalidad", descripcion: "Resuelve situaciones de escala en un mapa.", entrega: "22 oct 2026", grado: "2.º B" },
  { materia: "Ciencias", tema: "Ecosistemas locales", descripcion: "Identifica relaciones entre seres vivos.", entrega: "24 oct 2026", grado: "1.º A" },
  { materia: "Español", tema: "Textos informativos", descripcion: "Escribe una ficha sobre una especie local.", entrega: "28 oct 2026", grado: "3.º A" },
];

export const grupos = [
  { nombre: "1.º A", alumnos: 28, materia: "Ciencias y Español" },
  { nombre: "2.º B", alumnos: 31, materia: "Matemáticas e Inglés" },
  { nombre: "3.º A", alumnos: 26, materia: "Español e Historia" },
];

export const reportesDocente = [
  { alumno: "Sofía R.", materia: "Matemáticas", autonomo: "En avance", asistido: "Consolidado", ilusion: "Sin señales" },
  { alumno: "Diego M.", materia: "Ciencias", autonomo: "Consolidado", asistido: "En avance", ilusion: "Revisar" },
  { alumno: "Valentina C.", materia: "Español", autonomo: "Consolidado", asistido: "Consolidado", ilusion: "Sin señales" },
  { alumno: "Mateo G.", materia: "Historia", autonomo: "Por iniciar", asistido: "En avance", ilusion: "Sin señales" },
  { alumno: "Camila P.", materia: "Inglés", autonomo: "En avance", asistido: "Consolidado", ilusion: "Revisar" },
  { alumno: "Emiliano T.", materia: "Matemáticas", autonomo: "Consolidado", asistido: "En avance", ilusion: "Sin señales" },
];

export const reporteFamiliar = [
  { materia: "Matemáticas", color: "bar-violet", autonomo: "En avance", asistido: "Consolidado", ilusion: "Sin señales", explicacionAutonomo: "Resuelve retos de proporciones por su cuenta.", explicacionAsistido: "Avanza con pistas en geometría.", explicacionIlusion: "No observamos señales de confundir una pista con dominar el tema.", reforzar: ["Perímetro y área", "Escalas en mapas"] },
  { materia: "Español", color: "bar-coral", autonomo: "Consolidado", asistido: "En avance", ilusion: "Sin señales", explicacionAutonomo: "Comprende y escribe textos informativos sin apoyo.", explicacionAsistido: "Practica la revisión de borradores con guía.", explicacionIlusion: "No observamos señales de ilusión de aprendizaje.", reforzar: ["Uso de conectores", "Revisión de borradores"] },
  { materia: "Ciencias", color: "bar-green", autonomo: "En avance", asistido: "En avance", ilusion: "Atención", explicacionAutonomo: "Explica algunos conceptos con ejemplos propios.", explicacionAsistido: "En otros temas todavía necesita pistas.", explicacionIlusion: "Conviene comprobar que pueda explicar el tema con sus propias palabras.", reforzar: ["Cadenas alimentarias", "Ciclo del agua"] },
  { materia: "Historia", color: "bar-yellow", autonomo: "Por iniciar", asistido: "En avance", ilusion: "Sin señales", explicacionAutonomo: "Aún no hay suficientes retos independientes para valorar este avance.", explicacionAsistido: "Reconoce hechos cuando cuenta con una guía.", explicacionIlusion: "Sin señales por ahora.", reforzar: ["Líneas del tiempo", "Fuentes históricas"] },
  { materia: "Inglés", color: "bar-blue", autonomo: "Consolidado", asistido: "Consolidado", ilusion: "Sin señales", explicacionAutonomo: "Usa vocabulario cotidiano en retos por su cuenta.", explicacionAsistido: "Practica diálogos nuevos con apoyo.", explicacionIlusion: "No observamos señales de ilusión de aprendizaje.", reforzar: ["Preguntas en presente", "Vocabulario de la comunidad"] },
];

export const alertasOrientacion = [
  { alumno: "Alumno A. · 1.º A", categoria: "Participación", urgencia: "Media", fecha: "14 oct 2026", detalle: "Disminución reciente en la participación en actividades." },
  { alumno: "Alumno B. · 2.º B", categoria: "Avance académico", urgencia: "Alta", fecha: "13 oct 2026", detalle: "Requiere acompañamiento en más de una materia." },
  { alumno: "Alumno C. · 3.º A", categoria: "Asistencia", urgencia: "Baja", fecha: "12 oct 2026", detalle: "Seguimiento sugerido por inasistencias recientes." },
];
