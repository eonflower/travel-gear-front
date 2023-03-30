// import React, {useContext} from "react";
// import PhotoCard from "../Components/Cards/PhotoCard";
// import { PhotographyContext } from "../Components/PhotographyContext";
// import PhotoSearch from "../Components/PhotoSearch";

// function PhotoGear() {

//   return (
//     <>
    
//     <div className="header-photo">
//     <div className="camera">
//     <h2 className="camera-text-top">Capture the moment. </h2>
//     <h2 className="camera-text-bottom">Elevate your art with premium camera gear.</h2>
//     </div>
//     </div>
//     <div className='photogear'>
//       <PhotoSearch />
//       {/* <PhotoCard /> */}
//     </div>
//   </>
//   )
// }

// export default PhotoGear;

import React, {useContext} from "react";
import PhotoCard from "../Components/Cards/PhotoCard";
import { PhotographyContext } from "../Components/PhotographyContext";

function PhotoGear() {

  return (
    <>
    
    <div className="header-photo">
    <div className="camera">
    <h2 className="camera-text-top">Capture the moment. </h2>
    <h2 className="camera-text-bottom">Elevate your art with premium camera gear.</h2>
    </div>
    </div>
    <div className='photogear'>
      <PhotoCard />
    </div>
  </>
  )
}

export default PhotoGear;