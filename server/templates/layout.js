
module.exports = (title, body, scripts) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <link href="https://fonts.googleapis.com/css?family=Karla:400,700" rel="stylesheet">
      <link href="https://d3mlfyygrfdi2i.cloudfront.net/favicon.png?v=2" rel="icon" type="image/png">
      <link rel="stylesheet" href="../public/styles.css">
      <link rel="stylesheet" href="http://www.samgetlan.com/navbar/styles.css">
      <link rel="stylesheet" href="http://s3-us-west-1.amazonaws.com/fec-kickstarter-campaign-module/styles.css">
      <link rel="stylesheet" href="https://s3-us-west-1.amazonaws.com/updates-and-comments/Updates/styles.css">
      <link rel="stylesheet" href="http://www.samgetlan.com/community/styles.css">
      <title>${title}</title>
    </head>
    <body>
    ${body}
    </body>
    ${scripts}
  </html>
`;
