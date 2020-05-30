import React, { useState, useEffect } from 'react';
import { withAuthenticator } from 'aws-amplify-react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
// import "../node_modules/semantic-ui/dist/semantic.css"
import './App.scss';
import ListProducts from './components/ListProducts';
import MainMenu from './components/MainMenu';
import NewProduct from './components/NewProduct';
import ProductDetails from './components/ProductDetails';
import BackToListProductsButton from './components/BackToListProductsButton';

function App() {
  // const [isListProducts, setIsListProducts] = useState(true);
  // const [isNewProduct, setIsNewProduct] = useState(false);


  // const toggleMainContent = (content) => {
  //   content === "isListProducts" ? setIsListProducts(true) : setIsListProducts(false)
  //   content === "isNewProduct" ? setIsNewProduct(true) : setIsNewProduct(false)
  // }

  return (
    <div className="ui main container">
      <MainMenu />
      <Router>
        <Route
          path="/new"
          render={() => <BackToListProductsButton />}
        />
        <Route path="/new" component={NewProduct} />
        {/* {isNewProduct && <NewProduct />} */}
        <div className="products-header">
          <h3 className='ui center aligned header'>Twoje Projekty</h3>
          <NavLink to="/new" className="mini ui left labeled icon animated button positive">
            <div className="visible content">
              Dodaj...
                </div>
            <div className="hidden content">
              Projekt
                </div>
            <i className="add icon"></i>
          </NavLink>
        </div>
        {/* Action visible in listing state */}
        <Route path="/" exact component={ListProducts} />
        <Route
          path="/products/:productId"
          render={() => <BackToListProductsButton />}
        />
        <Route
          path="/products/:productId"
          render={(props) => <ProductDetails id={props.match.params.productId} />}
        />

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
      </Router>
    </div >
  );
}

export default withAuthenticator(App);
