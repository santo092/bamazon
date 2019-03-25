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

connection.connect(err => {
    if (err) throw err;
    start();
})
function cont(){
    inquirer.prompt([
        {
            name: "cont",
            type: "list",
            message: "What would you like to do next?",
            choices: ["Purchase another item", "Exit"]
        }
    ]).then(answer =>{
        if(answer.cont === "Purchase another item"){
    start();
        }
        else{
            connection.end();
        }
    })   
}

function start() {
    connection.query("SELECT * FROM products", (err, results) => {
        if (err) throw err;
        //console.log(results);
        inquirer.prompt([
            {
                name: "choice",
                type: "rawlist",
                choices: function () {
                    let choiceArray = [];
                    for (let i = 0; i < results.length; i++) {
                        choiceArray.push(results[i].product_name);
                    }
                    return choiceArray;
                }
            },
            {
                name: "unitNum",
                type: "input",
                message: "How many would you like to purchase?"
            }
        ]).then(function (answer) {
            //console.log(answer);

            let chosenItem;
            for (let i = 0; i < results.length; i++) {
                if (results[i].product_name === answer.choice) {
                    chosenItem = results[i];
                }
            }

            //console.log(chosenItem.stock_quantity)

            //subtract the unitNum to stock.quantity

            if (chosenItem.stock_quantity > parseInt(answer.unitNum)) {

                // console.log(chosenItem.stock_quantity-answer.unitNum)

                let unitLeft = (chosenItem.stock_quantity - answer.unitNum)

                connection.query(

                    "UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: unitLeft
                        },
                        {
                            item_id: chosenItem.item_id
                        }
                    ],
                    function (error) {
                        if (error) throw err;
                        let total = parseFloat(chosenItem.price * answer.unitNum).toFixed(2)
                        console.log("Your order total is $" + total);
                        console.log("");
                        cont();
                    }
                );
            }
            else{
                
                console.log("Insufficient quantity!")
                cont();

            }
        })
    }
    )
}

//console.log(results);


