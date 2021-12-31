import React, { useState, useEffect} from 'react'
import InputGroup from '../components/Filters/Category/InputGroup';
import Card from '../components/Cards/Cards'

const Episode = () => {
    let [results, setResults] = React.useState([]);
    let [id, setID] = useState(1);
    let [info, setInfo] = useState([]);
    let { air_date, name} = info;

    let api = `https://rickandmortyapi.com/api/episode/${id}`;

    useEffect(() => {
        (async function () {
          let data = await fetch(api).then((res) => res.json());
          setInfo(data);
    
          let a = await Promise.all(
            data.characters.map((x) => {
              return fetch(x).then((res) => res.json());
            })
          );
          setResults(a);
        })();
      }, [api]);

    return (
        <div className="container">
        <div className="row mb-3">
          <h1 className="text-center mb-3">
            Episode name :{" "}
            <span className="text-primary">{name === "" ? "Unknown" : name}</span>
          </h1>
          <h5 className="text-center">
            Air Date: {air_date === "" ? "Unknown" : air_date}
          </h5>
        </div>
        <div className="row">
          <div className="col-lg-3 col-12 mb-4">
            <h4 className="text-center mb-4">Pick Episode</h4>
            <InputGroup name="Episode" setID={setID} total={51} />
          </div>
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card page="/episodes/" results={results} />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Episode;
