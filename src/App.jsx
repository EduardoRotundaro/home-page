import React from 'react';

import {APP_VERSION, SECTIONS} from './constants';

function renderSections () {
    return SECTIONS.map( ({name, links}) => (
        <section>{name}</section>
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
