DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30) NULL,
    department_name VARCHAR (30) NULL
    price DECIMAL (10,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shirt", "Clothing", 51.00, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Towel", "Home", 14.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lawn Mower", "Yard", 250.00, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Vacuum", "Home", 78.50, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Couch", "Furniture", 399.99, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Laptop", "Electronics", 899.99, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Playstation 5", "Electronics", 499.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sponge", "Home", 4.99, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Starving, Crazed Weasel", "Pet", 40.00, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Meaning of Life", "Existential", 4.20, 0);
