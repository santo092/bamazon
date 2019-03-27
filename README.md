## bamazon

# This Bamazon 'Amazon-like storefront app' node app takes in commands and gives a response based on commands available:

__bamazonCustomer.js__
* user is will take on the consumer role
1. Prompts the user what item they would like to purchase in the inventory as a list from the products table.
2. The user will then be questioned how many units of the product they'll like to buy. 
* if the item ordered is greater than inventory, the system will log "Insufficient quantity!"
* if the item ordered if less than inventory, the system will then subtract those units from the stock, and the total order willl appear
3. There will be another prompt to ask if the user would like to "Purchase another item or Exit"


__bamazonManager.js__
* user is will take on the manager role
1. Prompts the user what they would like to do

* View Products for Sale - lists the user available products for sale

* View Low Inventory - lists the user products with inventory count lower than five

* Add to Inventory - asks the user if he/she would like to add units to any product listed

* Add New Product - asks the user if he/she would like to add another product

2. There will be another prompt to ask if the user would like to do any of the command listed above or exit.

### I tried to tackle the bamazonSupervisor.js but I didn't want to spend so much time joining and doing math functions in mySql. I would rather spend time tackling the next homework due. 

#### I did managed to update product sales in the product table. 

## Video links: link 1: https://vimeo.com/326733682

##### npms/libraries used: "inquirer": "^6.2.2", "json": "^9.0.6", my.SQL