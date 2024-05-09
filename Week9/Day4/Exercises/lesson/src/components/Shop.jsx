import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
const Shop = (props) => {
    const [products, setProducts] = useState([])
    const[name,setName] = useState('');
    const[price,setPrice] = useState('');

    useEffect(() => {
        getAll()
    }, [])
    const getAll = async () => {
        try {
            const res = await fetch("http://localhost:3001/api/products")
            const data = await res.json()
            console.log(data)
            setProducts(data)
        } catch (error) {
            console.error(error);
        }
    }

    const handleSubmit = async (event) =>{
        event.preventDefault(); 

    const options = {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify({name, price})
    }

    try {
        const res = await fetch("http://localhost:3001/api/products", options);
        const data = await res.json();
        setProducts(data);
    }catch (error) {
        console.log(error);
    }
};

    return (
    <>
        <h2>Shop</h2>
        <h4>Add Product</h4>
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setName(e.target.value)} placeholder="Product Name.."/>
            <input onChange={(e) => setPrice(e.target.value)} placeholder="Product Price..."/>
            <input type="submit" value={"Add Product"}/>
        </form>
        {
            products.map(item => { return <div key={item.id} style={{ border: "1px solid red", margin: "20px", padding: "20px" }}>{item.name}<p></p>
            <Link to={`/${item.id}`}>Buy!</Link>
            </div> })
        }
    </>
    );
}
export default Shop;