import React from "react"

/*Components*/
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AllRoutes from "./AllRoutes";
import Scroll from "./Scroll";
import Cart from "./components/Cart/Cart"

function App() {
  return (
    <div >
        <Navbar />
        <AllRoutes />
        <Footer />
        <Cart />
        <Scroll />
    </div>  
  );
}

export default App;
