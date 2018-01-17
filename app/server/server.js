import React from 'react';
import express  from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../client/containers/Root/index.tsx';

const app = express();

app.use((req, res) => {
    const componentHTML = ReactDOMServer.renderToString(<App />);
    res.end(renderHTML(componentHTML));
});

function renderHTML(componentHTML) {
    return `
      <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hello React</title>
            <link rel="stylesheet" href="localhost:8081/public/assets/styles.css">
        </head>
        <body>
          <div id="react-view">${componentHTML}</div>
          <script type="application/javascript" src="localhost:8081/public/assets/bundle.js"></script>
        </body>
      </html>
    `;
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`);
});