DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
item_id INT(20) PRIMARY KEY NULL,
product_name VARCHAR(30) NULL, 
department_name VARCHAR(20) NULL,
price DECIMAL(10,2) NULL,
stock_quantity INT(20) NULL
);

CREATE TABLE departments(
department_id INT(10),
department_name VARCHAR(30) NULL,
over_head_costs DECIMAL(10,2) NULL
);

SELECT*FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Q-tips", "beauty", "4.00", "3"),
("hotdogs", "food", "7.00", "3"),
("cheerios", "food", "5.00", "10"),
("pencils", "school supplies", "4.00", "4"),
("tires", "auto", "200.00", "3"),
("shampoo", "beauty", "10.00", "3"),
("banana", "food", "2.00", "3"),
("Coca-cola", "food", "4.00", "3"),
("bbq chips", "food", "6.00", "3"),
("t-shirt", "clothing", "12.00", "3")
