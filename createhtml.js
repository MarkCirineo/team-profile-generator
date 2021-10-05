const fs = require("fs");

const cardArr = []

const determineJob = (obj) => {
    if ("officeNumber" in obj) {
        return obj.officeNumber;
    } else if ("github" in obj) {
        return obj.github;
    } else if ("school" in obj) {
        return obj.school;
    } else {
        return;
    }
}

const createCard = (employee) => {
    cardArr.push(employee);
    let cardName = employee.name
    cardName = ``;
    const cards = cardArr.map((obj) => {
        return `<div class="col">
<div class="card" style="width: 18rem">
    <div class="card-header">${obj.name}</div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${obj.id}</li>
        <li class="list-group-item">${obj.email}</li>
        <li class="list-group-item">${determineJob(obj)}</li>
    </ul>
</div>
</div>`
    })
    createHTML(cards);
}

const createHTML = (cards) => {
    const newCards = cards.join("\n")
    const HTML = 
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
          integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
          crossorigin="anonymous"
        />
        <title>Team Profile</title>
      </head>
      <body>
        <header>
            <div class="container-fluid py-3 mb-4 bg-dark">
                <h1 class="text-center text-white">My Team!</h1>
            </div>
        </header>
        <main class="container">
    
          <div class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
    
            ${newCards}
    
          </div>
          
        </main>
      </body>
    </html>
    `
    fs.writeFile("./dist/index.html", HTML, (err) => {
        err ? console.error(err) : console.log('Success!')
    })
}

module.exports = createCard;