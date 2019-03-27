const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    post: 3306,
    user: "root",
    password: "password",
    database: "bamazon_db"
});

//create data from the table

connection.connect(err => {
    if (err) throw err;
    start();
});

function viewSales() {
    connection.query("SELECT * FROM departments", (err, results) => {
        if (err) throw err;
        inquirer.prompt([
            {
                name: "sales",
                type: "list",
                message: "What product would you like to view?",
                choices: function () {
                    let choiceArray = [];
                    for (let i = 0; i < results.length; i++) {
                        choiceArray.push(results[i].department_name);
                    }
                    return choiceArray;
                }
            }
        ]).then(function (answer) {
            connection.query(
                "SELECT * FROM departments WHERE ?",
                [
                    {
                       department_name: answer.sales
                    }
                ],
                function (error) {
                    if (error) throw error;
                    console.log("no")
                    console.log(results)
                   
                }
            );
        })
    })
}

function start() {
    inquirer
        .prompt({
            name: "viewOrCreate",
            type: "list",
            message: "What would you like to do?",
            choices: ["View Sales by Department", "Create New Department", "Exit"]
        })
        .then(answer => {
            //console.log("hi")

            if (answer.viewOrCreate === "View Sales by Department") {
                viewSales();
            }
            else if (answer.viewOrCreate === "Create New Department") {
                createDept();
            }
            else {
                connection.end();
            }
        })

}