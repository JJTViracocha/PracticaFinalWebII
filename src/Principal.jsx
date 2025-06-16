import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function PaginaPrincipal() {
  const listaActores = [
    { nombre: "Hugo Pozo", imagen: "/public/Actor1.jpeg" },
    { nombre: "David Santalla", imagen: "/public/Actor2.jpeg" },
    { nombre: "Juan Carlos Aduviri", imagen: "/public/Actor3.jpeg" },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">🎭 Actores Destacados del Cine Boliviano</h2>
      <div className="row">
        {listaActores.map((actor, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <div className="card h-100 shadow-sm">
              <img
                src={actor.imagen}
                alt={actor.nombre}
                className="card-img-top"
                style={{ objectFit: "cover", height: "320px" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{actor.nombre}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PaginaPeliculas() {
  const peliculas = [
    {
      titulo: "Verse en la Tormenta",
      resumen:
        "Una historia intensa sobre la búsqueda de justicia durante tiempos turbulentos en Bolivia.",
      imagen: "/public/Pelicula1.jpeg",
    },
    {
      titulo: "El Día Que Murió el Silencio",
      resumen:
        "En un pequeño pueblo, la llegada de un extraño con un altavoz transforma la vida de todos.",
      imagen: "/public/Pelicula2.jpeg",
    },
    {
      titulo: "Cementerio de Elefantes",
      resumen:
        "Un drama impactante sobre el alcoholismo y la soledad en los barrios de La Paz.",
      imagen: "/public/Pelicula3.jpeg",
    },
  ];

  const [modal, setModal] = useState(false);
  const [contenido, setContenido] = useState("");

  const toggle = () => setModal(!modal);
  const abrirModal = (resumen) => {
    setContenido(resumen);
    toggle();
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">🎬 Películas Bolivianas Recomendadas</h2>
      <div className="row">
        {peliculas.map((peli, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <div className="card h-100 shadow">
              <img
                src={peli.imagen}
                alt={peli.titulo}
                className="card-img-top"
                style={{ objectFit: "cover", height: "250px" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{peli.titulo}</h5>
                <p className="card-text">{peli.resumen.slice(0, 90)}...</p>
                <Button color="info" onClick={() => abrirModal(peli.resumen)} className="mt-auto">
                  Ver más
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Resumen</ModalHeader>
        <ModalBody>{contenido}</ModalBody>
      </Modal>
    </div>
  );
}

function PaginaAcerca() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">📽️ Acerca del Cine Boliviano</h2>
      <p className="lead text-justify">
        El cine boliviano ha evolucionado significativamente desde sus inicios, representando temas
        sociales, culturales y políticos que reflejan la identidad nacional. Directores como Jorge
        Sanjinés y películas como "La Nación Clandestina" han marcado hitos importantes.
        Actualmente, el cine en Bolivia continúa desarrollándose con nuevas generaciones de
        cineastas que exploran temáticas contemporáneas con un enfoque auténtico y artístico.
      </p>
    </div>
  );
}

function Cinemateca() {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      {/* HEADER */}
      <header className="bg-dark text-white py-3 shadow">
        <div className="container text-center">
          <h1 className="m-0">🎥 Cinemateca Boliviana</h1>
        </div>
      </header>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-sm navbar-light bg-warning shadow-sm">
        <div className="container justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link fw-bold text-dark">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/peliculas" className="nav-link fw-bold text-dark">
                Películas
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/acerca" className="nav-link fw-bold text-dark">
                Acerca
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* CONTENIDO */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/peliculas" element={<PaginaPeliculas />} />
          <Route path="/acerca" element={<PaginaAcerca />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <footer className="bg-dark text-white py-3 mt-auto">
        <div className="container d-flex flex-column flex-sm-row justify-content-between align-items-center text-center">
          <span>© 2025 Jose Julian Ticona Viracocha</span>
          <span className="badge bg-warning text-dark mt-2 mt-sm-0">Publicidad de INF122</span>
        </div>
      </footer>
    </div>
  );
}

export default Cinemateca;
