import { Routes , Route } from "react-router-dom";

import Header from "./Componets/Header";
import Footer from "./Componets/Footer";

import HomePages from "./pages/HomePages";
import AboutPages from "./pages/AboutPages";
import ContactPages from "./pages/ContactPages";
import NotFoundPages from "./pages/NotFoundPages";
import MealsPages from "./pages/MealsPages"
import DetalisPages from "./pages/DetalisPages/";

const App = () => {
  return (
    <>
       <Header />
       <Routes>
         <Route path="/" element={<HomePages />}/>
         <Route path="/about" element={<AboutPages />}/>
         <Route path="/contact" element={<ContactPages />}/>
         <Route path='/category/:name' element={<MealsPages />}/>
         <Route path='/meals/:id' element={<DetalisPages />}/>
         <Route path="*" element={<NotFoundPages />}/>
         
       </Routes>
       <Footer />
    </>
    
  )
}

export default App