// Create, Read, Update and Delete items in the store. Items should have fields for name, description, and quantity (along with any other fields you wish to add).

//"Buy" button will decrease quantity by 1

//when quantity is at 0, item should say OOS

import React from "react";
import PropTypes from "prop-types";
import Item, { ItemProps } from "./Item"; // Import the Item component and ItemProps interface

function NewItemForm(props: ItemListProps): JSX.Element {
  <React.Fragment>
    <form onSubmit=
    {handleNewItemFormSubmission}>
      <input
        type='text'
        name='name'
        placeholder='Item name' />
      <input
        type='text'
        name='description'
        placeholder='Item description' />
      <input
        type='int'
        name='quantity'
        placeholder='Item quantity' />
    </form>
  </React.Fragment>
);
function handleNewItemFormSubmission(event) {
  event.preventDefault();
  
}
}
