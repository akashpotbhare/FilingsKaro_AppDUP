import React, { useEffect, useState } from 'react'
import whatsapp from "./Assets/WhatsApp.svg";
import checkbox from "./Assets/checkbox.svg";
import dout from "./Assets/dout.svg"
import Vector from "./Assets/Vector.svg"
import PAN from "./Assets/CompanyPAN.svg"
import Domain from "./Assets/Domain.svg"
import ProfessionalTax from "./Assets/ProfessionalTax.svg"
import Surprisebenefits from "./Assets/Surprisebenefits.svg"
import Text from "./Assets/Text.svg";
import calltodiscuss from "./Assets/calltodiscuss.png";
import fillform from "./Assets/fillform.png";
import incorporate from "./Assets/incorporate.png";
import admin_panel_settings from "./Assets/admin_panel_settings.svg"
import account_balance from "./Assets/account_balance.svg"
import real_estate_agent from "./Assets/real_estate_agent.svg"
import crowdsource from "./Assets/crowdsource.svg"
import groups from "./Assets/groups.svg"
import sell from "./Assets/sell.svg"
import check_circle from "./Assets/check_circle.svg"
import productimg1 from "./Assets/partner_exchange.svg"
import Record from "./Assets/Record.svg"
import description from "./Assets/description.svg"
import rocket_launch from "./Assets/rocket_launch.svg"
import diversity_3 from "./Assets/diversity_3.svg"
import military_tech from "./Assets/military_tech.svg"
import testimonial from "./data/Testimonials.json"
import AccordionData from "./data/AccordionData.json"
import next from "./Assets/next.svg"
import prevew from "./Assets/prevew.svg"
import "./Style/Services.css"
import { useParams } from 'react-router-dom';
import servicedata from "./data/Servicedata.json";

export function Services() {
  const [testimonialdata, setTestimonialData] = useState([])
  const [testimonialcurrentIndex, setTestimonialCurrentIndex] = useState(0);
  const [serviceDetails, setServiceDetails] = useState([]);
  const [mobileError, setMobileError] = useState("");

  const params = useParams();

  const [openIndex, setOpenIndex] = useState(null);

  function getServiceData() {
    for (var item of servicedata) {
      if (item.servicetitle === params.servicename) {
        setServiceDetails(item)
      }
    }
  }

  const guidesection = !!serviceDetails.GuideCompanyRegistrationTitle;

  const RegistrationTypesection = !!serviceDetails.RegistrationTypeTitle;

  const Registration_TypePoint_Title1 = !!serviceDetails.RegistrationTypePointTitle1;
  const Registration_TypePoint_Title2 = !!serviceDetails.RegistrationTypePointTitle2;
  const Registration_TypePoint_Title3 = !!serviceDetails.RegistrationTypePointTitle3;
  const Registration_TypePoint_Title4 = !!serviceDetails.RegistrationTypePointTitle4;
  const Registration_TypePoint_Title5 = !!serviceDetails.RegistrationTypePointTitle5;
  const Registration_TypePoint_Title6 = !!serviceDetails.RegistrationTypePointTitle6;
  const Registration_TypePoint_Title7 = !!serviceDetails.RegistrationTypePointTitle7;
  const Registration_TypePoint_Title8 = !!serviceDetails.RegistrationTypePointTitle8;
  const Registration_TypePoint_Title9 = !!serviceDetails.RegistrationTypePointTitle9;
  const Registration_TypePoint_Title10 = !!serviceDetails.RegistrationTypePointTitle10;
  const Registration_TypePoint_Title11 = !!serviceDetails.RegistrationTypePointTitle11;


  const free_service_logo2 = !!serviceDetails.freeservicelogo2;

  const How_To_Registration_Para2 = !!serviceDetails.HowToRegistrationPara2;

  const How_To_Registration_Point_Title1 = !!serviceDetails.HowToRegistrationPointTitle1
  const How_To_Registration_Point_Title2 = !!serviceDetails.HowToRegistrationPointTitle2
  const How_To_Registration_Point_Title3 = !!serviceDetails.HowToRegistrationPointTitle3
  const How_To_Registration_Point_Title4 = !!serviceDetails.HowToRegistrationPointTitle4
  const How_To_Registration_Point_Title5 = !!serviceDetails.HowToRegistrationPointTitle5
  const How_To_Registration_Point_Title6 = !!serviceDetails.HowToRegistrationPointTitle6
  const How_To_Registration_Point_Title7 = !!serviceDetails.HowToRegistrationPointTitle7
  const How_To_Registration_Point_Title8 = !!serviceDetails.HowToRegistrationPointTitle8
  const How_To_Registration_Point_Title9 = !!serviceDetails.HowToRegistrationPointTitle9
  const How_To_Registration_Point_Title10 = !!serviceDetails.HowToRegistrationPointTitle10
  const How_To_Registration_Point_Title11 = !!serviceDetails.HowToRegistrationPointTitle11

  const Documents_required_Registration_Section = !!serviceDetails.Documents_required_RegistrationTitle;
  const Documents_required_Registration_Para = !!serviceDetails.Documents_required_RegistrationPara;
  const Documents_required_Registration_Title_Section_Para1 = !!serviceDetails.Documents_required_Registration_Title_Para1;

  const Documents_required_Registration_Section_Point1 = !!serviceDetails.Documents_required_Registration_Point1;
  const Documents_required_Registration_Section_Point2 = !!serviceDetails.Documents_required_Registration_Point2;
  const Documents_required_Registration_Section_Point3 = !!serviceDetails.Documents_required_Registration_Point3;
  const Documents_required_Registration_Section_Point4 = !!serviceDetails.Documents_required_Registration_Point4;
  const Documents_required_Registration_Section_Point5 = !!serviceDetails.Documents_required_Registration_Point5;

  const Documents_required_Registration_Title_Section_Para2 = !!serviceDetails.Documents_required_Registration_Title_Para2;

  const Minimum_Requirement_Seection_Point1 = !!serviceDetails.Minimum_Requirement_Point1;
  const Minimum_Requirement_Seection_Point2 = !!serviceDetails.Minimum_Requirement_Point2;
  const Minimum_Requirement_Seection_Point3 = !!serviceDetails.Minimum_Requirement_Point3;
  const Minimum_Requirement_Seection_Point4 = !!serviceDetails.Minimum_Requirement_Point4;
  const Minimum_Requirement_Seection_Point5 = !!serviceDetails.Minimum_Requirement_Point5;
  const Minimum_Requirement_Seection_Point6 = !!serviceDetails.Minimum_Requirement_Point6;
  const Minimum_Requirement_Seection_Point7 = !!serviceDetails.Minimum_Requirement_Point7;
  const Minimum_Requirement_Seection_Point8 = !!serviceDetails.Minimum_Requirement_Point8;

  const What_You_Will_Get_Section_point1 = !!serviceDetails.What_You_Will_Get_point1;
  const What_You_Will_Get_Section_point2 = !!serviceDetails.What_You_Will_Get_point2;
  const What_You_Will_Get_Section_point3 = !!serviceDetails.What_You_Will_Get_point3;
  const What_You_Will_Get_Section_point4 = !!serviceDetails.What_You_Will_Get_point4;
  const What_You_Will_Get_Section_point5 = !!serviceDetails.What_You_Will_Get_point5;
  const What_You_Will_Get_Section_point6 = !!serviceDetails.What_You_Will_Get_point6;
  const What_You_Will_Get_Section_point7 = !!serviceDetails.What_You_Will_Get_point7;
  const What_You_Will_Get_Section_point8 = !!serviceDetails.What_You_Will_Get_point8;
  const What_You_Will_Get_Section_point9 = !!serviceDetails.What_You_Will_Get_point9;
  const What_You_Will_Get_Section_point10 = !!serviceDetails.What_You_Will_Get_point10;
  const What_You_Will_Get_Section_point11 = !!serviceDetails.What_You_Will_Get_point11;
  const What_You_Will_Get_Section_point12 = !!serviceDetails.What_You_Will_Get_point12;


  const Benefits_Of_CMP_Section_Heading = !!serviceDetails.Benefits_Of_CMP_Heading;
  const Benefits_Of_CMP_Section_TiTle = !!serviceDetails.Benefits_Of_CMP_TiTle;

  const Benefits_Of_CMP_Section_Image1 = !!serviceDetails.Benefits_Of_CMP_Image1;
  const Benefits_Of_CMP_Section_Point1 = !!serviceDetails.Benefits_Of_CMP_Point1;
  const Benefits_Of_CMP_Section_Para1 = !!serviceDetails.Benefits_Of_CMP_Para1;

  const Benefits_Of_CMP_Section_Image2 = !!serviceDetails.Benefits_Of_CMP_Image2;
  const Benefits_Of_CMP_Section_Point2 = !!serviceDetails.Benefits_Of_CMP_Point2;
  const Benefits_Of_CMP_Section_Para2 = !!serviceDetails.Benefits_Of_CMP_Para2;

  const Benefits_Of_CMP_Section_Image3 = !!serviceDetails.Benefits_Of_CMP_Image3;
  const Benefits_Of_CMP_Section_Point3 = !!serviceDetails.Benefits_Of_CMP_Point3;
  const Benefits_Of_CMP_Section_Para3 = !!serviceDetails.Benefits_Of_CMP_Para3;

  const Benefits_Of_CMP_Section_Image4 = !!serviceDetails.Benefits_Of_CMP_Image4;
  const Benefits_Of_CMP_Section_Point4 = !!serviceDetails.Benefits_Of_CMP_Point4;
  const Benefits_Of_CMP_Section_Para4 = !!serviceDetails.Benefits_Of_CMP_Para4;

  const Benefits_Of_CMP_Section_Image5 = !!serviceDetails.Benefits_Of_CMP_Image5;
  const Benefits_Of_CMP_Section_Point5 = !!serviceDetails.Benefits_Of_CMP_Point5;
  const Benefits_Of_CMP_Section_Para5 = !!serviceDetails.Benefits_Of_CMP_Para5;

  const Benefits_Of_CMP_Section_Image6 = !!serviceDetails.Benefits_Of_CMP_Image6;
  const Benefits_Of_CMP_Section_Point6 = !!serviceDetails.Benefits_Of_CMP_Point6;
  const Benefits_Of_CMP_Section_Para6 = !!serviceDetails.Benefits_Of_CMP_Para6;


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
    } else {
      setMobileError("Invalid mobile number")
    }
  }


  const handleClick = (index) => {
    if (openIndex === index) {
      setOpenIndex(null)
    }
    else {
      setOpenIndex(index)
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0)
    setTestimonialData(testimonial);
    getServiceData();
    console.log(serviceDetails)
  }, [params])

  const handlePrev = () => {
    setTestimonialCurrentIndex((testimonialcurrentIndex - 1 + testimonialdata.length) % testimonialdata.length);
  };

  const handleNext = () => {
    setTestimonialCurrentIndex((testimonialcurrentIndex + 1) % testimonialdata.length);
  };
  return (
    <>
      <div className='uni-padding'>
        <div className="service content ">
          <div className="left">
            <h1 className='service-titel'>{serviceDetails.servicetitle}</h1>
            {/* <div className='Price'>
                <p style={{marginTop:'10px'}}>At ₹ <span> {serviceDetails.serviceprice}</span>*</p>
            </div> */}
            {/* <div className="first-section-price">At ₹ <span className="current-price">{serviceDetails.serviceprice}*</span></div> */}
            <div className="first-section-prices">At ₹<span className="current-price">{serviceDetails.serviceprice}*</span></div>

            <div className='services-text'>
              <p>In {serviceDetails.requireday} Days<img src={dout} />From anywhere<img src={dout} />At a single click</p>
            </div>
            <div className="free-content-container-box">
              <div className='free-content'>
                <div className='free-content-text'>
                  <p> <img src={Vector} />Also get absolutely free</p>
                </div>

                <div className='free-content-box'>

                  <div className='freecontent-one'>
                    <img src={serviceDetails.freeservicelogo1} />
                    <p>{serviceDetails.freeservicetitle1}</p>
                  </div>

                  <div className='freecontent-one'>
                    <img src={serviceDetails.freeservicelogo3} />
                    <p>{serviceDetails.freeservicetitle3}</p>
                  </div>

                  {free_service_logo2 ? (
                    <div style={{ display: 'block' }}>
                      <div className='freecontent-two' >
                        <img src={serviceDetails.freeservicelogo2} />
                        <p>{serviceDetails.freeservicetitle2}</p>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: 'none' }}>

                    </div>
                  )}


                  <div className='freecontent-two'>
                    <img src={serviceDetails.freeservicelogo4} />
                    <p>{serviceDetails.freeservicetitle4}</p>
                  </div>

                </div>


                <p className='ProfessionalFeestext'>*Professional Fees. EMI Option Available.</p>
              </div>
            </div>
          </div>


          <div className="right">
            <div className='contactinfo'><p> Call Now</p> <img src={Text} alt="Text" /> <p> 08956214630,</p> <p> 08956214630,</p></div>
            <div className='service-form'>
              <h2>Get started from here</h2>
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
                <div className='checkbox-service'>
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
            <div className="free-content-container-box_mobile">
              <div className='free-content'>
                <div className='free-content-text'>
                  <p> <img src={Vector} />Also get absolutely free</p>
                </div>
                <div className='free-content-box'>
                  <div className='freecontent-one'>
                    <img src={serviceDetails.freeservicelogo1} />
                    <p>{serviceDetails.freeservicetitle1}</p>
                  </div>

                  <div className='freecontent-one'>
                    <img src={serviceDetails.freeservicelogo3} />
                    <p>{serviceDetails.freeservicetitle3}</p>
                  </div>

                  {free_service_logo2 ? (
                    <div style={{ display: 'block' }}>
                      <div className='freecontent-two' >
                        <img src={serviceDetails.freeservicelogo2} />
                        <p>{serviceDetails.freeservicetitle2}</p>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: 'none' }}>

                    </div>
                  )}


                  <div className='freecontent-two'>
                    <img src={serviceDetails.freeservicelogo4} />
                    <p>{serviceDetails.freeservicetitle4}</p>
                  </div>
                </div>
                <p className='ProfessionalFeestext'>*Professional Fees. EMI Option Available.</p>
              </div>
            </div>
          </div>

        </div >


        {/* Three step Guide */}

        <div className="three-step-guide">
          <div className='three-step-guide-title'>
            <h2 className="guide-title">Three step Guide</h2>
            <h1 className="guide-heading">Here’s How it works</h1>
          </div>
          <div className="steps">
            <div className="step">
              <h3>Fill The Form</h3>
              <div className='step-text'>
                <p>Simply fill the above form to get started.</p>
              </div>
            </div>
            <div className="step">
              <h3>Call To Discuss</h3>
              <div className='step-text'>
                <p>Our expert will connect with you & complete legalities.</p>
              </div>
            </div>
            <div className="step">
              <h3>Get Incorporated</h3>
              <div className='step-text'>
                <p>Get your Company Incorporation.</p>
              </div>
            </div>
          </div>
        </div>


      </div >

      {/* style={{ display: serviceDetails.GuideCompanyRegistrationTitle ? 'block' : 'none' }} */}

      {/* Guide  */}
      {
        guidesection ? (
          <div className="guide-containr-box" style={{ display: 'block' }} >
            <div className="uni-bg-color">
              <div className="uni-padding2">
                <div className="guide-containr">
                  <div className="guidecontenthead">
                    <h2 className="guide-title">Guide</h2>
                    <h1 className="guideheading">{serviceDetails.GuideCompanyRegistrationTitle}</h1>
                  </div>
                  <div className="guidetext">
                    <p>{serviceDetails.GuideCompanyRegistrationPara}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="guide-containr-box" style={{ display: 'none' }} >

          </div>
        )
      }


      {/* Registration  */}

      {
        RegistrationTypesection ? (
          <div className='uni-padding2' style={{ display: 'block' }} >
            <div className="Registration_container">
              <div className='Registration-head'>
                <div className='Registration-info-head'>
                  <p className='guide-title'>Registration Types</p>
                  <h1 className='Registration-heading'>{serviceDetails.RegistrationTypeTitle}</h1>
                </div>
                <div className='Registration-info'  >
                  <p>{serviceDetails.RegistrationTypePara1}</p>
                </div>

              </div>

              <div className='Registration-information'>
                <ul>
                  {Registration_TypePoint_Title1 ? (
                    <li>
                      {Registration_TypePoint_Title1 ? (
                        <span className='Registration-sub-text' style={{ display: 'block' }}>{serviceDetails.RegistrationTypePointTitle1} <span className='Registration-child-text'>{serviceDetails.RegistrationTypePoin1}</span></span>
                      ) : (
                        <span className='Registration-sub-text' style={{ display: 'none' }}>{serviceDetails.RegistrationTypePointTitle1}<span className='Registration-child-text'>{serviceDetails.RegistrationTypePoin1}</span></span>
                      )}

                    </li>
                  ) : (
                    <li style={{ display: 'none' }}>
                      {Registration_TypePoint_Title1 ? (
                        <span className='Registration-sub-text' style={{ display: 'block' }}>{serviceDetails.RegistrationTypePointTitle1}</span>
                      ) : (
                        <span className='Registration-sub-text' style={{ display: 'none' }}>{serviceDetails.RegistrationTypePointTitle1}</span>
                      )}
                      <span className='Registration-child-text'>{serviceDetails.RegistrationTypePoin1}</span>
                    </li>
                  )}

                  {Registration_TypePoint_Title2 ? (
                    <li >
                      {Registration_TypePoint_Title2 ? (
                        <span className='Registration-sub-text' style={{ display: 'block' }}>{serviceDetails.RegistrationTypePointTitle2} <span className='Registration-child-text'>{serviceDetails.RegistrationTypePoin2}</span></span>
                      ) : (
                        <span className='Registration-sub-text' style={{ display: 'none' }}>{serviceDetails.RegistrationTypePointTitle2}</span>
                      )}


                    </li>
                  ) : (
                    <li style={{ display: 'none' }}>
                      {Registration_TypePoint_Title2 ? (
                        <span className='Registration-sub-text' style={{ display: 'block' }}>{serviceDetails.RegistrationTypePointTitle2}</span>
                      ) : (
                        <span className='Registration-sub-text' style={{ display: 'none' }}>{serviceDetails.RegistrationTypePointTitle2}</span>
                      )}

                      <span className='Registration-child-text'>{serviceDetails.RegistrationTypePoin2}</span>
                    </li>
                  )}

                  {Registration_TypePoint_Title3 ? (
                    <li >
                      {Registration_TypePoint_Title3 ? (
                        <span className='Registration-sub-text' style={{ display: 'block' }}>{serviceDetails.RegistrationTypePointTitle3} <span className='Registration-child-text'>{serviceDetails.RegistrationTypePoin3}</span></span>
                      ) : (
                        <span className='Registration-sub-text' style={{ display: 'none' }}>{serviceDetails.RegistrationTypePointTitle3}</span>
                      )}


                    </li>
                  ) : (
                    <li style={{ display: 'none' }}>
                      {Registration_TypePoint_Title3 ? (
                        <span className='Registration-sub-text' style={{ display: 'block' }}>{serviceDetails.RegistrationTypePointTitle3}</span>
                      ) : (
                        <span className='Registration-sub-text' style={{ display: 'none' }}>{serviceDetails.RegistrationTypePointTitle3}</span>
                      )}

                      <span className='Registration-child-text'>{serviceDetails.RegistrationTypePoin3}</span>
                    </li>
                  )}


                  {Registration_TypePoint_Title4 ? (
                    <li >
                      {Registration_TypePoint_Title4 ? (
                        <span className='Registration-sub-text' style={{ display: 'block' }}>{serviceDetails.RegistrationTypePointTitle4} <span className='Registration-child-text'>{serviceDetails.RegistrationTypePoin4}</span></span>
                      ) : (
                        <span className='Registration-sub-text' style={{ display: 'none' }}>{serviceDetails.RegistrationTypePointTitle4}</span>
                      )}

                      <span className='Registration-child-text'>{serviceDetails.RegistrationTypePoin4}</span>
                    </li>
                  ) : (
                    <li style={{ display: 'none' }}>
                      {Registration_TypePoint_Title4 ? (
                        <span className='Registration-sub-text' style={{ display: 'block' }}>{serviceDetails.RegistrationTypePointTitle4}</span>
                      ) : (
                        <span className='Registration-sub-text' style={{ display: 'none' }}>{serviceDetails.RegistrationTypePointTitle4}</span>
                      )}

                      <span className='Registration-child-text'>{serviceDetails.RegistrationTypePoin4}</span>
                    </li>
                  )}

                  {Registration_TypePoint_Title5 ? (
                    <li >
                      {Registration_TypePoint_Title5 ? (
                        <span className='Registration-sub-text' style={{ display: 'block' }}>{serviceDetails.RegistrationTypePointTitle5} <span className='Registration-child-text'>{serviceDetails.RegistrationTypePoin5}</span></span>
                      ) : (
                        <span className='Registration-sub-text' style={{ display: 'none' }}>{serviceDetails.RegistrationTypePointTitle5}</span>
                      )}


                    </li>
                  ) : (
                    <li style={{ display: 'none' }}>
                      {Registration_TypePoint_Title5 ? (
                        <span className='Registration-sub-text' style={{ display: 'block' }}>{serviceDetails.RegistrationTypePointTitle5}</span>
                      ) : (
                        <span className='Registration-sub-text' style={{ display: 'none' }}>{serviceDetails.RegistrationTypePointTitle5}</span>
                      )}

                      <span className='Registration-child-text'>{serviceDetails.RegistrationTypePoin5}</span>
                    </li>
                  )}

                  {Registration_TypePoint_Title6 ? (
                    <li >
                      {Registration_TypePoint_Title6 ? (
                        <span className='Registration-sub-text' style={{ display: 'block' }}>{serviceDetails.RegistrationTypePointTitle6} <span className='Registration-child-text'>{serviceDetails.RegistrationTypePoin6}</span></span>
                      ) : (
                        <span className='Registration-sub-text' style={{ display: 'none' }}>{serviceDetails.RegistrationTypePointTitle6}</span>
                      )}


                    </li>
                  ) : (
                    <li style={{ display: 'none' }}>
                      {Registration_TypePoint_Title6 ? (
                        <span className='Registration-sub-text' style={{ display: 'block' }}>{serviceDetails.RegistrationTypePointTitle6}</span>
                      ) : (
                        <span className='Registration-sub-text' style={{ display: 'none' }}>{serviceDetails.RegistrationTypePointTitle6}</span>
                      )}

                      <span className='Registration-child-text'>{serviceDetails.RegistrationTypePoin6}</span>
                    </li>
                  )}

                  {Registration_TypePoint_Title7 ? (
                    <li>
                      {Registration_TypePoint_Title7 ? (
                        <span className='Registration-sub-text' style={{ display: 'block' }}>{serviceDetails.RegistrationTypePointTitle7} &nbsp; <span className='Registration-child-text'>{serviceDetails.RegistrationTypePoin7}</span></span>
                      ) : (
                        <span className='Registration-sub-text' style={{ display: 'none' }}>{serviceDetails.RegistrationTypePointTitle7}</span>
                      )}


                    </li>
                  ) : (
                    <li style={{ display: 'none' }}>
                      {Registration_TypePoint_Title7 ? (
                        <span className='Registration-sub-text' style={{ display: 'block' }}>{serviceDetails.RegistrationTypePointTitle7}</span>
                      ) : (
                        <span className='Registration-sub-text' style={{ display: 'none' }}>{serviceDetails.RegistrationTypePointTitle7}</span>
                      )}

                      <span className='Registration-child-text'>{serviceDetails.RegistrationTypePoin7}</span>
                    </li>
                  )}

                  {Registration_TypePoint_Title8 ? (
                    <li >
                      {Registration_TypePoint_Title8 ? (
                        <span className='Registration-sub-text' style={{ display: 'block' }}>{serviceDetails.RegistrationTypePointTitle8}</span>
                      ) : (
                        <span className='Registration-sub-text' style={{ display: 'none' }}>{serviceDetails.RegistrationTypePointTitle8}</span>
                      )}

                      <span className='Registration-child-text'>{serviceDetails.RegistrationTypePoin8}</span>
                    </li>
                  ) : (
                    <li style={{ display: 'none' }}>
                      {Registration_TypePoint_Title8 ? (
                        <span className='Registration-sub-text' style={{ display: 'block' }}>{serviceDetails.RegistrationTypePointTitle8}</span>
                      ) : (
                        <span className='Registration-sub-text' style={{ display: 'none' }}>{serviceDetails.RegistrationTypePointTitle8}</span>
                      )}

                      <span className='Registration-child-text'>{serviceDetails.RegistrationTypePoin8}</span>
                    </li>
                  )}

                  {Registration_TypePoint_Title9 ? (
                    <li >
                      {Registration_TypePoint_Title9 ? (
                        <span className='Registration-sub-text' style={{ display: 'block' }}>{serviceDetails.RegistrationTypePointTitle9}</span>
                      ) : (
                        <span className='Registration-sub-text' style={{ display: 'none' }}>{serviceDetails.RegistrationTypePointTitle9}</span>
                      )}

                      <span className='Registration-child-text'>{serviceDetails.RegistrationTypePoin9}</span>
                    </li>
                  ) : (
                    <li style={{ display: 'none' }}>
                      {Registration_TypePoint_Title9 ? (
                        <span className='Registration-sub-text' style={{ display: 'block' }}>{serviceDetails.RegistrationTypePointTitle9}</span>
                      ) : (
                        <span className='Registration-sub-text' style={{ display: 'none' }}>{serviceDetails.RegistrationTypePointTitle9}</span>
                      )}

                      <span className='Registration-child-text'>{serviceDetails.RegistrationTypePoin9}</span>
                    </li>
                  )}

                  {Registration_TypePoint_Title10 ? (
                    <li >
                      {Registration_TypePoint_Title10 ? (
                        <span className='Registration-sub-text' style={{ display: 'block' }}>{serviceDetails.RegistrationTypePointTitle10}</span>
                      ) : (
                        <span className='Registration-sub-text' style={{ display: 'none' }}>{serviceDetails.RegistrationTypePointTitle10}</span>
                      )}

                      <span className='Registration-child-text'>{serviceDetails.RegistrationTypePoin10}</span>
                    </li>
                  ) : (
                    <li style={{ display: 'none' }}>
                      {Registration_TypePoint_Title10 ? (
                        <span className='Registration-sub-text' style={{ display: 'block' }}>{serviceDetails.RegistrationTypePointTitle10}</span>
                      ) : (
                        <span className='Registration-sub-text' style={{ display: 'none' }}>{serviceDetails.RegistrationTypePointTitle10}</span>
                      )}

                      <span className='Registration-child-text'>{serviceDetails.RegistrationTypePoin10}</span>
                    </li>
                  )}

                  {Registration_TypePoint_Title11 ? (
                    <li >
                      {Registration_TypePoint_Title11 ? (
                        <span className='Registration-sub-text' style={{ display: 'block' }}>{serviceDetails.RegistrationTypePointTitle11}</span>
                      ) : (
                        <span className='Registration-sub-text' style={{ display: 'none' }}>{serviceDetails.RegistrationTypePointTitle11}</span>
                      )}

                      <span className='Registration-child-text'>{serviceDetails.RegistrationTypePoin11}</span>
                    </li>
                  ) : (
                    <li style={{ display: 'none' }}>
                      {Registration_TypePoint_Title11 ? (
                        <span className='Registration-sub-text' style={{ display: 'block' }}>{serviceDetails.RegistrationTypePointTitle11}</span>
                      ) : (
                        <span className='Registration-sub-text' style={{ display: 'none' }}>{serviceDetails.RegistrationTypePointTitle11}</span>
                      )}

                      <span className='Registration-child-text'>{serviceDetails.RegistrationTypePoin11}</span>
                    </li>
                  )}


                </ul>
              </div>

              <div className='Registration-final-text'>
                <p>{serviceDetails.RegistrationTypePara2}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className='uni-padding2' style={{ display: 'none' }} >


          </div>
        )
      }



      {/* How to register a Company in India */}

      <div className="uni-bg-color">
        <div className='Registration-containr'>
          <div className='uni-padding2'>
            <div className='Registration-containr-box'>
              <p className='guide-title'>How To</p>
              <h1 className='Registration-containr-heading'>
                {serviceDetails.HowToRegistrationTitle}
              </h1>
            </div>

            <div className='Registration-info-Para'>
              <p>{serviceDetails.HowToRegistrationPara1}</p>
            </div>


            {How_To_Registration_Para2 ? (
              <div className='Registration-info-text' style={{ display: 'block' }}>
                <p>{serviceDetails.HowToRegistrationPara2}</p>
              </div>
            ) : (
              <div className='Registration-info-text' style={{ display: 'none' }}>

              </div>
            )}


            <div className='Registration-information'>
              <ul>
                {How_To_Registration_Point_Title1 ? (
                  <li>
                    <span className='Registration-sub-text'>{serviceDetails.HowToRegistrationPointTitle1}</span> <span className='Registration-child-text'>{serviceDetails.HowToRegistrationPoint1}</span>
                  </li>
                ) : (
                  <li style={{ display: 'none' }}>

                  </li>
                )}


                {How_To_Registration_Point_Title2 ? (
                  <li >
                    <span className='Registration-sub-text'>{serviceDetails.HowToRegistrationPointTitle2}</span> <span className='Registration-child-text'>{serviceDetails.HowToRegistrationPoint2}</span>
                  </li>
                ) : (
                  <li style={{ display: 'none' }}>

                  </li>
                )}

                {How_To_Registration_Point_Title3 ? (
                  <li >
                    <span className='Registration-sub-text'>{serviceDetails.HowToRegistrationPointTitle3}</span> <span className='Registration-child-text'>{serviceDetails.HowToRegistrationPoint3}</span>
                  </li>
                ) : (
                  <li style={{ display: 'none' }}>

                  </li>
                )}

                {How_To_Registration_Point_Title4 ? (
                  <li >
                    <span className='Registration-sub-text'>{serviceDetails.HowToRegistrationPointTitle4}</span> <span className='Registration-child-text'>{serviceDetails.HowToRegistrationPoint4}</span>
                  </li>
                ) : (
                  <li style={{ display: 'none' }}>
                  </li>
                )}

                {How_To_Registration_Point_Title5 ? (
                  <li >
                    <span className='Registration-sub-text'>{serviceDetails.HowToRegistrationPointTitle5}</span> <span className='Registration-child-text'>{serviceDetails.HowToRegistrationPoint5}</span>
                  </li>
                ) : (
                  <li style={{ display: 'none' }}>

                  </li>
                )}

                {How_To_Registration_Point_Title6 ? (
                  <li>
                    <span className='Registration-sub-text'>{serviceDetails.HowToRegistrationPointTitle6}</span> <span className='Registration-child-text'>{serviceDetails.HowToRegistrationPoint6}</span>
                  </li>
                ) : (
                  <li style={{ display: 'none' }}>

                  </li>
                )}

                {How_To_Registration_Point_Title7 ? (
                  <li >
                    <span className='Registration-sub-text'>{serviceDetails.HowToRegistrationPointTitle7}</span> <span className='Registration-child-text'>{serviceDetails.HowToRegistrationPoint7}</span>
                  </li>
                ) : (
                  <li style={{ display: 'none' }}>

                  </li>
                )}

                {How_To_Registration_Point_Title8 ? (
                  <li>
                    <span className='Registration-sub-text'>{serviceDetails.HowToRegistrationPointTitle8}</span> <span className='Registration-child-text'>{serviceDetails.HowToRegistrationPoint8}</span>
                  </li>
                ) : (
                  <li style={{ display: 'none' }}>

                  </li>
                )}

                {How_To_Registration_Point_Title9 ? (
                  <li>
                    <span className='Registration-sub-text'>{serviceDetails.HowToRegistrationPointTitle9}</span> <span className='Registration-child-text'>{serviceDetails.HowToRegistrationPoint9}</span>
                  </li>
                ) : (
                  <li style={{ display: 'none' }}>

                  </li>
                )}

                {How_To_Registration_Point_Title10 ? (
                  <li >
                    <span className='Registration-sub-text'>{serviceDetails.HowToRegistrationPointTitle10}</span> <span className='Registration-child-text'>{serviceDetails.HowToRegistrationPoint10}</span>
                  </li>
                ) : (
                  <li style={{ display: 'none' }}>

                  </li>
                )}

                {How_To_Registration_Point_Title11 ? (
                  <li >
                    <span className='Registration-sub-text'>{serviceDetails.HowToRegistrationPointTitle11}</span> <span className='Registration-child-text'>{serviceDetails.HowToRegistrationPoint11}</span>
                  </li>
                ) : (
                  <li style={{ display: 'none' }}>
                    <span className='Registration-sub-text'>Filling a Questionnaire:</span>
                    <span className='Registration-child-text'>Once you submit the above GET STARTED form, you may need to fill a simple one page Questionnaire to start the Company incorporation process.
                    </span>
                  </li>
                )}

              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Documents required for Company Registration */}

      {
        Documents_required_Registration_Section ? (
          <div className='uni-padding2' style={{ display: 'block' }}>
            <div className='Registration-Documents-head'>
              <p className='guide-title'>How To</p>
              <h1 className='Registration-Documents-heading'>
                {serviceDetails.Documents_required_RegistrationTitle}
              </h1>
            </div>

            {Documents_required_Registration_Para ? (
              <div className='Registration-Documents-title' style={{ display: 'block' }}>
                <p>{serviceDetails.Documents_required_RegistrationPara}</p>
              </div>
            ) : (
              <div className='Registration-Documents-title' style={{ display: 'none' }}>
              </div>
            )}

            {Documents_required_Registration_Title_Section_Para1 ? (
              <div className='Registration-Documents-fees' style={{ display: 'block' }}>
                <p>{serviceDetails.Documents_required_Registration_Title_Para1}</p>
              </div>
            ) : (
              <div className='Registration-Documents-fees' style={{ display: 'none' }}>
              </div>
            )}


            <div className='Registration-information'>
              <ul>
                {Documents_required_Registration_Section_Point1 ? (
                  <li >
                    <span className='Registration-sub-text'>{serviceDetails.Documents_required_Registration_Point1}</span>
                  </li>
                ) : (
                  <li style={{ display: 'none' }}>
                  </li>
                )}

                {Documents_required_Registration_Section_Point2 ? (
                  <li>
                    <span className='Registration-sub-text'>{serviceDetails.Documents_required_Registration_Point2}</span>
                  </li>
                ) : (
                  <li style={{ display: 'none' }}>
                  </li>
                )}

                {Documents_required_Registration_Section_Point3 ? (
                  <li >
                    <span className='Registration-sub-text'>{serviceDetails.Documents_required_Registration_Point3}</span>
                  </li>
                ) : (
                  <li style={{ display: 'none' }}>
                  </li>
                )}

                {Documents_required_Registration_Section_Point4 ? (
                  <li>
                    <span className='Registration-sub-text'>{serviceDetails.Documents_required_Registration_Point4}</span>
                  </li>
                ) : (
                  <li style={{ display: 'none' }}>
                  </li>
                )}

                {Documents_required_Registration_Section_Point5 ? (
                  <li >
                    <span className='Registration-sub-text'>{serviceDetails.Documents_required_Registration_Point5}</span>
                  </li>
                ) : (
                  <li style={{ display: 'none' }}>
                  </li>
                )}

              </ul>
            </div>
            {Documents_required_Registration_Title_Section_Para2 ? (
              <div className='Registration-final-text' style={{ display: 'block' }}>
                <p>{serviceDetails.Documents_required_Registration_Title_Para2}</p>
              </div>
            ) : (
              <div className='Registration-final-text' style={{ display: 'none' }}>
              </div>
            )}

          </div>
        ) : (
          <div className='uni-padding2' style={{ display: 'none' }}>

          </div>
        )
      }






      {/* Benefits of Company Register */}
      {Benefits_Of_CMP_Section_Heading ? (
        <div className='uni-bg-color' style={{ display: 'block' }}>
          <div className='uni-padding2'>
            <div className='Benefits-of-Company-Register'>
              <div className='Benefits-of-Company-Register-heading'>
                <div className='CompanyRegister-head'>
                  <p className='guide-title'>How To</p>
                  <h1 className='Registration-containr-heading_title'>
                    {serviceDetails.Benefits_Of_CMP_Heading}
                  </h1>
                </div>
                {Benefits_Of_CMP_Section_TiTle ? (
                  <div className='Registration-Company-title' style={{ display: 'block' }}>
                    <p>Registering a Pvt Ltd company offers many advantages:</p>
                  </div>
                ) : (
                  <div className='Registration-Company-title' style={{ display: 'none' }}>
                    <p>Registering a Pvt Ltd company offers many advantages:</p>
                  </div>
                )}

              </div>

              <div className="comany-registration-Benefits">

                <div className='company-offers-containr'>
                  {Benefits_Of_CMP_Section_Image1 ? (
                    <div className='company-offers-containr-image'>
                      <img src={serviceDetails.Benefits_Of_CMP_Image1} />
                    </div>
                  ) : (
                    <div className='company-offers-containr-image' style={{ display: 'none' }}>

                    </div>
                  )}

                  {Benefits_Of_CMP_Section_Point1 ? (
                    <div className='company-offers-containr-title' >
                      <p>{serviceDetails.Benefits_Of_CMP_Point1}</p>
                    </div>
                  ) : (
                    <div className='company-offers-containr-title' style={{ display: 'none' }}>
                    </div>
                  )}

                  {Benefits_Of_CMP_Section_Para1 ? (
                    <div className='company-offers-containr-text'>
                      <p>{serviceDetails.Benefits_Of_CMP_Para1}</p>
                    </div>
                  ) : (
                    <div className='company-offers-containr-text' style={{ display: 'none' }}>
                    </div>
                  )}

                </div>

                <div className='company-offers-containr'>
                  {Benefits_Of_CMP_Section_Image2 ? (
                    <div className='company-offers-containr-image'>
                      <img src={serviceDetails.Benefits_Of_CMP_Image2} />
                    </div>
                  ) : (
                    <div className='company-offers-containr-image' style={{ display: 'none' }}>

                    </div>
                  )}

                  {Benefits_Of_CMP_Section_Point2 ? (
                    <div className='company-offers-containr-title' >
                      <p>{serviceDetails.Benefits_Of_CMP_Point2}</p>
                    </div>
                  ) : (
                    <div className='company-offers-containr-title' style={{ display: 'none' }}>
                    </div>
                  )}

                  {Benefits_Of_CMP_Section_Para2 ? (
                    <div className='company-offers-containr-text'>
                      <p>{serviceDetails.Benefits_Of_CMP_Para2}</p>
                    </div>
                  ) : (
                    <div className='company-offers-containr-text' style={{ display: 'none' }}>
                    </div>
                  )}

                </div>

                <div className='company-offers-containr'>
                  {Benefits_Of_CMP_Section_Image3 ? (
                    <div className='company-offers-containr-image'>
                      <img src={serviceDetails.Benefits_Of_CMP_Image3} />
                    </div>
                  ) : (
                    <div className='company-offers-containr-image' style={{ display: 'none' }}>

                    </div>
                  )}

                  {Benefits_Of_CMP_Section_Point3 ? (
                    <div className='company-offers-containr-title' >
                      <p>{serviceDetails.Benefits_Of_CMP_Point3}</p>
                    </div>
                  ) : (
                    <div className='company-offers-containr-title' style={{ display: 'none' }}>
                    </div>
                  )}

                  {Benefits_Of_CMP_Section_Para3 ? (
                    <div className='company-offers-containr-text'>
                      <p>{serviceDetails.Benefits_Of_CMP_Para3}</p>
                    </div>
                  ) : (
                    <div className='company-offers-containr-text' style={{ display: 'none' }}>
                    </div>
                  )}

                </div>

                <div className='company-offers-containr'>
                  {Benefits_Of_CMP_Section_Image4 ? (
                    <div className='company-offers-containr-image'>
                      <img src={serviceDetails.Benefits_Of_CMP_Image4} />
                    </div>
                  ) : (
                    <div className='company-offers-containr-image' style={{ display: 'none' }}>

                    </div>
                  )}

                  {Benefits_Of_CMP_Section_Point4 ? (
                    <div className='company-offers-containr-title' >
                      <p>{serviceDetails.Benefits_Of_CMP_Point4}</p>
                    </div>
                  ) : (
                    <div className='company-offers-containr-title' style={{ display: 'none' }}>
                    </div>
                  )}

                  {Benefits_Of_CMP_Section_Para4 ? (
                    <div className='company-offers-containr-text'>
                      <p>{serviceDetails.Benefits_Of_CMP_Para4}</p>
                    </div>
                  ) : (
                    <div className='company-offers-containr-text' style={{ display: 'none' }}>
                    </div>
                  )}

                </div>

                <div className='company-offers-containr'>
                  {Benefits_Of_CMP_Section_Image5 ? (
                    <div className='company-offers-containr-image'>
                      <img src={serviceDetails.Benefits_Of_CMP_Image5} />
                    </div>
                  ) : (
                    <div className='company-offers-containr-image' style={{ display: 'none' }}>

                    </div>
                  )}

                  {Benefits_Of_CMP_Section_Point5 ? (
                    <div className='company-offers-containr-title' >
                      <p>{serviceDetails.Benefits_Of_CMP_Point5}</p>
                    </div>
                  ) : (
                    <div className='company-offers-containr-title' style={{ display: 'none' }}>
                    </div>
                  )}

                  {Benefits_Of_CMP_Section_Para5 ? (
                    <div className='company-offers-containr-text'>
                      <p>{serviceDetails.Benefits_Of_CMP_Para5}</p>
                    </div>
                  ) : (
                    <div className='company-offers-containr-text' style={{ display: 'none' }}>
                    </div>
                  )}

                </div>

                <div className='company-offers-containr'>
                  {Benefits_Of_CMP_Section_Image6 ? (
                    <div className='company-offers-containr-image'>
                      <img src={serviceDetails.Benefits_Of_CMP_Image6} />
                    </div>
                  ) : (
                    <div className='company-offers-containr-image' style={{ display: 'none' }}>

                    </div>
                  )}

                  {Benefits_Of_CMP_Section_Point6 ? (
                    <div className='company-offers-containr-title' >
                      <p>{serviceDetails.Benefits_Of_CMP_Point6}</p>
                    </div>
                  ) : (
                    <div className='company-offers-containr-title' style={{ display: 'none' }}>
                    </div>
                  )}

                  {Benefits_Of_CMP_Section_Para6 ? (
                    <div className='company-offers-containr-text'>
                      <p>{serviceDetails.Benefits_Of_CMP_Para6}</p>
                    </div>
                  ) : (
                    <div className='company-offers-containr-text' style={{ display: 'none' }}>
                    </div>
                  )}

                </div>

              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='uni-bg-color' style={{ display: "none" }}>

        </div>
      )}



      {/* Minimum Requirements for Pvt. Ltd. Registration */}

      <div className='uni-padding2'>
        <div className='Minimum-Requirement-Registration'>
          <div className='Minimum-Requirement-Registration-head'>
            <p className='guide-title'>Registration Types</p>
            <h1 className='Registration-Documents-heading'>
              {serviceDetails.Minimum_Requirement_Title}
            </h1>
          </div>

          <div className="Minimum-Requirement-Registration-containr">

            <div className="Minimum-Requirement-Registration-containr-box">

              {Minimum_Requirement_Seection_Point1 ? (
                <div className="Minimum-Requirement-Registration-content" style={{ display: 'block' }}>
                  <div className="Minimum-Requirement-Registration-content-box">
                    <img src={check_circle} /> <span>{serviceDetails.Minimum_Requirement_Point1}</span>
                  </div>
                </div>
              ) : (
                <div className="Minimum-Requirement-Registration-content" style={{ display: 'none' }}>
                </div>
              )}


              {Minimum_Requirement_Seection_Point2 ? (
                <div className="Minimum-Requirement-Registration-content" style={{ display: 'block' }}>
                  <div className="Minimum-Requirement-Registration-content-box">
                    <img src={check_circle} /> <span>{serviceDetails.Minimum_Requirement_Point2}</span>
                  </div>
                </div>
              ) : (
                <div className="Minimum-Requirement-Registration-content" style={{ display: 'none' }}>
                </div>
              )}

              {Minimum_Requirement_Seection_Point3 ? (
                <div className="Minimum-Requirement-Registration-content" style={{ display: 'block' }}>
                  <div className="Minimum-Requirement-Registration-content-box">
                    <img src={check_circle} /> <span>{serviceDetails.Minimum_Requirement_Point3}</span>
                  </div>
                </div>
              ) : (
                <div className="Minimum-Requirement-Registration-content" style={{ display: 'none' }}>
                </div>
              )}

              {Minimum_Requirement_Seection_Point4 ? (
                <div className="Minimum-Requirement-Registration-content" style={{ display: 'block' }}>
                  <div className="Minimum-Requirement-Registration-content-box">
                    <img src={check_circle} /> <span>{serviceDetails.Minimum_Requirement_Point4}</span>
                  </div>
                </div>
              ) : (
                <div className="Minimum-Requirement-Registration-content" style={{ display: 'none' }}>
                </div>
              )}

            </div>

            <div className="Minimum-Requirement-Registration-containr-box">
              {Minimum_Requirement_Seection_Point5 ? (
                <div className="Minimum-Requirement-Registration-content" style={{ display: 'block' }}>
                  <div className="Minimum-Requirement-Registration-content-box">
                    <img src={check_circle} /> <span>{serviceDetails.Minimum_Requirement_Point5}</span>
                  </div>
                </div>
              ) : (
                <div className="Minimum-Requirement-Registration-content" style={{ display: 'none' }}>
                </div>
              )}


              {Minimum_Requirement_Seection_Point6 ? (
                <div className="Minimum-Requirement-Registration-content" style={{ display: 'block' }}>
                  <div className="Minimum-Requirement-Registration-content-box">
                    <img src={check_circle} /> <span>{serviceDetails.Minimum_Requirement_Point6}</span>
                  </div>
                </div>
              ) : (
                <div className="Minimum-Requirement-Registration-content" style={{ display: 'none' }}>
                </div>
              )}

              {Minimum_Requirement_Seection_Point7 ? (
                <div className="Minimum-Requirement-Registration-content" style={{ display: 'block' }}>
                  <div className="Minimum-Requirement-Registration-content-box">
                    <img src={check_circle} /> <span>{serviceDetails.Minimum_Requirement_Point7}</span>
                  </div>
                </div>
              ) : (
                <div className="Minimum-Requirement-Registration-content" style={{ display: 'none' }}>
                </div>
              )}

              {Minimum_Requirement_Seection_Point8 ? (
                <div className="Minimum-Requirement-Registration-content" style={{ display: 'block' }}>
                  <div className="Minimum-Requirement-Registration-content-box">
                    <img src={check_circle} /> <span>{serviceDetails.Minimum_Requirement_Point8}</span>
                  </div>
                </div>
              ) : (
                <div className="Minimum-Requirement-Registration-content" style={{ display: 'none' }}>
                </div>
              )}

            </div>

          </div>
        </div>
      </div>

      {/* What you’ll Get */}

      {/* same copy kiya hai uparka  */}
      <div className="uni-bg-color">
        <div className="What-youll-Get">
          <div className='uni-padding2'>
            <div className='Minimum-Requirement-Registration'>
              <div className='Minimum-Requirement-Registration-head2'>
                <p className='guide-title'>Registration Types</p>
                <h1 className='Registration-Documents-heading'>
                  What you’ll Get
                </h1>
              </div>

              <div className="Minimum-Requirement-Registration-containr">

                <div className="Minimum-Requirement-Registration-containr-box">
                  {What_You_Will_Get_Section_point1 ? (
                    <div className="Minimum-Requirement-Registration-content" style={{ display: "block" }}>
                      <div className="Minimum-Requirement-Registration-content-box">
                        <img src={check_circle} /> <span>{serviceDetails.What_You_Will_Get_point1}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="Minimum-Requirement-Registration-content" style={{ display: 'none' }}>
                    </div>
                  )}


                  {What_You_Will_Get_Section_point2 ? (
                    <div className="Minimum-Requirement-Registration-content" style={{ display: "block" }}>
                      <div className="Minimum-Requirement-Registration-content-box">
                        <img src={check_circle} /> <span>{serviceDetails.What_You_Will_Get_point2}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="Minimum-Requirement-Registration-content" style={{ display: 'none' }}>
                    </div>
                  )}

                  {What_You_Will_Get_Section_point3 ? (
                    <div className="Minimum-Requirement-Registration-content" style={{ display: "block" }}>
                      <div className="Minimum-Requirement-Registration-content-box">
                        <img src={check_circle} /> <span>{serviceDetails.What_You_Will_Get_point3}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="Minimum-Requirement-Registration-content" style={{ display: 'none' }}>
                    </div>
                  )}

                  {What_You_Will_Get_Section_point4 ? (
                    <div className="Minimum-Requirement-Registration-content" style={{ display: "block" }}>
                      <div className="Minimum-Requirement-Registration-content-box">
                        <img src={check_circle} /> <span>{serviceDetails.What_You_Will_Get_point4}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="Minimum-Requirement-Registration-content" style={{ display: 'none' }}>
                    </div>
                  )}

                  {What_You_Will_Get_Section_point5 ? (
                    <div className="Minimum-Requirement-Registration-content" style={{ display: "block" }}>
                      <div className="Minimum-Requirement-Registration-content-box">
                        <img src={check_circle} /> <span>{serviceDetails.What_You_Will_Get_point5}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="Minimum-Requirement-Registration-content" style={{ display: 'none' }}>
                    </div>
                  )}

                  {What_You_Will_Get_Section_point6 ? (
                    <div className="Minimum-Requirement-Registration-content" style={{ display: "block" }}>
                      <div className="Minimum-Requirement-Registration-content-box">
                        <img src={check_circle} /> <span>{serviceDetails.What_You_Will_Get_point6}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="Minimum-Requirement-Registration-content" style={{ display: 'none' }}>
                    </div>
                  )}

                </div>

                <div className="Minimum-Requirement-Registration-containr-box">
                  {What_You_Will_Get_Section_point7 ? (
                    <div className="Minimum-Requirement-Registration-content" style={{ display: "block" }}>
                      <div className="Minimum-Requirement-Registration-content-box">
                        <img src={check_circle} /> <span>{serviceDetails.What_You_Will_Get_point7}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="Minimum-Requirement-Registration-content" style={{ display: 'none' }}>
                    </div>
                  )}


                  {What_You_Will_Get_Section_point8 ? (
                    <div className="Minimum-Requirement-Registration-content" style={{ display: "block" }}>
                      <div className="Minimum-Requirement-Registration-content-box">
                        <img src={check_circle} /> <span>{serviceDetails.What_You_Will_Get_point8}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="Minimum-Requirement-Registration-content" style={{ display: 'none' }}>
                    </div>
                  )}

                  {What_You_Will_Get_Section_point9 ? (
                    <div className="Minimum-Requirement-Registration-content" style={{ display: "block" }}>
                      <div className="Minimum-Requirement-Registration-content-box">
                        <img src={check_circle} /> <span>{serviceDetails.What_You_Will_Get_point9}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="Minimum-Requirement-Registration-content" style={{ display: 'none' }}>
                    </div>
                  )}

                  {What_You_Will_Get_Section_point10 ? (
                    <div className="Minimum-Requirement-Registration-content" style={{ display: "block" }}>
                      <div className="Minimum-Requirement-Registration-content-box">
                        <img src={check_circle} /> <span>{serviceDetails.What_You_Will_Get_point10}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="Minimum-Requirement-Registration-content" style={{ display: 'none' }}>
                    </div>
                  )}

                  {What_You_Will_Get_Section_point11 ? (
                    <div className="Minimum-Requirement-Registration-content" style={{ display: "block" }}>
                      <div className="Minimum-Requirement-Registration-content-box">
                        <img src={check_circle} /> <span>{serviceDetails.What_You_Will_Get_point11}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="Minimum-Requirement-Registration-content" style={{ display: 'none' }}>
                    </div>
                  )}

                  {What_You_Will_Get_Section_point12 ? (
                    <div className="Minimum-Requirement-Registration-content" style={{ display: "block" }}>
                      <div className="Minimum-Requirement-Registration-content-box">
                        <img src={check_circle} /> <span>{serviceDetails.What_You_Will_Get_point12}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="Minimum-Requirement-Registration-content" style={{ display: 'none' }}>
                    </div>
                  )}
                </div>
              </div>
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

      {/* FAQ */}

      <div className='uni-padding'>
        <div className="FAQ-content-heading">
          <div className="FAQ-content-head">
            <p className='guide-title'>FAQ</p>
            <h1 className='FQA-head-Title'>Frequently asked Questions on Private Limited registrations</h1>
          </div>

          <div className="FQA-content">

            <div className="accordion">
              {AccordionData.map((item, index) => (
                <div className="accordion-items" key={index}>
                  <div className="accordion-title" onClick={() => handleClick(index)}>
                    <div className="">{item.Questions}</div>
                    <span className="icon">{openIndex === index ? '-' : '+'}</span>
                  </div>
                  <div className={openIndex === index ? 'accordion-content open' : 'accordion-content'} >
                    {item.content}
                  </div>
                </div>
              ))}
            </div>

          </div>
          <div className="FQA-contact">
            <p>Have any doubts? Think no further. Call us <img src={Text} /> 08956214630, 08956214630,</p>
          </div>
        </div>
      </div>

    </>
  )
}



