# Merch Site React App


Welcome to the Merch Site React App! This web application is designed to help you build an online store for selling merchandise related to your favorite band, author, sports team, or any other purveyor of your choice. With this app, you can easily manage and sell your merchandise items, whether it's band t-shirts, author-signed books, or sports team memorabilia.


## Getting Started
# Prerequisites
Before you can run the Merch Site React App, you'll need to have the following software installed on your computer:

* Node.js (with npm)
* Git

# Installation

1. Clone the repository to your local machine using Git:

2. Navigate to the project directory:

3. Install the project dependencies using npm:
`npm install`

4. Start the development server:
`npm start`


# Features

## Create, Read, Update, and Delete Items
With the Merch Site React App, you can easily manage your merchandise items. Each item in the store has the following fields:

* Name
* Description
* Quantity
* Additional fields you can customize


You can perform the following actions for each item:

* Create new items.
* View the details of each item.
Update item information such as name, description, and quantity.
* Delete items that are no longer available or needed.


### Quantity Management
* This app allows you to effectively manage item quantities. You can:

* Increase the quantity by clicking "Restock," which increments the quantity by a specified number.
* Decrease the quantity by clicking "Buy," which reduces the quantity by one.
* Ensure that item quantities never go below 0, preventing negative quantities.

### Out of Stock Handling
* When the quantity of an item is reduced to 0, the item automatically indicates that it's "Out of Stock." Users will see this notification and won't be able to reduce the quantity further. This feature ensures that customers are aware when an item is no longer available for purchase.

## Contributions

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
Make your changes and commit them: `git commit -m "Description of your changes".`
Push your changes to your fork: git push origin feature-name.
Create a pull request on the main repository.


## License
This project is licensed under the MIT License - see the LICENSE file for details.





