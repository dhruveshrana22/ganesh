import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const CustomButton = ({ title, variant, ...props }) => {
    return (
        <Button variant={variant} {...props}>
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
