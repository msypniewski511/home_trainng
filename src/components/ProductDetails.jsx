import React, { useState, useEffect } from 'react';
import { getProduct } from '../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';

function ProductDetails({ id }) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductDetails();
  }, [])

  const getProductDetails = async () => {
    const payload = id
    const { data } = await API.graphql(graphqlOperation(getProduct, { id: payload }));
    setProduct(data.getProduct);
  }
  return (

    < div className="products-item" >
      <h1 className="ui header">
        {product.title}
        <div className="sub header">
          {product.description}
        </div>
      </h1>
    </div >
  );
}

export default ProductDetails;