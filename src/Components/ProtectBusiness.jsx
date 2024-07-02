import { useEffect, useState } from "react"
import "../Components/Style/protectBusiness.css"
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
import testimonial from "./data/Testimonials.json"
import prevew from "./Assets/prevew.svg"
import next from "./Assets/next.svg"
import { useParams } from "react-router-dom";
import ProtectBusinessData from "./data/ProtectBusinessData.json"
import Text from "./Assets/Text.svg";


export function ProtectBusiness() {
    const [mobileError, setMobileError] = useState("")
    const [testimonialdata, setTestimonialData] = useState([])
    const [testimonialcurrentIndex, setTestimonialCurrentIndex] = useState(0);
    const [accordionData, setAccordionData] = useState([]);
    const [openIndex, setOpenIndex] = useState(null);
    const [protectbusinessDetails, setProtectBusinessDetails] = useState([])



    const params = useParams();


    function getProtectBusinessData() {
        for (var item of ProtectBusinessData) {
            if (item.ProtectBusinessTitle === params.protectbusinessname) {
                setProtectBusinessDetails(item)
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

    const handlePrev = () => {
        setTestimonialCurrentIndex((testimonialcurrentIndex - 1 + testimonialdata.length) % testimonialdata.length);
    };

    const handleNext = () => {
        setTestimonialCurrentIndex((testimonialcurrentIndex + 1) % testimonialdata.length);
    };

    useEffect(() => {
        window.scrollTo(0, 0)
        setTestimonialData(testimonial);
        getProtectBusinessData();
        console.log(protectbusinessDetails)
    }, [params])


    const Guide_head_Title = !!protectbusinessDetails.Guide_Title;
    const Registration_head_Title = !!protectbusinessDetails.Registration_Title;
    const Benefit_head_Title = !!protectbusinessDetails.Benefit_Title;
    const Document_head_Title = !!protectbusinessDetails.Document_Title;
    const Trademark_head_Title = !!protectbusinessDetails.Trademark_Title;
    const Difference_Trademark_Copyright_registration = !!protectbusinessDetails.Difference_Trademark_Copyright_registration;
    const Difference_Between_Trademark_Patent_Registration = !!protectbusinessDetails.Difference_Between_Trademark_Patent_Registration;

    return (
        <>
            {/* ProtectBusiness first section started ---------- */}
            <div className="grow-business-first-section">
                <div className="first-section-left-container">
                    <div className="left-container-head-section">
                        <h3 className="first-section-heading-ProtectBusiness">{protectbusinessDetails.ProtectBusinessTitle}</h3>


                        <div className="first-section-heading-title-startup">
                            <div className="first-section-prices">AT <span><del>₹ {protectbusinessDetails.Price}</del></span><span className="current-price">₹ 5,499*</span></div>
                            <div className="first-section-get-startup">
                                <img src={Discount} alt="" />
                            </div>
                        </div>

                        <p className="left-section-para-grey">in {protectbusinessDetails.day} . From anywhere . At a single click</p>
                    </div>

                    <div className="left-container-foot-section">
                        <div className="left-section-para-blue-card">
                            <p className="left-section-para-blue"><img src="/images/Vector.svg" alt="" />{protectbusinessDetails.freeSectionTitle}</p>
                            <div className="left-foot-card-section">
                                <div className="left-foot-card-section-content">
                                    <img src={protectbusinessDetails.freeSectionimg1} alt="" />
                                    <div className="left-section-para-blue-card-text">
                                        {protectbusinessDetails.freeSectionimgTitle1}
                                    </div>
                                </div>
                                <div className="left-foot-card-section-content">
                                    <img src={protectbusinessDetails.freeSectionimg2} alt="" />
                                    <div className="left-section-para-blue-card-text">
                                        {protectbusinessDetails.freeSectionimgTitle2}
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
                            <div className="left-foot-card-section-content">
                                <img src={protectbusinessDetails.freeSectionimg1} alt="" />
                                <div className="left-section-para-blue-card-text">
                                    {protectbusinessDetails.freeSectionimgTitle1}
                                </div>
                            </div>
                            <div className="left-foot-card-section-content">
                                <img src={protectbusinessDetails.freeSectionimg2} alt="" />
                                <div className="left-section-para-blue-card-text">
                                    {protectbusinessDetails.freeSectionimgTitle2}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* ProtectBusiness first section end ---------- */}


            {/* ProtectBusiness Card section started ---- */}
            <div className="guid-card-section">
                <div className="guid-head-section">
                    <p className="guid-section-blue-para">Three step Guidep</p>
                    <h5 className="guid-section-heading">Here's How it works</h5>
                </div>

                <div className="guid-cards">
                    <div className="guid-card" style={{ backgroundImage: `url(${protectbusinessDetails.threeStepGuidimg1})` }}>
                        <div className="guid-card-container_box">
                            <h4 className="guid-card-title">{protectbusinessDetails.threeStepGuideTitle1}</h4>
                            <p className="guid-card-para">{protectbusinessDetails.threeStepGuidepara1}</p>
                        </div>
                    </div>

                    <div className="guid-card" style={{ backgroundImage: `url(${protectbusinessDetails.threeStepGuidimg2})` }}>
                        <div className="guid-card-container_box">

                            <h4 className="guid-card-title">{protectbusinessDetails.threeStepGuideTitle2}</h4>
                            <p className="guid-card-para">{protectbusinessDetails.threeStepGuidepara2}</p>
                        </div>
                    </div>

                    <div className="guid-card" style={{ backgroundImage: `url(${protectbusinessDetails.threeStepGuidimg3})` }}>
                        <div className="guid-card-container_box">
                            <h4 className="guid-card-title">{protectbusinessDetails.threeStepGuideTitle3}</h4>
                            <p className="guid-card-para">{protectbusinessDetails.threeStepGuidepara3}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ProtectBusiness Card section ended ----- */}

            {Guide_head_Title ? (
                <div className="guide-containr-box" style={{ display: 'block' }} >
                    <div className="uni-bg-color">
                        <div className="uni-padding2">
                            <div className="guide-containr">
                                <div className="guidecontenthead">
                                    <h2 className="guide-title">Guide</h2>
                                    <h1 className="guideheading">Trademark Registration in India</h1>
                                </div>
                                <div className="guidetext">
                                    <p>In today's competitive business landscape, protecting your brand name, logo or punchline through trademark registration is crucial for long-term success. In this detailed guide, we will see the intricacies of trademark registration in India, covering the process, fees, required trademark documents, benefits, and differences between trademark, copyright, and patent registration. Also, we'll explore the advantages of choosing Startupwala as your trademark registration consultant.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="guide-containr-box" style={{ display: 'none' }} >
                </div>
            )}






            {/* Trademark Registration Process */}
            {Registration_head_Title ? (
                <div className='uni-padding2' style={{ display: 'block' }}>
                    <div className='Registration-Documents-head'>
                        <p className='guide-title'>Registration Types</p>
                        <h1 className='Registration-Documents-heading'>
                            Trademark Registration Process
                        </h1>
                    </div>

                    <div className='Registration-Documents-title'>
                        <p>The process of online trademark registration in India involves below steps:</p>
                    </div>



                    <div className='Registration-information'>
                        <ul>

                            <li >
                                <span className='Registration-sub-text'>Fill and Submit: the above <a href="">Get Started Form.</a></span>
                            </li>
                            <li>
                                <span className='Registration-sub-text'>Watch a detailed Video on OPC Incorporation</span>
                            </li>
                            <li >
                                <span className='Registration-sub-text'>Submit a one page OPC formation questionnaire</span>
                            </li>
                            <li>
                                <span className='Registration-sub-text'>FilingsKaro expert will clear all your queries</span>
                            </li>
                            <li >
                                <span className='Registration-sub-text'>Arrange for Founders Id and address proofs</span>
                            </li>
                            <li >
                                <span className='Registration-sub-text'>Sign incorporation documents</span>
                            </li>
                            <li >
                                <span className='Registration-sub-text'>Drafting main object and Name application</span>
                            </li>
                            <li >
                                <span className='Registration-sub-text'>Filing of Incorporation forms with MCA</span>
                            </li>
                            <li >
                                <span className='Registration-sub-text'>Getting the Incorporation Certificate</span>
                            </li>
                            <li >
                                <span className='Registration-sub-text'>Your OPC company will also be allotted a PAN and TAN/TDS number</span>
                            </li>
                            <li >
                                <span className='Registration-sub-text'>FilingsKaro will provide bank account opening documentation support</span>
                            </li>

                        </ul>
                    </div>
                </div>

            ) : (
                <div className='uni-padding2' style={{ display: 'none' }}>
                </div>

            )}


            {/* Benefits of One Person Company Register started ----- */}
            {Benefit_head_Title ? (
                <div style={{ display: 'block' }}>
                    <div className="eligibility-section">
                        <div className="eligibility-head-section">
                            <p className="eligibility-section-para-blue">How To</p>
                            <h6 className="ProtectBusiness-section-heading">Benefits of One Person Company Register</h6>
                            <p className="ProtectBusiness-section-para">Registering a Pvt Ltd company offers many advantages:</p>

                        </div>

                        <div className="ProtectBusiness-card-container1">
                            <div className="eligibilty-card">
                                <img src="/images/file_copy_off.svg" alt="" />
                                <h6 className="eligibility-card-title">Upon Reaching Turnover of 20 Lakh</h6>
                                <p className="eligibility-card-para">If your current supply of goods or service is over Rs. 20 lakh, you need to obtain GST Registration (if your business operates exclusively in the North Eastern states, Rs. 10 lakh).</p>
                            </div>

                            <div className="eligibilty-card">
                                <img src="/images/TrademarkRegistered.svg" alt="" />
                                <h6 className="eligibility-card-title">Upon Reaching Turnover of 20 Lakh</h6>
                                <p className="eligibility-card-para">If your current supply of goods or service is over Rs. 20 lakh, you need to obtain GST Registration (if your business operates exclusively in the North Eastern states, Rs. 10 lakh).</p>
                            </div>
                        </div>

                        <div className="ProtectBusiness-card-container2">
                            <div className="eligibilty-card">
                                <img src="/images/bar_chart_4_bars.svg" alt="" />
                                <h6 className="eligibility-card-title">Upon Reaching Turnover of 20 Lakh</h6>
                                <p className="eligibility-card-para">If your current supply of goods or service is over Rs. 20 lakh, you need to obtain GST Registration (if your business operates exclusively in the North Eastern states, Rs. 10 lakh).</p>
                            </div>

                            <div className="eligibilty-card">
                                <img src="/images/account_balance.svg" alt="" />
                                <h6 className="eligibility-card-title">Upon Reaching Turnover of 20 Lakh</h6>
                                <p className="eligibility-card-para">If your current supply of goods or service is over Rs. 20 lakh, you need to obtain GST Registration (if your business operates exclusively in the North Eastern states, Rs. 10 lakh).</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div style={{ display: 'none' }}>

                </div>
            )}

            {/* Eligibility section ended ----- */}


            {Document_head_Title ? (
                <div className='uni-padding2' style={{ display: 'block' }}>
                    <div className='Registration-Documents-head'>
                        <p className='guide-title'>Registration Types</p>
                        <h1 className='Registration-Documents-heading'>
                            Documents required for Trademark Registration
                        </h1>
                    </div>

                    <div className='Registration-Documents-title'>
                        <p>The below documents are required to complete the trademark registration process:</p>
                    </div>



                    <div className='Registration-information'>
                        <ul>

                            <li >
                                <span className='Registration-sub-text'>Trademark application form</span>
                            </li>
                            <li>
                                <span className='Registration-sub-text'>Proof of applicant's identity and address.</span>
                            </li>
                            <li >
                                <span className='Registration-sub-text'>Logo or image of the trademark (if applicable).</span>
                            </li>
                            <li>
                                <span className='Registration-sub-text'>Details of goods or services covered by the trademark.</span>
                            </li>
                            <li >
                                <span className='Registration-sub-text'>Authorisation Letter or Power of Attorney.</span>
                            </li>

                        </ul>
                    </div>
                </div>
            ) : (
                <div className='uni-padding2' style={{ display: 'none' }}></div>
            )}




            {Trademark_head_Title ? (
                <div className='uni-padding2' style={{ display: 'block' }} >
                    <div className="Registration_container">
                        <div className='Registration-head'>
                            <div className='Registration-info-head'>
                                <p className='guide-title'>Registration Types</p>
                                <h1 className='Registration-heading'>Trademark registration Fees, Cost & Charges</h1>
                            </div>
                            <div className='Registration-info'  >
                                <p>The fees for trademark registration vary depending on factors such as the type of applicant (individual/enterprise), mode of filing (online/offline), and the number of classes of goods/services covered. Generally, the cost includes:</p>
                            </div>
                        </div>

                        <div className='Registration-information'>
                            <ul>
                                <li>
                                    <span className='Registration-sub-text'>Government Fee :<span className='Registration-child-text'> The Govt fee for filing the trademark application.</span></span>
                                </li>
                                <li >
                                    <span className='Registration-sub-text' style={{ display: 'block' }}>DIN Fee :<span className='Registration-child-text'>Applicable fees for obtaining DIN.</span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='uni-padding2' style={{ display: 'none' }} >

                </div>

            )}



            {/* /////////////////////////////////// */}

            {Difference_Trademark_Copyright_registration ? (
                <div className='uni-padding2' style={{ display: 'block' }}>
                    <div className="Registration_container">
                        <div className='Registration-head'>
                            <div className='Registration-info-head'>
                                <p className='guide-title'>Registration Types</p>
                                <h1 className='Registration-heading'>Difference between Trademark & Copyright registration</h1>
                            </div>
                            <div className='Registration-info'  >
                                <p>While both trademark and copyright protect intellectual property, they serve different purposes:</p>
                            </div>
                        </div>

                        <div className='Registration-information'>
                            <ul>
                                <li>
                                    <span className='Registration-sub-text'>Trademark:<span className='Registration-child-text'> Protects symbols, logos, names, and slogans that distinguish goods/services in the marketplace. It safeguards brand identity and prevents consumer confusion.</span></span>
                                </li>
                                <li >
                                    <span className='Registration-sub-text' >Copyright:<span className='Registration-child-text'>Protects original works of authorship, such as literary, artistic, musical, and dramatic works. It grants exclusive rights to reproduce, distribute, and display the work.</span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='uni-padding2' style={{ display: 'none' }}>
                </div>

            )}




            {/* /////////////////////////////////////////// */}

            {Difference_Between_Trademark_Patent_Registration ? (
                <div className='uni-padding2' style={{ display: 'block' }}>
                    <div className="Registration_container">
                        <div className='Registration-head'>
                            <div className='Registration-info-head'>
                                <p className='guide-title'>Registration Types</p>
                                <h1 className='Registration-heading'>Difference Between Trademark & Patent Registration</h1>
                            </div>

                        </div>

                        <div className='Registration-information'>
                            <ul>
                                <li>
                                    <span className='Registration-sub-text'>Trademark:<span className='Registration-child-text'> Protects brand names, logos, symbols, and other identifiers associated with goods/services. It distinguishes products in the market and safeguards brand reputation.</span></span>
                                </li>
                                <li >
                                    <span className='Registration-sub-text' >Patent:<span className='Registration-child-text'>Protects inventions or discoveries that offer a new solution to a problem. It grants exclusive rights to the inventor to prevent others from making, using, or selling the invention for a limited period.</span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            ) : (
                <div className='uni-padding2' style={{ display: 'none' }}>
                </div>
            )}




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
                                        <div className="">{item.Questions}</div>
                                        <span className="icon">{openIndex === index ? '-' : '+'}</span>
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