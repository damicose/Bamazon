# Bamazon App

## Function

This CLI app is designed to simulate a rudimentary online shopping experience. Upon initialization of the app the user is provided with an array of products. They are then prompted to select an item and a quantity, and if the transaction is successful, quantity is updated.

Primary purpose for creation is gaining experience with communicating between a JavaScript file and an SQL database.

## Organization

The app consists of a main .js file that

* Creates a local server via mySQL node module (via MAMP environment)
* User input is handled by the Inquirer node module
* Manages general logic tree for progressing through the shopping 'experience'

Additionally there is a dummy .sql schema with several 'products' that is the foundation for the actual mySQL database.

## Directions

Upon initializing the bamazonCustomer.js file the user is given an array of all products along with their respective details (product name, item ID, price, department name, and current inventory level).

The user is then prompted* to enter the ID of their desired item followed by another prompt to enter in their desired quantity. If the desired quantity exceeds the current inventory level, the user is given a failure message and is returned to the command line. Otherwise the user is given a success message and inventory levels are updated.

(*Currently an issue where inquirer prompt appears before the product array, effectively hiding it. Pressing any key returns the prompt to current line, but not ideal. Nesting inside readProduct function did not resolve. To be addressed.)

## Screenshots

Movie with Default (Mr. Nobody):
![Movie With Default (Mr. Nobody)](https://github.com/damicose/liri-node-app/blob/master/assets/movie%20default.jpg?raw=true)

Movie with Term Input:
![Movie With Query Input](https://github.com/damicose/liri-node-app/blob/master/assets/movie%20query.jpg?raw=true)

Track with Default (The Sign):
![Track Default (The Sign)](https://github.com/damicose/liri-node-app/blob/master/assets/spotify%20default.jpg?raw=true)

Track with Term Input:
![Track With Query Input](https://github.com/damicose/liri-node-app/blob/master/assets/spotify%20query.jpg?raw=true)

Concert with Default (Cher):
![Concert Default (Cher)](https://github.com/damicose/liri-node-app/blob/master/assets/concert%20default%20(cher).jpg?raw=true)

Concert with Term Input:
![Concert With Query Input](https://github.com/damicose/liri-node-app/blob/master/assets/concert%20query.jpg?raw=true)


## Technologies

* Javascript
* Node
    * inquirer module
    * mySQL module

* SQL
    * MySQL Workbench
    * MAMP

## State your role in the app development

Guide for the overall structure of the app was provided by Coding Boot Camp Instructor. All development and coding beyond that were done by yours truly. Except for the parts that don't work--that's their fault.