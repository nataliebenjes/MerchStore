import React from "react";
import PropTypes from "prop-types";
import Item, { ItemProps } from "./Item"; // Import the Item component and ItemProps interface

interface ItemListProps {
  itemList: ItemProps[];
}

function ItemList(props: ItemListProps): JSX.Element {
  return (
    <React.Fragment>
      <hr />
      {props.itemList.map((item, index) => // Loop through the list passed down from TicketControl.
        <Item 
          name={item.name}
          description={item.description}
          quantity={item.quantity}
          key={index} />
      )}
    </React.Fragment>

  );
}
ItemList.propTypes = {
  itemList: PropTypes.arrayOf(PropTypes.object).isRequired, // Ensure itemList is an array of objects
};


  export default ItemList;
