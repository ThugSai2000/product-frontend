import React, { useState } from 'react';
import axios from 'axios';

function UpdateProductPage()
{
    const [product, setProduct] = useState([]);
    const [id, setId] = useState('')
    const [productName, setProductName] = useState('');
    const [productImage, setProductImage] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [updated, setUpdated] = useState('')
    console.log(productName);

    const fetchProduct = async () =>
    {
        try
        {
            const response = await axios.get(`http://localhost:5000/api/products/product/${id}`);
            setProduct(response.data);


        } catch (error)
        {
            console.error('Error fetching products:', error);
        }
    };


    const handleSubmit = async () =>
    {

        try
        {
            const res = await axios.put(`http://localhost:5000/api/products/update-product/${id}`, { name: productName, price: productPrice, image: productImage, quantity: productQuantity });



            return setUpdated(res.data.message)

        } catch (error)
        {
            console.error('Error creating product:', error);
        }
    };

    return (
        <div className="product-form">
            <h2>Get Product Details</h2>
            <div>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Product Id"
                />
                <button onClick={fetchProduct}>Get Product Data</button>
            </div>
            <div style={{ display: "flex", flexDirection: 'column', width: '40%', gap: 30, marginLeft: '30%', textAlign: 'left' }}>
                <div>


                    <h4>Product Details</h4>
                    <p>Product Name : {product.name}</p>
                    {/* <p>Product Image : {product.image}</p> */}
                    <p>Price : {product.price}+$</p>
                    <p>Quantity : {product.quantity}</p>
                </div>
            </div>
            <h2>Update Product</h2>
            <form onSubmit={handleSubmit} >
                <div style={{ display: "flex", flexDirection: 'column', width: '40%', gap: 30, marginLeft: '30%' }}>


                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        placeholder={product.name}
                    />
                    <input
                        type="text"
                        value={productImage}
                        onChange={(e) => setProductImage(e.target.value)}
                        placeholder={product.image}
                    />
                    <input
                        type="text"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        placeholder={product.price}
                    />
                    <input
                        type="text"
                        value={productQuantity}
                        onChange={(e) => setProductQuantity(e.target.value)}
                        placeholder={product.quantity}
                    />

                    <button type="submit">Update</button>
                </div>
            </form>

            <div>{updated}</div>
        </div>
    );
}

export default UpdateProductPage;