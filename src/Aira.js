import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Table, Form, Card, ListGroup} from 'react-bootstrap';
import './Aira.css';
import './Gym.css';
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
import airavisual1 from './images/airavisual1.png';
import airavisual2 from './images/airavisual2.png';
import airavisual3 from './images/airavisual3.png';
import airavisual4 from './images/airavisual4.png';
import airavisual5 from './images/airavisual5.png';
import airavisual6 from './images/airavisual6.png';
import casa from './images/casa.png';
import bhuvan from './images/bhuvan.png';
import gymimage from './images/gymimage.png';
import gymicon1 from './images/gymicon1.gif';
import gymicon2 from './images/gymicon2.gif';
import gymicon3 from './images/gymicon3.gif';
import gymicon4 from './images/gymicon4.gif';
import airabs1 from './images/airabs1.JPG';
import airabs2 from './images/airabs2.JPG';
import airabs3 from './images/airabs3.JPG';

const rooms = [
  { "roomNo": 101, "type": "Triple Sharing", "status": "1 Bed Available", "price": "₹12,000", "Action": {
    "label": "Photos",
    "url": airabs3
  } },
  { "roomNo": 102, "type": "Single Sharing", "status": "Occupied", "price": "₹24,000", "Action": {
    "label": "Photos",
    "url": airabs1
  } },
  { "roomNo": 103, "type": "Double Sharing", "status": "2 Beds Available", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 104, "type": "Single Sharing", "status": "Occupied", "price": "₹24,000", "Action": {
    "label": "Photos",
    "url": airabs1
  } },
  { "roomNo": 105, "type": "Single Sharing", "status": "1 Bed Available", "price": "₹24,000", "Action": {
    "label": "Photos",
    "url": airabs1
  } },
  { "roomNo": 106, "type": "Double Sharing", "status": "1 Bed Available", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 107, "type": "Triple Sharing", "status": "1 Bed Available", "price": "₹12,000", "Action": {
    "label": "Photos",
    "url": airabs3
  } },
  { "roomNo": 108, "type": "Double Sharing", "status": "1 Bed Available", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 109, "type": "Triple Sharing", "status": "1 Bed Available", "price": "₹12,000", "Action": {
    "label": "Photos",
    "url": airabs3
  } },
  { "roomNo": 110, "type": "Single Sharing", "status": "1 Bed Available", "price": "₹24,000", "Action": {
    "label": "Photos",
    "url": airabs1
  } },
  { "roomNo": 111, "type": "Double Sharing", "status": "1 Bed Available", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 112, "type": "Single Sharing", "status": "1 Bed Available", "price": "₹24,000", "Action": {
    "label": "Photos",
    "url": airabs1
  } },
  { "roomNo": 113, "type": "Double Sharing", "status": "1 Bed Available", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 201, "type": "Double Sharing", "status": "1 Bed Available", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 202, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 203, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 204, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 205, "type": "Double Sharing", "status": "1 Bed Available", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 206, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 207, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 208, "type": "Single Sharing", "status": "Occupied", "price": "₹24,000", "Action": {
    "label": "Photos",
    "url": airabs1
  } },
  { "roomNo": 209, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 210, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 211, "type": "Double Sharing", "status": "3 Bed Available", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 212, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 213, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 301, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 302, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 303, "type": "Double Sharing", "status": "1 Bed Available", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 304, "type": "Double Sharing", "status": "2 Bed Available", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 305, "type": "Double Sharing", "status": "1 Bed Available", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 306, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 307, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 308, "type": "Double Sharing", "status": "1 Bed Available", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 309, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 310, "type": "Single Sharing", "status": "1 Bed Available", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs1
  } },
  { "roomNo": 311, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 312, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 313, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 401, "type": "Triple Sharing", "status": "1 Bed Available", "price": "₹12,000", "Action": {
    "label": "Photos",
    "url": airabs3
  } },
  { "roomNo": 402, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 403, "type": "Triple Sharing", "status": "Occupied", "price": "₹12,000", "Action": {
    "label": "Photos",
    "url": airabs3
  } },
  { "roomNo": 404, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 405, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 406, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 407, "type": "Double Sharing", "status": "3 Bed Available", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 408, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 409, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 410, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 411, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 412, "type": "Double Sharing", "status": "2 Bed Available", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 413, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 501, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 502, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 503, "type": "Double Sharing", "status": "1 Bed Available", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 504, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 505, "type": "Triple Sharing", "status": "Occupied", "price": "₹12,000", "Action": {
    "label": "Photos",
    "url": airabs3
  } },
  { "roomNo": 506, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  }},
  { "roomNo": 507, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 508, "type": "Double Sharing", "status": "3 Bed Available", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 509, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 510, "type": "Double Sharing", "status": "2 Bed Available", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } },
  { "roomNo": 511, "type": "Double Sharing", "status": "Occupied", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  }},
  { "roomNo": 512, "type": "Triple Sharing", "status": "Occupied", "price": "₹12,000", "Action": {
    "label": "Photos",
    "url": airabs3
  } },
  { "roomNo": 513, "type": "Double Sharing", "status": "2 Bed Available", "price": "₹14,000", "Action": {
    "label": "Photos",
    "url": airabs2
  } }
]
;

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
      name: 'BHUVAN',
      image: bhuvan,
      link: '/explore/bhuvan'
    },
    {
      name: 'CASA Womens PG',
      image: casa,
      link: '/explore/casa'
    }
];

const days = Object.keys(foodData);
const Aira = () => {
  const [visibleImage, setVisibleImage] = useState(null);

  const toggleImage = (roomNo) => {
    setVisibleImage(prev => (prev === roomNo ? null : roomNo));
  };
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
      <Container fluid className="text-dark py-4 px-5 aira-section">
        <Row className='text-start'>
          <Col>
            <h2 className='aira-lebestow-heading'>Le Bestow</h2>
            <h2 className='aira-lebestow-sub-heading'>Coliving - <span className='aira-lebestow-sub-heading-two'>Aira</span></h2>
            <div>
              <p className='aira-lebestow-location'><i className="bi bi-geo-alt-fill"></i> Hi-Tech City <br/>  Hyderabad</p>
              <p className='aira-lebestow-rooms'><span className="px-2 py-1 floor-rooms">5 Floors</span> | <span className="px-2 py-1 floor-rooms">65 Rooms</span></p>
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
      <React.Fragment key={index}>
        <tr>
          <td>{room.roomNo}</td>
          <td>{room.type}</td>
          <td>{room.status}</td>
          <td>{room.price}</td>
          <td>
            <Button
              variant="primary"
              size="sm"
              className="photo-custom"
              onClick={() => toggleImage(room.roomNo)}
            >
              {visibleImage === room.roomNo ? "Hide" : "Photos"}
            </Button>
          </td>
        </tr>

        {visibleImage === room.roomNo && (
          <tr>
            <td colSpan="6" style={{ textAlign: "center" }}>
              <div
                style={{
                  border: "6px solid #ccc",
                  borderRadius: "15px",
                  padding: "10px",
                  position: "relative",
                  background: "#f5f5f5",
                  display: "inline-block", 
                  justifyContent: "center",
                }}
              >
                {/* Image */}
                <img
                  src={room.Action.url}
                  alt={`Room ${room.roomNo}`}
                  style={{
                    width: "80%",
                    maxWidth: "350px",
                    height: "auto",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                  }}
                />
              </div>
            </td>
          </tr>
        )}
      </React.Fragment>
    ))
  ) : (
    <tr>
      <td colSpan="5" className="text-center text-muted">
        No matching rooms found.
      </td>
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
                <img src={airavisual1} className='img-fluid w-100 h-100' alt=''/>
            </div>
            <div class="col-3">
                <img src={airavisual2} className='img-fluid w-100 h-100' alt=''/>
            </div>
            <div class="col-6">
                <img src={airavisual3} className='img-fluid w-100 h-100' alt=''/>
            </div>
        </div>
        <div class="row g-2 pt-2">
            <div class="col-6">
                <img src={airavisual4} className='img-fluid w-100 h-100' alt=''/>
            </div>
            <div class="col-3">
                <img src={airavisual5} className='img-fluid w-100 h-100' alt=''/>
            </div>
            <div class="col-3">
                <img src={airavisual6} className='img-fluid w-100 h-100' alt=''/>
            </div>
        </div>
    </div>


    <h2 className="why-work-out-section-heading text-center">Why Work Out at Le Bestow Gym</h2>
    
            <div className="why-work-out-section">
                <div className="container pt-4">
                    <div className="row g-4 p-4">
                        <div className="col card1">
                        <img src={gymicon1} className='gymicon' alt='gymicon1'/>
                        <h5 className="why-work-out-head">Advanced Fitness Equipment</h5>
                        <p className="why-work-out-body">Focus on independence: “Train with premium machines-no waiting, no limits. Everything you need, when you need it.”</p>
                        </div>
                        <div className="col card1">
                        <img src={gymicon2} className='gymicon' alt='gymicon2'/>
                        <h5 className="why-work-out-head">Smart Workout Zones</h5>
                        <p className="why-work-out-body">Highlight efficiency: “Targeted zones for specific workouts-from HIIT to stretch, so you can flow through your routine with purpose.”</p>
                        </div>
                        <div class="w-100"></div>
                        <div className="col card1">
                        <img src={gymicon3} className='gymicon' alt='gymicon3'/>
                        <h5 className="why-work-out-head">Popular Among Fitness Enthusiasts</h5>
                        <p className="why-work-out-body">Social proof angle: “Join hundreds who chose freedom over follow-the-leader fitness. Built for real people, real goals.”</p>
                        </div>
                        <div className="col card1">
                        <img src={gymicon4} className='gymicon' alt='gymicon4'/>
                        <h5 className="why-work-out-head">Positive Workout Vibes</h5>
                        <p className="why-work-out-body">Emotional connection: “Designed to lift your mood and drive consistency. Feel the energy every time you step in.”</p>
                        </div>
                    </div>
                </div>
    
                <img src={gymimage} className='gymimage' alt='gymimage'/>
                <div className='gym-contact-us'>
                    <Link to="/contact"><button className='gymcontactus'>Contact Us</button></Link>
                </div>
            </div>

     <div className="container text-center pt-4">
                <h2 className="similar-properties">Similar Properties</h2>
                <Container className="py-5">
          <Row className="justify-content-center">
            {colivingData.map((place, index) => (
              <Col md={5} className="mb-4 mx-2" key={index}>
                <Card className="rounded-4 bhuvancasa-card">
                  <Card.Img variant="top" src={place.image} className="bhuvancasa-image" />
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
                  {place.name === 'BHUVAN' && (
                    <h5 className="mt-2" style={{ fontWeight: 'bold' }}>{place.name}</h5>
                  )}
                    <Link to={place.link}><Button className="mt-3 rounded-pill bhuvancasa-details">See Details</Button></Link>
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
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15223.179163140434!2d78.3667746!3d17.4695333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c63c87e61d%3A0xad4862b164c0534b!2sLe%20Bestow%20Co-Living%20-%20Aira%20%7C%20Best%20living%20hostel%20%7C%20Best%20Pg%20in%20Hitech%20City%20%7C%20Best%20Hostel%20inHitech%20city!5e0!3m2!1sen!2sin!4v1746082763933!5m2!1sen!2sin"
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

export default Aira;
