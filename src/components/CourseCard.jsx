import React from 'react';
import { Link } from 'react-router-dom';

// Asegúrate de tener en src/assets las imágenes:
// - profesor.jpg (foto del profesor)
// - logo-kinal.png (logo Fundación Kinal)
import profesorImg from '../assets/profesor.jpg';
import logoKinal from '../assets/logo-kinal.png';

export default function CourseCard({
  title,
  description,
  route,
  professorName = 'Joel Chávez',
  contactEmail = 'jchavez-2023107@kinal.edu.gt'
}) {
  return (
    <Link to={route} className="course-card">
      {/* Sección Profesor */}
      <div className="course-card__professor">
        <h4>(JC)</h4>
        <img src={profesorImg} alt={`Profesor ${professorName}`} />
        <span>{professorName}</span>
      </div>

      {/* Detalles del curso */}
      <div className="course-card__details">
        {/* Logo en la esquina */}
        <div className="course-card__logo">
          <img src={logoKinal} alt="Fundación Kinal" />
        </div>

        <h2 className="course-card__title">{title}</h2>
        <p className="course-card__content">{description}</p>
        <p className="course-card__contact">
          Contacto: {contactEmail}
        </p>
      </div>
    </Link>
  );
}
