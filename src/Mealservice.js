import React, { useState } from 'react';
import { Container, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Button} from 'react-bootstrap';
import './Mealservice.css';
import mealserviceunderline from './images/mealserviceunderline.png';
import bf1 from './images/bf1.png';
import bf2 from './images/bf2.png';
import bf3 from './images/bf3.png';
import bf4 from './images/bf4.png';
import bf5 from './images/bf5.png';
import bf6 from './images/bf6.png';
import bf7 from './images/bf7.png';
import bf8 from './images/bf8.png';
import mc1 from './images/mc1.png';
import mc2 from './images/mc2.png';
import mc3 from './images/mc3.png';
import mc4 from './images/mc4.png';
import mc5 from './images/mc5.png';
import mc6 from './images/mc6.png';
import mc7 from './images/mc7.png';
import mc8 from './images/mc8.png';
import rb1 from './images/rb1.png';
import rb2 from './images/rb2.png';
import rb3 from './images/rb3.png';
import rb4 from './images/rb4.png';
import rb5 from './images/rb5.png';
import sweet1 from './images/sweet1.png';
import sweet2 from './images/sweet2.png';
import sweet3 from './images/sweet3.png';
import sweet4 from './images/sweet4.png';
import { Link } from 'react-router-dom';

const mealcateringservices = [
  {
    title: "Regular Meal Catering",
    description:
      "We Cater To Your Daily Food Requirements For 10-5000 Pax, Be It Breakfast, Lunch, Snacks Or Dinner With Varied Cuisines"
  },
  {
    title: "Birthday Parties",
    description:
      "Our Roots In Community Dining Make Us Experts In Creating Warm, Memorable Birthday Spreads. From Themed Treats To Live Counters, We Bring The Comfort Of Co-Living Cuisine To Your Party-Wherever It's Hosted."
  },
  {
    title: "Private Dinners",
    description:
      "Chef-Crafted Menus With The Intimate Touch Of Co-Living Hospitality. Whether It's A Date Night Or A Private Gathering, Our Catering Transforms Your Space Into A Warm, Restaurant-Like Setting."
  },
  {
    title: "Corporate Events",
    description:
      "Designed For Focus, Energy, And Flow-Our Catering Brings Co-Living Efficiency To Your Boardroom. From Casual Brainstorms To Formal Seminars, We Serve Professionally Crafted Meals That Impress Without The Fuss."
  }
];

const menuItems = {
  breakfast: [
    {
      title: "Idly Bowl",
      description: "Start Your Day With 3 Soft And Fluffy Idlis Served With Hot, Flavorful Sambar - A Wholesome South Indian Classic!",
      image: bf1
    },
    {
      title: "Poori",
      description: "Enjoy 2 Hot And Puffy Pooris Served With Tasty, Home-Style Curry - A Light And Satisfying Breakfast To Fuel Your Day!",
      image: bf2
    },
    {
      title: "Aaloo Paratha",
      description: "Dig Into 2 Perfectly Stuffed Aloo Parathas, Served Hot With Curd And Tangy Pickle - A Filling And Soulful Breakfast To Kickstart Your Day!",
      image: bf3
    },
    {
      title: "Poha",
      description: "Our Special Poha Is A Perfect Blend Of Spices, Peanuts, And Fresh Herbs To Brighten Your Morning!",
      image: bf4
    },
    {
      title: "Dosa",
      description: "Crispy And Golden Brown, Our Dosa Is Served With Chutney And Sambar - A South Indian Favorite That Never Goes Out Of Style!",
      image: bf5
    },
    {
      title: "Idly+Wada combo",
      description: "A Perfect Combo Of Soft Idli And Crispy Wada, Served With Piping Hot Sambar And Fresh Chutney - The Ultimate South Indian Breakfast Delight!",
      image: bf6
    },
    {
      title: "Upma with pickle",
      description: "Warm, Fluffy Upma Paired With Spicy Pickle - A Simple Yet Satisfying Breakfast That Brings Comfort In Every Bite!",
      image: bf7
    },
    {
      title: "Bonda",
      description: "Crispy On The Outside, Soft On The Inside - Our Hot Bondas Are The Perfect Tea-Time Snack To Satisfy Your Cravings!",
      image: bf8
    },
  ],
  mealcombo: [
    {
      title: "Jeera rice with dal tadka",
      description: "Fragrant jeera rice served with rich, spiced dal tadka - a classic combo that's both comforting and satisfying.",
      image: mc1
    },
    {
      title: "Samber rice",
      description: "Hearty and wholesome sambar rice, bursting with tangy flavors and spices - a comforting and nourishing breakfast classic!",
      image: mc2
    },
    {
      title: "Curd rice",
      description: "Cool and creamy curd rice - a soothing and refreshing way to begin your day.",
      image: mc3
    },
    {
      title: "Bowl of the day rice",
      description: "Enjoy our Bowl of the Day - a wholesome serving of rice paired with your choice of flavorful curry, made fresh to brighten your meal!",
      image: mc4
    },
    {
      title: "Veg biryani",
      description: "colorful veg biryani, loaded with fresh vegetables and fragrant spices - a delightful feast in every bite!",
      image: mc5
    },
    {
      title: "Non veg biryani",
      description: "Delicious non-veg biryani with tender meat and fragrant rice - a satisfying meal full of flavor.",
      image: mc6
    },
    {
      title: "Veg schezwan rice",
      description: "Spicy and vibrant veg Schezwan rice, packed with fresh veggies and bold flavors - a perfect fusion treat!",
      image: mc7
    },
    {
      title: "Non-veg schezwan rice",
      description: "Spicy and vibrant veg Schezwan rice, packed with fresh veggies and bold flavors - a perfect fusion treat!",
      image: mc8
    },
  ],
  ricebowl: [
    {
      title: "South Indian veg meal",
      description: "A wholesome South Indian veg meal with rice, sambar, rasam, curry, chutney, curd and more - a traditional feast on a plate!",
      image: rb1
    },
    {
      title: "North Indian veg meal",
      description: "A hearty North Indian veg meal with roti, rice, dal, sabzi, curd, and pickle - a perfect blend of taste and tradition!",
      image: rb2
    },
    {
      title: "South Indian Non- veg meal",
      description: "A flavorful South Indian non-veg meal with rice, spicy curry, sambar, rasam, fry, curd, and pickle - a true feast of southern taste!",
      image: rb3
    },
    {
      title: "North Indian Non- veg meal",
      description: "A hearty North Indian non-veg meal with soft rotis, rice, rich gravy curry, and flavorful sides - a perfect blend of spice and comfort.",
      image: rb4
    },
    {
      title: "chinese  combo",
      description: "A delicious Chinese combo with fried rice, noodles, and your choice of veg or non-veg gravy - a complete meal packed with bold flavors!",
      image: rb5
    },
  ],
  addon: [
    {
      title: "Gulab jamun",
      description: "Soft and juicy gulab jamuns soaked in rich sugar syrup - the perfect sweet treat to end your meal!",
      image: sweet1
    },
    {
      title: "Rasmalai",
      description: "Soft and spongy rasmalai soaked in creamy saffron milk - a royal dessert that melts in your mouth",
      image: sweet2
    },
    {
      title: "Apricot delight",
      description: "A rich and fruity apricot delight layered with creamy goodness - a perfect balance of sweetness and texture in every spoonful!",
      image: sweet3
    },
    {
      title: "Double ka meetha",
      description: "A royal Hyderabadi dessert made with fried bread soaked in rich milk, ghee, and dry fruits - sweet, soft, and irresistibly delicious!",
      image: sweet4
    },
  ],
}

const breakfastData = [
    { item: "Idly", single: "Rs.50", weekly: ["Rs.250", "Rs.280", "Rs.325"], monthly: ["Rs.1050", "Rs.1200", "Rs.1350"] },
    { item: "Idly + Wada", single: "Rs.50", weekly: ["Rs.250", "Rs.280", "Rs.325"], monthly: ["Rs.1050", "Rs.1200", "Rs.1350"] },
    { item: "Bonda", single: "Rs.50", weekly: ["Rs.250", "Rs.280", "Rs.325"], monthly: ["Rs.1050", "Rs.1200", "Rs.1350"] },
    { item: "Poha", single: "Rs.50", weekly: ["Rs.250", "Rs.280", "Rs.325"], monthly: ["Rs.1050", "Rs.1200", "Rs.1350"] },
    { item: "Upma", single: "Rs.50", weekly: ["Rs.250", "Rs.280", "Rs.325"], monthly: ["Rs.1050", "Rs.1200", "Rs.1350"] },
    { item: "Parota", single: "Rs.70", weekly: ["Rs.350", "Rs.400", "Rs.450"], monthly: ["Rs.1500", "Rs.1720", "Rs.1850"] },
    { item: "Poori", single: "Rs.70", weekly: ["Rs.350", "Rs.400", "Rs.450"], monthly: ["Rs.1500", "Rs.1720", "Rs.1850"] },
    { item: "Dosa", single: "Rs.70", weekly: ["Rs.350", "Rs.400", "Rs.450"], monthly: ["Rs.1500", "Rs.1720", "Rs.1850"] },
  ];

  const mealComboData = [
    { item: "South Indian - Veg Delight", single: "Rs.140", weekly: ["Rs.666", "Rs.800", "Rs.930"], monthly: ["Rs.2575", "Rs.3085", "Rs.3600"] },
    { item: "South Indian - Non-Veg Feast", single: "Rs.200", weekly: ["Rs.970", "Rs.1150", "Rs.1350"], monthly: ["Rs.4000", "Rs.4700", "Rs.5450"] },
    { item: "North Indian - Veg Classic", single: "Rs.140", weekly: ["Rs.666", "Rs.800", "Rs.930"], monthly: ["Rs.2575", "Rs.3085", "Rs.3600"] },
    { item: "North Indian - Non-Veg Royal", single: "Rs.200", weekly: ["Rs.970", "Rs.1150", "Rs.1350"], monthly: ["Rs.4000", "Rs.4700", "Rs.5450"] },
    { item: "Chinese Combo Meals", single: "Rs.170", weekly: ["Rs.810", "Rs.970", "Rs.1130"], monthly: ["Rs.3100", "Rs.3750", "Rs.4350"] },
  ];

  const riceBowlsData = [
    { item: "Bowl of the day", single: "Rs.130", weekly: ["Rs.615", "Rs.740", "Rs.865"], monthly: ["Rs.2375", "Rs.2875", "Rs.3350"] },
    { item: "Jeera Rice & Dal Tadka", single: "Rs.130", weekly: ["Rs.615", "Rs.740", "Rs.865"], monthly: ["Rs.2375", "Rs.2875", "Rs.3350"] },
    { item: "Sambar rice", single: "Rs.130", weekly: ["Rs.615", "Rs.740", "Rs.865"], monthly: ["Rs.2375", "Rs.2875", "Rs.3350"] },
    { item: "Curd rice", single: "Rs.120", weekly: ["Rs.580", "Rs.690", "Rs.800"], monthly: ["Rs.2200", "Rs.2600", "Rs.3100"] },
    { item: "Veg dum biryani , raita+salad", single: "Rs.150", weekly: ["Rs.720", "Rs.860", "Rs.1000"], monthly: ["Rs.2850", "Rs.3400", "Rs.3950"] },
    { item: "Non-veg dum biryani", single: "Rs.250", weekly: ["Rs.810", "Rs.970", "Rs.1130"], monthly: ["Rs.3100", "Rs.3750", "Rs.4350"] },
    { item: "Veg Schezwan fried rice+manchurian", single: "Rs.180", weekly: ["Rs.870", "Rs.1040", "Rs.1210"], monthly: ["Rs.3500", "Rs.4160", "Rs.4800"] },
    { item: "Non-veg Schezwan fried rice+manchurian", single: "Rs.220", weekly: ["Rs.1070", "Rs.1280", "Rs.1490"], monthly: ["Rs.4350", "Rs.5200", "Rs.6500"] }
  ];

  const addOnsData = [
    { item: "Gulab Jamun", single: "Rs.25", weekly: ["Rs.120", "Rs.140", "Rs.160"], monthly: ["Rs.450", "Rs.550", "Rs.650"] },
    { item: "Double ka meetha", single: "Rs.70", weekly: ["Rs.345", "Rs.410", "Rs.475"], monthly: ["Rs.1490", "Rs.1720", "Rs.2200"] },
    { item: "Rasamalai", single: "Rs.50", weekly: ["Rs.245", "Rs.280", "Rs.335"], monthly: ["Rs.1050", "Rs.1200", "Rs.1400"] },
    { item: "Apricot delight", single: "Rs.120", weekly: ["Rs.595", "Rs.710", "Rs.825"], monthly: ["Rs.2590", "Rs.3020", "Rs.3500"] }
  ];

const Mealservice = () => {
    const [selectedTab, setSelectedTab] = useState('breakfast');
    const [selectedCategory, setSelectedCategory] = useState('breakfast');

    const renderTable = (data, title) => (
    <Table bordered responsive className="mt-4">
      <thead>
        <tr>
          <th rowSpan="2" className="align-middle text-center">{title}</th>
          <th rowSpan="2" className="align-middle text-center">Single Day</th>
          <th colSpan="3" className="text-center">Weekly Package</th>
          <th colSpan="3" className="text-center">Monthly Package</th>
        </tr>
        <tr>
          <th className='align-middle text-center'>5 days</th>
          <th className='align-middle text-center'>6 days</th>
          <th className='align-middle text-center'>7 days</th>
          <th className='align-middle text-center'>5 days/Week</th>
          <th className='align-middle text-center'>6 days/Week</th>
          <th className='align-middle text-center'>7 days/Week</th>
        </tr>
      </thead>
      <tbody className='align-middle text-center'>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.item}</td>
            <td>{row.single}</td>
            <td>{row.weekly[0]}</td>
            <td>{row.weekly[1]}</td>
            <td>{row.weekly[2]}</td>
            <td>{row.monthly[0]}</td>
            <td>{row.monthly[1]}</td>
            <td>{row.monthly[2]}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
    return(
        <>
        <div className='meal-service-section'>
            <div className='container'>
                <h2 className='meal-service-heading'>Bulk/ Corporate Orders</h2>
                <p className='meal-service-subheading'>We are just a call away to fulfil all your food  requirements</p>
                <Link to="./Cafecontactus"><button className='meal-service-button'>Contact Us</button></Link>
                <p className='meal-service-body'>Corporates <span className='meal-service-line'>|</span> Hospitals <span className='meal-service-line'>|</span> Educational <span className='meal-service-line'>|</span> Institutes <span className='meal-service-line'>|</span> Hostels <span className='meal-service-line'>|</span> Events</p>
            </div>
        </div>

        <div className='container pt-4'>
            <h2 className='meal-cateringservice-heading'>Cater<span className='meal-cateringservice-heading-two'>ing Services</span></h2>
            <img src={mealserviceunderline} className='mealserviceunderline' alt='mealserviceunderline'/>
            <div className='container pt-4'>
                <div className="row pt-4">
                    {mealcateringservices.map((service, index) => (
                        <div className="col-md-6 col-lg-3 mb-4" key={index}>
                            <div className="card h-100 text-white text-center p-3 border-0 gradient-bgcard shadow">
                                <h5 className="meal-cateringservice-title">{service.title}</h5>
                                <p className="meal-cateringservice-description mt-2">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <br/>
        <div className='container pt-4'>
            <h2 className='mealservice-heading'>Meal <span className='mealservice-heading-two'>Service</span></h2>
            <img src={mealserviceunderline} className='mealserviceunderline-2' alt='mealserviceunderline'/>
            <Container className="py-4">
                <div className="d-flex justify-content-center flex-wrap gap-0 column-gap-4 mb-4 pt-4">
                    {["breakfast", "mealcombo", "ricebowl", "addon"].map((tab) => (
                        <Button
                           key={tab}
                           className={`text-capitalize ${
                           tab === selectedTab ? "mealfoodmenu-custom" : "mealfoodmenu-outline-custom"
                           }`}
                           onClick={() => setSelectedTab(tab)}>
                            {tab.replace(/([A-Z])/g, ' $1')}
                        </Button>
                    ))}
                </div>
                <Row className='pt-4'>
                    {menuItems[selectedTab]?.length > 0 ? (
                        menuItems[selectedTab].map((item, idx) => (
                        <Col key={idx} xs={12} sm={6} md={4} lg={3} className="mb-4">
                            <Card className="mealservice-card">
                                <Card.Img variant="top" src={item.image} alt={item.title}  className="mealservice-img" style={{ height: '200px', objectFit: 'cover' }} />
                                <Card.Body>
                                    <Card.Title className="text-center mealservice-title">{item.title}</Card.Title>
                                    <Card.Text className="text-center mealservice-description">{item.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        ))
                    ) : (
                    <Col className="text-center py-5">
                        <h5>No items available in this category.</h5>
                    </Col>
                    )}
                </Row>
           </Container>
        </div>

        <div className='container pt-4'>
            <h2 className='pricingplan-heading'>Our <span className='pricingplan-heading-two'>Pricings</span></h2>
            <img src={mealserviceunderline} className='mealserviceunderline-2' alt='mealserviceunderline'/>
            <p className='pricingplan-body'><span className='pricingplan-star'>*</span>Please place your orders by 10 PM for Breakfast (previous day), 10 AM for Lunch, and 5 PM for Dinner (same day).</p>
        </div>
       <div className="container py-4">
      {/* Tab Buttons */}
      <div className="d-flex justify-content-center flex-wrap gap-0 mb-4 pt-4">
        {[
          { key: "breakfast", label: "BREAKFAST" },
          { key: "meal", label: "MEAL COMBO" },
          { key: "rice", label: "RICE BOWLS" },
          { key: "addons", label: "ADD ONS" }
        ].map((tab) => (
          <Button
            key={tab.key}
            className={`text-uppercase fw-semibold ${
              selectedTab === tab.key
                ? "mealpricing-custom"
                : "mealpricing-outline-custom"
            }`}
            onClick={() => setSelectedCategory(tab.key)}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Table Rendering */}
      {selectedCategory === "breakfast" && renderTable(breakfastData, "Breakfast Items")}
      {selectedCategory === "meal" && renderTable(mealComboData, "Meal Combo")}
      {selectedCategory === "rice" && renderTable(riceBowlsData, "Rice Bowls")}
      {selectedCategory === "addons" && renderTable(addOnsData, "Add Ons")}
    </div>
        </>
    )
}

export default Mealservice;