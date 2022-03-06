const inquirer = require('inquirer');
const fs = require('fs');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const initializeHTML = require('./src/createHTML');

const empArray = [];

const queryMgr = () => {
    console.log(
        `
        -----------------------
        Add manager information
        -----------------------
        `
    );

    return inquirer.prompt([
        {
            type:'input',
            message:'Enter manager name:',
            name:'name',
            validate:name => {
                if(name) {
                    return true;
                } else {
                    console.log('Enter name:');
                    return false;
                }}},
        {
            type:'input',
            message:'Enter manager identification number:',
            name:'id',
            validate:id => {
                if(isNaN(id)) {
                    console.log('Enter manager identification number:')
                    return false;
                } else {
                    return true;
                }}},
        {
            type:'input',
            message:'Enter manager email:',
            name:'email',
            validate:email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if(valid) {
                    return true;
                } else {
                    console.log('Enter manager email:')
                    return false;
                }}
        },
        {
            type:'input',
            message:'Enter manager office phone number:',
            name:'officeNumber',
            validate:officeNumber => {
                if(isNaN(officeNumber)) {
                    console.log('Enter manager office phone number:')
                    return false;
                } else {
                    return true;
                }}},
    ])

    .then(mgrInfo => {
        const {name, id, email, officeNumber} = mgrInfo;
        const mgr = new Manager(name, id, email, officeNumber);

        empArray.push(mgr);
        console.log(mgr);
    })
};

const queryEmp = () => {
    console.log(
        `
        -------------------------------
        Add engineer/intern information
        -------------------------------
        `
    );

    return inquirer.prompt([
        {
            type:'list',
            name:'role',
            message:'Engineer or intern:',
            choices:['engineer', 'intern']
        },
        {
            type:'input',
            name:'name',
            message:'Enter employee name:', 
            validate:name => {
                if(name) {
                    return true;
                } else {
                    console.log('Enter employee name:');
                    return false; 
                }}},
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee identification number:',
            validate: id => {
                if(isNaN(id)) {
                    console.log('Enter employee identification number:')
                    return false; 
                } else {
                    return true;
                }}},
        {
            type:'input',
            name:'email',
            message:'Enter employees email:',
            validate:email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if(valid) {
                    return true;
                } else {
                    console.log('Enter employees email:')
                    return false; 
                }}
        },
        {
            type:'input',
            name:'github',
            message:'Enter engineer github name:',
            when:(input) => input.role === 'engineer',
            validate:github => {
                if(github) {
                    return true;
                } else {
                    console.log('Enter engineer github name:')
                    }}
        },
        {
            type:'input',
            name:'school',
            message:'Enter intern educational institution:',
            when:(input) => input.role === 'intern',
            validate:school => {
                if (school) {
                    return true;
                } else {
                    console.log('Enter intern educational institution:')
                }}
        },
        {
            type:'confirm',
            name:'additional',
            message:'Enter additional employees if necessary',
            default: false
        }
    ])

    .then(empInfo => {


        let{name, id, email,role,github, school, additional} = empInfo;
        let emp;


        if(role === 'engineer') {
            emp = new Engineer(name, id, email, github);
            console.log(emp);
        } else if(role === 'intern') {
            emp = new Intern(name, id, email, school);
            console.log(emp);
        }

        empArray.push(emp);

        if(additional) {
            return queryEmp(empArray);
        } else {
            return empArray;
        }
    })

    .then((responses) => {

        const tempPage = initializeHTML(responses);

        const path = './dist/index.html'


        if(fs.existsSync(path)) {
            fs.unlinkSync(path)
        }


        fs.appendFile('./dist/index.html', tempPage, (err) => err ? console.error(err) : console.log('log entered'))
    });
};

queryMgr()
    .then(queryEmp)
    .catch(err => {
        console.log(err);
    });