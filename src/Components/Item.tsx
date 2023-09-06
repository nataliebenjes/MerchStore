import * as React from "react";

export interface ItemProps {
  name: string;
  description: string;
  quantity: number;
  issue?: string; // Optional prop
}
//  name, description, and quantity
function Item(props: ItemProps): JSX.Element{
  return (
    <React.Fragment>
      <h3>{props.name} - {props.name}</h3>
      <p><em>{props.quantity}Quantity remaining</em></p>
      <h4>{props.description}</h4>
      <hr/>
    </React.Fragment>
  );
}

export default Item;



