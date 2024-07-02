import React, { useEffect, useState } from 'react'
import "./Style/blogs.css"
import Text from "./Assets/dout.svg";
import link from "./Assets/link.svg";
import line11 from "./Assets/Line 111.svg";
import line12 from "./Assets/Line 112.svg";
import whatsapp from "./Assets/WhatsApp.svg";
import checkbox from "./Assets/checkbox.svg";
import Blog from "./data/Blog.json"


export function Blogs() {

  const [mobileError, setMobileError] = useState("");
  const [viewBlogText, setViewBlogText] = useState("View More Blogs")
  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
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

  // form submision logic ------
  async function handleContactForm(e) {
    var mobile = document.getElementById("txtNumber");
    e.preventDefault();
    if ((mobile.value.startsWith(7) || mobile.value.startsWith(8) || mobile.value.startsWith(9)) && (mobile.value.length == 10)) {
      setMobileError("");
      const scriptURL = "https://script.google.com/macros/s/AKfycbw-lf4elha8RuH4FQmkgpxhy2Jy9TeIWLVr8fFY4QlXmtEOlKpcGhX4jLd9kFeglMSwsA/exec"
      const form = document.forms["contact-form-sheet"]
      await fetch(scriptURL, { method: "POST", body: new FormData(form) })
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

  return (
    <>
      <div className="blogs-container">
        <div className="blog-container-image">
          <img src="/images/blogeimage.svg" alt="" />
        </div>
        <div className="blog-container-image-mobile">
        <img src="/images/blogeimage_mobile.svg" alt="" />
        </div>
        <div className="blogs-container-para-content">
          <div className="blogs-container-para-content-left">
            <div className="blogs-container-para-heading">
              <h2>How are AgriTech Startups Revolutionising Farming...</h2>
            </div>

            <div className="blogs-container-share-link">
              <div className="blogs-container-share-link-left">
                <p>13.2024 . FiilingsKaro</p>
              </div>
              <div className="blogs-container-share-link-right">
                <>Share</><img src={link} alt="" />
              </div>
            </div>
            <img className='line111' src={line11} alt="" />


            <p className='readhere'>Read here</p>

            <div className="blogs-container-left-para">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod. Velit scelerisque in dictum non. Quam vulputate dignissim suspendisse in est ante in nibh mauris. Magna fermentum iaculis eu non diam phasellus vestibulum.</p>


              <p>Velit aliquet sagittis id consectetur purus ut faucibus. Pretium vulputate sapien nec sagittis. Commodo elit at imperdiet dui accumsan. Platea dictumst quisque sagittis purus. Odio tempor orci dapibus ultrices in iaculis. Aliquam sem fringilla ut morbi tincidunt augue interdum. Purus semper eget duis at tellus at. Id consectetur purus ut faucibus pulvinar elementum integer enim. Nunc consequat interdum varius sit amet mattis. Metus vulputate eu scelerisque felis.</p>


              <p>Velit aliquet sagittis id consectetur purus ut faucibus. Pretium vulputate sapien nec sagittis. Commodo elit at imperdiet dui accumsan. Platea dictumst quisque sagittis purus. Odio tempor orci dapibus ultrices in iaculis. Aliquam sem fringilla ut morbi tincidunt augue interdum. Purus semper eget duis at tellus at. Id consectetur purus ut faucibus pulvinar elementum integer enim. Nunc consequat interdum varius sit amet mattis. Metus vulputate eu scelerisque felis.</p>


              <p>Velit aliquet sagittis id consectetur purus ut faucibus. Pretium vulputate sapien nec sagittis. Commodo elit at imperdiet dui accumsan. Platea dictumst quisque sagittis purus. Odio tempor orci dapibus ultrices in iaculis. Aliquam sem fringilla ut morbi </p>
           
              <p>Velit aliquet sagittis id consectetur purus ut faucibus. Pretium vulputate sapien nec sagittis. Commodo elit at imperdiet dui accumsan. Platea dictumst quisque sagittis purus. Odio tempor orci dapibus ultrices in iaculis. Aliquam sem fringilla ut morbi tincidunt augue interdum. Purus semper eget duis at tellus at. Id consectetur purus ut faucibus pulvinar elementum integer enim. Nunc consequat interdum varius sit amet mattis. Metus vulputate eu scelerisque felis.</p>


              <p>Velit aliquet sagittis id consectetur purus ut faucibus. Pretium vulputate sapien nec sagittis. Commodo elit at imperdiet dui accumsan. Platea dictumst quisque sagittis purus. Odio tempor orci dapibus ultrices in iaculis. Aliquam sem fringilla ut morbi tincidunt augue interdum. Purus semper eget duis at tellus at. Id consectetur purus ut faucibus pulvinar elementum integer enim. Nunc consequat interdum varius sit amet mattis. Metus vulputate eu scelerisque felis.</p>


              <p>Velit aliquet sagittis id consectetur purus ut faucibus. Pretium vulputate sapien nec sagittis. Commodo elit at imperdiet dui accumsan. Platea dictumst quisque sagittis purus. Odio tempor orci dapibus ultrices in iaculis. Aliquam sem fringilla ut morbi </p>
           
           
            </div>
          </div>

          <div className="blogs-container-para-content-right">
            <p className='moreblogs'>More related blogs</p>
            <div className="blogs-container-card">
              <div className="blogs-container-card1">
                <p className='blog-card-para-blue'>Startup Journeys</p>
                <h2>How are AgriTech Startups Revolutionising Farming...</h2>
                <p className='blog-card-para-text'>13.2024 . FiilingsKaro</p>
              </div>

              <div className="blogs-container-card1">
                <p className='blog-card-para-blue'>Startup Journeys</p>
                <h2>How are AgriTech Startups Revolutionising Farming...</h2>
                <p className='blog-card-para-text'>13.2024 . FiilingsKaro</p>
              </div>
            </div>

            <div className="blog-card-form">
              <div className="right">
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
              </div>
            </div>

          </div>
        </div>
        {/* <div className="border-line">
          <img src={line12} alt="" />
        </div> */}



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


      </div>


    </>
  )
}


