import React from 'react';
import { NavLink } from 'react-router-dom';

function BackToListProductsButton(props) {
  return (
    <div>
      <NavLink to="/" className="mini ui left labeled icon button primary">Wroc do listy produktow<i className="left arrow icon"></i></NavLink>
    </div>
  );
}

export default BackToListProductsButton;