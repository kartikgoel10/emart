import React from "react";
import Products from "./Products";

const Home = () => {
    return (
        <div classNameName="hero">
            <div className="card bg-dark text-white">
  <img src="assets/bg.jpg" className="card-img" alt="Background" height="550px"/>
  <div className="card-img-overlay">
    <div className="container"></div>
    <h5 className="card-title">NEW FASHION</h5>
    <p className="card-text">get all range of trendy fashion </p>
  </div>
</div>
<Products/>

        
        </div>
    );
}

export default Home;