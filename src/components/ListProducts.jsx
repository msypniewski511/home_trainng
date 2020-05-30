import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import { API, graphqlOperation } from 'aws-amplify';
import { listProducts } from './../graphql/queries';
import { deleteProduct } from './../graphql/mutations';

import mainImage from './../images/spalanie.png'


function ListProducts(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getListProducts();
  }, [])

  const getListProducts = async () => {
    const { data } = await API.graphql(graphqlOperation(listProducts));
    console.table(data.listProducts.items)
    setProducts(data.listProducts.items)
  }

  const onDeleteProduct = async (id, index) => {
    const payload = {
      id: id
    }
    await API.graphql(graphqlOperation(deleteProduct, { input: payload }))

    let tmp = products.filter(product => product.id !== id)
    console.table(tmp);
    setProducts(tmp);
  }
  return (
    <div>
      {products.map((product, index) => (

        <div className="products-item" key={product.id}>
          <img className="ui small image mr-10" src={mainImage} />
          <div className="content">
            <div className="item-header">
              <NavLink to={`/products/${product.id}`} className="header">{product.title}</NavLink>
              <div className="meta">
                <span>Data</span>
                <br />
                <span>Category</span>
              </div>
            </div>

            <div className="description">{product.description}</div>
            <div className="extra">
              <NavLink to={`/products/${product.id}`} className="mini ui right labeled icon button primary">Szczegóły...<i className="right arrow icon"></i></NavLink>
              <button className="mini ui right labeled icon button negative mt-buttons" onClick={() => onDeleteProduct(product.id, index)} >Usun...<i className="trash icon"></i></button>
            </div>
          </div>
        </div>
      ))
      }
    </div>
  );
}

export default ListProducts;