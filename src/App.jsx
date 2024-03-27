import Header from "./components/Header";
import Footer1 from "./components/Footer1"; 
import { Route, Routes } from "react-router-dom";
import Home1 from "./components/Home1";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Blog from "./components/Blog";
import Franchise from "./components/Franchise";





function App() {
  return (
    <>
    <Header/>
    <Routes>
    
    <Route path="/" element={<Home1/>} />
    <Route path="/aboutus" element={<AboutUs/>} />
    <Route path="/products" element={<Products/>} />
    <Route path="/blog" element={<Blog/>} />
    <Route path="/franchise" element={<Franchise/>} />
    
    

    


    </Routes>

















    <Footer1/>
    </>
  );
}

export default App;








