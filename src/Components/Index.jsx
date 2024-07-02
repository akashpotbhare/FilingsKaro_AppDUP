import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Services } from './Services'
import logo from "../Components/Assets/Logo.svg"
import arrow from "../Components/Assets/arrow_drop_down.svg"
import arrow_drop_down_topnav from "../Components/Assets/arrow_drop_down_topnav.svg"
import LinkedIn from "./Assets/LinkedIn.svg"
import "../Components/Style/Index.css"
import { Link } from 'react-router-dom'
import hamburger from "./Assets/HambergerMenu.svg"
import menu from "./Assets/menu.svg"
import close from "./Assets/close.svg"
import Union from "./Assets/Union.svg"
import Accordion from 'react-bootstrap/Accordion';
import { GrowBusiness } from './GrowBusiness'
import { GrowBusinessStartUp } from './GrowBusinessStartUp'
import { ManageBusiness } from './ManageBusiness'
import { ProtectBusiness } from './ProtectBusiness'
import { AboutUs } from './AboutUs'
import { Career } from './Career'
import { Blogs } from './Blogs'


export function Index() {


    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuStyle, setMenuStyle] = useState({ height: "100vh", zIndex: "2", width: "100%", backdropFilter: "blur(80px)", position: "fixed", top: "-100%", transition: "1s" })
    const [menuOpen, setmenuOpen] = useState(false);

    const [activeMenu, setActiveMenu] = useState('');

    const toggleMenu = (menuName) => {
        setActiveMenu(activeMenu === menuName ? '' : menuName);
    };

    const showMenu = (menuName) => {
        setActiveMenu(menuName);
    };

    // const hideMenu = () => {
    //     setActiveMenu('');
    // };


    const toggleMobileMenu = () => {
        if (menuStyle.top === "-100%") {
            setMenuStyle({ zIndex: "2", height: "100vh", width: "100%", backdropFilter: "blur(80px)", position: "fixed", top: "78px", transition: "1s" })
            setmenuOpen(true)
        } else {
            setMenuStyle({ zIndex: "2", height: "100vh", width: "100%", backdropFilter: "blur(80px)", position: "fixed", top: "-100%", transition: "1s" })
            setmenuOpen(false)
        }
    };



    return (

        <>
            <BrowserRouter>



                {/* Header start */}
                <header className='uni-padding-header'>
                    <nav>
                        <div className="topnav">
                            <div className="topnav-responsive">
                                <div className="top-navbar-brand">
                                    <div className="navbar-brand">
                                        <Link to='/home'>
                                            <img src={logo} alt="Logo" className="rounded-pill" />
                                        </Link>
                                    </div>

                                    <button className="menu-button" onClick={toggleMobileMenu}>
                                        <div style={{ display: menuOpen ? "none" : "block" }}>
                                            <img src={menu} alt="Menu" />
                                        </div>
                                        <div style={{ display: menuOpen ? "block" : "none" }}>
                                            <img src={close} alt="Close" />
                                        </div>
                                    </button>

                                </div>

                            </div>

                            <div className="navlink">
                                <ul>
                                    <li onClick={() => toggleMenu('registerBusiness')} onMouseEnter={() => showMenu('registerBusiness')} >
                                        <a href="#" className='RegisterBusiness'>
                                            Register Business
                                            <img src={arrow} alt="Arrow" className='arrow' />
                                            <div className="popular">Popular</div>
                                        </a>
                                        {activeMenu === 'registerBusiness' && (
                                            <div className='selector '>
                                                <div className="selector-main">
                                                    <div className='navheading'>
                                                        <p>Register Business</p>
                                                    </div>
                                                    <div className='list-continer selector-list1' >
                                                        <li><Link to='/services/Pvt. Ltd. Company Registration' className='list'>Private Limited Company</Link></li>
                                                        <li><Link to='services/One Person Company Registration' className='list'>One Person Company</Link></li>
                                                        <li><Link to='/services/LLP Registration' className='list'>Limited Liability Partnership</Link></li>
                                                        <li><Link to='/services/Section 8 NGO Company Registration' className='list'>NGO/Section 8 Company</Link></li>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </li>
                                </ul>
                                <ul>
                                    <li onClick={() => toggleMenu('growBusiness')} onMouseEnter={() => showMenu('growBusiness')} >
                                        <a href="#">Grow Business <img src={arrow} alt="Arrow" className='arrow' /></a>
                                        {activeMenu === 'growBusiness' && (
                                            <div className='selector'>
                                                <div className="selector-main">

                                                    <div className='navheading'>
                                                        <p>Grow Business</p>
                                                    </div>
                                                    <div className='list-continer selector-list1'>
                                                        <li><Link to='/GST Registration' className='list'>GST Registration</Link></li>
                                                        <li><Link to='/Startup India Registration' className='list'>Startup India Registration</Link></li>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </li>
                                </ul>
                                <ul>
                                    <li onClick={() => toggleMenu('manageBusiness')} onMouseEnter={() => showMenu('manageBusiness')} >
                                        <a href="#">Manage Business <img src={arrow} alt="Arrow" className='arrow' /></a>
                                        {activeMenu === 'manageBusiness' && (
                                            <div className='selector'>
                                                <div className="selector-main">

                                                    <div className='navheading'>
                                                        <p>Manage Business</p>
                                                    </div>

                                                    <div className='list-continer manage-business' >
                                                        <div className='selector-list2' >
                                                            <li><Link to='/ManageBusiness/Pvt. Ltc.ROC Company AMC' className='list'>Pvt. Ltc.ROC Company AMC</Link></li>
                                                            <li><Link to='/ManageBusiness/OPC ROC Company AMC' className='list'>OPC ROC Company AMC</Link></li>
                                                            <li><Link to='/ManageBusiness/LLP ROC Company AMC' className='list'>LLP ROC Company AMC</Link></li>
                                                            <li><Link to='/ManageBusiness/DIR3 DYN KYC Filing' className='list'>DIR3 DYN KYC filing</Link></li>
                                                            <li><Link to='/ManageBusiness/ROC Return Filing For Pvt. Ltd. Company' className='list'>Roc Return Filing For Pvt.Ltd </Link></li>
                                                            <li><Link to='/ManageBusiness/ROC Return Filing For OPC Company' className='list'>Roc Return Filing For OPC </Link></li>
                                                            <li><Link to='/ManageBusiness/LLP ROC Return Filing Form 11 & Form 8' className='list'>Roc Return Filing For LLP </Link></li>
                                                        </div>
                                                        <div className='selector-list2'>
                                                            <li><Link to='/ManageBusiness/Appointment Of Director' className='list'>Appointment Of Director</Link></li>
                                                            <li><Link to='/ManageBusiness/Resignation Of Director' className='list'>Resignation Of Director</Link></li>
                                                            <li><Link to='/ManageBusiness/Transfer of Shares of Private Limited Co.' className='list'>Tranfer Of Shares</Link></li>
                                                            <li><Link to='/ManageBusiness/Capital Of Company Increase' className='list'>Increasing Capital</Link></li>
                                                            <li><Link to='/ManageBusiness/Closure Of Company' className='list'>Closure Of Company</Link></li>
                                                            <li><Link to='/ManageBusiness/Closure Of One Person Company' className='list'>Closure Of OPC</Link></li>
                                                            <li><Link to='/ManageBusiness/Closure of LLP' className='list'>Closure Of LLp</Link></li>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </li>
                                </ul>
                                <ul>
                                    <li onClick={() => toggleMenu('protectBusiness')} onMouseEnter={() => showMenu('protectBusiness')}>
                                        <a href="#">Protect Business <img src={arrow} alt="Arrow" className='arrow' /></a>
                                        {activeMenu === 'protectBusiness' && (
                                            <div className='selector'>
                                                <div className="selector-main">

                                                    <div className='navheading'>
                                                        <p>Protect Business</p>
                                                    </div>
                                                    <div className='list-continer selector-list1'>
                                                        <li><Link to='/ProtectBusiness/Trademark Registration' className='list'>Trademark Registration</Link></li>
                                                        <li><Link to='/ProtectBusiness/Reply to Trademark Objection' className='list'>Repply To Trademark Objection</Link></li>
                                                        <li><Link to='/ProtectBusiness/Trademark Renewal' className='list'>Renew Your Trademark</Link></li>
                                                        <li><Link to='/ProtectBusiness/Trademark Licensing' className='list'>License Your Trademark</Link></li>
                                                        <li><Link to='/ProtectBusiness/Copyright Registration' className='list'>Copyright Registration</Link></li>
                                                        <li><Link to='/ProtectBusiness/Reply to Copyright Objection' className='list'>Reply To Copyright Objection</Link></li>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </li>
                                </ul>
                            </div>
                            <button className="contactus" type="button">Contact Us</button>
                        </div>
                    </nav>
                </header>


                <div style={menuStyle} className='header-menu' id='headerMenu'>

                    <div className="top_nav-accordion" >
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <p>Menu</p>
                            <div className="accordion-item" >
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Register Business  <img src={arrow_drop_down_topnav} alt="Arrow" className='arrow_drop_down_topnav' /> <span className="popular-top-nav">Popular</span>
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><a href="/services/Pvt. Ltd. Company Registration" className="list">Private Limited Company</a></li>
                                        <li className="list-group-item"><a href="/services/One Person Company Registration" className="list">One Person Company</a></li>
                                        <li className="list-group-item"><a href="/services/LLP Registration" className="list">Limited Liability Partnership</a></li>
                                        <li className="list-group-item"><a href="/services/Section 8 NGO Company Registration" className="list">NGO/Section 8 Company</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Protect Business <img src={arrow_drop_down_topnav} alt="Arrow" className='arrow_drop_down_topnav' />
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><a href="/ProtectBusiness/Trademark Registration" className="list">Trademark Registration</a></li>
                                        <li className="list-group-item"><a href="/ProtectBusiness/Reply to Trademark Objection" className="list">Apply To Trademark Objection</a></li>
                                        <li className="list-group-item"><a href="/ProtectBusiness/Trademark Renewal" className="list">Renew Your Trademark</a></li>
                                        <li className="list-group-item"><a href="/ProtectBusiness/Trademark Licensing" className="list">License Your Trademark</a></li>
                                        <li className="list-group-item"><a href="/ProtectBusiness/Copyright Registration" className="list">Copyright Registration</a></li>
                                        <li className="list-group-item"><a href="/ProtectBusiness/Reply to Copyright Objection" className="list">Apply To Copyright Objection</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Manage Business <img src={arrow_drop_down_topnav} alt="Arrow" className='arrow_drop_down_topnav' />
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><a href="/ManageBusiness/Pvt. Ltc.ROC Company AMC" className="list">Pvt. Ltd. ROC Compliance AMC</a></li>
                                        <li className="list-group-item"><a href="/ManageBusiness/OPC ROC Company AMC" className="list">OPC ROC Compliance AMC</a></li>
                                        <li className="list-group-item"><a href="/ManageBusiness/LLP ROC Company AMC" className="list">LLP ROC Compliance AMC</a></li>
                                        <li className="list-group-item"><a href="/ManageBusiness/DIR3 DYN KYC Filing" className="list">DIR3 DIN KYC filing</a></li>
                                        <li className="list-group-item"><a href="/ManageBusiness/ROC Return Filing For Pvt. Ltd. Company" className="list">ROC Return Filing For Pvt. Ltd.</a></li>
                                        <li className="list-group-item"><a href="/ManageBusiness/ROC Return Filing For OPC Company" className="list">ROC Return Filing For OPC</a></li>
                                        <li className="list-group-item"><a href="/ManageBusiness/LLP ROC Return Filing Form 11 & Form 8" className="list">ROC Return Filing For LLP</a></li>
                                        <li className="list-group-item"><a href="/ManageBusiness/Appointment Of Director" className="list">Appointment Of Director</a></li>
                                        <li className="list-group-item"><a href="/ManageBusiness/Resignation Of Director" className="list">Resignation Of Director</a></li>
                                        <li className="list-group-item"><a href="/ManageBusiness/Transfer of Shares of Private Limited Co." className="list">Transfer Of Shares</a></li>
                                        <li className="list-group-item"><a href="/ManageBusiness/Capital Of Company Increase" className="list">Increasing Capital</a></li>
                                        <li className="list-group-item"><a href="/ManageBusiness/Closure Of Company" className="list">Closure Of Company</a></li>
                                        <li className="list-group-item"><a href="/ManageBusiness/Closure Of One Person Company" className="list">Closure Of OPC</a></li>
                                        <li className="list-group-item"><a href="/ManageBusiness/Closure of LLP" className="list">Closure Of LLP</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        Grow Business <img src={arrow_drop_down_topnav} alt="Arrow" className='arrow_drop_down_topnav' />
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><a href="/GST Registration" className="list">GST Registration</a></li>
                                        <li className="list-group-item"><a href="/Startup India Registration" className="list">Startup India Registration</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <button className="topnav-accordion_btn" type="button">Contact Us</button>
                    </div>

                </div>


                {/* Header End   */}

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/services/:servicename' element={<Services />} />
                    <Route path='/GST Registration' element={<GrowBusiness />} />
                    <Route path='/StartUp India Registration' element={<GrowBusinessStartUp />} />
                    <Route path='/ManageBusiness/:manageBusinnessname' element={<ManageBusiness />} />
                    <Route path='/ProtectBusiness/:protectbusinessname' element={<ProtectBusiness />} />
                    <Route path='aboutUs' element={<AboutUs />} />
                    <Route path='career' element={<Career />} />
                    <Route path='blogs' element={<Blogs />} />


                </Routes>
                {/* Footer Start */}

                <footer className="footer">
                    <div className='uni-padding'>

                        <div className="footer-containr">
                            <div className='footer-left'>
                                <img src={logo} alt="" />
                                <div className='footerpara'>We handle your messy legalities and tax filings, So that you worry less and focus more on your dream business</div>

                            </div>
                            <div className='footerright'>
                                <div className='footer-right'>
                                    <div className="footer-links-RHS">
                                        <ul>
                                            <li>
                                                <a href="/home">Home</a>
                                            </li>
                                            <li>
                                                <a href="/aboutUs">About</a>
                                            </li>
                                            <li>
                                                <a href="/blogs">Blogs</a>
                                            </li>
                                        </ul>

                                    </div>


                                    <div className="footer-links-LHS">

                                        <ul>
                                            <li>
                                                <a href="/services">Reviews</a>
                                            </li>
                                            <li>
                                                <a href="/career">Careers</a> 
                                            </li>
                                            <li>
                                                <a href="/home">Contact</a> 
                                            </li>
                                        </ul>
                                        
                                    </div>

                                </div>
                                <div className="footer-right-image">
                                    <img src={LinkedIn} alt="" />
                                </div>
                            </div>

                        </div>

                        <p className='main-links'>Main Links</p>
                        <div className='footer-links'>
                            <div className='footerlinks'>
                                <p className=''>Start</p>
                                <ul>
                                    <li><a href="/services/Pvt. Ltd. Company Registration">Private Limited Company</a></li>
                                    <li><a href="/services/Pvt. Ltd. Company Registration">One Person Company</a></li>
                                    <li><a href="/services/LLP Registration">Ltd. Liability Partnership</a></li>
                                    <li><a href="/home">Company Name Search</a></li>
                                    <li><a href="/Startup India Registration">Startup India Services</a></li>
                                    <li><a href="/home">Public Limited Company</a></li>
                                    <li><a href="/services/Section 8 NGO Company Registration">NGO/Section 8 Company</a></li>
                                    <li><a href="/home">Startup Incorporation</a></li>
                                </ul>
                            </div>


                            <div className='footerlinks'>
                                <p className=''>Protect</p>
                                <ul>
                                    <li><a href="/ProtectBusiness/Trademark Registration">Trademark Registration</a></li>
                                    <li><a href="/ProtectBusiness/Reply to Trademark Objection">Reply to Trademark Objection</a></li>
                                    <li><a href="/ProtectBusiness/Trademark Renewal">Trademark Renewal</a></li>
                                    <li><a href="/ProtectBusiness/Trademark Licensing">Trademark License</a></li>
                                    <li><a href="/home">Trademark Search</a></li>
                                    <li><a href="/home">Sell Trademark</a></li>
                                    <li><a href="/ProtectBusiness/Copyright Registration">Copyright Registration</a></li>
                                    <li><a href="/ProtectBusiness/Reply to Copyright Objection">Reply to Copyright Objection</a></li>
                                </ul>
                            </div>

                            <div className='footerlinks'>
                                <p className=''>Manage</p>
                                <ul>
                                    <li><a href="/ManageBusiness/Pvt. Ltc.ROC Company AMC">Pvt. Ltd. ROC Compliance AMC</a></li>
                                    <li><a href="/ManageBusiness/OPC ROC Company AMC">OPC ROC Compliance AMC</a></li>
                                    <li><a href="/ManageBusiness/LLP ROC Company AMC">LLP ROC Compliance AMC</a></li>
                                    <li><a href="/ManageBusiness/DIR3 DYN KYC Filing">DIR3 DIN KYC Filing</a></li>
                                    <li><a href="/ManageBusiness/ROC Return Filing For Pvt. Ltd. Company">ROC Return Filing for Pvt. Ltd.</a></li>
                                    <li><a href="/ManageBusiness/ROC Return Filing For OPC Company">ROC Return Filing for OPC</a></li>
                                    <li><a href="/ManageBusiness/LLP ROC Return Filing Form 11 & Form 8">ROC Return Filing for LLP</a></li>
                                    <li><a href="/ManageBusiness/Appointment Of Director">Appointment of Director</a></li>
                                    <li><a href="/ManageBusiness/Resignation Of Director">Resignation of Director</a></li>
                                    <li><a href="/ManageBusiness/Transfer of Shares of Private Limited Co.">Transfer of Shares</a></li>
                                    <li><a href="/ManageBusiness/Capital Of Company Increase">Increasing Capital of Company</a></li>
                                    <li><a href="/ManageBusiness/Closure Of Company">Closure of Company</a></li>
                                    <li><a href="/ManageBusiness/Closure Of One Person Company">Closure of One Person Company</a></li>
                                    <li><a href="/ManageBusiness/Closure of LLP">Closure of LLP</a></li>
                                </ul>
                            </div>
                            <div className='footerlinks'>
                                <p className=''>Grow</p>
                                <ul>
                                    <li><a href="/home">ISO Certification</a></li>
                                    <li><a href="/home">GST Filings</a></li>
                                    <li><a href="/home">MSME Services</a></li>
                                    <li><a href="/home">List of Indian Companies</a></li>
                                    <li><a href="/home">List of Indian LLPs</a></li>
                                    <li><a href="/home">List of Indian Trademarks</a></li>
                                </ul>
                            </div>

                        </div>

                        <div className="footer-links-accordion">
                            {/* <Accordion>
                                <Accordion.Item >
                                    <Accordion.Header className="custom-accordion-header" >Start</Accordion.Header>
                                    <Accordion.Body >
                                        <div className='footerlinks'>

                                            <ul>
                                                <li><a href="">Private Limited Company</a></li>
                                                <li><a href="">One Person Company</a></li>
                                                <li><a href="">Ltd. Liability Partnership</a></li>
                                                <li><a href="">Company Name Search</a></li>
                                                <li><a href="">Startup India Services</a></li>
                                                <li><a href="">Public Limited Company</a></li>
                                                <li><a href="">NGO/Section 8 Company</a></li>
                                                <li><a href="">Startup Incorporation</a></li>
                                            </ul>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header className="custom-accordion-header">Protect</Accordion.Header>
                                    <Accordion.Body>
                                        <div className='footerlinks'>
                                            <ul>
                                                <li><a href="">Trademark Registration</a></li>
                                                <li><a href="">Reply to Trademark Objection</a></li>
                                                <li><a href="">Trademark Renewal</a></li>
                                                <li><a href="">Trademark License</a></li>
                                                <li><a href="">Trademark Search</a></li>
                                                <li><a href="">Sell Trademark</a></li>
                                                <li><a href="">Copyright Registration</a></li>
                                                <li><a href="">Reply to Copyright Objection</a></li>
                                            </ul>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header className="custom-accordion-header">Manage</Accordion.Header>
                                    <Accordion.Body>
                                        <div className='footerlinks'>
                                            <ul>
                                                <li><a href="">Pvt. Ltd. ROC Compliance AMC</a></li>
                                                <li><a href="">OPC ROC Compliance AMC</a></li>
                                                <li><a href="">LLP ROC Compliance AMC</a></li>
                                                <li><a href="">DIR3 DIN KYC Filing</a></li>
                                                <li><a href="">ROC Return Filing for Pvt. Ltd.</a></li>
                                                <li><a href="">ROC Return Filing for OPC</a></li>
                                                <li><a href="">ROC Return Filing for LLP</a></li>
                                                <li><a href="">Appointment of Director</a></li>
                                                <li><a href="">Resignation of Director</a></li>
                                                <li><a href="">Transfer of Shares</a></li>
                                                <li><a href="">Increasing Capital of Company</a></li>
                                                <li><a href="">Closure of Company</a></li>
                                                <li><a href="">Closure of One Person Company</a></li>
                                                <li><a href="">Closure of LLP</a></li>
                                            </ul>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header className="custom-accordion-header">Grow</Accordion.Header>
                                    <Accordion.Body>
                                        <div className='footerlinks'>
                                            <ul>
                                                <li><a href="">ISO Certification</a></li>
                                                <li><a href="">GST Filings</a></li>
                                                <li><a href="">MSME Services</a></li>
                                                <li><a href="">List of Indian Companies</a></li>
                                                <li><a href="">List of Indian LLPs</a></li>
                                                <li><a href="">List of Indian Trademarks</a></li>
                                            </ul>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion> */}


                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Start  <img src={Union} alt="" />
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <div className='footerlinks'>

                                                <ul>
                                                    <li><a href="/services/Pvt. Ltd. Company Registration">Private Limited Company</a></li>
                                                    <li><a href="services/One Person Company Registration">One Person Company</a></li>
                                                    <li><a href="/services/LLP Registration">Ltd. Liability Partnership</a></li>
                                                    <li><a href="/home">Company Name Search</a></li>
                                                    <li><a href="/Startup India Registration">Startup India Services</a></li>
                                                    <li><a href="/home">Public Limited Company</a></li>
                                                    <li><a href="/services/Section 8 NGO Company Registration">NGO/Section 8 Company</a></li>
                                                    <li><a href="/home">Startup Incorporation</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Protect <img src={Union} alt="" />
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <div className='footerlinks'>
                                                <ul>
                                                    <li><a href="/ProtectBusiness/Trademark Registration">Trademark Registration</a></li>
                                                    <li><a href="/ProtectBusiness/Reply to Trademark Objection">Reply to Trademark Objection</a></li>
                                                    <li><a href="/ProtectBusiness/Trademark Renewal">Trademark Renewal</a></li>
                                                    <li><a href="/ProtectBusiness/Trademark Licensing">Trademark License</a></li>
                                                    <li><a href="/home">Trademark Search</a></li>
                                                    <li><a href="/home">Sell Trademark</a></li>
                                                    <li><a href="/ProtectBusiness/Copyright Registration">Copyright Registration</a></li>
                                                    <li><a href="/ProtectBusiness/Reply to Copyright Objection">Reply to Copyright Objection</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Manage <img src={Union} alt="" />
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <div className='footerlinks'>
                                                <ul>
                                                    <li><a href="/ManageBusiness/Pvt. Ltc.ROC Company AMC">Pvt. Ltd. ROC Compliance AMC</a></li>
                                                    <li><a href="/ManageBusiness/OPC ROC Company AMC">OPC ROC Compliance AMC</a></li>
                                                    <li><a href="/ManageBusiness/LLP ROC Company AMC">LLP ROC Compliance AMC</a></li>
                                                    <li><a href="/ManageBusiness/DIR3 DYN KYC Filing">DIR3 DIN KYC Filing</a></li>
                                                    <li><a href="/ManageBusiness/ROC Return Filing For Pvt. Ltd. Company">ROC Return Filing for Pvt. Ltd.</a></li>
                                                    <li><a href="/ManageBusiness/ROC Return Filing For OPC Company">ROC Return Filing for OPC</a></li>
                                                    <li><a href="/ManageBusiness/LLP ROC Return Filing Form 11 & Form 8">ROC Return Filing for LLP</a></li>
                                                    <li><a href="/ManageBusiness/Appointment Of Director">Appointment of Director</a></li>
                                                    <li><a href="/ManageBusiness/Resignation Of Director">Resignation of Director</a></li>
                                                    <li><a href="/ManageBusiness/Transfer of Shares of Private Limited Co.">Transfer of Shares</a></li>
                                                    <li><a href="/ManageBusiness/Capital Of Company Increase">Increasing Capital of Company</a></li>
                                                    <li><a href="/ManageBusiness/Closure Of Company">Closure of Company</a></li>
                                                    <li><a href="/ManageBusiness/Closure Of One Person Company">Closure of One Person Company</a></li>
                                                    <li><a href="/ManageBusiness/Closure of LLP">Closure of LLP</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Grow <img src={Union} alt="" />
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <div className='footerlinks'>
                                                <ul>
                                                    <li><a href="/home">ISO Certification</a></li>
                                                    <li><a href="/home">GST Filings</a></li>
                                                    <li><a href="/home">MSME Services</a></li>
                                                    <li><a href="/home">List of Indian Companies</a></li>
                                                    <li><a href="/home">List of Indian LLPs</a></li>
                                                    <li><a href="/home">List of Indian Trademarks</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='footer-end'>
                        <div className='uni-padding'>
                            <div className="footer_end_container">
                                <div className='footer_end_content'>
                                    <div className='footerendleft'>
                                        <p>©FilingsKaro Pvt. Ltd. 2024</p>
                                    </div>
                                    <div className='footerendright'>
                                        <p>Terms & Conditions</p>
                                        <p>Privacy/ Refund policy</p>
                                        <button type='button' className='footerbtn'>Customer Support</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="footer_end_container_mobile">
                        <div className="footer_end_container_mobile_content">
                            <img src={LinkedIn} alt="" />
                            <div className='footerendright-mobile'>
                                <p>Terms & Conditions</p>
                                <p>Privacy/ Refund policy</p>
                            </div>
                            <button type='button' className='footerbtn'>Customer Support</button>
                            <div className="fooret_end_text">
                                <p>©FilingsKaro Pvt. Ltd. 2024</p>
                            </div>
                        </div>
                    </div>

                </footer>
                {/* Footer End */}
            </BrowserRouter>
        </>
    )
}



