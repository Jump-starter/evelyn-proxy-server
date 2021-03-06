const React = require('react');
const renderToString = require('react-dom/server');
const axios = require('axios');

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css?family=Karla:400,700" rel="stylesheet">
    <link href="https://d3mlfyygrfdi2i.cloudfront.net/favicon.png?v=2" rel="icon" type="image/png">
    <link rel="stylesheet" href="/styles.css">
    <link rel="stylesheet" href="http://www.samgetlan.com/navbar/styles.css">
    <link rel="stylesheet" href="http://s3-us-west-1.amazonaws.com/fec-kickstarter-campaign-module/styles.css">
    <link rel="stylesheet" href="https://s3-us-west-1.amazonaws.com/updates-and-comments/Updates/styles.css">
    <link rel="stylesheet" href="http://www.samgetlan.com/community/styles.css">
    <title>NotAirBnB</title>
  </head>
  <body>
    <div id="application">
      <div id="Summary"></div>
      <div id="Navbar"></div>
      <div id="Campaign"></div>
      <div id="Updates" class="hidden"></div>
      <div id="Comments" class="hidden"></div>
      <div id="Community" class="hidden"></div>
    </div>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
    <script src="https://s3-us-west-1.amazonaws.com/jumpstarterproductsummary/bundle.js"></script>
    <script src="https://s3-us-west-1.amazonaws.com/jumpstarternavbar/bundle.js"></script>
    <script src="https://s3-us-west-1.amazonaws.com/jumpstartercommunity/bundle.js"></script>
    <script src="https://s3-us-west-1.amazonaws.com/jumpstartercampaign/bundle.js"></script>
    <script src="https://s3.us-east-2.amazonaws.com/jumpstarter-static/bundle.js"></script>
    <script>
      const project = window.location.href.split('?')[1] || 0;
      ReactDOM.render(
        React.createElement(Navbar, {projectId: project'}),
        document.getElementById('Navbar')
      );
      ReactDOM.render(
        React.createElement(Community, {projectId: project}),
        document.getElementById('Community')
      );
      ReactDOM.render(
        React.createElement(Campaign, {projectId: project, url: 'http://ec2-54-193-114-227.us-west-1.compute.amazonaws.com'}),
        document.getElementById('Campaign')
      );
      ReactDOM.render(
        React.createElement(App, {projectId: project}),
        document.getElementById('Summary')
      );
      ReactDOM.render(
        React.createElement(Updates, {projectId: project}),
        document.getElementById('Updates')
      );
      ReactDOM.render(
        React.createElement(Comments, {projectId: project}),
        document.getElementById('Comments')
      );
    </script>
  </body>
</html>`


module.exports = html;
