import { useParams } from "react-router-dom"
import "../Components/Style/growBusiness.css"
import { useEffect, useState } from "react"
import businessData from "../Components/data/growBusiness.json";
import productimg1 from "./Assets/partner_exchange.svg"
import Record from "./Assets/Record.svg"
import description from "./Assets/description.svg"
import rocket_launch from "./Assets/rocket_launch.svg"
import diversity_3 from "./Assets/diversity_3.svg"
import military_tech from "./Assets/military_tech.svg"
import check_circle from "./Assets/check_circle.svg"
import Discount from "./Assets/Discount.svg"
import whatsapp from "./Assets/WhatsApp.svg";


export function GrowBusinessStartUp() {
    const params = useParams()
    const [growBusinessDetails, setGrowBusinessDetails] = useState([]);
    const [mobileError, setMobileError] = useState("");

    function getBusinessData() {
        for (var item of businessData) {
            if (params.growbusinessname === item.businessTitle) {
                setGrowBusinessDetails(item)
            }
        }
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
    } else {
      setMobileError("Invalid mobile number")
    }
  }


    useEffect((item) => {
        getBusinessData();
    }, [params]);

    const free_Service_Para1 = !!growBusinessDetails.freeServicePara1;
    const free_Service_Para2 = !!growBusinessDetails.freeServicePara2;

    return (
        <div>
            {/* Grow first section started ---------- */}
            <div className="grow-business-first-section">
                <div className="first-section-left-container">
                    <div className="left-container-head-section">
                        <h3 className="first-section-heading">Startup India Registration</h3>


                        <div className="first-section-heading-title-startup">
                            <div className="first-section-prices">AT <span><del>₹ 16,000</del></span><span className="current-price">₹ 5,499*</span></div>
                            <div className="first-section-get-startup">
                                <img src={Discount} alt="" />
                            </div>
                        </div>

                        <p className="left-section-para-grey">in 15 Days . From anywhere . At a single click</p>
                    </div>

                    <div className="left-container-foot-section">

                        <p className="left-section-para-blue">The offer is only for New startups</p>
                        <div className="left-foot-card-blue-section" >
                            <p>The companies with more than 5 crore turnover will be charged Rs. 10,000 fees</p>
                        </div>

                        <p className="left-foot-section-para-grey">*Advisory Fees.  EMI Option Available.</p>
                    </div>
                </div>

                <div className="first-section-right-container">
                    <p className="right-section-blue-para">Call Now &nbsp;<img src="/images/blue_dott.svg" alt="" /> &nbsp; 08956214630 08956214630,</p>
                    <form className="contact-form" onSubmit={handleContactForm} name='contact-form-sheet'>
                        <h5 className="contact-form-heading">Get quote in a minute</h5>
                        <p className="contact-form-para-grey">Fill the details to get instant quote!</p>

                        <input name="fullname" id='txtName' placeholder="Full Name" type="text" />
                        <input name='email' id='txtEmail' placeholder="Email adress" type="text" />
                        <input name='mobile' id='txtNumber' placeholder="Mobile" type="text" />
                        <label>{mobileError}</label>
                        <select name='location' id='lstLocation' placeholder="City" required>
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

                        <div className="contact-form-whatsapp-link">
                            <img className="check-logo" src="/images/blue_check.svg" alt="" />Get direct updates through
                            <a href="#" className="btn-whatsapp"><img src={whatsapp} alt="whatsapp" /></a>
                        </div>

                        <button className="btn-getStarted">
                            <div className="outer-shaddow"></div>
                            Get Started Now
                        </button>
                    </form>

                </div>
                <div className="left-container-foot-section-mobile">

                        <p className="left-section-para-blue">The offer is only for New startups</p>
                        <div className="left-foot-card-blue-section" >
                            <p>The companies with more than 5 crore turnover will be charged Rs. 10,000 fees</p>
                        </div>

                        <p className="left-foot-section-para-grey">*Advisory Fees.  EMI Option Available.</p>
                    </div>

            </div>
            {/* grow business first section end ---- */}


            {/* Guide Card section started ---- */}
            <div className="guid-card-section">
                <div className="guid-head-section">
                    <p className="guid-section-blue-para">Three step Guidep</p>
                    <h5 className="guid-section-heading">Here's How it works</h5>
                </div>

                <div className="guid-cards">
                    <div className="guid-card" style={{ backgroundImage: `url("/images/guid_card_image1.png")` }}>
                        <div className="guid-card-container_box">

                            <h4 className="guid-card-title">Fill The Form</h4>
                            <p className="guid-card-para">Simplify fill the above form to get started.</p>

                        </div>
                    </div>

                    <div className="guid-card" style={{ backgroundImage: `url("/images/guid_card_image4.png")` }}>
                        <div className="guid-card-container_box">

                            <h4 className="guid-card-title">Make Payment</h4>
                            <p className="guid-card-para">Our expert will connect with you & advise on documents.</p>
                        </div>
                    </div>

                    <div className="guid-card" style={{ backgroundImage: `url("/images/guid_card_image5.png")` }}>
                        <div className="guid-card-container_box">

                            <h4 className="guid-card-title">Get Certificate</h4>
                            <p className="guid-card-para">Get your company incorporation certificate</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Guide Card section ended ----- */}


            {/* Eligibility section started ----- */}
            <div className="eligibility-section">
                <div className="eligibility-head-section">
                    <p className="eligibility-section-para-blue">How To</p>
                    <h6 className="eligibility-section-heading">Eligibility for GST registration</h6>
                </div>

                <div className="eligibility-card-container1">
                    <div className="eligibilty-card">
                        <img src="/images/contract_edit.svg" alt="" />
                        <h6 className="eligibility-card-title">Upon Reaching Turnover of 20 Lakh</h6>
                        <p className="eligibility-card-para">If your current supply of goods or service is over Rs. 20 lakh, you need to obtain GST Registration (if your business operates exclusively in the North Eastern states, Rs. 10 lakh).</p>
                    </div>

                    <div className="eligibilty-card">
                        <img src="/images/real_estate_agent.svg" alt="" />
                        <h6 className="eligibility-card-title">Upon Reaching Turnover of 20 Lakh</h6>
                        <p className="eligibility-card-para">If your current supply of goods or service is over Rs. 20 lakh, you need to obtain GST Registration (if your business operates exclusively in the North Eastern states, Rs. 10 lakh).</p>
                    </div>

                    <div className="eligibilty-card">
                        <img src="/images/account_balance.svg" alt="" />
                        <h6 className="eligibility-card-title">Upon Reaching Turnover of 20 Lakh</h6>
                        <p className="eligibility-card-para">If your current supply of goods or service is over Rs. 20 lakh, you need to obtain GST Registration (if your business operates exclusively in the North Eastern states, Rs. 10 lakh).</p>
                    </div>
                </div>

                <div className="eligibility-card-container2">
                    <div className="eligibilty-card">
                        <img src="/images/add_card.svg" alt="" />
                        <h6 className="eligibility-card-title">Upon Reaching Turnover of 20 Lakh</h6>
                        <p className="eligibility-card-para">If your current supply of goods or service is over Rs. 20 lakh, you need to obtain GST Registration (if your business operates exclusively in the North Eastern states, Rs. 10 lakh).</p>
                    </div>

                    <div className="eligibilty-card">
                        <img src="/images/business_center.svg" alt="" />
                        <h6 className="eligibility-card-title">Upon Reaching Turnover of 20 Lakh</h6>
                        <p className="eligibility-card-para">If your current supply of goods or service is over Rs. 20 lakh, you need to obtain GST Registration (if your business operates exclusively in the North Eastern states, Rs. 10 lakh).</p>
                    </div>

                    <div className="eligibilty-card">
                        <img src="/images/humidity_percentage.svg" alt="" />
                        <h6 className="eligibility-card-title">Upon Reaching Turnover of 20 Lakh</h6>
                        <p className="eligibility-card-para">If your current supply of goods or service is over Rs. 20 lakh, you need to obtain GST Registration (if your business operates exclusively in the North Eastern states, Rs. 10 lakh).</p>
                    </div>
                </div>
                <div className="eligibility-card-container2">
                    <div className="eligibilty-card">
                        <img src="/images/crowdsource.svg" alt="" />
                        <h6 className="eligibility-card-title">Upon Reaching Turnover of 20 Lakh</h6>
                        <p className="eligibility-card-para">If your current supply of goods or service is over Rs. 20 lakh, you need to obtain GST Registration (if your business operates exclusively in the North Eastern states, Rs. 10 lakh).</p>
                    </div>

                    <div className="eligibilty-card">
                        <img src="/images/account_balance_wallet.svg" alt="" />
                        <h6 className="eligibility-card-title">Upon Reaching Turnover of 20 Lakh</h6>
                        <p className="eligibility-card-para">If your current supply of goods or service is over Rs. 20 lakh, you need to obtain GST Registration (if your business operates exclusively in the North Eastern states, Rs. 10 lakh).</p>
                    </div>

                    <div className="eligibilty-card">
                        <img src="/images/local_police.svg" alt="" />
                        <h6 className="eligibility-card-title">Upon Reaching Turnover of 20 Lakh</h6>
                        <p className="eligibility-card-para">If your current supply of goods or service is over Rs. 20 lakh, you need to obtain GST Registration (if your business operates exclusively in the North Eastern states, Rs. 10 lakh).</p>
                    </div>
                </div>
            </div>
            {/* Eligibility section ended ----- */}


            {/* differenciate section ---------- */}




            <div className='uni-padding2'>
                <div className='Minimum-Requirement-Registration'>
                    <div className='Minimum-Requirement-Registration-head'>
                        <p className='guide-title'>Registration Types</p>
                        <h1 className='Registration-Documents-heading'>
                            Eligibility for Startup India scheme
                        </h1>
                    </div>

                    <div className="Minimum-Requirement-Registration-containr">

                        <div className="Minimum-Requirement-Registration-containr-box">

                            <div className="Minimum-Requirement-Registration-content" >
                                <div className="Minimum-Requirement-Registration-content-box">
                                    <img src={check_circle} /> <p>Private Ltd. Co./LLP/Partnership Firm</p>
                                </div>
                            </div>


                            <div className="Minimum-Requirement-Registration-content" style={{ display: 'block' }}>
                                <div className="Minimum-Requirement-Registration-content-box">
                                    <img src={check_circle} /> <span>Company is Offering Innovative products or service OR</span>
                                </div>
                            </div>

                            <div className="Minimum-Requirement-Registration-content" style={{ display: 'block' }}>
                                <div className="Minimum-Requirement-Registration-content-box">
                                    <img src={check_circle} /> <span>Registered for not more than 10 years</span>
                                </div>
                            </div>
                        </div>

                        <div className="Minimum-Requirement-Registration-containr-box">

                            <div className="Minimum-Requirement-Registration-content" style={{ display: 'block' }}>
                                <div className="Minimum-Requirement-Registration-content-box">
                                    <img src={check_circle} /> <span>Company is having a business model with high potential of employment eneration OR</span>
                                </div>
                            </div>


                            <div className="Minimum-Requirement-Registration-content" style={{ display: 'block' }}>
                                <div className="Minimum-Requirement-Registration-content-box">
                                    <img src={check_circle} /> <span>Turnover does not exceed Rs. 100 crore</span>
                                </div>
                            </div>

                            <div className="Minimum-Requirement-Registration-content" style={{ display: 'block' }}>
                                <div className="Minimum-Requirement-Registration-content-box">
                                    <img src={check_circle} /> <span>Company is having a business model with high potential of wealth creation</span>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>


            {/* differenciate ended ---------- */}

            {/* registration document section started ----- */}
            <div className="registration-document-section">
                <p className="registration-document-blue-para">How To</p>
                <h6 className="registration-document-title">Document for GST Registration</h6>

                <div className="document-column-container">
                    <ul className="document-column">
                        <li className="document-column-title"></li>
                        <li><img src="/images/check_circle_black.svg" alt="" />Certificate of Incorporation or Partnership Registration Certificate</li>
                        <li><img src="/images/check_circle_black.svg" alt="" />Brief Write up on how the business is working towards: innovation, employment, wealth creation</li>
                        <li><img src="/images/check_circle_black.svg" alt="" />Company PAN card</li>
                        <li><img src="/images/check_circle_black.svg" alt="" />Website OR Company Profile Deck (Any One)</li>
                    </ul>


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
                                    <div className='product-title-content'>Startups served across India</div>

                                </div>
                                <div className="product">
                                    <img src={Record} alt="Icon 2" />
                                    <p>Record</p>
                                    <div className='product-title-content'>Of highest company Trademark and Filings</div>

                                </div>
                                <div className="product">
                                    <img src={description} alt="Icon 3" />
                                    <p>2000+</p>
                                    <div className='product-title-content'>Filings Every Month</div>

                                </div>
                                {/* </div> */}

                                {/* <div className="product-content"> */}
                                <div className="product">
                                    <img src={rocket_launch} alt="Icon 4" />
                                    <p>10+</p>
                                    <div className='product-title-content'>Years of Startup Centric Legal Expertise</div>

                                </div>
                                <div className="product">
                                    <img src={diversity_3} alt="Icon 5" />
                                    <p>50+</p>
                                    <div className='product-title-content'>Team Members at your service</div>

                                </div>
                                <div className="product">
                                    <img src={military_tech} alt="Icon 6" />
                                    <p>4.5+</p>
                                    <div className='product-title-content'>Google Ratings</div>
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}