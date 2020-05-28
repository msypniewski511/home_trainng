import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react'
import { listProducts } from './graphql/queries';

import "/home/maciej/aws/home_training/node_modules/semantic-ui/src/semantic.less";
import "semantic";
import "../node_modules/semantic-ui/dist/semantic.css"
import mainImage from './images/spalanie.png'
import './App.scss';
import ListProducts from './components/ListProducts';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getListProducts();
  }, [])

  const getListProducts = async () => {
    const { data } = await API.graphql(graphqlOperation(listProducts));
    const products = data.listProducts.items;
    console.table(data.listProducts.items)
    setProducts(data.listProducts.items)
  }

  return (
    <div className="ui main container">
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

      {/* Action visible in listing state */}
      <div className="products-header">
        <h3 className='ui center aligned header'>Twoje Projekty</h3>
        <button className="mini ui left labeled icon animated button positive">
          <div className="visible content">
            Dodaj...
          </div>
          <div className="hidden content">
            Projekt
          </div>
          <i class="add icon"></i>
        </button>
      </div>

      <div className="ui relaxed divided list products">
        {/* List of products */}
        {products.map((product, index) => (

          <div className="products-item" key={product.id}>
            <img className="ui small image mr-10" src={mainImage} />
            <div className="content">
              <div className="item-header">
                <a className="header">{product.title}</a>
                <div className="meta">
                  <span>Data</span>
                  <br />
                  <span>Category</span>
                </div>
              </div>

              <div className="description">{product.description}</div>
              <div className="extra">
                <button className="mini ui right labeled icon button primary">Szczegóły...<i class="right arrow icon"></i></button>
                <button className="mini ui right labeled icon button negative mt-buttons">Usun...<i class="trash icon"></i></button>
              </div>
            </div>
          </div>
        ))
        }
        <ListProducts />
      </div>

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
