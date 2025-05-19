import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';
import './Cafe.css';
import c1 from './images/c1.png';
import c2 from './images/c2.png';
import c3 from './images/c3.png';
import c4 from './images/c4.png';
import c5 from './images/c5.png';
import c6 from './images/c6.png';
import cafe1 from './images/cafe1.png';
import cafe2 from './images/cafe2.png';
import cafe3 from './images/cafe3.png';
import cafe4 from './images/cafe4.png';
import cafeteria from './images/cafeteria.png';
import offerimage from './images/offerimage.png';
import gallery1 from './images/gallery1.png';
import gallery2 from './images/gallery2.png';
import gallery3 from './images/gallery3.png';
import gallery4 from './images/gallery4.png';
import gallery5 from './images/gallery5.png';


const FoodItem = ({ src, alt }) => (
    <div className="food-item">
      <img src={src} alt={alt} className="food-img" />
    </div>
);

const foodItems = [
  { src: c1, alt: 'Soup' },
  { src: c2, alt: 'Noodles' },
  { src: c3, alt: 'Milkshake' },
  { src: c4, alt: 'Sandwich' },
  { src: c5, alt: 'Ice Cream' },
  { src: c6, alt: 'Pizza' },
];

const contentData = [
  {
    image: cafe1, 
    title: (
      <>
        Multi-Cuisine
        <br/>Magic
      </>
    ),
  },
  {
    image: cafe2,
    title: (
      <>
        Loved by 
        Residents <br/>
        & Guests
      </>
    ),
  },
  {
    image: cafe3,
    title: (
      <>
        Curated by
        <br/>Food Experts
      </>
    ),
  },
  {
    image: cafe4,
    title: (
      <>
        Cozy
        <br/>Co-living Vibes
      </>
    ),
  }
];

// const cardData = [
//   {
//     category: 'Birthdays',
//     title: (
//       <>
//         Celebrate 
//         <br/>Effortlessly With 
//         <br />Cafeteria Style Comfort
//       </>
//     ),
//     description:
//       'Our roots in community dining make us experts in creating warm, memorable birthday spreads. From themed treats to live counters, we bring the comfort of co-living cuisine to your party—wherever its hosted',
//     image: birthdays,
//   },
//   {
//     category: 'Coporate Events',
//     title: (
//       <>
//         Fuel Your  
//         <br/>Team With Flavors
//         <br />That Work
//       </>
//     ),
//     description:
//       'Designed for focus, energy, and flow—our catering brings co-living efficiency to your boardroom. From casual brainstorms to formal seminars, we serve professionally crafted meals that impress without the fuss.',
//     image: events,
//   },
//   {
//     category: 'Private Dinners',
//     title: (
//       <>
//         Bringing
//         <br/>The Coziness Of 
//         <br />Home Dining To You
//       </>
//     ),
//     description:
//       'chef-crafted menus with the intimate touch of co-living hospitality. Whether its a date night or a private gathering, our catering transforms your space into a warm, restaurant-like setting.',
//     image: privatedinner,
//   },
// ];


const Cafe = () => {
  // const [activeIndex, setActiveIndex] = useState(0);

  // const handlePrev = () => {
  //   setActiveIndex((prevIndex) =>
  //     prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
  //   );
  // };

  // const handleNext = () => {
  //   setActiveIndex((prevIndex) =>
  //     prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  // const { category, title, description, image } = cardData[activeIndex];

  return (
    <>
    <div className="text-center">
        <h1 className="lebestowcafe-heading1">Le Bestow Cafe</h1>
        <p className="lebestowcafe-body">Where Co-Living Meets Culinary Delight</p>
        <div className="food-items-container mt-4">
            {foodItems.map((item, index) => (
                <FoodItem key={index} src={item.src} alt={item.alt} />
                ))}
        </div>
    </div>
    <br/>
    <br/>
    <hr className='hr-custom'/>

    <Container className="my-3 text-center">
      <h2 className="mb-4 lebestow-heading2">
        Why <span className="mb-4 lebestow-heading2-two">Le Bestow Cafe</span>
      </h2>
      <br/>
      <Row className="g-4">
        {contentData.map((item, index) => (
          <Col xs={12} md={6} key={index}>
            <div className="slide-card">
              <div className="image-container">
                <img src={item.image} alt={item.title} className="img-fluid" />
              </div>
              <div className="text-container">
                <h4 className='cafe-item-title'>{item.title}</h4>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>

    <div className='cafe-event-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'></div>
          <div className='col-md-6'>
            <h5 className='cafe-event-heading'> Planning an Event ?</h5>
            <h3 className='cafe-event-subheading'>Let Us Cater It!</h3>
            <p className='cafe-event-body'>Delicious, customizable catering for all occasions - from small gatherings to grand celebrations.</p>
            <p className='cafe-event-points'> • Freshly made dishes <span className='cafe-event-point-two'> • Flexible menu options</span></p>
            <button className='cafe-event-knowmore'>Know more</button>
          </div>
        </div>
      </div>
    </div>
    <br/>

      <div className="cafeteria-section">
        <div className="container">
            <div className="row pt-4">
                <div className="col-8">
                    <h1 className="lebestow-heading3">Lebestow <br/><span className="lebestow-heading4">Cafeteria</span></h1>
                    <h3 className="lebestow-cafeteria-body pt-2">“Good vibes start with great company <br/>— and even better food.”</h3>
                    <br/>
                    <div className="lebestow-view-menu-button">
                    <Link to="./Menu"><button className="lebestow-menu-button">View Full Menu</button></Link>
                    </div>
                </div>
                
                <div className="col-4 pt-4">
                    <img src={cafeteria} className='cafeteria-image' alt='cafeteria-image'/>
                </div>
            </div>
        </div>
        <br/>
        <br/>
      </div>
      <br/>

    <div className="offer-section">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={offerimage} className="offerimage" alt='offerimage'/>
                </div>

                <div className="col-6">
                    <h2 className="offer-heading">Lebestow</h2>
                    <h1 className="offer-subheading">Just for you</h1>
                    <h2 className="offer-percentage">20% <span className="offer-percentage-off">OFF</span></h2>
                    <br/>
                    <div className="offer-note-custom">
                    <li className="offer-note">Note: Cafe Is Open To Everyone</li>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <div className="py-5">
      <h2 className="text-center mb-6 catering-heading">Catering Services</h2>
      <div className='catering-section'>
      <Container>
        <div className="carousel-wrapper position-relative d-flex justify-content-center align-items-center">
          <div className="arrow-button left-arrow" onClick={handlePrev}>
            <span>&lt;</span>
          </div>

          <Row className="catering-card p-4 align-items-center">
            <Col md={6} className="text-start">
              <div className="category-tag mb-3">{category}</div>
              <h3 className="catering-title">{title}</h3>
              <p className="catering-description">{description}</p>
              <div className='custom-btn-contact'>
              <Link to="./Cafecontactus"><Button className="custom-btn mt-3">Contact Us</Button></Link>
              </div>
            </Col>
            <Col md={6}>
              <img
                src={image}
                alt={category}
                className="img-fluid rounded-4 catering-image"
              />
            </Col>
          </Row>

          <div className="arrow-button right-arrow" onClick={handleNext}>
            <span>&gt;</span>
          </div>
        </div>
      </Container>
      </div>
    </div> */}

    <div className="container pt-4">
      <h2 className="mb-4 cafeteria-heading text-center">Cafeteria</h2>
      <div className="row g-3">
        {/* Left column with top large image and two small below */}
        <div className="col-md-8">
          <div className="mb-3">
            <img src={gallery1} className="img-fluid rounded w-100" alt="Gallery 1" />
          </div>
          <div className="row g-3">
            <div className="col-md-6">
              <img src={gallery3} className="img-fluid rounded w-100" alt="Gallery 3" />
            </div>
            <div className="col-md-6">
              <img src={gallery4} className="img-fluid rounded w-100" alt="Gallery 4" />
            </div>
            <div className="col-md-12">
              <img src={gallery5} className="img-fluid rounded w-100" alt="Gallery 5" />
            </div>
          </div>
        </div>

        {/* Right column with tall image */}
        <div className="col-md-4">
          <img src={gallery2} className="img-fluid w-100 object-fit-cover gallery2-img" alt="Gallery 2" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Cafe;
