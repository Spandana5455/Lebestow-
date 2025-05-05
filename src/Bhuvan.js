import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Table, Form, Card, ListGroup} from 'react-bootstrap';
import './Bhuvan.css';
import mon1 from './images/mon1.png';
import mon2 from './images/mon2.png';
import mon3 from './images/mon3.png';
import tue1 from './images/tue1.png';
import wed1 from './images/wed1.png';
import thur1 from './images/thur1.png';
import fri1 from './images/fri1.png';
import sat1 from './images/sat1.png';
import sun1 from './images/sun1.png';
import propertyrules from './images/propertyrules.png';
import bhuvanvisuals1 from './images/bhuvanvisuals1.png';
import bhuvanvisuals2 from './images/bhuvanvisuals2.png';
import bhuvanvisuals3 from './images/bhuvanvisuals3.png';
import bhuvanvisuals4 from './images/bhuvanvisuals4.png';
import bhuvanvisuals5 from './images/bhuvanvisuals5.png';
import bhuvanvisuals6 from './images/bhuvanvisuals6.png';
import casa from './images/casa.png';
import aira from './images/aira.png';

const rooms = [
  { "roomNo": 101, "type": "Triple Sharing", "status": "1 Bed Available", "price": "₹12,000", "Action": "Photos" },
  { "roomNo": 102, "type": "Single Sharing", "status": "Occupied", "price": "₹24,000", "Action": "Photos" },
  { "roomNo": 103, "type": "Double Sharing", "status": "2 Beds Available", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 104, "type": "Single Sharing", "status": "Occupied", "price": "₹24,000", "Action": "Photos" },
  { "roomNo": 105, "type": "Single Sharing", "status": "1 Bed Available", "price": "₹24,000", "Action": "Photos" },
  { "roomNo": 106, "type": "Double Sharing", "status": "1 Bed Available", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 107, "type": "Triple Sharing", "status": "1 Bed Available", "price": "₹12,000", "Action": "Photos" },
  { "roomNo": 108, "type": "Double Sharing", "status": "1 Bed Available", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 109, "type": "Triple Sharing", "status": "1 Bed Available", "price": "₹12,000", "Action": "Photos" },
  { "roomNo": 110, "type": "Single Sharing", "status": "1 Bed Available", "price": "₹24,000", "Action": "Photos" },
  { "roomNo": 111, "type": "Double Sharing", "status": "1 Bed Available", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 112, "type": "Single Sharing", "status": "1 Bed Available", "price": "₹24,000", "Action": "Photos" },
  { "roomNo": 113, "type": "Double Sharing", "status": "1 Bed Available", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 201, "type": "Double Sharing", "status": "1 Bed Available", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 202, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 203, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 204, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 205, "type": "Double Sharing", "status": "1 Bed Available", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 206, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 207, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 208, "type": "Single Sharing", "status": "Occupied", "price": "₹24,000", "Action": "Photos" },
  { "roomNo": 209, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 210, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 211, "type": "Double Sharing", "status": "3 Bed Available", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 212, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 213, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 301, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 302, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 303, "type": "Double Sharing", "status": "1 Bed Available", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 304, "type": "Double Sharing", "status": "2 Bed Available", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 305, "type": "Double Sharing", "status": "1 Bed Available", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 306, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 307, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 308, "type": "Double Sharing", "status": "1 Bed Available", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 309, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 310, "type": "Single Sharing", "status": "1 Bed Available", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 311, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 312, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 313, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 401, "type": "Triple Sharing", "status": "1 Bed Available", "price": "₹12,000", "Action": "Photos" },
  { "roomNo": 402, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 403, "type": "Triple Sharing", "status": "Occupied", "price": "₹12,000", "Action": "Photos" },
  { "roomNo": 404, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 405, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 406, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 407, "type": "Double Sharing", "status": "3 Bed Available", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 408, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 409, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 410, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 411, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 412, "type": "Double Sharing", "status": "2 Bed Available", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 413, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 501, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 502, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 503, "type": "Double Sharing", "status": "1 Bed Available", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 504, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 505, "type": "Triple Sharing", "status": "Occupied", "price": "₹12,000", "Action": "Photos" },
  { "roomNo": 506, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 507, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 508, "type": "Double Sharing", "status": "3 Bed Available", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 509, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 510, "type": "Double Sharing", "status": "2 Bed Available", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 511, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": "Photos" },
  { "roomNo": 512, "type": "Triple Sharing", "status": "Occupied", "price": "₹12,000", "Action": "Photos" },
  { "roomNo": 513, "type": "Double Sharing", "status": "2 Bed Available", "price": "₹14,000", "Action": "Photos" }
];


const foodData = {
    Monday: {
      Tiffin: {
        image: mon1,
        items: ["Idly"]
      },
      Lunch: {
        image: mon2,
        items: ["Roti", "Rice", "Sambar", "Veg Curry", "Papad", "Curd"]
      },
      Dinner: {
        image: mon3,
        items: ["Roti", "Rice", "Veg Curry", "Rasam / Papad", "Curd"]
      }
    },
    Tuesday: {
      Tiffin: {
        image: tue1,
        items: ["Dosa or Uttapam"]
      },
      Lunch: {
        image: mon2,
        items: ["Roti", "Rice", "Dal", "Veg Curry Fry", "Curd"]
      },
      Dinner: {
        image: mon3,
        items: ["Roti", "Rice", "Dal", "Veg Curry Fry", "Curd"]
      }
    },
    Wednesday: {
        Tiffin: {
          image: wed1,
          items: ["Poori"]
        },
        Lunch: {
          image: mon2,
          items: ["Roti", "Rice", "Dal", "Veg Curry", "Curd"]
        },
        Dinner: {
          image: mon3,
          items: ["Roti", "Rice", "Butter Paneer", "Chicken Curry", "Curd"]
        }
      },
      Thursday: {
        Tiffin: {
          image: thur1,
          items: ["Aloo Paratha"]
        },
        Lunch: {
          image: mon2,
          items: ["Roti", "Rice", "Dal", "Veg Curry Fry", "Papad"]
        },
        Dinner: {
          image: mon3,
          items: ["Roti", "Rice", "Veg Curry", "Sweet","Curd"]
        }
      },
      Friday: {
        Tiffin: {
          image: fri1,
          items: ["Punugulu or Upma"]
        },
        Lunch: {
          image: mon2,
          items: ["Roti", "Rice", "Sambar", "Veg Curry","Papad", "Curd"]
        },
        Dinner: {
          image: mon3,
          items: ["Roti", "Rice", "Veg Curry  &", "Egg Curry","Or  Egg Masala"]
        }
      },
      Saturday: {
        Tiffin: {
          image: sat1,
          items: ["Chapathi"]
        },
        Lunch: {
          image: mon2,
          items: ["Roti", "Rice", "Dal", "Veg Curry", "Curd"]
        },
        Dinner: {
          image: mon3,
          items: ["Roti", "Rice", "Veg Curry","Rasam / Papad", "Curd"]
        }
      },
      Sunday: {
        Tiffin: {
          image: sun1,
          items: ["Sandwich"]
        },
        Lunch: {
          image: mon2,
          items: ["Veg Biryani (or)", "Chicken Biryani", "Gravy", "Raita"]
        },
        Dinner: {
          image: mon3,
          items: ["Roti", "Rice", "Veg Curry", "Veg Curry Fry", "Curd"]
        }
      },
};

const terms = [
    { title: "Rent", value: "₹ 12000 ~ ₹ 25000" },
    { title: "Lock in Period", value: "0 months" },
    { title: "Notice Period", value: "30 days" },
    { title: "Electricity Unit", value: "₹ 16.0 per unit" },
    { title: "Food Charges", value: "₹ 6,000/-" },
    { title: "Exit Charges", value: "₹ 1,500/-" },
    { title: "AC Charges", value: "₹ 1,000/-" },
];

const colivingData = [
    {
      name: 'AIRA',
      image: aira,
      link: '/explore/aira'
    },
    {
      name: 'CASA Womens PG',
      image: casa,
      link: '/explore/casa'
    }
];


const days = Object.keys(foodData);
const Bhuvan = () => {
  const [selectedFloor, setSelectedFloor] = useState("");
    const [searchTerm, setSearchTerm] = useState('');
    const handleFloorChange = (e) => setSelectedFloor(e.target.value);
    const handleSearchChange = (e) => setSearchTerm(e.target.value.toLowerCase());
    const filteredRooms = rooms.filter((room) => {
      const isOnFloor = selectedFloor ? String(room.roomNo).startsWith(selectedFloor) : true;
      const matchesSearch = searchTerm
        ? room.roomNo.toString().includes(searchTerm) ||
          room.type.toLowerCase().includes(searchTerm)
        : true;
  
      return isOnFloor &&  matchesSearch;
    });
    const [selectedDay, setSelectedDay] = useState("Monday");
  const meals = foodData[selectedDay];
  return (
    <div>
      <Container fluid className="text-dark py-4 px-5 bhuvan-section">
        <Row className='text-start'>
          <Col>
            <h2 className='bhuvan-lebestow-heading'>Le Bestow</h2>
            <h2 className='bhuvan-lebestow-sub-heading'>Coliving - <span className='bhuvan-lebestow-sub-heading-two'>Bhuvan</span></h2>
            <div>
              <p className='bhuvan-lebestow-location'><i className="bi bi-geo-alt-fill"></i> Kondapur <br/>  Hyderabad</p>
              <p className='bhuvan-lebestow-rooms'><span className="px-2 py-1 floor-rooms">5 Floors</span> | <span className="px-2 py-1 floor-rooms">65 Rooms</span></p>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="explorefloors-section py-5 text-center">
              <Container>
                <h2 className="explorefloors-head">Explore Floors & Rooms</h2>
                <p className="explorefloors-body mt-2">View available rooms, pricing, and occupancy floor by floor.</p>
                <Row className="justify-content-center align-items-center g-2 select-section p-2">
                  <Col xs="auto">
                    <Form.Select className="select-floor" onChange={handleFloorChange}>
                      <option value="">Select Floor no.</option>
                      {[1, 2, 3, 4, 5].map((floor) => (
                        <option key={floor} value={floor}>{floor} Floor</option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder="Search by RoomNo. or Type"
                      value={searchTerm}
                      onChange={handleSearchChange}
                      style={{ width: "250px" }}
                    />
                  </Col>
                </Row>
              </Container>
            </div>
      
            {/* Room Table */}
            <Container fluid className="my-5 px-0">
              <div className="vertical-scroll-wrapper">
                <Table borderless className="mb-0 w-100">
                  <thead className="table-titles">
                    <tr>
                      <th>Room No.</th>
                      <th>Type</th>
                      <th>Status</th>
                      <th>Price/Month</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody className="table-body">
                    {filteredRooms.length > 0 ? (
                      filteredRooms.map((room, index) => (
                        <tr key={index}>
                          <td>{room.roomNo}</td>
                          <td>{room.type}</td>
                          <td>{room.status}</td>
                          <td>{room.price}</td>
                          <td>
                            <Button className="photo-custom" size="sm">Photos</Button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="text-center text-muted">No matching rooms found.</td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </div>
            </Container>

      <Container className="my-4 text-center">
      <h2 className="food-menu-heading mb-4">Food Menu</h2>

      <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
        {days.map((day) => (
          <Button
            key={day}
            className={`text-uppercase ${day === selectedDay ? "foodmenu-custom" : "foodmenu-outline-custom"}`}
            onClick={() => setSelectedDay(day)}>
            {day}
          </Button>
        ))}
      </div>

      <Row className="justify-content-center g-5">
        {meals &&
          Object.entries(meals).map(([mealType, mealData]) => (
            <Col xs={12} md={4} key={mealType}>
              <Card className="shadow-sm meal-card h-100">
                <Card.Header className="foodmenu-heading text-uppercase">
                  {mealType}
                </Card.Header>
                <Card.Img variant="top" src={mealData.image} alt={mealType}  className='foodmenu-img'/>
                <Card.Body className="foodmenu-body rounded-bottom">
                  <ListGroup variant="flush">
                    {mealData.items.map((item, idx) => (
                      <ListGroup.Item
                        key={idx}
                        className="foodmenu-list d-flex align-items-center"
                      >
                        <span className="dot me-2 rounded-circle"></span>
                        {item}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>


    <Container className="my-5 text-center">
      <h3 className="rentingterms-heading">Renting Terms</h3>
      <Row className="justify-content-center mt-4">
        {terms.map((term, index) => (
          <Col
            key={index}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="mb-3 d-flex justify-content-center"
          >
            <Card className="px-3 py-2 text-start renting-card">
              <div
                className="mb-2"
                style={{
                  display: "inline-block",
                  backgroundColor: "#FFFFFF80",
                  padding: "4px 10px",
                  fontSize: "24px",
                  borderRadius: "10px",
                  color: "#FF8E00",
                  fontWeight: "400",
                }}
              >
                {term.title}
              </div>
              <div style={{ fontSize: "24px", fontWeight: "400",paddingTop:"65px", paddingLeft:"10px"}}>{term.value}</div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

    <div className='container'>
        <h2 className='propertyrules-heading'>Property Rules</h2>
        <img src={propertyrules} className='propertyrules-img'alt='propertyrules-img'/>
    </div>
    <br/>
    <h2 className='ourvisuals-heading'>Our Visuals</h2>
    <div class="container">
        <div class="row g-2">
            <div class="col-3">
                <img src={bhuvanvisuals1} className='img-fluid w-100 h-100' alt=''/>
            </div>
            <div class="col-3">
                <img src={bhuvanvisuals2} className='img-fluid w-100 h-100' alt=''/>
            </div>
            <div class="col-6">
                <img src={bhuvanvisuals3} className='img-fluid w-100 h-100' alt=''/>
            </div>
        </div>
        <div class="row g-2 pt-2">
            <div class="col-6">
                <img src={bhuvanvisuals4} className='img-fluid w-100 h-100' alt=''/>
            </div>
            <div class="col-3">
                <img src={bhuvanvisuals5} className='img-fluid w-100 h-100' alt=''/>
            </div>
            <div class="col-3">
                <img src={bhuvanvisuals6} className='img-fluid w-100 h-100' alt=''/>
            </div>
        </div>
        
    </div>

     <div className="container text-center pt-4">
                <h2 className="similar-properties">Similar Properties</h2>
    
                <Container className="py-5">
          <Row className="justify-content-center">
            {colivingData.map((place, index) => (
              <Col md={5} className="mb-4 mx-2" key={index}>
                <Card className="rounded-4 airacasa-card">
                  <Card.Img variant="top" src={place.image} className="airacasa-image" />
                  <Card.Body className="text-center">
                    <Card.Title>{place.name !== 'CASA Womens PG' ? (
                      <>
                      <span className='bhuvancasa-title-one'>Le Bestow</span>
                      <span className='bhuvancasa-title-two'>Co-living</span>
                      </>
                      ) : (
                      <>
                      <span className='bhuvancasa-title-one'>CASA</span>
                      <span className='bhuvancasa-title-two'>Women's PG</span>
                      </>
                      )}
                    </Card.Title>
                    {place.name === 'AIRA' && (
                      <h5 className="mt-2" style={{ fontWeight: 'bold' }}>{place.name}</h5>
                    )}
                    <Link to={place.link}><Button className="mt-3 rounded-pill airacasa-details">See Details</Button></Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
            </div>

            <Container className="my-5 text-center">
              <div className="map-responsive iframe">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d15223.179163140434!2d78.3667746!3d17.4695333!3m2!1i1024!2i768!4f13.1!2m1!1sle%20bestow!5e0!3m2!1sen!2sin!4v1746081918968!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Le Bestow Location"
                ></iframe>
              </div>
            </Container>
    </div>
  );
};

export default Bhuvan;