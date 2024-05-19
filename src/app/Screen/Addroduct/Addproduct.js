import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import { toast } from 'react-toastify';
import firestore from '../../../firbase.js';
import { addDoc, collection } from 'firebase/firestore';

export default function ProductForm() {
    const [product, setProduct] = React.useState({
        name: '',
        description: '',
        price: '',
        image: '',
        dropdownValue: '',
        customOption: '',
        dropdownOptions: [],
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProduct({ ...product, [name]: value });
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProduct({ ...product, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = async () => {
        try {

            const docRef = await addDoc(collection(firestore, 'products'), product);
            toast.success('Product saved successfully!');
            handleClear();
        } catch (error) {
            console.error('Error saving product:', error);
        }
    };
    const handleClear = () => {
        setProduct({ name: '', description: '', image: '', dropdownValue: '', customOption: '', dropdownOptions: [] }); // Reset customOption and dropdownOptions states
    };

    const handleAddOption = () => {
        const { customOption, dropdownOptions } = product;
        if (customOption.trim() !== '' && !dropdownOptions.includes(customOption)) {
            setProduct({ ...product, dropdownOptions: [...dropdownOptions, customOption], customOption: '' });
        }
    };

    return (
        <Box p={3}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Product Name"
                        name="name"
                        value={product.name}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Product Image URL"
                        name="image"
                        value={product.image}
                        onChange={handleInputChange}
                    />
                    <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="upload-image"
                        type="file"
                        onChange={handleImageChange}
                    />
                    <label htmlFor="upload-image">
                        <Button variant="contained" component="span">
                            Upload Image
                        </Button>
                    </label>
                </Grid>
                <Grid item xs={12} sm={6}>
                    {product.image && (
                        <img src={product.image} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                    )}
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Product Description"
                        name="description"
                        multiline
                        rows={4}
                        value={product.description}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Product Price"
                        name="price"
                        value={product.price}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        select
                        label="Select"
                        name="dropdownValue"
                        value={product.dropdownValue}
                        onChange={handleInputChange}
                    >
                        {product.dropdownOptions.map((option) => (
                            <MenuItem key={option} value={option}>{option}</MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Custom Dropdown Option"
                        name="customOption"
                        value={product.customOption}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button variant="contained" color="primary" onClick={handleAddOption}>
                        Add
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={handleSave}>
                        Save
                    </Button>
                    <Button variant="contained" color="secondary" onClick={handleClear} style={{ marginLeft: '10px' }}>
                        Clear
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}
