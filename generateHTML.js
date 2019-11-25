const colors = {
  green: {
      wrapperBackground: "#E6E1C3",
      headerBackground: "#C1C72C",
      headerColor: "black",
      photoBorderColor: "black"
  },
  blue: {
      wrapperBackground: "#5F64D3",
      headerBackground: "#26175A",
      headerColor: "white",
      photoBorderColor: "#73448C"
  },
  pink: {
      wrapperBackground: "#879CDF",
      headerBackground: "#FF8374",
      headerColor: "white",
      photoBorderColor: "#FEE24C"
  },
  red: {
      wrapperBackground: "#DE9967",
      headerBackground: "#870603",
      headerColor: "white",
      photoBorderColor: "white"
  }
};

function generateHTML(data, response) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
  <script src="https://kit.fontawesome.com/cb45d866e1.js" crossorigin="anonymous"></script>
  <title>GitHub Profile</title>
  <style>
      @page {
          margin: 0;
      }
      *,
      *::after,
      *::before {
          box-sizing: border-box;
      }
      html,
      body {
          padding: 0;
          margin: 0;
      }
      html,
      body,
      .wrapper {
          height: 120%;
      }
      .wrapper {
          background-color: ${colors[data.colors].wrapperBackground} ;
          padding-top: 100px;
      }
      body {
          background-color: white;
          -webkit-print-color-adjust: exact !important;
          font-family: 'Cabin', sans-serif;
          
      }
      main {
          background-color: #E9EDEE;
          height: auto;
          padding-top: 30px;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
          font-family: 'BioRhyme', serif;
          margin-top: 20px;
        
      }
      h1 {
          font-size: 3em;
      }
      h2 {
          font-size: 2.5em;
      }
      h3 {
          font-size: 2em;
      }
      h4 {
          font-size: 1.5em;
      }
      h5 {
          font-size: 1.3em;
      }
      h6 {
          font-size: 1.2em;
      }
      .photo-header {
          position: relative;
          margin: 0 auto;
          margin-bottom: -50px;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          background-color: ${colors[data.colors].headerBackground};
          color: ${colors[data.colors].headerColor};
          padding: 10px;
          width: 95%;
          border-radius: 6px;
      }
      .photo-header img {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          object-fit: cover;
          margin-top: -75px;
       border: 6px solid ${colors[data.colors].photoBorderColor};
          box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
      }
      .photo-header h1,
      .photo-header h2 {
          width: 100%;
          text-align: center;
      }
      .photo-header h1 {
          margin-top: 10px;
      }
      .fas {
          padding-right: 8px;
      }
      .fab {
          padding-right: 8px;
      }
      .links-nav {
          width: 100%;
          text-align: center;
          padding: 20px 0;
          font-size: 1.1em;
      }
      .nav-link {
          display: inline-block;
          margin: 5px 10px;
      }
      .workExp-date {
          font-style: italic;
          font-size: .7em;
          text-align: right;
          margin-top: 10px;
      }
      .container {
          padding: 50px;
          padding-left: 100px;
          padding-right: 100px;
      }
      .row {
          display: flex;
          flex-wrap: wrap;
          text-align: center;
          /* margin-top: 20px; */
          /* margin-bottom: 20px; */
      }
      .card {
          padding: 20px;
          border-radius: 6px;
          background-color: ${colors[data.colors].headerBackground};
          color: ${colors[data.colors].headerColor};            color: white;
          margin: 20px;
      }
      

      .col {
          flex: 1;
          text-align: center;
      }
      a,
      a:hover {
          text-decoration: none;
          color: inherit;
          font-weight: bold;
      }
      @media print {
          body {
              zoom: .50;
          }
      }
  </style>
</head>
<body>
  <div class="row">
      <div class="container">
          <div class="wrapper">
              <div class="photo-header">
                  <img src="${response.data.avatar_url}">
                  <h1 class="display-4">Hi! My name is ${response.data.name}</h1>
                  <h2> I am currently attending UNH Coding Bootcamp</h2>
                  <ul class="nav links-nav justify-content-center">
                      <li class="nav-item nav-link">
                          <a class="nav-link active" href="https://google.com/maps/place/${response.data.location}" target="_blank"><i class="fas fa-map-marker-alt"></i>${response.data.location}</a>
                      </li>
                      <li class="nav-item nav-link">
                          <a class="nav-link" href="${response.data.html_url}" target="_blank"><i class="fab fa-github"></i>GitHub</a>
                      </li>
                      <li class="nav-item nav-link">
                          <a class="nav-link" href="${response.data.blog}" target="_blank"><i class="fas fa-blog"></i>Blog</a>
                      </li>
                  </ul>
              </div>
              <div class="row container" style="background-color: lightgray">
              <h3>${response.data.bio}</h3>
                  <div class="col">
                      <div class="card">
                          <div class="card-body">
                          <h4>Public Repositories <p>${response.data.public_repos}</p></h4>
                          </div>
                      </div>
                  </div>
                  <div class="col">
                      <div class="card">
                          <div class="card-body">
                          <h4>Followers <p>${response.data.followers}</p></h4>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="row container" style="background-color: lightgray">
                  <div class="col">
                      <div class="card">
                          <div class="card-body">
                          <h4>GitHub Stars <p>0</p></h4> <!--Could not figure out how to get GitHub Stars data-->
                          </div>
                      </div>
                  </div>
                  <div class="col">
                      <div class="card">
                          <div class="card-body">
                          <h4>Following <p>${response.data.following}</p></h4>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
</body>
</html>`
}

module.exports = generateHTML