import { useParams } from "react-router-dom"
import "../Components/Style/ManageBusiness.css"
import { useEffect, useState } from "react"
import productimg1 from "./Assets/partner_exchange.svg"
import Record from "./Assets/Record.svg"
import description from "./Assets/description.svg"
import rocket_launch from "./Assets/rocket_launch.svg"
import diversity_3 from "./Assets/diversity_3.svg"
import military_tech from "./Assets/military_tech.svg"
import getstartimg from "./Assets/getstartimg.svg"
import whatsapp from "./Assets/WhatsApp.svg";
import prevew from "./Assets/prevew.svg"
import next from "./Assets/next.svg"
import testimonial from "./data/Testimonials.json"
import check_circle from "./Assets/check_circle.svg"
import managebusinessdata from "./data/ManageBusiness.json"
import Text from "./Assets/Text.svg";


export function ManageBusiness() {

    const [testimonialdata, setTestimonialData] = useState([])
    const [testimonialcurrentIndex, setTestimonialCurrentIndex] = useState(0);
    const [managebusinessDetails, setManageBusinesDetails] = useState([])
    const [accordionData, setAccordionData] = useState([]);
    const [mobileError, setMobileError] = useState("");


    const params = useParams();

    const [openIndex, setOpenIndex] = useState(null);



    function getManageBusinessData() {
        for (var item of managebusinessdata) {
            if (item.ManageBusinessTitle === params.manageBusinnessname) {
                setManageBusinesDetails(item)
                setAccordionData(item.AccordionData)
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
        getManageBusinessData();
        console.log(managebusinessDetails)
    }, [params])

    const handlePrev = () => {
        setTestimonialCurrentIndex((testimonialcurrentIndex - 1 + testimonialdata.length) % testimonialdata.length);
    };

    const handleNext = () => {
        setTestimonialCurrentIndex((testimonialcurrentIndex + 1) % testimonialdata.length);
    };


    const Manage_Business_headtex = !!managebusinessDetails.ManageBusinessheadtex;
    const Manage_Business_day = !!managebusinessDetails.day
    const mandatory_Section_Title = !!managebusinessDetails.mandatorySection_Title;
    const mandatory_Section_1_lef_Point1 = !!managebusinessDetails.mandatorySection_1_lefPoint1;
    const mandatory_Section_7_Left_Head1 = !!managebusinessDetails.mandatorySection_7_LeftHead1;
    const Document_Section = !!managebusinessDetails.Document_Section
    return (
        <>
            {/* Grow first section started ---------- */}
            <div className="grow-business-first-section">
                <div className="first-section-left-container">
                    <div className="left-container-head-section">
                        <h3 className="managebusiness-section-heading">{managebusinessDetails.ManageBusinessTitle}</h3>

                        <div className="first-section-heading-title-str">
                            <div className="first-section-prices">AT<span className="current-price">₹ {managebusinessDetails.price}</span>*<span>{managebusinessDetails.duration}</span></div>
                            <div className="first-section-get-str">
                                <img src={getstartimg} alt="" />
                            </div>
                        </div>
                        {Manage_Business_headtex ? (
                            <p style={{ display: 'block' }} className="left-section-para-grey">{managebusinessDetails.ManageBusinessheadtex}</p>

                        ) : (
                            <p style={{ display: 'none' }} className="left-section-para-grey">{managebusinessDetails.ManageBusinessheadtex}</p>

                        )}
                        {Manage_Business_day ? (
                            <p style={{ display: "block" }} className="left-section-para-grey">in 1 Days . From anywhere . At a single click</p>

                        ) : (
                            <p style={{ display: "none" }} className="left-section-para-grey">in 1 Days . From anywhere . At a single click</p>

                        )}
                    </div>

                    <div className="left-container-foot-section">
                        <div className="left-section-para-blue-card">
                            <p className="left-section-para-blue"><img src="/images/Vector.svg" alt="" />{managebusinessDetails.freeSectionTitle}</p>
                            <div className="left-foot-card-section">
                                <div className="left-foot-card-section-content">
                                    <img src={managebusinessDetails.freeSectionimg1} alt="" />
                                    <div className="left-section-para-blue-card-text">
                                        {managebusinessDetails.freeSectionimgTitle1}
                                    </div>
                                </div>

                                <div className="left-foot-card-section-content">
                                    <img src={managebusinessDetails.freeSectionimg2} alt="" />
                                    <div className="left-section-para-blue-card-text">
                                        {managebusinessDetails.freeSectionimgTitle2}
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
                        <p className="left-section-para-blue"><img src="/images/Vector.svg" alt="" />{managebusinessDetails.freeSectionTitle}</p>
                        <div className="left-foot-card-section">
                            <div>
                                <img src={managebusinessDetails.freeSectionimg1} alt="" />
                                <div>
                                    {managebusinessDetails.freeSectionimgTitle1}
                                </div>
                            </div>
                            <div>
                                <img src={managebusinessDetails.freeSectionimg2} alt="" />
                                <div>
                                    {managebusinessDetails.freeSectionimgTitle2}
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="left-foot-section-para-grey">*Professional Fees. EMI Option Available.</p>
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
                    <div className="guid-card" style={{ backgroundImage: `url(${managebusinessDetails.threeStepGuidimg1})` }}>
                        <div className="guid-card-container_box">
                            <h4 className="guid-card-title">{managebusinessDetails.threeStepGuideTitle1}</h4>
                            <p className="guid-card-para">{managebusinessDetails.threeStepGuidepara1}</p>
                        </div>
                    </div>

                    <div className="guid-card" style={{ backgroundImage: `url(${managebusinessDetails.threeStepGuidimg2})` }}>
                        <div className="guid-card-container_box">

                            <h4 className="guid-card-title">{managebusinessDetails.threeStepGuideTitle2}</h4>
                            <p className="guid-card-para">{managebusinessDetails.threeStepGuidepara2}</p>
                        </div>
                    </div>

                    <div className="guid-card" style={{ backgroundImage: `url(${managebusinessDetails.threeStepGuidimg3})` }}>
                        <div className="guid-card-container_box">
                            <h4 className="guid-card-title">{managebusinessDetails.threeStepGuideTitle3}</h4>
                            <p className="guid-card-para">{managebusinessDetails.threeStepGuidepara3}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Guide Card section ended ----- */}


            {/* Mandatory compliances section  start*/}
            {mandatory_Section_Title ? (

                <div style={{ display: 'block' }} className="Mandatory-section">
                    <div className="Mandatory-head-section">
                        <p className="Mandatory-section-blue-para-text">How To</p>
                        <h5 className="Mandatory-section-heading-text">{managebusinessDetails.mandatorySection_Title}</h5>
                        <p className="Mandatory-section-para-text">Applicable for all companies under companies act, 2013</p>
                        <p className="Mandatory-section-para-Etratext">Slide to view the whole chart</p>
                    </div>

                    <div className="Mandatory-section-Penalty-table">
                        <div className="Mandatory-section-table">
                            <div className="Compliance-box-left">
                                <p>Compliance to be done</p>
                            </div>
                            <div className="Compliance-box-centor">
                                <p>When is this compliance to be done?</p>
                            </div>
                            <div className="Compliance-box-right">
                                <p>Penalty for Non-compliance</p>
                            </div>
                        </div>

                        {mandatory_Section_1_lef_Point1 ? (
                            <div style={{ display: 'block' }} >
                                <div className="Compliance-box-text">
                                    <div className="Compliance-box-text-left">
                                        <ul>
                                            <li>
                                                Issue of Share Certificates
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="Compliance-box-text-center">
                                        <ul>
                                            <li>
                                                The company must issue the Share Certificates to its shareholders within 2 months of its Incorporation or new allotment
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="Compliance-box-text-right">
                                        <ul>
                                            <li>
                                                <span>Company:</span> Fine from Rs. 25,000 which may extend to Rs.500,000.                                </li>
                                            <li>
                                                <span>Directors:</span> Fine from Rs. 10,000 which may extend to Rs. 100,000.                                </li>
                                        </ul>
                                    </div>
                                </div>






                                <div className="Compliance-box-text">
                                    <div className="Compliance-box-text-left">
                                        <ul>
                                            <li>
                                                Statutory Registers
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="Compliance-box-text-center">
                                        <ul>
                                            <li>
                                                7 to 8 Mandatory Registers to be maintained and updated from time to time
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="Compliance-box-text-right">
                                        <ul>
                                            <li>
                                                <span>Penalty:</span>  Rs. 50,000 which may extend to Rs. 3,00,000</li>
                                            <li>
                                                <span>Further fine:</span>  Rs. 1,000 day for which the default continues.</li>
                                        </ul>
                                    </div>
                                </div>



                                <div className="Compliance-box-text">
                                    <div className="Compliance-box-text-left">
                                        <ul>
                                            <li>
                                                Board Meeting Compliances
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="Compliance-box-text-center">
                                        <ul>
                                            <li>
                                                1st Board Meeting thirty days of date of incorporation
                                            </li>
                                            <li>
                                                One Board Meeting to be held in each quarter of the financial year.
                                            </li>
                                            <li>
                                                Minutes of meeting to be prepared, Notice of Meeting should be given
                                            </li>
                                            <li>
                                                Attendance Register of every meeting to be maintained.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="Compliance-box-text-right">
                                        <ul>
                                            <li>
                                                <span>Company:</span> Fine from Rs. 25,000 </li>
                                            <li>
                                                <span>Director in default:</span> liable to a penalty of Rs. 5,000
                                            </li>
                                            <li>
                                                Non-compliance in Issue of Notice of Meeting, Director shall be liable to a penalty of Rs. 25,000.
                                            </li>
                                        </ul>
                                    </div>
                                </div>



                                <div className="Compliance-box-text">
                                    <div className="Compliance-box-text-left">
                                        <ul>
                                            <li>
                                                Annual General Meeting (AGM) Compliance
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="Compliance-box-text-center">
                                        <ul>
                                            <li>
                                                AGM to be held every year
                                            </li>
                                            <li>
                                                Minutes of AGM to be prepared
                                            </li>
                                            <li>
                                                Notice of AGM should be given in advance.
                                            </li>
                                            <li>
                                                Attendance Register of every General meeting to be maintained.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="Compliance-box-text-right">
                                        <p>Default in holding AGM:</p>
                                        <ul>
                                            <li>
                                                <span>Company and Directors:</span> in default shall be punishable with fine which may extend to Rs. 1,00,000</li>
                                            <li>
                                                <span>Rs. 5,000 for every day of delay</span> </li>
                                        </ul>
                                        <p>Minutes Book Maintenance:</p>
                                        <ul>
                                            <li>
                                                <span>Company:</span> Penalty upto Rs.25,000</li>
                                            <li>
                                                <span>Directors in default</span> shall be liable to a penalty of Rs. 5,000.</li>
                                        </ul>
                                    </div>
                                </div>



                                <div className="Compliance-box-text-last">
                                    <div className="Compliance-box-text-last-left">
                                        <ul>
                                            <li>
                                                <span>Annual ROC Filings</span>
                                            </li>
                                        </ul>
                                        <div className="Compliance-box-text-last-left-wef-text">w.e.f 01/04/2014</div>

                                        <ul className="Compliance-box-text-last-left-lists">
                                            <li>
                                                Filing Annual Return (MGT-7)
                                            </li>
                                            <li>
                                                Filing Financial Statements
                                            </li>
                                            <li>
                                                (AOC-4)
                                            </li>
                                            <li>
                                                ADT-1 (Auditor Appointment)
                                            </li>
                                        </ul>

                                    </div>
                                    <div className="Compliance-box-text-last-center">
                                        <ul>
                                            <li>
                                                Every company is required to file its Annual Return(MGT-7) with the ROC within 60 days of AGM.
                                            </li>
                                            <li>
                                                The Financials(AOC-4) also to be filed within 30 days of AGM.
                                            </li>
                                            <li>
                                                The Auditor Appointment (ADT-1) to be filled within 15 days from the AGM
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="Compliance-box-text-right">
                                        <div className="Compliance-box-text-right-container1">

                                            <ul>
                                                <li>
                                                    <span>Additional ROC Filing Fees:</span>  Upto 12 times of normal filing fees for each Form separately i.e. MGT-7, AOC-4 & ADT-1 (Depending on the Delay time)
                                                </li>
                                            </ul>


                                        </div>
                                        <div className="Compliance-box-text-right-pluse">
                                            <p>+</p>
                                        </div>
                                        <div className="Compliance-box-text-right-container2">
                                            <ul>
                                                <li>
                                                    <span>Company:</span>   Shall be punishable with fine of Rs. 50,000 which shall extend to Rs. 5,00,000
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <span>Director in default:</span>   shall be punishable with imprisonment upto 6 Months or with Minimum Fine of Rs. 50,000 which may extend to Rs 5,00,000 or with both.
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        ) : (
                            <div style={{ display: 'none' }} >

                            </div>
                        )}


                        {/* //////////////////////// */}

                        {mandatory_Section_7_Left_Head1 ? (
                            <div style={{ display: 'block' }}>
                                <div className="Compliance-box-text-last-final">

                                    <div className="Compliance-box-text-left">
                                        <ul>
                                            <li>
                                                Form 11
                                            </li>
                                        </ul>
                                        <div className="Compliance-box-text-left-para">
                                            Annual return of LLP
                                        </div>
                                    </div>
                                    <div className="Compliance-box-text-center">
                                        <ul>
                                            <li>
                                                Within 60 days from the end of Every Financial Year
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="Compliance-box-text-right">
                                        <ul>
                                            <li>
                                                <span>For LLP :</span>  Per day penalty of Rs. 100 till the filing is completed So for example: If the Form 11/ Form 8 of your LLP is not filed within the due dates and suppose the delay is of 100 days for each form then the Government penalty fees will be:
                                            </li>
                                        </ul>
                                        <div className="Compliance-box-text-right-para-text">
                                            Rs. 10,000 (i.e. @ Rs. 100 per day for 100 Days) for Form 11
                                        </div>

                                    </div>

                                </div>
                                <div className="Compliance-box-text-add-section">
                                    <div className="Compliance-box-text-last-final-content"> </div>

                                    <div className="Compliance-box-text-right-pluse">
                                        <p>+</p>
                                    </div>
                                </div>
                                <div className="Compliance-box-text-last-final">

                                    <div className="Compliance-box-text-left">
                                        <ul>
                                            <li>
                                                Form 8 Filing
                                            </li>
                                        </ul>
                                        <div className="Compliance-box-text-left-para">
                                            Statement of Accounts & Solvency of LLP
                                        </div>
                                    </div>
                                    <div className="Compliance-box-text-center">
                                        <ul>
                                            <li>
                                                Within 30 days from the end of 6 months from the closure of Every Financial Year
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="Compliance-box-text-right">
                                        <div className="Compliance-box-text-right-para-text">
                                            Rs. 10,000 (i.e. @ Rs. 100 per day for 100 Days) for Form 11
                                        </div>
                                        <ul>
                                            <li>
                                                <span>For Designated Partner :</span>  From Rs. 10,000 to Rs. 100,000 Penalty
                                            </li>
                                            <li>
                                                ROC can issue Notice to LLP and initiate legal proceedings
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div style={{ display: 'none' }}></div>

                        )}

                    </div>

                </div>

            ) : (

                <div style={{ display: 'none' }} className="Mandatory-section">
                </div>
            )}

            {/* Mandatory compliances section  end*/}

            {/* Document for DIR 3 Filing */}
            {/* <div className="uni-bg-color"> */}
            {Document_Section ? (
                <div style={{ display: 'block' }} className="What-youll-Get">
                    <div className='uni-padding2'>
                        <div className='Minimum-Requirement-Registration'>
                            <div className='Document-Filing--head'>
                                <p className='guide-title'>Registration Types</p>
                                <h1 className='Registration-Documents-heading'>
                                    Document for DIR 3 Filing
                                </h1>
                            </div>

                            <div className="Minimum-Requirement-Registration-containr">

                                <div className="Minimum-Requirement-Registration-containr-box">
                                    <div className="Minimum-Requirement-Registration-content" style={{ display: "block" }}>
                                        <div className="Minimum-Requirement-Registration-content-box">
                                            <img src={check_circle} /> <span>PAN Card</span>
                                        </div>
                                    </div>



                                    <div className="Minimum-Requirement-Registration-content" style={{ display: "block" }}>
                                        <div className="Minimum-Requirement-Registration-content-box">
                                            <img src={check_circle} /> <span>Bank Statement/Electricity Bill/Phone Bill</span>
                                        </div>
                                    </div>


                                    <div className="Minimum-Requirement-Registration-content" style={{ display: "block" }}>
                                        <div className="Minimum-Requirement-Registration-content-box">
                                            <img src={check_circle} /> <span>Aadhaar Card</span>
                                        </div>
                                    </div>





                                </div>

                                <div className="Minimum-Requirement-Registration-containr-box">
                                    <div className="Minimum-Requirement-Registration-content" style={{ display: "block" }}>
                                        <div className="Minimum-Requirement-Registration-content-box">
                                            <img src={check_circle} /> <span>Unique Email ID & Mobile Number</span>
                                        </div>
                                    </div>


                                    <div className="Minimum-Requirement-Registration-content" style={{ display: "block" }}>
                                        <div className="Minimum-Requirement-Registration-content-box">
                                            <img src={check_circle} /> <span>Passport, if available.</span>
                                        </div>
                                    </div>


                                    <div className="Minimum-Requirement-Registration-content" style={{ display: "block" }}>
                                        <div className="Minimum-Requirement-Registration-content-box">
                                            <img src={check_circle} /> <span>Digital Signature of the Director</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div style={{ display: 'block' }} className="What-youll-Get">
                </div>
            )}

            {/* </div> */}


            {/* Document for DIR 3 Filing */}


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
                            {accordionData.map((item, index) => (
                                <div className="accordion-items" key={index}>
                                    <div className="accordion-title" onClick={() => handleClick(index)}>
                                        <div className="">{item.Questions}</div> <span className="icon">{openIndex === index ? '-' : '+'}</span>
                                    </div>
                                    
                                        <div className={openIndex === index ? 'accordion-content open' : 'accordion-content'} >

                                            {item.content.length > 1 ? (
                                                <ul>
                                                    {item.content.map((items) =>
                                                        <li key={items}>{items}</li>
                                                    )}
                                                </ul>
                                            ) : (
                                                <p>{item.content[0]}</p>
                                            )
                                            }
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