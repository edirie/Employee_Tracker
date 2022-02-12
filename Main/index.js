const inquirer = require('inquirer');
const db = require("./connection");


const express = require('express');
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());


db.connect((err) => {
    if (err) throw err;
    start()
});

