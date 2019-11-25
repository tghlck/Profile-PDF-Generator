// week 09
// github pdf generator

// variables for pkg requirements 
const inquirer = require("inquirer"); // //prompt
const axios = require("axios"); // get
const fs = require("fs"); // file sync to access local
const util = require("util"); // extra utility 
const pdf = require("html-pdf"); // html to pdf converter 
const open = require("open"); // opens pdfs
const generateHTML = require("./generateHTML.js"); // imports js file w/ code for html generation


const writeFileAsync = util.promisify(fs.writeFile);

// intial prompt for user, takes username/color preference
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
        },
        {
            type: "list",
            name: "colors",
            choices: ["green", "blue", "pink", "red"]
        }
    ]);
}

// calls promopt user and utilizes the data to create a pdf
promptUser()
    .then(function (userAns) {
        data = userAns;
        console.log(userAns);
        let api = `https://api.github.com/users/${data.username}`;
        return axios.get(api)
    })
    .then(function (response) {
        console.log(response);
        const html = generateHTML(data, response);
        return writeFileAsync("index.html", html);
    })
    .then(function () {
        console.log("Successfully wrote to index.html");
        let convert = fs.readFileSync("./index.html", "utf8");
        let options = { format: "Letter" };
        pdf.create(convert, options).toFile("index.pdf", (err, res) => {
            open("index.pdf");
            if (err)
                return console.log(err)
            console.log(res)
        })
    })
    .catch(function (err) {
        console.log(err);
    });