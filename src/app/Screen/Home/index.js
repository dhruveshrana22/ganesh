import React, { useState, useEffect } from 'react';
import { Container, TextField, Grid } from '@mui/material'; // Import Grid from Material-UI
import Navbar from '../../Componenet/Navbar';
import CCard from '../../Componenet/Card';
import { collection, getDocs } from 'firebase/firestore';
import firestore from '../../../firbase';
import './style.css'

const Home = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchData = async () => {
        try {
            const querySnapshot = await getDocs(collection(firestore, 'products'));
            const productsData = [];
            querySnapshot.forEach((doc) => {
                productsData.push({ id: doc.id, ...doc.data() });
            });
            console.log('Fetched products:', productsData);
            setProducts(productsData);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Filter products based on the search query or display all products if no search query
    const filteredProducts = searchQuery
        ? products.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : products;

    return (
        <>
            <Navbar />
            <main>
                <Container
                    sx={{
                        padding: {
                            xs: 2,
                            sm: 3,
                            md: 4,
                            lg: 5,
                            xl: 6
                        }
                    }}
                >
                    <TextField
                        label="Search by Product Name"
                        variant="outlined"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <div id='card'>
                        {filteredProducts.map((product) => (
                            <div key={product.id}>
                                <CCard
                                    title={product.name}
                                    description={product.description}
                                    price={parseFloat(product.price)} // Assuming price is a string, convert it to a number if necessary
                                    dropdownOptions={product.dropdownOptions || []}
                                    image={product.image} // Assuming you have an image field in your product data
                                />
                            </div>
                        ))}
                    </div>
                </Container>
            </main>
        </>
    );
};

export default Home;
