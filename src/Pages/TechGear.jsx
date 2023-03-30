// import React, { useContext } from "react";
// import TechCard from "../Components/Cards/TechCard";
// import TechSearch from "../Components/TechSearch";



// function TechGear() {
//   return (
//     <>
//     <div className="header-photo">
//     <div className="tech">
//     <h2 className="tech-text">Gear that works as hard as you do - built to last, ready for anything</h2>
//     </div>
//     </div>
//     <div className='techgear'>
//       <TechSearch />
//     </div>
//     </>
//   );
// }

// export default TechGear;


import React, { useContext } from "react";
import TechCard from "../Components/Cards/TechCard";



function TechGear() {
  return (
    <>
    <div className="header-photo">
    <div className="tech">
    <h2 className="tech-text">Gear that works as hard as you do - built to last, ready for anything</h2>
    </div>
    </div>
    <div className='techgear'>
      <TechCard />
    </div>
    </>
  );
}

export default TechGear;