// engineer data card
const initializeEng = function(engineer) {
    return `
<div class="card shadow-lg m-3" style="width: 18rem;">
    <div class="card-body bg-secondary bg-gradient bg-opacity-75 text-primary">
        <h4 class="card-title fs-4 fw-bold">${engineer.name}</h4>
        <h6 class="card-title fs-6 fw-bold">Engineer</h6>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>ID:</strong> ${engineer.id} </li>
        <li class="list-group-item"><strong>Email:</strong> <a href="mailto:${engineer.email}">${engineer.email}</a> </li>
        <li class="list-group-item"><strong>GitHub: </strong> <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
    </ul>
</div>
`;
};

// manager data card
const initializeMgr = function(manager) {
    return `
<div class="card shadow-lg m-3" style="width: 18rem;">
    <div class="card-body bg-secondary bg-gradient bg-opacity-75 text-primary">
        <h4 class="card-title fs-4 fw-bold">${manager.name}</h4>
        <h6 class="card-title fs-6 fw-bold">Manager</h6>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>ID:</strong> ${manager.id} </li>
        <li class="list-group-item"><strong>Email:</strong> <a href="mailto:${manager.email}">${manager.email}</a></li>
        <li class="list-group-item"><strong>Office Number:</strong> ${manager.officeNumber} </li>
    </ul>
</div>
`
};

// intern data card
const initializeIntrn = function(intern) {
    return `
<div class="card shadow-lg m-3" style="width: 18rem;">
    <div class="card-body bg-secondary bg-gradient bg-opacity-75 text-primary">
        <h4 class="card-title fs-4 fw-bold">${intern.name}</h4>
        <h6 class="card-title fs-6 fw-bold">Intern</h6>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>ID:</strong> ${intern.id} </li>
        <li class="list-group-item"><strong>Email:</strong> <a href="mailto:${intern.email}">${intern.email}</a></li>
        <li class="list-group-item"><strong>School:</strong> ${intern.school} </li>
    </ul>
</div>
`
};

// loop through provided indexes and apply them to cards
const initializeHTML = (data) => {

    let empArray = [];

    for(let i = 0; i < data.length; i++) {
        const employee = data[i];


        const role = employee.getRole();


        if(role === 'Engineer') {
            const engCard = initializeEng(employee);
            empArray.push(engCard);
        }
        
        if(role === 'Manager') {
            const mgrCard = initializeMgr(employee);
            empArray.push(mgrCard);
        }

        if(role === 'Intern') {
            const intrnCard = initializeIntrn(employee);
            empArray.push(intrnCard);
        }
    };

    const empCards = empArray.join('')
    const emps = pageTemp(empCards);
    return emps;
};

const pageTemp = function(empCards) {
    return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee Pool</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    <body>
        <nav class="navbar navbar-light bg-primary bg-gradient py-5">
            <div class="container-fluid">
                <a class="navbar-brand mx-auto text-white h1 fs-1" href="#">Employee Pool</a>
            </div>
        </nav>
    
        <div class="container d-flex">
            <div class="row justify-content-center m-3">${empCards}</div>
        </div>
    
        <script src="index.js"></script>
    </body>
</html>
`
};

module.exports = initializeHTML;