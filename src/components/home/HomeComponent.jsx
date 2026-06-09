import { useEffect, useState } from 'react';
import axios from 'axios';
import url from '../../api/endpoint';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Skeleton } from 'primereact/skeleton';

const SKELETON_ARRAY = Array(6).fill(0);

const formatPoblacion = pop => {
  if (pop >= 1_000_000) return (pop / 1_000_000).toFixed(1) + 'M';
  if (pop >= 1_000) return Math.round(pop / 1_000) + 'K';
  return pop.toString();
};

const HomeComponent = () => {
  const [paises, setPaises] = useState([]);
  const [paisesFiltrados, setPaisesFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState('');
  const [regionSeleccionada, setRegionSeleccionada] = useState(null);
  const [regiones, setRegiones] = useState([]);

  useEffect(() => {
    axios
      .get(url.endpoint)
      .then(res => {
        const data = res.data?.data ?? res.data;
        if (Array.isArray(data)) {
          setPaises(data);
          setPaisesFiltrados(data);
          const regs = [...new Set(data.map(p => p.region).filter(Boolean))].sort();
          setRegiones(regs);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al cargar los países:', err);
        setError('Error al cargar los países. Inténtalo de nuevo más tarde.');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let res = paises;
    if (busqueda) {
      const q = busqueda.toLowerCase();
      res = res.filter(
        p =>
          p.name.common.toLowerCase().includes(q) ||
          p.name.official.toLowerCase().includes(q) ||
          (p.capital?.[0] && p.capital[0].toLowerCase().includes(q))
      );
    }
    if (regionSeleccionada) {
      res = res.filter(p => p.region === regionSeleccionada);
    }
    setPaisesFiltrados(res);
  }, [busqueda, regionSeleccionada, paises]);

  const limpiarFiltros = () => {
    setBusqueda('');
    setRegionSeleccionada(null);
  };

  if (loading) {
    return (
      <div className="main-container">
        <div className="paises-grid">
          {SKELETON_ARRAY.map((_, i) => (
            <Card key={i} className="pais-card">
              <Skeleton width="100%" height="155px" />
              <Skeleton width="75%" height="1.2rem" className="mt-2" />
              <Skeleton width="55%" height="0.9rem" className="mt-1" />
              <div className="pais-badges mt-2">
                <Skeleton width="70px" height="1.6rem" borderRadius="1rem" />
                <Skeleton width="60px" height="1.6rem" borderRadius="1rem" />
                <Skeleton width="65px" height="1.6rem" borderRadius="1rem" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="main-container">
        <div className="error-container">
          <i className="pi pi-exclamation-circle error-icon" />
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="main-container">
      {/* Filtros */}
      <div className="filtros-bar">
        <div className="search-wrapper">
          <i className="pi pi-search search-icon" />
          <InputText
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
            placeholder="Buscar país o capital..."
            className="search-input"
          />
        </div>
        <Dropdown
          value={regionSeleccionada}
          onChange={e => setRegionSeleccionada(e.value)}
          options={regiones}
          placeholder="Todas las regiones"
          showClear
          className="region-dropdown"
        />
        <Button
          label="Limpiar"
          icon="pi pi-times"
          severity="secondary"
          outlined
          onClick={limpiarFiltros}
          disabled={!busqueda && !regionSeleccionada}
        />
        <span className="resultado-contador">
          <strong>{paisesFiltrados.length}</strong> / {paises.length} países
        </span>
      </div>

      {/* Sin resultados */}
      {paisesFiltrados.length === 0 && (
        <div className="no-resultados">
          <i className="pi pi-globe no-resultados-icon" />
          <h3>No se encontraron países</h3>
          <p>Intenta con otros términos o cambia los filtros.</p>
          <Button label="Limpiar filtros" icon="pi pi-redo" onClick={limpiarFiltros} />
        </div>
      )}

      {/* Grid de países */}
      {paisesFiltrados.length > 0 && (
        <div className="paises-grid">
          {paisesFiltrados.map(pais => (
            <Card
              key={pais.cca3}
              header={
                <img
                  src={pais.flags?.svg}
                  alt={pais.flags?.alt || pais.name.common}
                  className="pais-flag"
                  onError={e => {
                    e.target.src = '/assets/img/logo.png';
                  }}
                />
              }
              title={pais.name.common}
              subTitle={pais.name.official}
              className="pais-card">
              <div className="pais-badges">
                {pais.capital?.length > 0 && (
                  <span className="badge badge-capital">
                    <i className="pi pi-building" />
                    {pais.capital[0]}
                  </span>
                )}
                <span className="badge badge-pop">
                  <i className="pi pi-users" />
                  {formatPoblacion(pais.population)}
                </span>
                <span className="badge badge-region">
                  <i className="pi pi-globe" />
                  {pais.region}
                </span>
                <span className="badge badge-code">{pais.cca3}</span>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeComponent;
