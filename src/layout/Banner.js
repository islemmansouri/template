import React from 'react'
const Banner =()=>{
return(

            <div>
              <section className="banner_part">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="banner_text">
                        <div className="banner_text_iner">
                          <h5>yummy recipes</h5>
                          <h1>smell good feel good</h1>
                          <p>Together creeping heaven upon third dominion be upon won't darkness rule land
                            behold it created good saw after she'd Our set living. Signs midst dominion
                            creepeth morning</p>
                          <div className="banner_btn">
                            
                            <a href="https://www.youtube.com/watch?v=pBFQdxA-apI" className="popup-youtube video_popup">
                              <span><img src="img/icon/play.svg" alt="" /></span> Watch our story</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* banner part start*/}
              {/*::exclusive_item_part start::*/}
              <section className="exclusive_item_part blog_item_section">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-5">
                      <div className="section_tittle">
                        
                      <p>Popular Dishes</p>
                        <h2>Our Exclusive recipes</h2>

                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-4">
                      <div className="single_blog_item">
                        <div className="single_blog_img">
                          <img src="img/food_item/food_item_1.png" alt="" />
                        </div>
                        <div className="single_blog_text">
                          <h3>couscous</h3>
                          <p> Couscous is the centerpiece of traditional Tunisian cuisine</p>
                          <a href="/couscous" className="btn_3">Read More <img src="img/icon/left_2.svg" alt="" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="single_blog_item">
                        <div className="single_blog_img">
                          <img src="img/food_item/food_item_2.png" alt="" />
                        </div>
                        <div className="single_blog_text">
                          <h3>lablebi</h3>
                          <p>One of Tunisia’s most famous street foods is Lablebi (also spelled Lablabi) </p>
                          <a href="/lablebi" className="btn_3">Read More <img src="img/icon/left_2.svg" alt="" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="single_blog_item">
                        <div className="single_blog_img">
                          <img src="img/food_item/food_item_3.png" alt="" />
                        </div>
                        <div className="single_blog_text">
                          <h3>brik</h3>
                          <p>Briks are a staple delight across Tunisia and can be found in little shops throughout the country</p>
                          <a href="/brik" className="btn_3">Read More <img src="img/icon/left_2.svg" alt="" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 d-none d-sm-block d-lg-none">
                      <div className="single_blog_item">
                        <div className="single_blog_img">
                          <img src="img/food_item/food_item_1.png" alt="" />
                        </div>
                        <div className="single_blog_text">
                          <h3>Cremy Noodles</h3>
                          <p>Was brean shed moveth day yielding tree yielding day were female and </p>
                          <a href="#" className="btn_3">Read More <img src="img/icon/left_2.svg" alt="" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/*::exclusive_item_part end::*/}
              {/* about part start*/}
              <section className="about_part">
                <div className="container-fluid">
                  <div className="row align-items-center">
                    <div className="col-sm-4 col-lg-5 offset-lg-1">
                      <div className="about_img">
                        <img src="img/about.png" alt="" />
                      </div>
                    </div>
                    <div className="col-sm-8 col-lg-4">
                      <div className="about_text">
                        <h5>Our History</h5>
                        <h2>The belly rules the mind.</h2>

                        <h4>Satisfying people hunger for simple pleasures</h4>
                        <p>May over was. Be signs two. Spirit. Brought said dry own firmament lesser best sixth deep
                          abundantly bearing, him, gathering you
                          blessed bearing he our position best ticket in month hole deep </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* about part end*/}
              {/* intro_video_bg start*/}
              <section className="intro_video_bg">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="intro_video_iner text-center">
                        <h2>Expect The Best</h2>
                        <div className="intro_video_icon">
                          <a id="play-video_1" className="video-play-button popup-youtube" href="https://www.youtube.com/watch?v=pBFQdxA-apI">
                            <span className="ti-control-play" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* intro_video_bg part start*/}
              {/* food_menu start*/}
              <section className="food_menu gray_bg">
                <div className="container">
                  <div className="row justify-content-between">
                    <div className="col-lg-5">
                      <div className="section_tittle">
                        <h2>Delicious Food Menu</h2>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="nav nav-tabs food_menu_nav" id="myTab" role="tablist">
                        <a  className="active" id="Breakfast-tab" data-toggle="tab" href="#Breakfast" role="tab" aria-controls="Breakfast" aria-selected="false">Breakfast <img src="img/icon/play.svg" alt="play" /></a>
                        <a id="Launch-tab" data-toggle="tab" href="#Launch" role="tab" aria-controls="Launch" aria-selected="false">Launch <img src="img/icon/play.svg" alt="play" /></a>
                        <a id="Dinner-tab" data-toggle="tab" href="#Dinner" role="tab" aria-controls="Dinner" aria-selected="false">Dinner <img src="img/icon/play.svg" alt="play" /> </a>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active single-member" id="Special" role="tabpanel" aria-labelledby="Special-tab">
                          <div className="row">
                            <div className="col-sm-6 col-lg-6">
                              <div className="single_food_item media">
                                <img src="img/food_menu/single_food_1.png" className="mr-3" alt="..." />
                                <div className="media-body align-self-center">
                                  <h3>Pork Sandwich</h3>
                                  <p>They're wherein heaven seed hath nothing</p>
                                  <h5>$40.00</h5>
                                </div>
                              </div>
                              <div className="single_food_item media">
                                <img src="img/food_menu/single_food_2.png" className="mr-3" alt="..." />
                                <div className="media-body align-self-center">
                                  <h3>Roasted Marrow</h3>
                                  <p>They're wherein heaven seed hath nothing</p>
                                  <h5>$40.00</h5>
                                </div>
                              </div>
                              <div className="single_food_item media">
                                <img src="img/food_menu/single_food_3.png" className="mr-3" alt="..." />
                                <div className="media-body align-self-center">
                                  <h3>Summer Cooking</h3>
                                  <p>They're wherein heaven seed hath nothing</p>
                                  <h5>$40.00</h5>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-lg-6">
                              <div className="single_food_item media">
                                <img src="img/food_menu/single_food_4.png" className="mr-3" alt="..." />
                                <div className="media-body align-self-center">
                                  <h3>Easter Delight</h3>
                                  <p>They're wherein heaven seed hath nothing</p>
                                  <h5>$40.00</h5>
                                </div>
                              </div>
                              <div className="single_food_item media">
                                <img src="img/food_menu/single_food_5.png" className="mr-3" alt="..." />
                                <div className="media-body align-self-center">
                                  <h3>Tiener Schnitze</h3>
                                  <p>They're wherein heaven seed hath nothing</p>
                                  <h5>$40.00</h5>
                                </div>
                              </div>
                              <div className="single_food_item media">
                                <img src="img/food_menu/single_food_6.png" className="mr-3" alt="..." />
                                <div className="media-body align-self-center">
                                  <h3>Chicken Roast</h3>
                                  <p>They're wherein heaven seed hath nothing</p>
                                  <h5>$40.00</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade single-member" id="Breakfast" role="tabpanel" aria-labelledby="Breakfast-tab">
                          <div className="row">
                            <div className="col-sm-6 col-lg-6">
                              <div className="single_food_item media">
                                <img src="img/food_menu/single_food_4.png" className="mr-3" alt="..." />
                                <div className="media-body align-self-center">
                                  <h3>Easter Delight</h3>
                                  <p>They're wherein heaven seed hath nothing</p>
                                  <h5>$40.00</h5>
                                </div>
                              </div>
                              <div className="single_food_item media">
                                <img src="img/food_menu/single_food_5.png" className="mr-3" alt="..." />
                                <div className="media-body align-self-center">
                                  <h3>Tiener Schnitze</h3>
                                  <p>They're wherein heaven seed hath nothing</p>
                                  <h5>$40.00</h5>
                                </div>
                              </div>
                              <div className="single_food_item media">
                                <img src="img/food_menu/single_food_6.png" className="mr-3" alt="..." />
                                <div className="media-body align-self-center">
                                  <h3>Chicken Roast</h3>
                                  <p>They're wherein heaven seed hath nothing</p>
                                  <h5>$40.00</h5>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-lg-6">
                              <div className="single_food_item media">
                                <img src="img/food_menu/single_food_1.png" className="mr-3" alt="..." />
                                <div className="media-body align-self-center">
                                  <h3>Pork Sandwich</h3>
                                  <p>They're wherein heaven seed hath nothing</p>
                                  <h5>$40.00</h5>
                                </div>
                              </div>
                              <div className="single_food_item media">
                                <img src="img/food_menu/single_food_2.png" className="mr-3" alt="..." />
                                <div className="media-body align-self-center">
                                  <h3>Roasted Marrow</h3>
                                  <p>They're wherein heaven seed hath nothing</p>
                                  <h5>$40.00</h5>
                                </div>
                              </div>
                              <div className="single_food_item media">
                                <img src="img/food_menu/single_food_3.png" className="mr-3" alt="..." />
                                <div className="media-body align-self-center">
                                  <h3>Summer Cooking</h3>
                                  <p>They're wherein heaven seed hath nothing</p>
                                  <h5>$40.00</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade single-member" id="Launch" role="tabpanel" aria-labelledby="Launch-tab">
                          <div className="row">
                            <div className="col-sm-6 col-lg-6">
                              <div className="single_food_item media">
                                <img src="img/food_menu/single_food_1.png" className="mr-3" alt="..." />
                                <div className="media-body align-self-center">
                                  <h3>Pork Sandwich</h3>
                                  <p>They're wherein heaven seed hath nothing</p>
                                  <h5>$40.00</h5>
                                </div>
                              </div>
                              <div className="single_food_item media">
                                <img src="img/food_menu/single_food_2.png" className="mr-3" alt="..." />
                                <div className="media-body align-self-center">
                                  <h3>Roasted Marrow</h3>
                                  <p>They're wherein heaven seed hath nothing</p>
                                  <h5>$40.00</h5>
                                </div>
                              </div>
                              <div className="single_food_item media">
                                <img src="img/food_menu/single_food_3.png" className="mr-3" alt="..." />
                                <div className="media-body align-self-center">
                                  <h3>Summer Cooking</h3>
                                  <p>They're wherein heaven seed hath nothing</p>
                                  <h5>$40.00</h5>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-lg-6">
                              <div className="single_food_item media">
                                <img src="img/food_menu/single_food_4.png" className="mr-3" alt="..." />
                                <div className="media-body align-self-center">
                                  <h3>Easter Delight</h3>
                                  <p>They're wherein heaven seed hath nothing</p>
                                  <h5>$40.00</h5>
                                </div>
                              </div>
                              <div className="single_food_item media">
                                <img src="img/food_menu/single_food_5.png" className="mr-3" alt="..." />
                                <div className="media-body align-self-center">
                                  <h3>Tiener Schnitze</h3>
                                  <p>They're wherein heaven seed hath nothing</p>
                                  <h5>$40.00</h5>
                                </div>
                              </div>
                              <div className="single_food_item media">
                                <img src="img/food_menu/single_food_6.png" className="mr-3" alt="..." />
                                <div className="media-body align-self-center">
                                  <h3>Chicken Roast</h3>
                                  <p>They're wherein heaven seed hath nothing</p>
                                  <h5>$40.00</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade single-member" id="Dinner" role="tabpanel" aria-labelledby="Dinner-tab">
                          <div className="row">
                            <div className="col-sm-6 col-lg-6">
                              <div className="single_food_item media">
                                <img src="img/food_menu/single_food_4.png" className="mr-3" alt="..." />
                                <div className="media-body align-self-center">
                                  <h3>Easter Delight</h3>
                                  <p>They're wherein heaven seed hath nothing</p>
                                  <h5>$40.00</h5>
                                </div>
                              </div>
                              <div className="single_food_item media">
                                <img src="img/food_menu/single_food_5.png" className="mr-3" alt="..." />
                                <div className="media-body align-self-center">
                                  <h3>Tiener Schnitze</h3>
                                  <p>They're wherein heaven seed hath nothing</p>
                                  <h5>$40.00</h5>
                                </div>
                              </div>
                              <div className="single_food_item media">
                                <img src="img/food_menu/single_food_6.png" className="mr-3" alt="..." />
                                <div className="media-body align-self-center">
                                  <h3>Chicken Roast</h3>
                                  <p>They're wherein heaven seed hath nothing</p>
                                  <h5>$40.00</h5>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-lg-6">
                              <div className="single_food_item media">
                                <img src="img/food_menu/single_food_1.png" className="mr-3" alt="..." />
                                <div className="media-body align-self-center">
                                  <h3>Pork Sandwich</h3>
                                  <p>They're wherein heaven seed hath nothing</p>
                                  <h5>$40.00</h5>
                                </div>
                              </div>
                              <div className="single_food_item media">
                                <img src="img/food_menu/single_food_2.png" className="mr-3" alt="..." />
                                <div className="media-body align-self-center">
                                  <h3>Roasted Marrow</h3>
                                  <p>They're wherein heaven seed hath nothing</p>
                                  <h5>$40.00</h5>
                                </div>
                              </div>
                              <div className="single_food_item media">
                                <img src="img/food_menu/single_food_3.png" className="mr-3" alt="..." />
                                <div className="media-body align-self-center">
                                  <h3>Summer Cooking</h3>
                                  <p>They're wherein heaven seed hath nothing</p>
                                  <h5>$40.00</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade single-member" id="Sneaks" role="tabpanel" aria-labelledby="Sneaks-tab">
                          <div className="row">
                            <div className="col-sm-6 col-lg-6">
                              <div className="single_food_item media">
                                <img src="img/food_menu/single_food_1.png" className="mr-3" alt="..." />
                                <div className="media-body align-self-center">
                                  <h3>Pork Sandwich</h3>
                                  <p>They're wherein heaven seed hath nothing</p>
                                  <h5>$40.00</h5>
                                </div>
                              </div>
                              <div className="single_food_item media">
                                <img src="img/food_menu/single_food_2.png" className="mr-3" alt="..." />
                                <div className="media-body align-self-center">
                                  <h3>Roasted Marrow</h3>
                                  <p>They're wherein heaven seed hath nothing</p>
                                  <h5>$40.00</h5>
                                </div>
                              </div>
                              <div className="single_food_item media">
                                <img src="img/food_menu/single_food_3.png" className="mr-3" alt="..." />
                                <div className="media-body align-self-center">
                                  <h3>Summer Cooking</h3>
                                  <p>They're wherein heaven seed hath nothing</p>
                                  <h5>$40.00</h5>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-lg-6">
                              <div className="single_food_item media">
                                <img src="img/food_menu/single_food_4.png" className="mr-3" alt="..." />
                                <div className="media-body align-self-center">
                                  <h3>Easter Delight</h3>
                                  <p>They're wherein heaven seed hath nothing</p>
                                  <h5>$40.00</h5>
                                </div>
                              </div>
                              <div className="single_food_item media">
                                <img src="img/food_menu/single_food_5.png" className="mr-3" alt="..." />
                                <div className="media-body align-self-center">
                                  <h3>Tiener Schnitze</h3>
                                  <p>They're wherein heaven seed hath nothing</p>
                                  <h5>$40.00</h5>
                                </div>
                              </div>
                              <div className="single_food_item media">
                                <img src="img/food_menu/single_food_6.png" className="mr-3" alt="..." />
                                <div className="media-body align-self-center">
                                  <h3>Chicken Roast</h3>
                                  <p>They're wherein heaven seed hath nothing</p>
                                  <h5>$40.00</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* food_menu part end*/}
              {/*::chefs_part start::*/}
              <section className="chefs_part blog_item_section section_padding">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-5">
                      <div className="section_tittle">
                        
                        <h2>Our Experience Chefs</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-4">
                      <div className="single_blog_item">
                        <div className="single_blog_img">
                          <img src="img/team/chefs_1.png" alt="" />
                        </div>
                        <div className="single_blog_text text-center">
                          <h3>Adam Billiard</h3>
                          <p>Chef Master</p>
                          <div className="social_icon">
                            <a href="#"> <i className="ti-facebook" /> </a>
                            <a href="#"> <i className="ti-twitter-alt" /> </a>
                            <a href="#"> <i className="ti-instagram" /> </a>
                            <a href="#"> <i className="ti-skype" /> </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="single_blog_item">
                        <div className="single_blog_img">
                          <img src="img/team/chefs_2.png" alt="" />
                        </div>
                        <div className="single_blog_text text-center">
                          <h3>Fred Macyard</h3>
                          <p>Chef Master</p>
                          <div className="social_icon">
                            <a href="#"> <i className="ti-facebook" /> </a>
                            <a href="#"> <i className="ti-twitter-alt" /> </a>
                            <a href="#"> <i className="ti-instagram" /> </a>
                            <a href="#"> <i className="ti-skype" /> </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="single_blog_item">
                        <div className="single_blog_img">
                          <img src="img/team/chefs_3.png" alt="" />
                        </div>
                        <div className="single_blog_text text-center">
                          <h3>Justin Stuard</h3>
                          <p>Chef Master</p>
                          <div className="social_icon">
                            <a href="#"> <i className="ti-facebook" /> </a>
                            <a href="#"> <i className="ti-twitter-alt" /> </a>
                            <a href="#"> <i className="ti-instagram" /> </a>
                            <a href="#"> <i className="ti-skype" /> </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 d-none d-sm-block d-lg-none">
                      <div className="single_blog_item">
                        <div className="single_blog_img">
                          <img src="img/team/chefs_1.png" alt="" />
                        </div>
                        <div className="single_blog_text text-center">
                          <h3>Justin Stuard</h3>
                          <p>Chef Master</p>
                          <div className="social_icon">
                            <a href="#"> <i className="ti-facebook" /> </a>
                            <a href="#"> <i className="ti-twitter-alt" /> </a>
                            <a href="#"> <i className="ti-instagram" /> </a>
                            <a href="#"> <i className="ti-skype" /> </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/*::chefs_part end::*/}
              {/*::regervation_part start::*/}
              <section className="regervation_part section_padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="section_tittle">
                <h2>Post a recipe</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="regervation_part_iner">
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input type="email" className="form-control" id="inputEmail4" placeholder="Recipe name *" />
                    </div>
                    <div className="form-group col-md-6">
                      <input type="password" className="form-control" id="inputPassword4" placeholder="Recepie category *" />
                    </div>
                    <div className="form-group col-md-6">
                      <select className="form-control" id="Select">
                        <option value={1} selected>Persons *</option>
                        <option value={2}>for 2 persons</option>
                        <option value={3}>for 4 persons</option>
                        <option value={4}>for 6 persons</option>
                        <option value={5}>for 8 persons</option>
                      </select>
                    </div>
                    <div className="form-group col-md-6">
                      <input type="text" className="form-control" id="pnone" placeholder="Ingredient *" />
                    </div>
                  </div>
                  <div className="form-group col-md-12">
                    <textarea className="form-control" id="Textarea" rows={4} placeholder="Description *" defaultValue={""} />
                  </div>
                </form></div>
              <div className="regerv_btn">
                <a href="#" className="btn_4">Post Recipe</a>
              </div>
            </div>
          </div>
        </div>
      </section>
              {/*::regervation_part end::*/}
              {/*::review_part start::*/}
              <section className="review_part gray_bg section_padding">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-5">
                      <div className="section_tittle">
                        <p>Testimonials</p>
                        <h2>Customers Feedback</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-11">
                      <div className="client_review_part owl-carousel">
                        <div className="client_review_single media">
                          <div className="client_img align-self-center">
                            <img src="img/client/client_1.png" alt="" />
                          </div>
                          <div className="client_review_text media-body">
                            <p>Also made from. Give may saying meat there from heaven it lights face had is gathered
                              god dea earth light for life may itself shall whales made they're blessed whales
                              also made from give
                              may saying meat. There from heaven it lights face had amazing place</p>
                            <h4>Mosan Cameron, <span>Executive of fedex</span></h4>
                          </div>
                        </div>
                        <div className="client_review_single media">
                          <div className="client_img align-self-center">
                            <img src="img/client/client_1.png " alt="" />
                          </div>
                          <div className="client_review_text media-body">
                            <p>Also made from. Give may saying meat there from heaven it lights face had is gathered
                              god dea earth light for life may itself shall whales made they're blessed whales
                              also made from give
                              may saying meat. There from heaven it lights face had amazing place</p>
                            <h4>Mosan Cameron, <span>Executive of fedex</span></h4>
                          </div>
                        </div>
                        <div className="client_review_single media">
                          <div className="client_img align-self-center">
                            <img src="img/client/client_1.png" alt="" />
                          </div>
                          <div className="client_review_text media-body">
                            <p>Also made from. Give may saying meat there from heaven it lights face had is gathered
                              god dea earth light for life may itself shall whales made they're blessed whales
                              also made from give
                              may saying meat. There from heaven it lights face had amazing place</p>
                            <h4>Mosan Cameron, <span>Executive of fedex</span></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/*::review_part end::*/}
              {/*::exclusive_item_part start::*/}
              <section className="blog_item_section blog_section section_padding">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-5">
                      <div className="section_tittle">
                        <p>Recent News</p>
                        <h2>Latest From Blog</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-4">
                      <div className="single_blog_item">
                        <div className="single_blog_img">
                          <img src="img/blog/blog_1.png" alt="" />
                        </div>
                        <div className="single_blog_text">
                          <div className="date">
                            <a href="#" className="date_item">Apr 06, 2019 </a>
                            <a href="#" className="date_item"> <span>#</span> Food News </a>
                          </div>
                          <h3><a href="blog.html">Adama kind deep gatherin first over fter his great</a></h3>
                          <a href="#" className="btn_3">Read More <img src="img/icon/left_1.svg" alt="" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="single_blog_item">
                        <div className="single_blog_img">
                          <img src="img/blog/blog_2.png" alt="" />
                        </div>
                        <div className="single_blog_text">
                          <div className="date">
                            <a href="#" className="date_item">Apr 06, 2019 </a>
                            <a href="#" className="date_item"> <span>#</span> Food News </a>
                          </div>
                          <h3><a href="blog.html">Adama kind deep gatherin first over fter his great</a></h3>
                          <a href="#" className="btn_3">Read More <img src="img/icon/left_1.svg" alt="" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="single_blog_item">
                        <div className="single_blog_img">
                          <img src="img/blog/blog_3.png" alt="" />
                        </div>
                        <div className="single_blog_text">
                          <div className="date">
                            <a href="#" className="date_item">Apr 06, 2019 </a>
                            <a href="#" className="date_item"> <span>#</span> Food News </a>
                          </div>
                          <h3><a href="blog.html">Adama kind deep gatherin first over fter his great</a></h3>
                          <a href="#" className="btn_3">Read More <img src="img/icon/left_1.svg" alt="" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 d-none d-sm-block d-lg-none">
                      <div className="single_blog_item">
                        <div className="single_blog_img">
                          <img src="img/blog/blog_1.png" alt="" />
                        </div>
                        <div className="single_blog_text">
                          <div className="date">
                            <a href="#" className="date_item">Apr 06, 2019 </a>
                            <a href="#" className="date_item"> <span>#</span> Food News </a>
                          </div>
                          <h3><a href="blog.html">Adama kind deep gatherin first over fter his great</a></h3>
                          <a href="#" className="btn_3">Read More <img src="img/icon/left_1.svg" alt="" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/*::exclusive_item_part end::*/}
              {/* footer part start*/}
              <footer className="footer-area">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-3 col-sm-6 col-md-3 col-lg-3">
                      <div className="single-footer-widget footer_1">
                        <h4>About Us</h4>
                        <p>Heaven fruitful doesn't over for these theheaven fruitful doe over days
                          appear creeping seasons sad behold beari ath of it fly signs bearing
                          be one blessed after.</p>
                      </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-md-2 col-lg-3">
                      <div className="single-footer-widget footer_2">
                        <h4>Important Link</h4>
                        <div className="contact_info">
                          <ul>
                            <li><a href="#">WHMCS-bridge</a></li>
                            <li><a href="#"> Search Domain</a></li>
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Shopping Cart</a></li>
                            <li><a href="#"> Our Shop</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-md-3 col-lg-3">
                      <div className="single-footer-widget footer_2">
                        <h4>Contact us</h4>
                        <div className="contact_info">
                          <p><span> Address :</span>Hath of it fly signs bear be one blessed after </p>
                          <p><span> Phone :</span> +2 36 265 (8060)</p>
                          <p><span> Email : </span>info@colorlib.com </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-md-4 col-lg-3">
                      <div className="single-footer-widget footer_3">
                        <h4>Newsletter</h4>
                        <p>Heaven fruitful doesn't over lesser in days. Appear creeping seas</p>
                        <form action="#">
                          <div className="form-group">
                            <div className="input-group mb-3">
                              <input type="text" className="form-control" placeholder="Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address'" />
                              <div className="input-group-append">
                                <button className="btn" type="button"><i className="fas fa-paper-plane" /></button>
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
                        <p className="footer-text m-0">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                          Copyright © All rights reserved | This template is made with <i className="ti-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                      </div>
                      <div className="col-lg-4">
                        <div className="copyright_social_icon text-right">
                          <a href="#"><i className="fab fa-facebook-f" /></a>
                          <a href="#"><i className="fab fa-twitter" /></a>
                          <a href="#"><i className="ti-dribbble" /></a>
                          <a href="#"><i className="fab fa-behance" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          );
        }
      ;
    
      export default Banner
