import react from "react"
import {Route, Routes} from "react-router-dom";
import Navigation from "./Components/Navigation"; // imports the Navigation component
import HomePage from "./Pages/HomePage"; // imports the HomePage component
import TechGear from "./Pages/TechGear"; // imports the TechGear component
import Wishlist from "./Pages/WishList"; // imports the Wishlist component
import PhotoGear from "./Pages/PhotoGear"; // imports the PhotoGear component
import Footer from "./Components/Footer"; // imports the Footer component
import TechGearDetails  from "./Pages/TechGearDetails";
import PhotographyDetails from "./Pages/PhotographyDetails";

function App() {
  return (
    <div className="App">
      <Navigation />
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/techGear' exact element={<TechGear />} />
          <Route path='/photography' exact element={<PhotoGear />} />
          <Route path='/wishlist' exact element={<Wishlist />} />
          <Route path='/techGear/:id' exact element={<TechGearDetails />} />
          <Route path='/photography/:id' exact element={<PhotographyDetails />} />
        </Routes>
      <Footer/>
    </div>
  )
}

export default App