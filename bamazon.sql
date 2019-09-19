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
VALUES ();

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ();

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ();

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ();

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ();

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ();

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ();

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ();

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ();

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ();
