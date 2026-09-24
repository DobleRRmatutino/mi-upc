// Default mock data (Fictitious university student profile)
export const initialMockData = {
  student: {
    fullName: "DIEGO NICOLAS R*** R***",
    shortGreeting: "Diego Nicolas",
    degree: "ING. SISTEMAS DE INFORMACIÓN",
    campus: "Campus San Isidro",
    studentCode: "20221B076",
    tiuStudentCode: "U20221B076",
    idBanner: "N04312490",
    email: "u20221b076@upc.edu.pe",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
    cycle: "8vo Ciclo",
    turn: "Tarde / Noche"
  },
  scheduleToday: {
    dayLabel: "Hoy Jueves 24/09",
    startTime: "19:00",
    endTime: "22:59",
    course: "Gestión De Tecnologias De Información",
    nrc: "9117",
    classroom: "Salón: A-405",
    campus: "Campus San Isidro",
    modality: "PRESENCIAL",
    professor: "Ing. Carlos Mendoza Rios"
  },
  scheduleTomorrow: {
    dayLabel: "Mañana Viernes 25/09",
    startTime: "15:00",
    endTime: "18:00",
    course: "Arquitectura De Software",
    nrc: "9342",
    classroom: "Laboratorio: L-204",
    campus: "Campus San Isidro",
    modality: "PRESENCIAL",
    professor: "Mg. Patricia Vega Salazar"
  },
  courses: [
    {
      id: "course-1",
      name: "Gestión de Tecnologías de Información",
      code: "IS74",
      nrc: "9117",
      modality: "PRESENCIAL",
      credits: 4,
      professor: "Ing. Carlos Mendoza Rios",
      classroom: "A-405 (Pabellón A)",
      schedule: "Jueves 19:00 - 22:59",
      attendance: "96%",
      average: "17.4",
      formula: "PF = 0.20*PC1 + 0.20*PC2 + 0.25*TP + 0.35*EB"
    },
    {
      id: "course-2",
      name: "Arquitectura de Software",
      code: "IS81",
      nrc: "9342",
      modality: "PRESENCIAL",
      credits: 4,
      professor: "Mg. Patricia Vega Salazar",
      classroom: "L-204 (Lab Sistemas)",
      schedule: "Viernes 15:00 - 18:00",
      attendance: "100%",
      average: "18.2",
      formula: "PF = 0.30*TP1 + 0.30*TP2 + 0.40*TF"
    },
    {
      id: "course-3",
      name: "Seguridad Informática y Ciberdefensa",
      code: "IS92",
      nrc: "8451",
      modality: "VIRTUAL ASÍNCRONO",
      credits: 3,
      professor: "Dra. Elena Alarcón",
      classroom: "Aula Blackboard",
      schedule: "Sábados 09:00 - 12:00",
      attendance: "100%",
      average: "16.8",
      formula: "PF = 0.25*CL1 + 0.25*CL2 + 0.50*PROY"
    }
  ],
  services: [
    {
      id: "srv-1",
      title: "Aula virtual",
      category: "Académico",
      badge: "Bb",
      color: "#212121",
      type: "blackboard",
      link: "https://blackboard.upc.edu.pe"
    },
    {
      id: "srv-2",
      title: "Explora UPC",
      category: "Recursos",
      badge: "🔍",
      color: "#2563EB",
      type: "search",
      link: "#"
    },
    {
      id: "srv-3",
      title: "TIENDA ONLINE UPC",
      category: "Compras",
      badge: "🛒",
      color: "#D946EF",
      type: "shop",
      link: "#"
    },
    {
      id: "srv-4",
      title: "Biblioteca Virtual",
      category: "Investigación",
      badge: "📚",
      color: "#059669",
      type: "library",
      link: "#"
    },
    {
      id: "srv-5",
      title: "Trámites Digitales",
      category: "Gestión",
      badge: "📄",
      color: "#D97706",
      type: "paperwork",
      link: "#"
    }
  ]
};
