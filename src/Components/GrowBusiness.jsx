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
import getstartimg from "./Assets/getstartimg.svg"

import whatsapp from "./Assets/WhatsApp.svg";
export function GrowBusiness() {
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



    return (
        <div>
            {/* Grow first section started ---------- */}
            <div className="grow-business-first-section">
                <div className="first-section-left-container">
                    <div className="left-container-head-section">
                        <h3 className="first-section-heading">GST Registration</h3>

                        <div className="first-section-heading-title-str">
                            <div className="first-section-prices">AT <span><del>₹ 6,000</del></span><span className="current-price">₹ 3,999*</span></div>
                            <div className="first-section-get-str">
                                <img src={getstartimg} alt="" />
                            </div>
                        </div>

                        <p className="left-section-para-grey">in 1 Days . From anywhere . At a single click</p>
                    </div>

                    <div className="left-container-foot-section">
                        <div className="left-section-para-blue-card">
                            <p className="left-section-para-blue"><img src="/images/Vector.svg" alt="" />India's #1 Legal Services Platform</p>
                            <div className="left-foot-card-section">
                                <div className="left-foot-card-section-content">
                                    <img src="/images/CompanyPAN.svg" alt="" />
                                    <div className="left-section-para-blue-card-text">
                                        4.5/5 Customer Review
                                    </div>
                                </div>
                                <div className="left-foot-card-section-content">
                                    <img src="/images/CitiesServed.svg" alt="" />
                                    <div className="left-section-para-blue-card-text">
                                        "4.5/5 Customer Review"
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="left-foot-section-para-grey">*Professional Fees. EMI Option Available.</p>
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

                <div className="grow-business-first-section-end-mobile">
                    <div className="left-section-para-blue-card">
                        <p className="left-section-para-blue"><img src="/images/Vector.svg" alt="" />India's #1 Legal Services Platform</p>
                        <div className="left-foot-card-section">
                            <div >
                                <img src="/images/CompanyPAN.svg" alt="" />
                                <div>
                                    4.5/5
                                    <p>
                                        Customer Review
                                    </p>
                                </div>
                            </div>
                            <div >
                                <img src="/images/CitiesServed.svg" alt="" />
                                <div>
                                    400+
                                    <p> Cities Served</p>
                                </div>
                            </div>
                        </div>
                    </div>
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

                    <div className="guid-card" style={{ backgroundImage: `url("/images/guid_card_image2.png")` }}>
                        <div className="guid-card-container_box">

                            <h4 className="guid-card-title">Call To Discuss</h4>
                            <p className="guid-card-para">Our GST expert will connect with you & prepare documents.</p>
                        </div>
                    </div>

                    <div className="guid-card" style={{ backgroundImage: `url("/images/guid_card_image3.png")` }}>
                        <div className="guid-card-container_box">
                            <h4 className="guid-card-title">Get GST</h4>
                            <p className="guid-card-para">Get your GST number</p>
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
                        <img src="/images/currency_exchange.svg" alt="" />
                        <h6 className="eligibility-card-title">Upon Reaching Turnover of 20 Lakh</h6>
                        <p className="eligibility-card-para">If your current supply of goods or service is over Rs. 20 lakh, you need to obtain GST Registration (if your business operates exclusively in the North Eastern states, Rs. 10 lakh).</p>
                    </div>

                    <div className="eligibilty-card">
                        <img src="/images/approval_delegation.svg" alt="" />
                        <h6 className="eligibility-card-title">Upon Reaching Turnover of 20 Lakh</h6>
                        <p className="eligibility-card-para">If your current supply of goods or service is over Rs. 20 lakh, you need to obtain GST Registration (if your business operates exclusively in the North Eastern states, Rs. 10 lakh).</p>
                    </div>

                    <div className="eligibilty-card">
                        <img src="/images/code_blocks.svg" alt="" />
                        <h6 className="eligibility-card-title">Upon Reaching Turnover of 20 Lakh</h6>
                        <p className="eligibility-card-para">If your current supply of goods or service is over Rs. 20 lakh, you need to obtain GST Registration (if your business operates exclusively in the North Eastern states, Rs. 10 lakh).</p>
                    </div>
                </div>

                <div className="eligibility-card-container2">
                    <div className="eligibilty-card">
                        <img src="/images/local_mall.svg" alt="" />
                        <h6 className="eligibility-card-title">Upon Reaching Turnover of 20 Lakh</h6>
                        <p className="eligibility-card-para">If your current supply of goods or service is over Rs. 20 lakh, you need to obtain GST Registration (if your business operates exclusively in the North Eastern states, Rs. 10 lakh).</p>
                    </div>

                    <div className="eligibilty-card">
                        <img src="/images/code_update.svg" alt="" />
                        <h6 className="eligibility-card-title">Upon Reaching Turnover of 20 Lakh</h6>
                        <p className="eligibility-card-para">If your current supply of goods or service is over Rs. 20 lakh, you need to obtain GST Registration (if your business operates exclusively in the North Eastern states, Rs. 10 lakh).</p>
                    </div>

                    <div className="eligibilty-card">
                        <img src="/images/quick_reference.svg" alt="" />
                        <h6 className="eligibility-card-title">Upon Reaching Turnover of 20 Lakh</h6>
                        <p className="eligibility-card-para">If your current supply of goods or service is over Rs. 20 lakh, you need to obtain GST Registration (if your business operates exclusively in the North Eastern states, Rs. 10 lakh).</p>
                    </div>
                </div>
            </div>
            {/* Eligibility section ended ----- */}

            {/* differenciate section ---------- */}
            <div className="differenciate-section">

                <div>
                    <p className="differenciate-para-blue">How To</p>
                    <h5 className="differenciate-heading">Difference between CGST vs SGST vs IGST</h5>
                </div>

                <div className="difference-column-container">
                    <div className="differenciate-column">
                        <h5 className="column-title">Central GST (CGST)</h5>
                        <p className="column-para">When the supply of goods and services takes place WITHIN the State (Intra-state), that is when the Supplier and the Consumer both are in the same state, two taxes will be levied. One part is levied by the State Government and the other is by Central Government. Hence the tax levied by the central government is known as Central GST.</p>
                    </div>

                    <div className="differenciate-column">
                        <h5 className="column-title">Central GST (CGST)</h5>
                        <p className="column-para">When the supply of goods and services takes place WITHIN the State (Intra-state), that is when the Supplier and the Consumer both are in the same state, two taxes will be levied. One part is levied by the State Government and the other is by Central Government. Hence the tax levied by the central government is known as Central GST.</p>
                    </div>

                    <div className="differenciate-column">
                        <h5 className="column-title">Central GST (CGST)</h5>
                        <p className="column-para">When the supply of goods and services takes place WITHIN the State (Intra-state), that is when the Supplier and the Consumer both are in the same state, two taxes will be levied. One part is levied by the State Government and the other is by Central Government. Hence the tax levied by the central government is known as Central GST.</p>
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
                        <li className="document-column-title">Central GST (CGST)</li>
                        <li><img src="/images/check_circle_black.svg" alt="" />Company PAN card</li>
                        <li><img src="/images/check_circle_black.svg" alt="" />MOA, AOA & Incorporation Certificate</li>
                        <li><img src="/images/check_circle_black.svg" alt="" />Company Address Proof</li>
                    </ul>

                    <ul className="document-column"> 
                        <li className="document-column-title">State GST (SGST)</li>
                        <li><img src="/images/check_circle_black.svg" alt="" />Firm PAN card</li>
                        <li><img src="/images/check_circle_black.svg" alt="" />LLP Agreement/ Partnership deed</li>
                        <li><img src="/images/check_circle_black.svg" alt="" />Firm AdressProof</li>
                    </ul>

                    <ul className="document-column">
                        <li className="document-column-title">Integrated GST (IGST)</li>
                        <li><img src="/images/check_circle_black.svg" alt="" />Proprietor's PAN card</li>
                        <li><img src="/images/check_circle_black.svg" alt="" />Shop Act / Ghumasta License</li>
                        <li><img src="/images/check_circle_black.svg" alt="" />Address proof of Firm</li>
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
        </div >
    )
}