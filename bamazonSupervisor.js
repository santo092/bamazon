//requires
const inquirer = require("inquirer");
const mysql = require("mysql");

//connect to database
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

listProducts = () => {
    connection.query("SELECT * FROM products", (err, results) => {
        if (err) throw err;
        console.log(results)
    })
}

lowInventory = () => {
    connection.query("SELECT * FROM products", (err, results) => {
        if (err) throw err;
        for (let i = 0; i < results.length; i++) {
            if (results[i].stock_quantity < 5) {

                console.log(results[i].product_name)
            }

        }
    })
}

function addInventory() {

    connection.query("SELECT * FROM products", (err, results) => {
        if (err) throw err;

        inquirer.prompt([
            {
                name: "addInv",
                type: "rawlist",
                message: "What item would you like to add into?",
                choices: function () {
                    let choiceArray = [];
                    for (let i = 0; i < results.length; i++) {
                        choiceArray.push(results[i].product_name);
                    }
                    return choiceArray;
                }
            },
            {
                name: "addNum",
                type: "input",
                message: "How many would you like to add?",

            }
        ]).then(function (answer) {
            let chosenItem;
            for (let i = 0; i < results.length; i++) {
                if (results[i].product_name === answer.addInv) {
                    chosenItem = results[i];
                }
            }
            let add = parseFloat(chosenItem.stock_quantity)+parseFloat(answer.addNum);

            connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                    {
                        stock_quantity: add
                    },
                    {
                        product_name: answer.addInv
                    }
                ],
                function (error) {
                    if (error) throw err;
                    console.log("Bid placed successfully!");
                    start();
                }
            )
        })

    })
}

//function which prompts the action of the store
function start() {
    inquirer
        .prompt({
            name: "viewOrCreate",
            type: "list",
            message: "What would you like to do?",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product", "Exit"]
        })
        .then(answer => {
            //console.log("hi")

            if (answer.viewOrCreate === "View Products for Sale") {
                listProducts();
            }
            else if (answer.viewOrCreate === "View Low Inventory") {
                lowInventory();
            }
            else if (answer.viewOrCreate === "Add to Inventory") {
                addInventory();
            }
        })

}

//the price of the product multiplied by the quantity purchased is added to the product's product_sales column

//