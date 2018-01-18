import React from 'react';
import express  from 'express';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router';

// import App from '../client/containers/Root';

const app = express();

app.use((req, res) => {
    const context = {};
    const componentHTML = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <div id="react-view"></div>
        </StaticRouter>
    );
    res.end(renderHTML(componentHTML));
});

function renderHTML(componentHTML) {
    return `
      <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Test</title>
            <link rel="stylesheet" href="http://localhost:8081/assets/styles.css">
        </head>
        <body>
          ${componentHTML}
          <script type="application/javascript" src="http://localhost:8081/public/assets/app.js"></script>
        </body>
      </html>
    `;
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`);
});