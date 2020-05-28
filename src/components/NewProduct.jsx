import React, { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';

import { createProduct } from './../graphql/mutations';


function NewProduct(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleInputChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    console.log(name, value);
    name === 'title' && setTitle(value);
    name === 'description' && setDescription(value);
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const payload = {
      title: title,
      description: description
    }
    const { data } = await API.graphql(graphqlOperation(createProduct, { input: payload }));
    console.log(data)
  }

  return (
    <div>
      <h3 className='ui center aligned header'>Nowy Produkt</h3>
      <div className="ui relaxed divided list products">
        <form className="ui form" onSubmit={(evnt) => onSubmitForm(evnt)}>
          <div className="field">
            <label htmlFor="title">Tytuł:</label>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Podaj tytuł produktu..."
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label>Opis produktu</label>
            <textarea
              name="description"
              value={description}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="ui buttons">
            <button className="ui button">Anuluj</button>
            <div className="or" data-text="lub"></div>
            <button type="submit" className="ui positive button">Zapisz</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewProduct;