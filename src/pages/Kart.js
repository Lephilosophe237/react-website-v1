import React from 'react';
import "../components/destinationstyle.css";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Facets_container from '../components/Facets_container';
import Choix from '../components/Kartdesc';
import { Base } from "../components/data";
import Help from "../components/top";
import Video from '../components/Headervid';

function Kart() {
    const build_categorical_facet_values = (name) => {
        const values = [...new Set(Base.map(item => item[name]))];
        return values ? values.map(value => ({ 'name': value, 'checked': false })) : [];
      }

  const [state, setState] = useState({
    all_clothes: [],
    shown_clothes: [],
    facets: {
      Category: build_categorical_facet_values('Category'),
      Engine: build_categorical_facet_values('Engine'),
      Gearsbox: build_categorical_facet_values('Gearsbox')
    }
  });

  useEffect(() => {
    setState(prevState => ({ ...prevState, all_clothes: Base, shown_clothes: Base }));
  }, []);

  useEffect(() => {
    if (state.all_clothes.length === 0) {
      setState(prevState => ({ ...prevState, shown_clothes: [] }));
      return;
    }

    const facets = {};
    Object.entries(state.facets).forEach(([name, values]) => {
      facets[name] = [];
      values.forEach(value => {
        if (value.checked) {
          facets[name].push(value.name);
        }
      });
    });

    if (Object.values(facets).every(arr => arr.length === 0)) {
      setState(prevState => ({ ...prevState, shown_clothes: state.all_clothes }));
      return;
    }

    const number_of_active_facets = Object.values(facets).filter(x => x.length).length;

    const to_show = state.all_clothes.filter(clothe =>
      Object.entries(facets).every(([name, values]) =>
        values.length === 0 || values.includes(clothe[name]))
    );

    setState(prevState => ({ ...prevState, shown_clothes: to_show }));
  }, [state.all_clothes, state.facets]);

  function clearAllFacetValues(facet) {
    const new_facet = state.facets[facet].map(facet_value => ({
      ...facet_value,
      checked: false
    }));
    setState(prevState => ({ ...prevState, facets: { ...prevState.facets, [facet]: new_facet } }));
  }

  function updateCategory(facet, value, newChecked) {
    const new_facet = state.facets[facet].map(({ name, checked }) => ({
      name: name,
      checked: name === value ? newChecked : checked
    }));
    setState(prevState => ({ ...prevState, facets: { ...prevState.facets, [facet]: new_facet } }));
  }

  return (
    <>
    <Video videoUrl={'/videos/gallery.mp4'} speech={"Loan the best Kart"} btntxt={"Reserve Free Pratice"} />
    <div className='bg-white'>
      <br></br>
        <h1 id="titre">Kart Selection</h1>
      <br></br>
      <Row>
        <Col className='border-end' md={3}>
          <Facets_container facets={state.facets} updateCategory={updateCategory} clearAllFacetValues={clearAllFacetValues} />
        </Col>
        <Col>
          <Container className='d-flex flex-wrap'>
            {state.shown_clothes.length > 0 ? (
              state.shown_clothes.map((x, index) => <Choix key={index} {...x} />)
            ) : (
              <p>No karting matching the option selected</p>
            )}
          </Container>
        </Col>
      </Row>
      <Help/>
    </div>
    </>
  );
}

export default Kart;
