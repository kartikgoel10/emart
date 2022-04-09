import React, { useState, useEffect } from "react";
import { addCart } from "../redux/action";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
            <div className="col-md-3">
                <Skeleton height={350}/> 
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/> 
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/> 
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/> 
            </div>
             </>
        )
    }
  const filterProuct = (cat) => {
      const updatedList = data.filter((x)=>x.category === cat);
      setFilter(updatedList);
  }  
const ShowProducts = () => {
    return (
        <>
            <div className="buttons d-flex justify-content-center mb-5 pb-5">
                <button className=" button.btn.btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
                <button className=" button.btn.btn-outline-dark me-2" onClick={()=>filterProuct("men's clothing")}>Men's Cloathing</button>
                <button className=" button.btn.btn-outline-dark me-2" onClick={()=>filterProuct("women's clothing")}>Women's Cloathing</button>
                <button className=" button.btn.btn-outline-dark me-2" onClick={()=>filterProuct("jewelery")}>Jewelery</button>
                <button className=" button.btn.btn-outline-dark me-2" onClick={()=>filterProuct("electronics")}>Electronics</button>
                <button className=" button.btn.btn-outline-dark me-2" onClick={()=>filterProuct("low price")}>Low to High</button>
            </div>
            {filter.map((product)=>{
                return(
                    <>
                    <div className="col-md-3 mb-4">
                    <div class="card h-100 text-center p-4" key={(product.id)}>
  <img src={product.image} class="card-img-top" alt= {product.title} height="250px" />
  <div class="card-body">
    <h5 class="card-title mb-0">{product.title.substring(0,12)}</h5>
    <p class="card-text lead fw-bold">${product.price}</p>
    <NavLink to={'/products/${product.id}'} class="btn btn-outline-dark">Buy Now</NavLink>
  </div>
</div>
                    </div>
                    </>
                )
            }
            )}
        </>
    )

}
return (
    <div>
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="text-center"> Latest Products</h1>
                    <hr />
                </div>
            </div>
            <div className="row justify-content-center">
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>



    </div>
);
}

export default Products;