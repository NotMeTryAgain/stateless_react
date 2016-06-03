import React from 'react';

const GroceryForm = props => {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <input type="text" placeholder="grocery name" />
      <input type="submit" value="Add To List" />
    </form>
  );
};

export default GroceryForm;
