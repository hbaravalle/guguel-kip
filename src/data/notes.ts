import type { Note } from "@/types/note";

export const initialNotes: Note[] = [
    {
        id: "1",
        title: "Lista del súper",
        body: "Yerba, pan, queso, tomates y algo dulce para el mate de la tarde.",
        color: "yellow",
    },
    {
        id: "2",
        body: "Llamar al dentista el martes.",
        color: "paper",
    },
    {
        id: "3",
        title: "Clase 4 · useEffect",
        body: "Mount → efecto. Update → cleanup + efecto. Unmount → cleanup. Mostrarlo con el toast: aparece, espera 4 segundos y se va solo. ¿Qué pasa si borro dos notas seguidas?",
        color: "blue",
    },
    {
        id: "4",
        title: "Ideas para el finde",
        body: "Feria de San Telmo, bici por la costanera, terminar el libro.",
        color: "red",
    },
    {
        id: "5",
        title: "Wifi casa",
        body: "Red: chango-5G\nClave: está pegada en la heladera",
        color: "paper",
    },
    {
        id: "6",
        title: "Receta de chipá",
        body: "500 g de almidón de mandioca, 250 g de queso, 2 huevos, 100 ml de leche y 50 g de manteca. Horno fuerte, 20 minutos.",
        color: "yellow",
    },
    {
        id: "7",
        body: "Devolverle el taladro a Marta.",
        color: "blue",
    },
    {
        id: "8",
        title: "Masonry",
        body: "Cada card mide distinto. Para ubicarla hay que saber su alto real, y eso solo se sabe después de pintar… o justo antes, con useLayoutEffect.",
        color: "paper",
    },
    {
        id: "9",
        title: "Pendientes trabajo",
        body: "Revisar PR del carrito\nPreparar demo del viernes\nResponder mails de soporte",
        color: "red",
    },
    {
        id: "10",
        title: "Frase",
        body: "“Primero hacelo funcionar, después hacelo lindo, después hacelo rápido.”",
        color: "yellow",
    },
    {
        id: "11",
        title: "Libros",
        body: "El nombre del viento · Rayuela · Clean Code (sí, otra vez)",
        color: "blue",
    },
    {
        id: "12",
        title: "Turno médico",
        body: "Jueves 9:30, llevar estudios.",
        color: "paper",
    },
    {
        id: "13",
        title: "Viaje a Córdoba",
        body: "Sacar pasajes, reservar cabaña en Villa General Belgrano, avisar en el trabajo y comprar repelente.",
        color: "red",
    },
    {
        id: "14",
        body: "Comprar pilas AA",
        color: "yellow",
    },
    {
        id: "15",
        title: "useCallback",
        body: "Si la función cambia en cada render, React.memo no sirve de nada. Medirlo con el contador de renders.",
        color: "blue",
    },
    {
        id: "16",
        title: "Plantas",
        body: "Regar el potus los lunes. El cactus, una vez al mes y con culpa.",
        color: "paper",
    },
    {
        id: "17",
        title: "Playlist para codear",
        body: "Lo-fi, Bonobo, Tycho y el disco nuevo de Bándalos Chinos.",
        color: "yellow",
    },
    {
        id: "18",
        title: "Cumple de Juli",
        body: "Sábado 20 h. Llevar helado.",
        color: "red",
    },
    {
        id: "19",
        title: "Gastos del mes",
        body: "Alquiler, expensas, luz, gas, internet, gimnasio y esa suscripción que nunca uso.",
        color: "paper",
    },
    {
        id: "20",
        title: "Reunión de equipo",
        body: "Hablar de deploy, vacaciones y quién trae facturas.",
        color: "blue",
    },
    {
        id: "21",
        title: "Atajos de VS Code",
        body: "⌘D seleccionar la siguiente · ⌘P abrir archivo · ⌥↑ mover línea",
        color: "yellow",
    },
    {
        id: "22",
        body: "Probar el café nuevo de la esquina ☕",
        color: "blue",
    },
];
