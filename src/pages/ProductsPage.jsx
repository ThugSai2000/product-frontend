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
        try
        {
            await axios.delete(`/api/products/${productId}`);
            setProducts(products.filter((product) => product.id !== productId));
        } catch (error)
        {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className="products-list">
            <h2>Products</h2>
            <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                {products.map((product) => (
                    <div key={product.id} style={{ width: '30%', border: '1px solid grey' }}>
                        <img src={product.image} alt="Avatar" style={{ width: "100%" }} />
                        <div class="container">
                            <h4><b>{product.name}</b></h4>
                            <p>{product.price}+$</p>
                        </div>

                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsPage;
