import React from 'react';

function MainMenu(props) {
  return (
    <div className="ui borderless main menu">
      <div className="ui container">
        <div className="header item">
          <img className="logo" src="assets/images/logo.png" />
              Project Name
          </div>
        <a href="#" className="item">Blog</a>
        <a href="#" className="item">Articles</a>
        <a href="#" className="ui right floated dropdown item">
          Dropdown <i className="dropdown icon"></i>
          <div className="menu">
            <div className="item">Link Item</div>
            <div className="item">Link Item</div>
            <div className="divider"></div>
            <div className="header">Header Item</div>
            <div className="item">
              <i className="dropdown icon"></i>
            Sub Menu
            <div className="menu">
                <div className="item">Link Item</div>
                <div className="item">Link Item</div>
              </div>
            </div>
            <div className="item">Link Item</div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default MainMenu;