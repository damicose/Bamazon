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

connection.connect(function(err) {
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
.then(function(inquirerResponse) {
  let prodQuan = (
    connection.query(
"SELECT FROM "
    )
  )
if (inquirerResponse.howMany > prodQuan) {
  console.log("Error: Desired Quantity is greater than Available Stock")
}
else {
  console.log("Purchase successful! Adjusting stock levels...")
  updateProduct();
}

});

function readProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    // connection.end();
  });
}

function updateProduct() {
  // console.log("Updating all Rocky Road quantities...\n");
  connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: (parseInt(stock_quantity) - parseInt(inquirerResponse.howMany))
      },
      {
        item_id: inquirerResponse.whichProd
      }
    ],
    function(err, res) {
      if (err) throw err;
      console.log("Update Successful! Thank you for shopping with Bamazon~~~");
      // Call deleteProduct AFTER the UPDATE completes
      // deleteProduct();
    }
  );

// function createProduct() {
//   console.log("Inserting a new product...\n");
//   let query = connection.query(
//     "INSERT INTO products SET ?",
//     {
//       flavor: "Rocky Road",
//       price: 3.0,
//       quantity: 50
//     },
//     function(err, res) {
//       if (err) throw err;
//       console.log(res.affectedRows + " product inserted!\n");
//       // Call updateProduct AFTER the INSERT completes
//       updateProduct();
//     }
//   );

//   // logs the actual query being run
//   console.log(query.sql);
// }



//   // logs the actual query being run
//   console.log(query.sql);
// }

// function deleteProduct() {
//   console.log("Deleting all strawberry icecream...\n");
//   connection.query(
//     "DELETE FROM products WHERE ?",
//     {
//       flavor: "strawberry"
//     },
//     function(err, res) {
//       if (err) throw err;
//       console.log(res.affectedRows + " products deleted!\n");
//       // Call readProducts AFTER the DELETE completes
//       readProducts();
//     }
//   );
// }
