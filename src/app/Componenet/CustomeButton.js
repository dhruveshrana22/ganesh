import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const CustomButton = ({ title, variant, ...props }) => {
    return (
        <Button
            variant={variant}
            {...props}
            sx={{
                '@media (max-width: 600px)': {
                    width: '80%', // Make the button full width on screens smaller than 600px
                },
                // Add more custom styles for different screen sizes if needed
            }}
        >
            {title}
        </Button>


    );
};

CustomButton.propTypes = {
    title: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
};

CustomButton.defaultProps = {
    variant: 'text',
};

export default CustomButton;
