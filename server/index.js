// require('newrelic');
// import { renderToString } from 'react-dom/server';
const express = require('express');
const path = require('path');
const cors = require('cors');
const html = require('./html.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(`${__dirname}/public`)));

const React = require('react');
const ReactDom = require('react-dom/server');
const Layout = require('./templates/layout');
const App = require('./templates/app');
const Scripts = require('./templates/scripts');

const clientBundles = './public/services';
const serverBundles = './templates/services';
const serviceConfig = require('./service-config.json');
const services = require('./loader.js')(clientBundles, serverBundles, serviceConfig);

const renderComponents = (components, props = {}) => {
  return Object.keys(components).map(item => {
    let component = React.createElement(components[item], props);
    return ReactDom.renderToString(component);
  });
};

app.use('/:projectId', (request, response) => {
  let components = renderComponents(services, { itemid: request.params.id });
  response.end(Layout('Jumpstarter', App(...components), Scripts(Object.keys(services), request.params.id)));
});

app.listen(port, () => {
  console.log(`Proxy server running at: http://localhost:${port}`);
});
