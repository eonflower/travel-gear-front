import React, {useState, useEffect} from "react";
import axios from "axios";

const PhotographyContext = React.createContext();

function PhotographyContextProvider(props) {
  const [photoGear, setPhotoGear] = useState([]);
  const [photoWishlist, setPhotoWishlist] = useState([]);
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    axios.get('https://adorable-jersey-fly.cyclic.app/api/photography')
      .then(res => setPhotoGear(res.data))
      .catch(err => err => console.log(err.response.data.errMsg))

      axios.get('https://adorable-jersey-fly.cyclic.app/api/wishlist')
      .then(res => setPhotoWishlist(res.data))
      .catch(err => err => console.log(err.response.data.errMsg))
  }, []);

  const handleAddToWishlist = (item) => {
    axios.post('https://adorable-jersey-fly.cyclic.app/api/wishlist', item)
      .then(res => setPhotoWishlist(prevList => [...prevList, item]))
      .catch(err => console.log(err));
  };


  return (
    <PhotographyContext.Provider value={{ photoGear, photoWishlist, setPhotoWishlist, handleAddToWishlist, liked, setLiked}}>
      {props.children}
    </PhotographyContext.Provider>
  )
}

export { PhotographyContext, PhotographyContextProvider}