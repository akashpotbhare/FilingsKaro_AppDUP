import React, { useEffect, useState } from 'react';
import "../Components/Style/Home.css";
import Trustedsiteimg from "./Assets/Frame 10.png";
import whatsapp from "./Assets/WhatsApp.svg";
import checkbox from "./Assets/checkbox.svg";
import doneAll from "./Assets/done_all.svg";
import Text from "./Assets/Text.svg";
import partner_exchange from "./Assets/Frame 33.svg"
import productimg1 from "./Assets/partner_exchange.svg"
import Record from "./Assets/Record.svg"
import description from "./Assets/description.svg"
import rocket_launch from "./Assets/rocket_launch.svg"
import diversity_3 from "./Assets/diversity_3.svg"
import military_tech from "./Assets/military_tech.svg"
import info from "./Assets/info.svg"
import Avtar from "./Assets/Avtar.svg"
import testimonial from "./data/Testimonials.json"
import Blog from "./data/Blog.json"
import next from "./Assets/next.svg"
import prevew from "./Assets/prevew.svg"
import Vector_nature_left from "./Assets/Vector_nature_left.svg"
import Vector_nature_right from "./Assets/Vector_nature_right.svg"
import { Link } from 'react-router-dom';

export function Home() {
  const [servicesData, setServiceData] = useState([]);
  const [testimonialdata, setTestimonialData] = useState([])
  const [testimonialcurrentIndex, setTestimonialCurrentIndex] = useState(0);
  const [viewBlogText, setViewBlogText] = useState("View More Blogs")
  const [blogs, setBlogs] = useState([]);
  const [mobileError, setMobileError] = useState("");

  const [serviceButtun1Color, setServiceButton1Color] = useState({ backgroundColor: "black", color: "rgba(255, 255, 255, 1)" })
  const [serviceButtun2Color, setServiceButton2Color] = useState({ backgroundColor: "" })
  const [serviceButtun3Color, setServiceButton3Color] = useState({ backgroundColor: "" })
  const [serviceButtun4Color, setServiceButton4Color] = useState({ backgroundColor: "" })
  const [serviceButtun5Color, setServiceButton5Color] = useState({ backgroundColor: "" })

  const [numBlogsToShow, setNumBlogsToShow] = useState(3);
  function handleLegalService(e) {
    if (e.target.value === "Startup Incorporation") {
      setServiceData([
        { "routeparameter": "Pvt. Ltd. Company Registration", "title": "Pvt. Ltd. Incorporation", "description": "Private limited company is popular and well known business structure it enjoys wide options to raise funds through bank loans, angel investors, venture capitalists, in comparison to LLPs and OPCs", "Price": "6,299", "buttonLabel": "Get Started", "badge": "STARTUP INCORPORATION", "service_title_image": "/images/partner_exchange.svg", "infotext": "Professional Fees" },
        { "routeparameter": "Pvt. Ltd. Company Registration", "title": "Pvt. Ltd. Incorporation", "description": "Private limited company is popular and well known business structure it enjoys wide options to raise funds through bank loans, angel investors, venture capitalists, in comparison to LLPs and OPCs", "Price": "6,299", "buttonLabel": "Get Started", "badge": "STARTUP INCORPORATION", "service_title_image": "/images/person_check.svg", "infotext": "Professional Fees" },
        { "routeparameter": "Pvt. Ltd. Company Registration", "title": "Pvt. Ltd. Incorporation", "description": "Private limited company is popular and well known business structure it enjoys wide options to raise funds through bank loans, angel investors, venture capitalists, in comparison to LLPs and OPCs", "Price": "6,299", "buttonLabel": "Get Started", "badge": "STARTUP INCORPORATION", "service_title_image": "/images/person_book.svg", "infotext": "Professional Fees" },

      ]);
    } else if (e.target.value === "Trademark & IPR Services") {
      setServiceData(
        [
          { "routeparameter": "Pvt. Ltd. Company Registration", "title": "Trademark Registration", "description": "Nobody will dare to copy your brand name once it is a registered trademark.", "Price": "998", "buttonLabel": "Get Started", "badge": "Trademark & IPR Services", "service_title_image": "/images/Trademark.svg", "infotext": "Professional Fees" },
          { "routeparameter": "LLP Registration", "title": "Copyright Registration", "description": "Copyright is an important property of the owner.Copyright protects from copycats.", "Price": "4,999", "buttonLabel": "Get Started", "badge": "Trademark & IPR Services", "service_title_image": "/images/Copyright.svg", "infotext": "Professional Fees" }

        ]);
    } else if (e.target.value === "ROC Filing") {
      setServiceData([
        { "routeparameter": "Pvt. Ltd. Company Registration", "title": "ROC Return Filing for Pvt. Ltd. Company", "description": "ROC return gives details of changes taken place in the company during the year and need to be filed with the ROC even though the company has not done any business during the year.", "Price": "3,999", "buttonLabel": "Get Started", "badge": "ROC FILING", "service_title_image": "/images/recent_actors.svg", "infotext": "Consulting fees" },
        { "routeparameter": "LLP Registration", "title": "ROC Return Filing for OPC Company", "description": "ROC return gives details of changes taken place in the company during the year and need to be filed with the ROC even though the company has not done any business during the year.", "Price": "2,999", "buttonLabel": "Get Started", "badge": "ROC FILING", "service_title_image": "/images/id_card.svg", "infotext": "Consulting fees" },
        { "routeparameter": "One Person Company Registration", "title": "LLP ROC Return Filing Form 11 & Form 8", "description": "ROC return gives details of changes taken place in the company during the year and need to be filed with the ROC even though the company has not done any business during the year.", "Price": "1,999", "buttonLabel": "Get Started", "badge": "ROC FILING", "service_title_image": "/images/user_attributes.svg", "infotext": "Consulting fees" }

      ]);
    } else if (e.target.value === "GST Filings") {
      setServiceData([
        { "routeparameter": "Pvt. Ltd. Company Registration", "title": "GST Filing", "description": "Anyone supplying goods or services to another state, Online service providers, eCommerce sites need to apply for GST regardless of turnover.", "Price": "3,999", "buttonLabel": "Get Started", "badge": "GST Filings", "service_title_image": "/images/calculate.svg", "infotext": "Consulting fees" },

      ]);
    } else if (e.target.value === "Startup India, ISO & MSME") {
      setServiceData([
        { "routeparameter": "Pvt. Ltd. Company Registration", "title": "Startup India Services", "description": "Startup India recognition is very important for a Startup to get eligible for 3 years Income Tax exemption, get easy funding and easy loan processing.", "Price": "3,999", "buttonLabel": "Get Started", "badge": "GST Filings", "service_title_image": "/images/receipt_long.svg", "infotext": "Consulting fees" },
        { "routeparameter": "LLP Registration", "title": "ISO Services", "description": "ISO means International Standard Organization. It provides a set of requirements that helps management of business to achieve customer satisfaction.", "Price": "4,999", "buttonLabel": "Get Started", "badge": "Startup India, ISO & MSME", "service_title_image": "/images/award_star.svg", "infotext": "Consulting fees" },
        { "routeparameter": "LLP Registration", "title": "LLP ROC Return Filing Form 11 & Form 8", "description": "MSME (Micro Small and Medium Enterprises) Registration is the procedure to get your firm registered under MSME development Act.", "Price": "1,999", "buttonLabel": "Get Started", "badge": "Startup India, ISO & MSME", "service_title_image": "/images/description.svg", "infotext": "Consulting fees" },

      ]);
    }
  }
// update code
  function handleFirstLegalService() {
    setServiceData([
      { "routeparameter": "Pvt. Ltd. Company Registration", "title": "Pvt. Ltd. Incorporation", "description": "Private limited company is popular and well known business structure it enjoys wide options to raise funds through bank loans, angel investors, venture capitalists, in comparison to LLPs and OPCs", "Price": "6,299", "buttonLabel": "Get Started", "badge": "STARTUP INCORPORATION", "service_title_image": "/images/partner_exchange.svg", "infotext": "Professional Fees" },
      { "routeparameter": "Pvt. Ltd. Company Registration", "title": "Pvt. Ltd. Incorporation", "description": "Private limited company is popular and well known business structure it enjoys wide options to raise funds through bank loans, angel investors, venture capitalists, in comparison to LLPs and OPCs", "Price": "6,299", "buttonLabel": "Get Started", "badge": "STARTUP INCORPORATION", "service_title_image": "/images/person_check.svg", "infotext": "Professional Fees" },
      { "routeparameter": "Pvt. Ltd. Company Registration", "title": "Pvt. Ltd. Incorporation", "description": "Private limited company is popular and well known business structure it enjoys wide options to raise funds through bank loans, angel investors, venture capitalists, in comparison to LLPs and OPCs", "Price": "6,299", "buttonLabel": "Get Started", "badge": "STARTUP INCORPORATION", "service_title_image": "/images/person_book.svg", "infotext": "Professional Fees" },

    ]);
    setServiceButton1Color({ backgroundColor: "black", color: "rgba(255, 255, 255, 1)" });
    setServiceButton2Color({ backgroundColor: "" })
    setServiceButton3Color({ backgroundColor: "" })
    setServiceButton4Color({ backgroundColor: "" })
    setServiceButton5Color({ backgroundColor: "" })
  }

  function handleSecondLegalService() {
    setServiceData([
      { "routeparameter": "Pvt. Ltd. Company Registration", "title": "Trademark Registration", "description": "Nobody will dare to copy your brand name once it is a registered trademark.", "Price": "998", "buttonLabel": "Get Started", "badge": "Trademark & IPR Services", "service_title_image": "/images/Trademark.svg", "infotext": "Professional Fees" },
      { "routeparameter": "LLP Registration", "title": "Copyright Registration", "description": "Copyright is an important property of the owner.Copyright protects from copycats.", "Price": "4,999", "buttonLabel": "Get Started", "badge": "Trademark & IPR Services", "service_title_image": "/images/Copyright.svg", "infotext": "Professional Fees" }

    ]);
    setServiceButton1Color({ backgroundColor: "" });
    setServiceButton2Color({ backgroundColor: "black", color: "rgba(255, 255, 255, 1)" })
    setServiceButton3Color({ backgroundColor: "" })
    setServiceButton4Color({ backgroundColor: "" })
    setServiceButton5Color({ backgroundColor: "" })

  }
  function handleThirdLegalService() {
    setServiceData([
      { "routeparameter": "Pvt. Ltd. Company Registration", "title": "ROC Return Filing for Pvt. Ltd. Company", "description": "ROC return gives details of changes taken place in the company during the year and need to be filed with the ROC even though the company has not done any business during the year.", "Price": "3,999", "buttonLabel": "Get Started", "badge": "ROC FILING", "service_title_image": "/images/recent_actors.svg", "infotext": "Consulting fees" },
      { "routeparameter": "LLP Registration", "title": "ROC Return Filing for OPC Company", "description": "ROC return gives details of changes taken place in the company during the year and need to be filed with the ROC even though the company has not done any business during the year.", "Price": "2,999", "buttonLabel": "Get Started", "badge": "ROC FILING", "service_title_image": "/images/id_card.svg", "infotext": "Consulting fees" },
      { "routeparameter": "One Person Company Registration", "title": "LLP ROC Return Filing Form 11 & Form 8", "description": "ROC return gives details of changes taken place in the company during the year and need to be filed with the ROC even though the company has not done any business during the year.", "Price": "1,999", "buttonLabel": "Get Started", "badge": "ROC FILING", "service_title_image": "/images/user_attributes.svg", "infotext": "Consulting fees" }
    ]);
    setServiceButton1Color({ backgroundColor: "" });
    setServiceButton2Color({ backgroundColor: "" })
    setServiceButton3Color({ backgroundColor: "black", color: "rgba(255, 255, 255, 1)" })
    setServiceButton4Color({ backgroundColor: "" })
    setServiceButton5Color({ backgroundColor: "" })

  }
  function handleFourthLegalService() {
    setServiceData([
      { "routeparameter": "Pvt. Ltd. Company Registration", "title": "GST Filing", "description": "Anyone supplying goods or services to another state, Online service providers, eCommerce sites need to apply for GST regardless of turnover.", "Price": "3,999", "buttonLabel": "Get Started", "badge": "GST Filings", "service_title_image": "/images/calculate.svg", "infotext": "Consulting fees" },
    ]);
    setServiceButton1Color({ backgroundColor: "" });
    setServiceButton2Color({ backgroundColor: "" })
    setServiceButton3Color({ backgroundColor: "" })
    setServiceButton4Color({ backgroundColor: "black", color: "rgba(255, 255, 255, 1)" })
    setServiceButton5Color({ backgroundColor: "" })

  }
  function handleFifthLegalService() {
    setServiceData([
      { "routeparameter": "Pvt. Ltd. Company Registration", "title": "Startup India Services", "description": "Startup India recognition is very important for a Startup to get eligible for 3 years Income Tax exemption, get easy funding and easy loan processing.", "Price": "3,999", "buttonLabel": "Get Started", "badge": "GST Filings", "service_title_image": "/images/receipt_long.svg", "infotext": "Consulting fees" },
      { "routeparameter": "LLP Registration", "title": "ISO Services", "description": "ISO means International Standard Organization. It provides a set of requirements that helps management of business to achieve customer satisfaction.", "Price": "4,999", "buttonLabel": "Get Started", "badge": "Startup India, ISO & MSME", "service_title_image": "/images/award_star.svg", "infotext": "Consulting fees" },
      { "routeparameter": "LLP Registration", "title": "LLP ROC Return Filing Form 11 & Form 8", "description": "MSME (Micro Small and Medium Enterprises) Registration is the procedure to get your firm registered under MSME development Act.", "Price": "1,999", "buttonLabel": "Get Started", "badge": "Startup India, ISO & MSME", "service_title_image": "/images/description.svg", "infotext": "Consulting fees" },
    ]);
    setServiceButton1Color({ backgroundColor: "" });
    setServiceButton2Color({ backgroundColor: "" })
    setServiceButton3Color({ backgroundColor: "" })
    setServiceButton4Color({ backgroundColor: "" })
    setServiceButton5Color({ backgroundColor: "black", color: "rgba(255, 255, 255, 1)" })
  }


  // form submision logic ------
   function handleContactForm(e) {
    var mobile = document.getElementById("txtNumber");
    e.preventDefault();
    if ((mobile.value.startsWith(7) || mobile.value.startsWith(8) || mobile.value.startsWith(9)) && (mobile.value.length == 10)) {
      setMobileError("");
      const scriptURL = "https://script.google.com/macros/s/AKfycbw-lf4elha8RuH4FQmkgpxhy2Jy9TeIWLVr8fFY4QlXmtEOlKpcGhX4jLd9kFeglMSwsA/exec"
      const form = document.forms["contact-form-sheet"]
       fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .catch(error => console.error("Error!", error.message))
      alert("form is submitted");

      document.getElementById("txtName").value = "";
      document.getElementById("txtEmail").value = "";
      document.getElementById("txtNumber").value = "";
      document.getElementById("lstLocation").value = "";
      document.getElementById("lstService").value = "";
    } else {
      setMobileError("Invalid mobile number")
    }
  }


  useEffect(() => {
    window.scrollTo(0, 0)
    setServiceData([
      { "routeparameter": "Pvt. Ltd. Company Registration", "title": "Pvt. Ltd. Incorporation", "description": "Private limited company is popular and well known business structure it enjoys wide options to raise funds through bank loans, angel investors, venture capitalists, in comparison to LLPs and OPCs", "Price": "6,299", "buttonLabel": "Get Started", "badge": "STARTUP INCORPORATION", "service_title_image": "/images/partner_exchange.svg", "infotext": "Professional Fees" },
      { "routeparameter": "Pvt. Ltd. Company Registration", "title": "Pvt. Ltd. Incorporation", "description": "Private limited company is popular and well known business structure it enjoys wide options to raise funds through bank loans, angel investors, venture capitalists, in comparison to LLPs and OPCs", "Price": "6,299", "buttonLabel": "Get Started", "badge": "STARTUP INCORPORATION", "service_title_image": "/images/person_check.svg", "infotext": "Professional Fees" },
      { "routeparameter": "Pvt. Ltd. Company Registration", "title": "Pvt. Ltd. Incorporation", "description": "Private limited company is popular and well known business structure it enjoys wide options to raise funds through bank loans, angel investors, venture capitalists, in comparison to LLPs and OPCs", "Price": "6,299", "buttonLabel": "Get Started", "badge": "STARTUP INCORPORATION", "service_title_image": "/images/person_book.svg", "infotext": "Professional Fees" },

    ]);
    setBlogs([...blogs, Blog[0], Blog[1], Blog[2]]);
    setTestimonialData(testimonial);
    // setFirstButtonStyle({backgroundColor:"black", color: "#fff"})
  }, []);

  const handleViewMoreClick = () => {
    if (viewBlogText === "View More Blogs") {
      setBlogs([...blogs, Blog[3], Blog[4], Blog[5]])
      setViewBlogText("View Less")
    } else {
      setBlogs([Blog[0], Blog[1], Blog[2]]);
      setViewBlogText("View More Blogs")
    }
  };


  const handlePrev = () => {
    setTestimonialCurrentIndex((testimonialcurrentIndex - 1 + testimonialdata.length) % testimonialdata.length);
  };

  const handleNext = () => {
    setTestimonialCurrentIndex((testimonialcurrentIndex + 1) % testimonialdata.length);
  };
  return (  
    <>
      {/* Hero section  */}
      <div className='uni-padding'>
        <div className="content">
          <div className="left">    
            <div className='titleimage'>
              <img src={Vector_nature_left} alt="" /> <p>#1 Trusted site for Legalities in Nagpur</p> <img src={Vector_nature_right} alt="" />
            </div>
            <h1 className='titel'>Your Trusted Partner for <span>Startup Legalities</span></h1>
            <div className="titelcontent-headding">
              <p className='titelcontent'>We handle your messy legalities and tax filings, </p>
              <p className='titelcontent'>so that you worry less and focus more on your dream business</p>
            </div>

            <div className="list-content-dec">
              <div className='list-content'>
                <ul>
                  <li ><img src={doneAll} alt="doneAll" />Company Incorporation</li>
                  <li><img src={doneAll} alt="doneAll" /> ROC Filings</li>
                  <li><img src={doneAll} alt="doneAll" />GST Services</li>
                  <li><img src={doneAll} alt="doneAll" />MSME Services</li>
                </ul>
                <ul>
                  <li><img src={doneAll} alt="doneAll" />Trademark Services</li>
                  <li><img src={doneAll} alt="doneAll" />Startup India Services</li>
                  <li><img src={doneAll} alt="doneAll" />Accounting & Tax</li>
                  <li><img src={doneAll} alt="doneAll" />Free Legal Agreements</li>
                </ul>
              </div>
            </div>

          </div>

          <div className="right">
            <div className='contactinfo'><p> Call Now</p> <img src={Text} alt="Text" /> <p> 08956214630,</p> <p> 08956214630,</p></div>
            <div className="quote-box">
              <h2>Get quote in a minute</h2>
              <p> Fill the details to get instant quote!</p>
              <form onSubmit={handleContactForm} name='contact-form-sheet'>
                <input name="fullname" id='txtName' type="text" placeholder="Full Name" required />
                <input name='email' id='txtEmail' type="email" placeholder="Email address" required />
                <input name='mobile' id='txtNumber' type="tel" placeholder="Mobile" required />
                <label>{mobileError}</label>
                <select name='location' id='lstLocation' required>
                  <option value="" disabled selected>Select City</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Bengaluru</option>
                  <option>Kolkata</option>
                  <option>Chennai</option>
                  <option>Hyderabad</option>
                  <option>Ahmedabad</option>
                  <option>Pune</option>
                  <option>Jaipur</option>
                  <option>Lucknow</option>
                  <option>Kanpur</option>
                  <option>Nagpur</option>
                  <option>Visakhapatnam</option>
                  <option>Bhopal</option>
                  <option>Patna</option>
                  <option>Ludhiana</option>
                </select>
                <select name='service' id='lstService' required>
                  <option value="" disabled selected>Serives</option>
                  <option >One Person Company Registration
                  </option>
                  <option >Pvt Ltd. Registration
                  </option>
                  <option >LLP Registration</option>
                  <option >Trademark Registration</option>
                  <option >GST Registration</option>
                  <option >MSME Registration</option>
                </select>

                <div className='checkbox'>
                  <img src={checkbox} />
                  <h6> Get direct updates through</h6>
                  <img src={whatsapp} alt="whatsapp" />
                </div>
                <button className="btn-getStarted">
                  <div className="outer-shaddow"></div>
                  Get Started Now
                </button>
              </form>
            </div>
            <div className="list-content-mobile">
              <div className='list-content'>
                <ul>
                  <li ><img src={doneAll} alt="doneAll" />Company Incorporation</li>
                  <li><img src={doneAll} alt="doneAll" /> ROC Filings</li>
                  <li><img src={doneAll} alt="doneAll" />GST Services</li>
                  <li><img src={doneAll} alt="doneAll" />MSME Services</li>
                </ul>
                <ul>
                  <li><img src={doneAll} alt="doneAll" />Trademark Services</li>
                  <li><img src={doneAll} alt="doneAll" />Startup India Services</li>
                  <li><img src={doneAll} alt="doneAll" />Accounting & Tax</li>
                  <li><img src={doneAll} alt="doneAll" />Free Legal Agreements</li>
                </ul>
              </div>
            </div>

          </div>
        </div >
      </div>

      {/* Services start */}

      <div className="uni-bg-color">
        <div className="services-page">
          <div className='uni-padding'>
            <div className="service_box_container">
              <div className='serviceshead'>
                <div className="services-header">
                  <span>Services</span>
                  <h2 className='servicestitel'>All our Legal Services</h2>
                </div>
                <div className='Avtar-content'>
                  <div className='avtar'>
                    <img src={Avtar} alt="Image" />
                  </div>
                  <span>20+ Startups used our services this week</span>
                </div>
              </div>

              <div className="select-tab">
                <select onChange={handleLegalService} required>
                  <option>Startup Incorporation</option>
                  <option>Trademark & IPR Services</option>
                  <option>ROC Filing</option>
                  <option>GST Filings</option>
                  <option>Startup India, ISO & MSME</option>
                </select>
              </div>

              <div className="tabs">
                <button style={serviceButtun1Color} onClick={handleFirstLegalService} className="tab">Startup Incorporation</button>
                <button style={serviceButtun2Color} onClick={handleSecondLegalService} className="tab">Trademark & IPR Services</button>
                <button style={serviceButtun3Color} onClick={handleThirdLegalService} className="tab">ROC Filing</button>
                <button style={serviceButtun4Color} onClick={handleFourthLegalService} className="tab">GST Filings</button>
                <button style={serviceButtun5Color} onClick={handleFifthLegalService} className="tab">Startup India, ISO & MSME</button>
              </div>
              <p className='contentservices'>3 Options available in this service</p>

              <div className="service-cards">
                {servicesData.map((service, index) => (
                  <div key={index} className="service-card">
                    <div className="service-title">
                      <img src={service.service_title_image} alt="partner_exchange" />
                      <span className="badge">{service.badge}</span>
                    </div>
                    <h3 className='servicesubtitle'>{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    <div className="service-footer">
                      <span className="price">₹{service.Price} <img src={info} alt="info" /><span className='infotext'>   {service.infotext}</span></span>
                    </div>
                    <Link to={`/services/${service.routeparameter}`}><button style={{ textinfotextDecoration: "unset" }} className="get-started">{service.buttonLabel}</button></Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials */}

      <div className='uni-padding'>
        <div className='testimonial-body'>
          <div className="testimonial-containr">
            <div className="testimonial-header">
              <p className="testimonial-tag">Testimonials</p>
              <h1 className="testimonial-title">Trust is the new currency for us</h1>
              {/* <h1 className="testimonial-title"></h1> */}
            </div>
            <div className='Testimonials-containr-content'>
              <div className="nav-btn-div">
                <button className="nav-button" onClick={handlePrev}><img src={prevew} alt="" /></button>
              </div>
              <div className='Testimonials-containr-data'>
                {testimonialdata.length > 0 && (
                  <div className="testimonial-content">
                    <div className="testimonial-author">
                      <img src={testimonial[testimonialcurrentIndex].image} className="author-photo" />
                      <div className='testimonial-author-content'>
                        <p className="author-name">{testimonialdata[testimonialcurrentIndex].name}</p>
                        <p className="author-title">{testimonialdata[testimonialcurrentIndex].title}</p>
                        <div className="author-rating">{testimonialdata[testimonialcurrentIndex].rating}</div>
                      </div>
                    </div>
                    <div className="testimonial-text">
                      <p>{testimonialdata[testimonialcurrentIndex].description}</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="nav-btn-div">
                <button className="nav-button" onClick={handleNext}><img src={next} alt="" /></button>
              </div>
            </div>

            <div className="testimonial-navigation">
              <button className="nav-button2" onClick={handlePrev}><img src={prevew} alt="" /></button>
              <div className="nav-dots">
                {testimonialdata.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${index === testimonialcurrentIndex ? 'active' : ''}`}
                  ></span>
                ))}
              </div>
              <button className="nav-button2" onClick={handleNext}><img src={next} alt="" /></button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Us  */}
      <div className='uni-bg-color'>
        <div className='uni-padding'>
          <div className="productcontent-body">
            <div className="productcontent-containr">
              <div className="productcontent-header">
                <p className="productcontent-tag">Why Us</p>
                <h1 className="productcontent-title">Why partner with Legal Stack?</h1>
              </div>
              <div className="productmain-content">
                {/* <div className="product-content"> */}
                <div className="product">
                  <img src={productimg1} alt="Icon 1" />
                  <p>50+</p>
                  <div className='product-title-content1'>Startups served across India</div>

                </div>
                <div className="product">
                  <img src={Record} alt="Icon 2" />
                  <p>Record</p>
                  <div className='product-title-content2'>Of highest company Trademark and Filings</div>

                </div>
                <div className="product">
                  <img src={description} alt="Icon 3" />
                  <p>2000+</p>
                  <div className='product-title-content3'>Filings Every Month</div>

                </div>
                {/* </div> */}

                {/* <div className="product-content"> */}
                <div className="product">
                  <img src={rocket_launch} alt="Icon 4" />
                  <p>10+</p>
                  <div className='product-title-content4'>Years of Startup Centric Legal Expertise</div>

                </div>
                <div className="product">
                  <img src={diversity_3} alt="Icon 5" />
                  <p>50+</p>
                  <div className='product-title-content5'>Team Members at your service</div>

                </div>
                <div className="product">
                  <img src={military_tech} alt="Icon 6" />
                  <p>4.5+</p>
                  <div className='product-title-content6'>Google Ratings</div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Blogs  */}
      <div className='uni-padding'>
        <div className='blog-body'>
          <div className="blog-containr">
            <div className="blog-header">
              <p className="blog-tag">Blogs</p>
              <h1 className="blog-title">Enlighten your thoughts Read our blogs.</h1>
            </div>
          </div>
          <div className='blogscard'>
            {
              blogs.map((item) =>
                <div key={item.id} className="blog-card">
                  <img src={item.image_path} className="blog-card-image" />
                  <div className="blog-card-content">
                    <h3 className="blog-card-title">{item.title}</h3>
                    <div className="blog-card-description"><p>{item.description}</p></div>
                    <div className="blog-card-footer">
                      <span className="blog-card-read-time">FilingsKaro : {item.duration_read}</span>
                    </div>
                  </div>
                </div>
              )
            }
          </div>

          <button onClick={handleViewMoreClick} className='blogsbtn' type='button'>{viewBlogText}</button>
        </div>
      </div>




    </>
  )

}

