import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CreateProductPage()
{

    const [productName, setProductName] = useState('');
    const [productImage, setProductImage] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [sucess, setSucess] = useState('')





    const handleSubmit = async () =>
    {

        try
        {
            const res = await axios.post('http://localhost:5000/api/products/create-product/', { name: productName, price: productPrice, image: productImage, quantity: productQuantity });



            return setSucess(res.data.message)

        } catch (error)
        {
            console.error('Error creating product:', error);
        }
    };

    return (
        <div className="product-form">



            <h2>Create Product</h2>
            <form onSubmit={handleSubmit} >
                <div style={{ display: "flex", flexDirection: 'column', width: '40%', gap: 30, marginLeft: '30%' }}>


                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        placeholder="Product Name"
                    />
                    <input
                        type="text"
                        value={productImage}
                        onChange={(e) => setProductImage(e.target.value)}
                        placeholder="Product Image"
                    />
                    <input
                        type="text"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        placeholder="Product Price"
                    />
                    <input
                        type="text"
                        value={productQuantity}
                        onChange={(e) => setProductQuantity(e.target.value)}
                        placeholder="Product quatity"
                    />

                    <button type="submit">Create</button>
                </div>
            </form>

            <div>{sucess}</div>
        </div>
    );
}

export default CreateProductPage;