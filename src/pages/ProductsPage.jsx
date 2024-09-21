import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductsPage()
{
    const [products, setProducts] = useState([]);

    useEffect(() =>
    {
        const fetchProducts = async () =>
        {
            try
            {
                const response = await axios.get('http://localhost:5000/api/products/product-list/');
                setProducts(response.data);
            } catch (error)
            {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    const handleDelete = async (productId) =>
    {
        console.log(productId);

        try
        {
            await axios.delete(`http://localhost:5000/api/products/delete-product/${productId}`);
            window.location.reload()
            // setProducts(products.filter((product) => product.id !== productId));
        } catch (error)
        {
            console.error('Error deleting product:', error);
        }
    };



    return (
        <div className="products-list">
            <h2>Products</h2>
            <div style={{ display: 'flex', gap: 20, alignItems: 'center', padding: '20px' }}>
                {products.map((product) => (
                    <div key={product.id} style={{ width: '30%', border: '1px solid grey', paddingBottom: '10px' }}>
                        <img src={product.image} alt="Avatar" style={{ width: "100%", height: '300px', objectFit: 'fill' }} />
                        <div class="container">
                            <h4><b>{product.name}</b></h4>
                            <p>Price : {product.price}+$</p>
                            <p>Quantity : {product.quantity}</p>

                        </div>

                        <button onClick={() => handleDelete(product._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsPage;




