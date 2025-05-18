import React from "react";
import CourseCard from "../components/CourseCard.jsx";
import imgTaller from "../assets/taller.jpg";
import imgPractica from "../assets/practica.jpg";
import imgTecnologia from "../assets/tecnologia.jpg";

const courses = [
  {
    key: "Taller",
    title: "Taller III",
    description:
      "Proyectos donde exploro prácticas y retos de programación en JavaScript y React.",
    image: imgTaller,
    route: "/posts/Taller",
  },
  {
    key: "Práctica Supervisada",
    title: "Práctica Supervisada",
    description:
      "Desarrollo de proyectos guiado por un mentor y refuerzo de mis habilidades en programación.",
    image: imgPractica,
    route: "/posts/Práctica%20Supervisada",
  },
  {
    key: "Tecnología",
    title: "Tecnología III",
    description:
      "Presentación de tecnologías avanzadas: bases de datos, APIs y DevOps.",
    image: imgTecnologia,
    route: "/posts/Tecnología",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <h1 className="w-full text-center text-5xl font-extrabold mb-12 text-indigo-800 dark:text-indigo-200">
        Elige un curso
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((c) => (
          <CourseCard
            key={c.key}
            title={c.title}
            description={c.description}
            image={c.image}
            route={c.route}
          />
        ))}
      </div>
    </div>
  );
}
