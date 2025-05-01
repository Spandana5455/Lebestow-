import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';
import starter1 from './images/starter1.png';
import starter2 from './images/starter2.png';
import starter3 from './images/starter3.png';
import starter4 from './images/starter4.png';
import starter5 from './images/starter5.png';
import starter6 from './images/starter6.png';
import starter7 from './images/starter7.png';
import starter8 from './images/starter8.png';
import noodles1 from './images/noodles1.png';
import noodles2 from './images/noodles2.png';
import noodles3 from './images/noodles3.png';
import noodles4 from './images/noodles4.png';
import noodles5 from './images/noodles5.png';
import noodles6 from './images/noodles6.png';
import noodles7 from './images/noodles7.png';
import noodles8 from './images/noodles8.png';
import friedrice1 from './images/friedrice1.png';
import friedrice2 from './images/friedrice2.png';
import friedrice3 from './images/friedrice3.png';
import friedrice4 from './images/friedrice4.png';
import friedrice5 from './images/friedrice5.png';
import friedrice6 from './images/friedrice6.png';
import friedrice7 from './images/friedrice7.png';
import friedrice8 from './images/friedrice8.png';
import quickbytes1 from './images/quickbytes1.png';
import quickbytes2 from './images/quickbytes2.png';
import quickbytes3 from './images/quickbytes3.png';
import quickbytes4 from './images/quickbytes4.png';
import sandwich1 from './images/sandwich1.png';
import sandwich2 from './images/sandwich2.png';
import sandwich3 from './images/sandwich3.png';
import sandwich4 from './images/sandwich4.png';
import soup1 from './images/soup1.png';
import soup2 from './images/soup2.png';
import soup3 from './images/soup3.png';
import soup4 from './images/soup4.png';
import milkshake1 from './images/milkshake1.png';
import milkshake2 from './images/milkshake2.png';
import milkshake3 from './images/milkshake3.png';
import milkshake4 from './images/milkshake4.png';
import maggie1 from './images/maggie1.png';
import maggie2 from './images/maggie2.png';


const starters = [
  { name: 'Veg manchurian', image: starter1 },
  { name: 'Veg manchurian dry', image: starter2 },
  { name: 'Chilli paneer', image: starter3 },
  { name: 'Crispy honey chilli potato', image: starter4 },
  { name: 'Chicken manchurian', image: starter5 },
  { name: 'Chilli chicken', image: starter6 },
  { name: 'Chicken drumstick', image: starter7 },
  { name: 'Schezwan chicken', image: starter8 }
];

const noodles = [
    { name: 'Veg soft noodles', image: noodles1 },
    { name: 'veg schezwan noodles', image: noodles2 },
    { name: 'Veg chilli garlic noodles', image: noodles3 },
    { name: 'Veg hakka noodles', image: noodles4 },
    { name: 'Egg soft noodles', image: noodles5 },
    { name: 'Chicken soft noodles', image: noodles6 },
    { name: 'Chicken schezwan noodles', image: noodles7 },
    { name: 'chicken chilli garlic noodles', image: noodles8 }
];

const friedrice = [
    { name: 'Veg fried rice', image: friedrice1 },
    { name: 'Veg schezwan fried rice', image: friedrice2 },
    { name: 'Veg burnt  garlic fried rice ', image: friedrice3 },
    { name: 'Egg fried rice', image: friedrice4 },
    { name: 'Egg schezwan fried rice', image: friedrice5 },
    { name: 'Chicken fried rice', image: friedrice6 },
    { name: 'Chicken schezwan fried rice', image: friedrice7 },
    { name: 'Chicken garlic fried rice', image: friedrice8 }
];
const quickbytes = [
    { name: 'French fries', image: quickbytes1 },
    { name: 'veg nuggets', image: quickbytes2 },
    { name: 'Chicken nuggets', image: quickbytes3 },
    { name: 'Chicken popcorn', image: quickbytes4 },
];

const sandwich = [
    { name: 'Veg mayonnaise sandwich ', image: sandwich1 },
    { name: 'Veg club sandwich', image: sandwich2 },
    { name: 'Paneer sandwich', image: sandwich3 },
    { name: 'Chicken sandwich', image: sandwich4 },
];

const soups = [
    { name: 'Veg hot and sour', image: soup1 },
    { name: 'Veg manchow', image: soup2 },
    { name: 'Chicken hot and sour', image: soup3 },
    { name: 'Chicken manchow', image: soup4 },
];

const milkshake = [
    { name: 'Vanilla milk shake', image: milkshake1 },
    { name: 'Kit kat milk shake', image: milkshake2 },
    { name: 'Oreo milk shake ', image: milkshake3 },
    { name: 'Dark chocolate milk shake', image: milkshake4 },
];

const maggie = [
    { name: 'Veg maggi', image: maggie1 },
    { name: 'Chicken maggi', image: maggie2 },
];

const Menu = () => {
  return (
    <>
    <div className="container my-5 mx-2">
      <h2 className="text-center mb-4">
        <span className='starters-heading'>Starters</span>
      </h2>

      <div className="row">
        {starters.map((item, index) => (
          <div className="col-6 col-md-3 mb-4" key={index}>
            <div className="card shadow-sm starters-card">
              <img
                src={item.image}
                className="card-img-top starters-image"
                alt={item.name}
              />
              <div className="card-body text-center">
                <h6 className="mb-0 starters-name">
                  {item.name}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="container my-5 mx-2">
      <h2 className="text-center mb-4">
        <span className='noodles-heading'>Noodles</span>
      </h2>

      <div className="row">
        {noodles.map((item, index) => (
          <div className="col-6 col-md-3 mb-4" key={index}>
            <div className="card shadow-sm noodles-card">
              <img
                src={item.image}
                className="card-img-top noodles-image"
                alt={item.name}
              />
              <div className="card-body text-center">
                <h6 className="mb-0 noodles-name">
                  {item.name}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="container my-5 mx-2">
      <h2 className="text-center mb-4">
        <span className='friedrice-heading'>Fried Rice</span>
      </h2>

      <div className="row">
        {friedrice.map((item, index) => (
          <div className="col-6 col-md-3 mb-4" key={index}>
            <div className="card shadow-sm friedrice-card">
              <img
                src={item.image}
                className="card-img-top friedrice-image"
                alt={item.name}
              />
              <div className="card-body text-center">
                <h6 className="mb-0 friedrice-name">
                  {item.name}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="container my-5 mx-2">
      <h2 className="text-center mb-4">
        <span className='quickbytes-heading'>Quick Bytes</span>
      </h2>

      <div className="row">
        {quickbytes.map((item, index) => (
          <div className="col-6 col-md-3 mb-4" key={index}>
            <div className="card shadow-sm quickbytes-card">
              <img
                src={item.image}
                className="card-img-top quickbytes-image"
                alt={item.name}
              />
              <div className="card-body text-center">
                <h6 className="mb-0 quickbytes-name">
                  {item.name}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="container my-5 mx-2">
      <h2 className="text-center mb-4">
        <span className='sandwich-heading'>Sandwich</span>
      </h2>

      <div className="row">
        {sandwich.map((item, index) => (
          <div className="col-6 col-md-3 mb-4" key={index}>
            <div className="card shadow-sm sandwich-card">
              <img
                src={item.image}
                className="card-img-top sandwich-image"
                alt={item.name}
              />
              <div className="card-body text-center">
                <h6 className="mb-0 sandwich-name">
                  {item.name}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="container my-5 mx-2">
      <h2 className="text-center mb-4">
        <span className='soups-heading'>Soups</span>
      </h2>

      <div className="row">
        {soups.map((item, index) => (
          <div className="col-6 col-md-3 mb-4" key={index}>
            <div className="card shadow-sm soups-card">
              <img
                src={item.image}
                className="card-img-top soups-image"
                alt={item.name}
              />
              <div className="card-body text-center">
                <h6 className="mb-0 soups-name">
                  {item.name}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="container my-5 mx-2">
      <h2 className="text-center mb-4">
        <span className='milkshake-heading'>Milk shake</span>
      </h2>

      <div className="row">
        {milkshake.map((item, index) => (
          <div className="col-6 col-md-3 mb-4" key={index}>
            <div className="card shadow-sm milkshake-card">
              <img
                src={item.image}
                className="card-img-top milkshake-image"
                alt={item.name}
              />
              <div className="card-body text-center">
                <h6 className="mb-0 milkshake-name">
                  {item.name}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="container my-5 mx-2">
  <h2 className="text-center mb-4">
    <span className='maggie-heading'>Maggie</span>
  </h2>

  <div className="row justify-content-center">
    {maggie.map((item, index) => (
      <div className="col-6 col-md-3 mb-4" key={index}>
        <div className="card shadow-sm maggie-card">
          <img
            src={item.image}
            className="card-img-top maggie-image"
            alt={item.name}
          />
          <div className="card-body text-center">
            <h6 className="mb-0 maggie-name">
              {item.name}
            </h6>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    </>
  );
};

export default Menu;
