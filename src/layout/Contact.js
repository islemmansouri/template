import React from 'react'
const Contact =()=>{
return(
<>
  <section className="breadcrumb breadcrumb_bg">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb_iner text-center">
            <div className="breadcrumb_iner_item">
              <h2>contact</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div className="row">
        <div className="col-12">
          <h2 className="contact-title">Get in Touch</h2>
        </div>
        <div className="col-lg-8">
          <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" noValidate="novalidate">
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <textarea className="form-control w-100" name="message" id="message" cols={30} rows={9} onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder="Enter Message" defaultValue={""} />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input className="form-control" name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input className="form-control" name="email" id="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Enter email address" />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input className="form-control" name="subject" id="subject" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Enter Subject" />
                </div>
              </div>
            </div>
            <div className="form-group mt-3">
              <button type="submit" className="button button-contactForm btn_4">Send Message</button>
            </div>
          </form>
        </div>
        <div className="col-lg-4">
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-home" /></span>
            <div className="media-body">
              <h3>Buttonwood, California.</h3>
              <p>Rosemead, CA 91770</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-tablet" /></span>
            <div className="media-body">
              <h3>00 (440) 9865 562</h3>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-email" /></span>
            <div className="media-body">
              <h3>support@colorlib.com</h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
  {/* intro_video_bg part start*/}
  {/* footer part start*/}
  <footer className="footer-area">
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-sm-6 col-md-4">
          <div className="single-footer-widget footer_1">
            <h4>About Us</h4>
            <p>
              Heaven fruitful doesn't over for these theheaven fruitful doe over
              days appear creeping seasons sad behold beari ath of it fly signs
              bearing be one blessed after.
            </p>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-md-4">
          <div className="single-footer-widget footer_2">
            <h4>Important Link</h4>
            <div className="contact_info">
              <ul>
                <li>
                  <a href="#">WHMCS-bridge</a>
                </li>
                <li>
                  <a href="#"> Search Domain</a>
                </li>
                <li>
                  <a href="#">My Account</a>
                </li>
                <li>
                  <a href="#">Shopping Cart</a>
                </li>
                <li>
                  <a href="#"> Our Shop</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-md-4">
          <div className="single-footer-widget footer_2">
            <h4>Contact us</h4>
            <div className="contact_info">
              <p>
                <span> Address :</span>Hath of it fly signs bear be one blessed
                after{" "}
              </p>
              <p>
                <span> Phone :</span> +2 36 265 (8060)
              </p>
              <p>
                <span> Email : </span>info@colorlib.com{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-8 col-md-6">
          <div className="single-footer-widget footer_3">
            <h4>Newsletter</h4>
            <p>
              Heaven fruitful doesn't over lesser in days. Appear creeping seas
            </p>
            <form action="#">
              <div className="form-group">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email Address"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Email Address'"
                  />
                  <div className="input-group-append">
                    <button className="btn" type="button">
                      <i className="fas fa-paper-plane" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="copyright_part_text">
        <div className="row">
          <div className="col-lg-8">
            <p className="footer-text m-0">
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved | This template is made with{" "}
              <i className="ti-heart" aria-hidden="true" /> by{" "}
              <a href="https://colorlib.com" target="_blank">
                Colorlib
              </a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </p>
          </div>
          <div className="col-lg-4">
            <div className="copyright_social_icon text-right">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="ti-dribbble" />
              </a>
              <a href="#">
                <i className="fab fa-behance" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</>







) 
}
export default Contact;