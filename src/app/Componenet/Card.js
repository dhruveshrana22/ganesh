import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import CustomButton from './CustomeButton';

const cardContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1%',
    '@media (max-width: 600px)': {
        width: '100%',
    },
    '@media (min-width: 600px) and (max-width: 960px)': {
        width: '80%',
    },
    '@media (min-width: 960px)': {
        width: '80%',
    },
};

const cardStyles = {
    maxWidth: 345,
    width: '100%',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    },
};

const cardMediaStyles = {
    height: 140,
};

export default function CCard(props) {
    const { title, description, price, dropdownOptions, image } = props;
    const [dropdownValue, setDropdownValue] = React.useState('');

    const handleDropdownChange = (event) => {
        setDropdownValue(event.target.value);
    };

    return (
        <Box sx={cardContainerStyles}>
            <Card sx={cardStyles}>
                <CardMedia
                    sx={cardMediaStyles}
                    image={image}
                    title="green iguana"
                />
                <CardContent sx={{
                    '@media (max-width: 600px)': {
                        flexDirection: 'column', // Change direction to column on screens smaller than 600px
                        alignItems: 'center', // Center items vertically
                    },
                    // Add more custom styles for different screen sizes if needed
                }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="h6" component="div">
                        ₹{price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <FormControl sx={{ minWidth: 120 }}>
                        <InputLabel id="dropdown-label">Options</InputLabel>
                        <Select
                            labelId="dropdown-label"
                            value={dropdownValue}
                            label="Options"
                            onChange={handleDropdownChange}
                        >
                            {dropdownOptions.map((option, index) => (
                                <MenuItem key={index} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <CustomButton size="small" title={"Add To Cart"} variant="contained"></CustomButton>
                </CardActions>
            </Card>
        </Box>
    );
}
