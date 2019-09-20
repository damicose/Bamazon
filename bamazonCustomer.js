const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_DB"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  console.log("Displaying Product Array")
  readProducts();
  inquirer
    .prompt([{
        type: "input",
        message: "Enter the item_id of the product you'd like to purchase.",
        name: "whichProd"
      },
      {
        type: "input",
        message: "How many would you like to purchase?",
        name: "howMany"
      }
    ])
    .then(function (answer) {
      connection.query(

        // With assistance from SO (https://stackoverflow.com/questions/20819826/how-to-pass-parameters-to-mysql-query-callback-in-nodejs) 
        // & ice cream CRUD activity (Section 12, Activity 9)

        `SELECT * FROM products`,
        function (err, res) {
          if (answer.howMany > res[(answer.whichProd - 1)].stock_quantity) {
            console.log("Error: Desired Quantity is greater than Available Stock. Do Better Next Time!")
            connection.end();
          } else {
            console.log("Purchase successful! Adjusting stock levels...")
            updateProduct();
          }

          function updateProduct() {
            connection.query(
              "UPDATE products SET ? WHERE ?",
              [{
                  stock_quantity: (res[(answer.whichProd - 1)].stock_quantity - parseInt(answer.howMany))
                },
                {
                  item_id: answer.whichProd
                }
              ],
              function (err, res) {
                if (err) throw err;
                console.log("Update Successful! Thank you for shopping with Bamazon~~~");
              }
            );
            connection.end();
          }
        }
      )
    });

  function readProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
      if (err) throw err;
      console.log(res);
    });
  }
})