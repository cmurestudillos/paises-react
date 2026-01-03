import { useEffect, useState } from 'react';
import axios from 'axios';
import url from '../../api/endpoint';
import { Accordion, Card, Form, Row, Col, Button } from 'react-bootstrap';

const HomeComponent = () => {
  const [paises, setPaises] = useState([]);
  const [paisesFiltrados, setPaisesFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState('');
  const [continenteSeleccionado, setContinenteSeleccionado] = useState('');

  useEffect(() => {
    axios
      .get(url.endpoint)
      .then(res => {
        if (res.data && res.data.success && res.data.data) {
          setPaises(res.data.data);
          setPaisesFiltrados(res.data.data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al cargar los países:', err);
        setError('Error al cargar los países');
        setLoading(false);
      });
  }, []);

  // Efecto para filtrar países cuando cambia la búsqueda o el continente
  useEffect(() => {
    let resultados = paises;

    // Filtrar por búsqueda
    if (busqueda) {
      resultados = resultados.filter(
        pais =>
          pais.name.common.toLowerCase().includes(busqueda.toLowerCase()) ||
          pais.name.official.toLowerCase().includes(busqueda.toLowerCase()) ||
          (pais.capital && pais.capital[0] && pais.capital[0].toLowerCase().includes(busqueda.toLowerCase()))
      );
    }

    // Filtrar por continente
    if (continenteSeleccionado) {
      resultados = resultados.filter(pais => pais.continents && pais.continents.includes(continenteSeleccionado));
    }

    setPaisesFiltrados(resultados);
  }, [busqueda, continenteSeleccionado, paises]);

  // Obtener lista única de continentes
  const obtenerContinentes = () => {
    const continentes = new Set();
    paises.forEach(pais => {
      if (pais.continents) {
        pais.continents.forEach(cont => continentes.add(cont));
      }
    });
    return Array.from(continentes).sort();
  };

  const limpiarFiltros = () => {
    setBusqueda('');
    setContinenteSeleccionado('');
  };

  if (loading) {
    return (
      <div className="container mt-4 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4 text-center">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  const listarPaises = paisesFiltrados.map((pais, index) => {
    return (
      <Accordion defaultActiveKey="0" key={pais.cca3 || index}>
        <Card.Header className="mb-0">
          <Accordion.Toggle className="btn btn-4 cloudy-knoxville-gradient w-50" eventKey={index + 1}>
            {pais.name.common}
          </Accordion.Toggle>
          <img
            src={pais.flags.svg}
            className="float-right rounded-circle shadow border"
            title={pais.name.common}
            alt={pais.name.common}
            width="55"
            height="55"
          />
        </Card.Header>
        <hr></hr>
        <Accordion.Collapse eventKey={index + 1}>
          <Card.Body>
            <div className="row">
              <div className="col">
                <strong>Capital: </strong>
                <span className="badge badge-pill badge-success">
                  <i className="fas fa-city" aria-hidden="true"></i>
                  {pais.capital && pais.capital.length > 0 ? pais.capital[0] : 'N/A'}
                </span>
              </div>
              <div className="col">
                <strong>Población: </strong>
                <span className="badge badge-pill badge-primary">
                  <i className="fas fa-users" aria-hidden="true"></i>
                  {pais.population ? pais.population.toLocaleString('es-ES') : 'N/A'}
                </span>
              </div>
              <div className="col">
                <strong>Subregión: </strong>
                <span className="badge badge-pill badge-warning">
                  <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                  {pais.subregion || 'N/A'}
                </span>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <strong>Región: </strong>
                <span className="badge badge-pill badge-info">
                  <i className="fas fa-globe" aria-hidden="true"></i>
                  {pais.region || 'N/A'}
                </span>
              </div>
              <div className="col">
                <strong>Área: </strong>
                <span className="badge badge-pill badge-secondary">
                  <i className="fas fa-map" aria-hidden="true"></i>
                  {pais.area ? `${pais.area.toLocaleString('es-ES')} km²` : 'N/A'}
                </span>
              </div>
              <div className="col">
                <strong>Idiomas: </strong>
                <span className="badge badge-pill badge-dark">
                  <i className="fas fa-language" aria-hidden="true"></i>
                  {pais.languages ? Object.values(pais.languages).join(', ') : 'N/A'}
                </span>
              </div>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Accordion>
    );
  });

  return (
    <div className="container mt-4 mb-4">
      <h2 className="text-center mb-4">Países del Mundo</h2>

      {/* Filtros */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Row>
            <Col md={5}>
              <Form.Group>
                <Form.Label>
                  <strong>Buscar país o capital:</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: España, Madrid..."
                  value={busqueda}
                  onChange={e => setBusqueda(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={5}>
              <Form.Group>
                <Form.Label>
                  <strong>Filtrar por continente:</strong>
                </Form.Label>
                <Form.Control
                  as="select"
                  value={continenteSeleccionado}
                  onChange={e => setContinenteSeleccionado(e.target.value)}>
                  <option value="">Todos los continentes</option>
                  {obtenerContinentes().map(continente => (
                    <option key={continente} value={continente}>
                      {continente}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={2} className="d-flex align-items-end">
              <Button variant="secondary" onClick={limpiarFiltros} className="w-100">
                Limpiar
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Contador de resultados */}
      <p className="text-center text-muted mb-4">
        Mostrando <strong>{paisesFiltrados.length}</strong> de <strong>{paises.length}</strong> países
      </p>

      {/* Lista de países */}
      {paisesFiltrados.length > 0 ? (
        listarPaises
      ) : (
        <div className="alert alert-info text-center" role="alert">
          No se encontraron países con los filtros seleccionados.
        </div>
      )}
    </div>
  );
};

export default HomeComponent;
