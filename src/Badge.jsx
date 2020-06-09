import React from 'react';
import PropTypes from 'prop-types';

function Badge({name, url}) {
    return (
        <a 
            href={url} 
            target="_blank"
            rel="noopener noreferrer"
        >
            {name}
        </a>
    );
}

Badge.propTypes = {
    name: PropTypes.string.isRequired,
    identifier: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default Badge;
