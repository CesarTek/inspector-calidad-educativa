import direccion from "../assets/escenas/direccion.png";
import aula1 from "../assets/escenas/aula1.png";
import aula2 from "../assets/escenas/aula2.png";
import aula3 from "../assets/escenas/aula3.png";
import biblioteca from "../assets/escenas/biblioteca.png";
import laboratorio from "../assets/escenas/laboratorio.png";
import docentes from "../assets/escenas/docentes.png";
import patio from "../assets/escenas/patio.png";
import enfermeria from "../assets/escenas/enfermeria.png";
import taller from "../assets/escenas/taller.png";

const preguntas = [
  {
    id: 1,
    lugar: "Dirección",
    imagen: direccion,
    descripcion: "No existen criterios claros para calificar a los estudiantes.",
    pregunta: "¿Qué principio de evaluación se incumple?",
    opciones: [
      "Transparencia",
      "Objetividad",
      "Validez"
    ],
    correcta: "Transparencia",
    explicacion:
      "Los estudiantes deben conocer previamente los criterios con los que serán evaluados."
  },

  {
    id: 2,
    lugar: "Aula 1",
    imagen: aula1,
    descripcion: "El docente favorece a ciertos estudiantes al momento de calificar.",
    pregunta: "¿Qué principio se incumple?",
    opciones: [
      "Objetividad",
      "Continuidad",
      "Equidad"
    ],
    correcta: "Objetividad",
    explicacion:
      "La evaluación debe basarse en el desempeño y no en preferencias personales."
  },

  {
    id: 3,
    lugar: "Aula 2",
    imagen: aula2,
    descripcion: "Durante toda la gestión solo se realiza un examen final.",
    pregunta: "¿Qué principio se incumple?",
    opciones: [
      "Continuidad",
      "Validez",
      "Objetividad"
    ],
    correcta: "Continuidad",
    explicacion:
      "La evaluación debe realizarse durante todo el proceso educativo."
  },

  {
    id: 4,
    lugar: "Aula 3",
    imagen: aula3,
    descripcion: "El docente brinda comentarios y sugerencias después de cada actividad.",
    pregunta: "¿Qué principio fortalece?",
    opciones: [
      "Formatividad",
      "Confiabilidad",
      "Validez"
    ],
    correcta: "Formatividad",
    explicacion:
      "La retroalimentación ayuda al estudiante a mejorar continuamente."
  },

  {
    id: 5,
    lugar: "Biblioteca",
    imagen: biblioteca,
    descripcion: "La biblioteca permanece cerrada la mayor parte del tiempo.",
    pregunta: "¿Qué aspecto de calidad educativa se ve afectado?",
    opciones: [
      "Recursos educativos",
      "Objetividad",
      "Transparencia"
    ],
    correcta: "Recursos educativos",
    explicacion:
      "Los recursos educativos deben estar disponibles para apoyar el aprendizaje."
  },

  {
    id: 6,
    lugar: "Laboratorio",
    imagen: laboratorio,
    descripcion: "Las computadoras del laboratorio no funcionan.",
    pregunta: "¿Qué aspecto de calidad educativa se ve afectado?",
    opciones: [
      "Infraestructura",
      "Equidad",
      "Formatividad"
    ],
    correcta: "Infraestructura",
    explicacion:
      "La infraestructura adecuada es esencial para un aprendizaje de calidad."
  },

  {
    id: 7,
    lugar: "Sala de Docentes",
    imagen: docentes,
    descripcion: "Los profesores participan constantemente en capacitaciones.",
    pregunta: "¿Esta situación representa?",
    opciones: [
      "Fortaleza",
      "Debilidad",
      "Amenaza"
    ],
    correcta: "Fortaleza",
    explicacion:
      "La actualización profesional mejora la calidad de la enseñanza."
  },

  {
    id: 8,
    lugar: "Patio",
    imagen: patio,
    descripcion: "La institución cuenta con rampas para estudiantes con discapacidad.",
    pregunta: "¿Qué principio favorece?",
    opciones: [
      "Equidad",
      "Objetividad",
      "Validez"
    ],
    correcta: "Equidad",
    explicacion:
      "La equidad garantiza igualdad de oportunidades para todos."
  },

  {
    id: 9,
    lugar: "Enfermería",
    imagen: enfermeria,
    descripcion: "No existe atención básica para emergencias estudiantiles.",
    pregunta: "¿Qué aspecto se ve afectado?",
    opciones: [
      "Bienestar estudiantil",
      "Continuidad",
      "Validez"
    ],
    correcta: "Bienestar estudiantil",
    explicacion:
      "La seguridad y salud de los estudiantes forman parte de la calidad educativa."
  },

  {
    id: 10,
    lugar: "Taller Tecnológico",
    imagen: taller,
    descripcion: "Los estudiantes desarrollan proyectos reales relacionados con su profesión.",
    pregunta: "¿Qué característica de calidad educativa se fortalece?",
    opciones: [
      "Pertinencia",
      "Objetividad",
      "Confiabilidad"
    ],
    correcta: "Pertinencia",
    explicacion:
      "Los aprendizajes se relacionan con necesidades reales del entorno."
  }
];

export default preguntas;