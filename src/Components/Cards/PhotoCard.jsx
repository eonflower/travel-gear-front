
import React, { useContext, useState } from 'react';
import { PhotographyContext } from '../PhotographyContext';
import axios from "axios"
import {Link} from "react-router-dom"

export default function PhotoCard() {
    const { photoGear, setPhotoGear, handleAddToWishlist} = useContext(PhotographyContext);
    const outlinedHeart = <i className="fa-regular fa-heart" style={{color: "#7E8BBA"}}></i>
    const filledHeart = <i className="fa-solid fa-heart" style={{color: "#7E8BBA"}}></i>
    const [wishlist, setWishlist] = useState([]);
    const [expandedItems, setExpandedItems] = useState([]);
    const [searchPhotoGear, setSearchPhotoGear] = useState("");

    const handleWishlist = (photoGear) => {
        handleAddToWishlist(photoGear);
        setWishlist((prevWishlist) => [...prevWishlist, photoGear])
    };

    const isItemInWishlist = (itemId) => {
        return wishlist.some((item) => item._id === itemId);
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     axios
    //       .get(`https://photography/search?type=${searchPhotoGear}`)
    //       .then((response) => {
    //         setPhotoGear(response.data.data);
    //       })
    //       .catch((error) => console.log(error));
    //   };
      
      const handleInputChange = (event) => {
        setSearchPhotoGear(event.target.value);
      };
      
      const filteredPhotoGear = searchPhotoGear
        ? photoGear.filter(
            (item) =>
              item.category
                ?.toString()
                .toLowerCase()
                .includes(searchPhotoGear.toLowerCase())
          )
        : photoGear;
    

    const toggleExpandedItem = (itemId) => {
        if (expandedItems.includes(itemId)) {
        setExpandedItems((prev) => prev.filter((id) => id !== itemId));
        } else {
        setExpandedItems((prev) => [...prev, itemId]);
        }
    };

    const isItemExpanded = (itemId) => {
        return expandedItems.includes(itemId);
    };



    return (
        <>
    <div className="form">
        <select
          className='select-list'
          name='search'
          placeholder='Search photo gear'
          value={searchPhotoGear}
          onChange={handleInputChange}>
            <option value=''>Choose Type of Gear</option>
            <option value=''>All Gear</option>
            <option value='Camera'>Camera</option>
            <option value='Bag'>Bags</option>
            <option value='Lenses'>Lenses</option>
            <option value='Accessories'>Accessories</option>
          </select>
      </div>
      <div className='photogear-list'>
      {filteredPhotoGear.map((item) => (
          <div className='gear-page-item' key={item._id}>
            <Link to={`/photography/${item._id}`}>
            <img className='gear-img' src={item.imgURL} alt={item.title} id='photo-gear-img' />
            </Link>
            <h2 className='item-brand'>{item.brand}</h2>
            <h3 className='item-name'>{item.name}</h3>
            <h3 className='item-type'>
            {item.style} | ${item.price}
            </h3>
            <h4 className='item-size'>{item.size}</h4>
            <p className='item-description'>
            {isItemExpanded(item._id)
            ? item.description
            : item.description.slice(0, 150)}
            {item.description.length > 150 && (
                <>{isItemExpanded(item._id) ? "" : "..."}
                <br />
            <button
                className="read-more"
                onClick={() => toggleExpandedItem(item._id)}
            >
                {isItemExpanded(item._id) ? 'read less' : 'read more'}
            </button></>
            )}
            </p>
            <button className='add-to-wishlist' onClick={() => {handleWishlist(item)}}>
                {isItemInWishlist(item._id) ? filledHeart : outlinedHeart}
            </button>
          </div>
      ))}
      </div>
        </>
    ); 
}
