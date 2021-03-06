import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Technology from './Technology';
import './Technology.css';

function TechnoLister() {
  const [technoList, setTechnoList] = useState([]);
  const url = `${process.env.REACT_APP_API_URL}/technos`;
  useEffect(() => {
    axios.get(url).then((response) => setTechnoList(response.data));
  }, []);
  return (
    <div className="techno-content">
      {technoList && technoList.map((techno) => <Technology key={techno.id} techno={techno} />)}
    </div>
  );
}

export default TechnoLister;
