import React, { useState } from 'react';
import { API, graphqlOperation, photoPickerButton } from 'aws-amplify';

import { createProduct } from './../graphql/mutations';
import { TextPicker, PhotoPicker } from 'aws-amplify-react';

const errorInputInfo = (errorInput) => {
  if (errorInput !== '') {
    return (
      <div class="ui error message">
        <div class="header">Action Forbidden</div>
        <p>{errorInput}</p>
      </div>
    )
  }
  return null;
}


function NewProduct(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errorInput, setErrorInput] = useState("");
  const [photoPicker, setPhotoPicker] = useState([]);
  const [photoPickerCounter, setPhotoPickerCounter] = useState(0)

  const handleInputChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    console.log(name, value);
    setErrorInput("");
    name === 'title' && setTitle(value);
    name === 'description' && setDescription(value);
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (title === '' || description === '') {
      setErrorInput(`Pole ${title.name} ${description.name} nie moze byc puste`);
      return;
    }

    const payload = {
      title: title,
      description: description
    }
    const { data } = await API.graphql(graphqlOperation(createProduct, { input: payload }));
    console.log(data)
  }

  const onPhotoPickerAddAction = (type) => {
    let counter = photoPickerCounter;
    setPhotoPickerCounter(counter + 1);
    photoPicker.push(type)
    console.log(photoPicker)
  }

  return (
    <div>
      <h3 className='ui center aligned header'>Nowy Produkt</h3>

      <div className="ui relaxed divided list products my-card">
        <div className="ui segment">
          {errorInputInfo(errorInput)}
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

      <div className="ui relaxed divided list products my-card">
        <div className="ui segment">
          <div className="ui segment">
            {photoPicker.map((element, position) => <div key={position}>
              {element === 'photo' && <PhotoPicker preview />}
              {element === 'text' && <TextPicker preview />}</div>
            )}
          </div>
          <div className="ui segment">
            <div className="ui four buttons" size='large' widths='5'>
              <button
                name="photo"
                title='Dodaj Zdjęcie'
                onClick={(e) => onPhotoPickerAddAction(e.target.name)}
                className="ui red button"
              ><i className="photo icon"></i>
              </button>
              <div className="or" data-text='lub' />
              <button
                name="video"
                title='Dodaj Video'
                onClick={(e) => onPhotoPickerAddAction(e.target.name)}
                className="ui teal button"
              ><i className="video icon"></i>
              </button>
              <div className="or" data-text='lub' />
              <button
                name="text"
                title='Dodaj Text'
                className="ui purple button"
                onClick={(e) => onPhotoPickerAddAction(e.target.name)}
              ><i className="edit icon"></i>
              </button>
              <div className="or" data-text='lub' />
              <button
                name="wysiwyg"
                title='Dodaj Text WYSIWYG'
                className="ui blue button"
                onClick={(e) => onPhotoPickerAddAction(e.target.name)}
              ><i className="edit icon"></i>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProduct;