import React from 'react';

import {APP_VERSION, SECTIONS} from './constants';
import Section from './Section';

function renderSections () {
    return SECTIONS.map( ({name, links}) => (
        <Section 
            key={name}
            title={name} 
            links={links} 
        />
    ));
}

function App () {
    return (
        <>
            <main className="main">
                {renderSections()}
            </main>
            <footer className="footer">v{APP_VERSION}</footer>
        </>
    );
}

export default App;
