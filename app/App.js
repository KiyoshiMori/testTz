import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import Root from './client/containers/Root';

ReactDOM.render(
    <BrowserRouter location={location}>
        <Root />
    </BrowserRouter>,
    document.getElementById('react-view')
);
