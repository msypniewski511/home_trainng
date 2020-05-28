import React, { useState, useEffect } from 'react';
import { withAuthenticator } from 'aws-amplify-react'

import "semantic";
import "../node_modules/semantic-ui/dist/semantic.css"
import './App.scss';
import ListProducts from './components/ListProducts';
import MainMenu from './components/MainMenu';
import NewProduct from './components/NewProduct';

function App() {
  const [isListProducts, setIsListProducts] = useState(true);
  const [isNewProduct, setIsNewProduct] = useState(false);


  const toggleMainContent = (content) => {
    content === "isListProducts" ? setIsListProducts(true) : setIsListProducts(false)
    content === "isNewProduct" ? setIsNewProduct(true) : setIsNewProduct(false)
  }

  return (
    <div className="ui main container">
      <MainMenu />
      {isNewProduct && <NewProduct />}
      {/* Action visible in listing state */}
      {isListProducts &&
        <>
          <div className="products-header">
            <h3 className='ui center aligned header'>Twoje Projekty</h3>
            <button className="mini ui left labeled icon animated button positive" onClick={() => { toggleMainContent('isNewProduct') }}>
              <div className="visible content">
                Dodaj...
          </div>
              <div className="hidden content">
                Projekt
          </div>
              <i className="add icon"></i>
            </button>
          </div>

          <div className="ui relaxed divided list products">
            {/* List of products */}
            <ListProducts />
          </div></>
      }
      <h3 className='ui center aligned header'>Responsive Steps</h3>

      <div className='ui last container'>
        <div className='ui three steps'>
          <div className='step'>
            <div className='content'>
              <div className='title'>Shipping</div>
              <div className='description'>Choose your shipping options</div>
            </div>
          </div>
          <div className='active step'>
            <div className='content'>
              <div className='title'>Billing</div>
              <div className='description'>Enter billing information</div>
            </div>
          </div>
          <div className='disabled step'>
            <div className='content'>
              <div className='title'>Confirm Order</div>
              <div className='description'>Review your order details</div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default withAuthenticator(App);
