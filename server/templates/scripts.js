
module.exports = (items, id) => `
  <script src="/lib/react.development.js"></script>
  <script src="/lib/react-dom.development.js"></script>

  ${items.map(item => {
    return `<script src="/services/${item}.js"></script>`;
  }).join('\n')}

  <script>
    ${items.map(item => `
      ReactDOM.hydrate(
        React.createElement(${item}, {projectId: ${id}, url: 'http://ec2-54-193-114-227.us-west-1.compute.amazonaws.com'}),
        document.getElementById('${item}')
      );`).join('\n')}
  </script>
`;
