import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function TechGearDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null); 

  const getData = () => {
    axios
      .get(`https://adorable-jersey-fly.cyclic.app/api/techGear/${id}`)
      .then((res) => setItem(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='techgear'>
           <a href="/techGear" className="back-button"><i className="fa-solid fa-square-caret-left"></i></a>

      <div className='item-wrapper'>
       {item ? (
        <>
          <img id="tech-gear-img" src={item.imgURL} alt={item.title} />
          <h2 className='item-brand'>{item.brand}</h2>
          <h3 className='item-name'>{item.name}</h3>
          <h3 className='item-type'>
            Type: {item.style} | ${item.price}
          <h4 className='item-size'>Capacity: {item.capacity}L</h4>  
          </h3>
          
          <p className='item-description'>{item.description}</p>
          
        </>
      ) : (
        <p>Loading...</p>
      )}
      </div>
    </div>
  );
}

export default TechGearDetails;
