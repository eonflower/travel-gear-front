import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function PhotographyDetails()  {
  const {id} = useParams()
  const [item, setItem] = useState(null);

  const getData = () => {
    axios.get(`/api/photography/${id}`)
    .then((res) => setItem(res.data))
    .catch(err => console.log(err))
  }
    
  useEffect(() => {
    getData()
  }, [])

  return (
    
    <div className='photogear'>
      <a href="/photography" className="back-button"><i className="fa-solid fa-square-caret-left"></i></a>
      <div className='item-wrapper'>
    
      {item ? (
        <>
          <img id='photo-gear-img' src={item.imgURL} alt={item.title} />
          <h2 className='item-brand'>{item.brand}</h2>
          <h3 className='item-name'>{item.name}</h3>
          <h3 className='item-type'>
          {item.style} | ${item.price}
          </h3>
          <h4 className='item-size'>{item.size}</h4>
          <p className='item-description'>{item.description}</p>
         {/* add more item properties as needed you have a TON on your API 👏 */}
        </>
      ) : (
        <p>Loading...</p>
      )}
      </div>
    </div>
  );
}
export default PhotographyDetails;