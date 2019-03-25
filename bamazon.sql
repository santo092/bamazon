DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
item_id INT(20) PRIMARY KEY AUTO_INCREMENT NOT NULL,
product_name VARCHAR(30) NULL, 
department_name VARCHAR(20) NULL,
price DECIMAL(10,2) NULL,
stock_quantity INT(20) NULL
)

SELECT*FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Q-tips", "beauty", "4.00", "10"),
("hotdogs", "food", "7.00", "20"),
("cheerios", "food", "5.00", "2"),
("Q-tips", "beauty", "4.00", "10"),
("Q-tips", "beauty", "4.00", "10"),
("Q-tips", "beauty", "4.00", "10"),
("Q-tips", "beauty", "4.00", "10"),
("Q-tips", "beauty", "4.00", "10"),
("Q-tips", "beauty", "4.00", "10"),
("Q-tips", "beauty", "4.00", "10")
