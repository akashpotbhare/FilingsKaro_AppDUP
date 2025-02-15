import React, { useEffect, useState } from 'react'
import "../Components/Style/aboutUs.css";
import Blog from "./data/Blog.json"
import Vector_nature_left from "./Assets/Vector_nature_left.svg"
import Vector_nature_right from "./Assets/Vector_nature_right.svg"
import productimg1 from "./Assets/partner_exchange.svg"
import Record from "./Assets/Record.svg"
import description from "./Assets/description.svg"
import rocket_launch from "./Assets/rocket_launch.svg"
import diversity_3 from "./Assets/diversity_3.svg"
import military_tech from "./Assets/military_tech.svg"
import testimonial from "./data/Testimonials.json"
import next from "./Assets/next.svg"
import prevew from "./Assets/prevew.svg"

export function AboutUs() {

    const [testimonialdata, setTestimonialData] = useState([])
    const [testimonialcurrentIndex, setTestimonialCurrentIndex] = useState(0);
    const [viewBlogText, setViewBlogText] = useState("View More Blogs")
    const [blogs, setBlogs] = useState([]);

    const [numBlogsToShow, setNumBlogsToShow] = useState(3);


    const handlePrev = () => {
        setTestimonialCurrentIndex((testimonialcurrentIndex - 1 + testimonialdata.length) % testimonialdata.length);
    };

    const handleNext = () => {
        setTestimonialCurrentIndex((testimonialcurrentIndex + 1) % testimonialdata.length);
    };


    useEffect(() => {
        setTestimonialData(testimonial);
        setBlogs([...blogs, Blog[0], Blog[1], Blog[2]]);
        window.scrollTo(0, 0)

    }, [])

    const handleViewMoreClick = () => {
        if (viewBlogText === "View More Blogs") {
            setBlogs([...blogs, Blog[3], Blog[4], Blog[5]])
            setViewBlogText("View Less")
        } else {
            setBlogs([Blog[0], Blog[1], Blog[2]]);
            setViewBlogText("View More Blogs")
        }
    };
    return (
        <>
            <div className="aboutus-hero-section">
                <div className='titleimage'>
                    <img src={Vector_nature_left} alt="" /> <p>#1 Trusted site for Legalities in Nagpur</p> <img src={Vector_nature_right} alt="" />
                </div>
                <div className="aboutus-heading">
                    <h1>About us,About FilingsKaro</h1>
                </div>
                <div className="aboutus-heading-para">
                    <p>We handle your messy legalities and tax filings,so that you worry less and focus more on your dream business</p>
                </div>
            </div>

            <div className="">
                {/* Why Us  */}
                <div className='uni-bg-color'>
                    <div className='uni-padding'>
                        <div className="productcontent-body">
                            <div className="productcontent-containr">
                                <div className="productcontent-header">
                                    <p className="productcontent-tag">Dedication of our brand</p>
                                    <h1 className="productcontent-aboutus-title">Our story, Our hard work</h1>
                                </div>
                                <div className="productcontent-para-content">
                                    <div className="productcontent-para-content-text">
                                        <p>Startupwala is India's #1 Startup Enablement and Legal Services Platform. We support aspiring entrepreneurs with business setup, trademark protection, ROC filing, Tax filing and funding legal support. </p>
                                    </div>
                                    <div className="productcontent-para-content-text">
                                        <p>We are on a mission to make India an entrepreneurial capital of the world by 2047 through our robust Startup and SME legal services.
                                        </p>
                                    </div>
                                    <div className="productcontent-para-content-text">
                                        <p>During our decade-old journey, Startupwala has served small businesses across the length and breadth of India, starting from Kargil to Kanyakumari and Bhuj in Gujrat to Tinsukia in Assam. </p>
                                    </div>
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


