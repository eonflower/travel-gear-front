import React, { useState, useEffect } from "react";
import axios from "axios";

const TechGearContext = React.createContext();

function TechGearContextProvider(props) {
  const [techGear, setTechGear] = useState([]);
  const [techWishlist, setTechWishlist] = useState([]);
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    axios.get('https://adorable-jersey-fly.cyclic.app/api/techGear')
      .then(res => setTechGear(res.data))
    //   .then(res => {
    //     // Add a 'liked' property to each item in the photoGear array
    //     const updatedTechGear = res.data.map(item => {
    //         return {
    //             ...item,
    //             isOnWishlist: liked// set the initial liked state to false
    //         };
    //     });
    //     setTechGear(updatedTechGear);
    // })
      .catch(err => err => console.log(err.response.data.errMsg))

  }, []);

  const handleAddToWishlist = (item) => {
    axios.post('https://adorable-jersey-fly.cyclic.app/api/wishlist', item)
      .then(res => setTechWishlist(prevList => [...prevList, item]))
      .catch(err => alert("Item is in wishlist"));
      
  };

  // const updateItem = (updates, itemId) => {
  //   axios.put(`/api/techGear/${itemId}`, updates)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err.res))
  // }
  // const itemIsOnWishlist = (itemId) => {
  //   const updatedTechGear = techGear.map(item => {
  //     if (item._id === itemId) {
  //         return {
  //             ...item,
  //             isOnWishlist: !liked
  //         };
  //     }
  //     return item;
  // });
  // setTechGear(updatedTechGear);

  // const item = techGear.find(item => item._id === itemId ? !liked : liked);
  // handleAddToWishlist(item);
  // setPhotoWishlist((prevWishlist) => [...prevWishlist, item]);
// }

  return (
    <TechGearContext.Provider value={{ techGear, techWishlist, setTechWishlist, handleAddToWishlist, liked}}>
      {props.children}
    </TechGearContext.Provider>
  );
}

export { TechGearContext, TechGearContextProvider };