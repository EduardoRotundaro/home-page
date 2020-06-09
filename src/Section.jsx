import React from 'react';
import PropTypes from 'prop-types';

import Badge from './Badge';

function renderBadges (linksArr) {
    return linksArr.map( ({name, url, id}) => (
        <Badge 
            key={id}
            name={name} 
            url={url}
            identifier={id}
        />
    ));
}

function Section({title, links}) {
    return (
        <section>
            <h1>{title}</h1>
            <div>
                {renderBadges(links)}
            </div>
        </section>
    );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    links: PropTypes.array.isRequired,
};

export default Section;
