const inquirer = require('inquirer');
const db = require("./connection");


const express = require('express');
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());


db.connect((err) => {
    if (err) throw err;
    start();
});

function start (){
    inquirer.prompt([
        {
          type: 'list',
          message: 'What would you like to do?',
          name: 'optionsList',
          choices: ["View all Employees", "View All Roles", "View All Departments", "View employee by Manager", "Add a new department", "Add a new role", "Add a new Employee", "Update an employee role", "Delete a row (Department/Role/Employee)", "Quit"],
          name:"choice" //cleans up the output
        }

      ])        
//         .then((res) => {
//           console.log(res.choice); //shows output of res

//           switch(res.choice){

//             case "View all Employees":
//             employeeView();
//             break;

//             case "View All Roles":
//             roleView()
//             break;

//             case "View All Departments":
//             departmentView()
//             break;

//             case "View employee by Manager":
//             managerView()
//             break;



//             case "Add a new department":
//             addDepartment()
//             break;

//             case "Add a new role":
//             addRole()
//             break;

//             case "Add a new Employee":
//             addEmployee()
//             break;

//             case "Update an employee role":
//             updateEmployee()
//             break;


//             case "Delete a row (Department/Role/Employee)":
//             deleteaRow()
//             break;


//             case "Quit":
//             db.end();
//             console.log("Bye!")
//             break;
//           }

          }