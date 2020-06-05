import React from "react";
import "./VideoPlayer.css";

import DonateCard from "./DonateCard.jsx"

class Container extends React.Component {

  componentWillReceiveProps = () => 
  {
  if(this.props.profile.story)
    document.getElementById("story").innerHTML = this.props.profile.story;
    this.forceUpdate();
  }

  render() {
    if(this.props.profile){
     var li = "", pics = this.props.profile.savedPics, video = this.props.profile.videoURL, story = this.props.profile.story;
    }

    return (
      <div className="container">
        <div className="uk-grid-large mt-4 uk-grid uk-grid-stack" uk-grid="true">
          <div className="uk-width-2-3@m uk-first-column">
            <ul id="course-intro-tab" className="uk-switcher mt-4">

              <li className="course-description-content">

                <div uk-slideshow="animation: slide">
                        <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex={-1} uk-slideshow="true">
                          <ul className="uk-slideshow-items">
                            {pics.map(function(pic, key){
                              return <li key={key+"pic"}><img src={pic} alt={key+"pic"} uk-cover="true" /></li>;
                            })}
                            {/* { video ? <li> <iframe width="100%" height="100%" src={video} frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} /> </li>: null } */}
                          </ul> <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slideshow-item="previous" /> <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slideshow-item="next" />
                        </div>
                </div>

                <h4> Description </h4>

                <p id="story">
                </p>

                {/* <div className="center videowrapper">
                  <iframe title="video" className="ql-video" frameBorder={0} allowFullScreen={true} src="https://www.youtube.com/embed/uT15kycq-3I?showinfo=0" />
                </div> */}

                <p>
                  consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                  wisi enim ad minim veniam, quis nostrud exerci
                </p>
                <h4> What you’ll learn </h4>
                <div className="uk-child-width-1-2@s uk-grid" uk-grid="true">
                  <div>
                    <ul className="list-2">
                      <li>Setting up the environment </li>
                      <li>Advanced HTML Practices</li>
                      <li>Build a portfolio website</li>
                      <li>Responsive Designs</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="list-2">
                      <li>Understand HTML Programming</li>
                      <li>Code HTML</li>
                      <li>Start building beautiful websites</li>
                    </ul>
                  </div>
                </div>
                <h4> Requirements </h4>
                <ul className="list-1">
                  <li>Any computer will work: Windows, macOS or Linux</li>
                  <li>Basic programming HTML and CSS.</li>
                  <li>Basic/Minimal understanding of JavaScript</li>
                </ul>
                <h4> Here is exactly what we cover in this course: </h4>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim laoreet dolore
                  magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                  quis nostrud exerci tation ullamcorper suscipit lobortis nisl
                  ut aliquip ex ea commodo consequat
                </p>
                <p>
                  {" "}
                  consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                  wisi enim ad minim veniam, quis nostrud exerci
                </p>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Nam liber tempor cum soluta
                  nobis eleifend option congue nihil imperdiet doming id quod
                  mazim placerat facer possim assum. Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                  wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                  consequat.
                </p>
              </li>
              {}
              <li>
                <h4 className="my-4"> Course Faq</h4>
                <ul className="course-faq uk-accordion" uk-accordion="true">
                  <li className="uk-open">
                    <a className="uk-accordion-title" href="#">
                      {" "}
                      Html Introduction{" "}
                    </a>
                    <div className="uk-accordion-content" aria-hidden="false">
                      <p>
                        {" "}
                        The primary goal of this quick start guide is to
                        introduce you to Unreal Engine 4`s (UE4) development
                        environment. By the end of this guide, you`ll know how
                        to set up and develop C++ Projects in UE4. This guide
                        shows you how to create a new Unreal Engine project, add
                        a new C++ class to it, compile the project, and add an
                        instance of a new class to your level. By the time you
                        reach the end of this guide, you`ll be able to see your
                        programmed Actor floating above a table in the level.{" "}
                      </p>
                    </div>
                  </li>
                  <li>
                    <a className="uk-accordion-title" href="#">
                      {" "}
                      Your First webpage
                    </a>
                    <div
                      className="uk-accordion-content"
                      hidden
                      aria-hidden="true"
                    >
                      <p>
                        {" "}
                        The primary goal of this quick start guide is to
                        introduce you to Unreal Engine 4`s (UE4) development
                        environment. By the end of this guide, you`ll know how
                        to set up and develop C++ Projects in UE4. This guide
                        shows you how to create a new Unreal Engine project, add
                        a new C++ class to it, compile the project, and add an
                        instance of a new class to your level. By the time you
                        reach the end of this guide, you`ll be able to see your
                        programmed Actor floating above a table in the level.{" "}
                      </p>
                    </div>
                  </li>
                  <li>
                    <a className="uk-accordion-title" href="#">
                      {" "}
                      Some Special Tags{" "}
                    </a>
                    <div
                      className="uk-accordion-content"
                      hidden
                      aria-hidden="true"
                    >
                      <p>
                        {" "}
                        The primary goal of this quick start guide is to
                        introduce you to Unreal Engine 4`s (UE4) development
                        environment. By the end of this guide, you`ll know how
                        to set up and develop C++ Projects in UE4. This guide
                        shows you how to create a new Unreal Engine project, add
                        a new C++ class to it, compile the project, and add an
                        instance of a new class to your level. By the time you
                        reach the end of this guide, you`ll be able to see your
                        programmed Actor floating above a table in the level.{" "}
                      </p>
                    </div>
                  </li>
                  <li>
                    <a className="uk-accordion-title" href="#">
                      {" "}
                      Html Introduction{" "}
                    </a>
                    <div
                      className="uk-accordion-content"
                      hidden
                      aria-hidden="true"
                    >
                      <p>
                        {" "}
                        The primary goal of this quick start guide is to
                        introduce you to Unreal Engine 4`s (UE4) development
                        environment. By the end of this guide, you`ll know how
                        to set up and develop C++ Projects in UE4. This guide
                        shows you how to create a new Unreal Engine project, add
                        a new C++ class to it, compile the project, and add an
                        instance of a new class to your level. By the time you
                        reach the end of this guide, you`ll be able to see your
                        programmed Actor floating above a table in the level.{" "}
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              {}
              <li>
                <h4> Announcement </h4>
                <div className="user-details-card">
                  <div className="user-details-card-avatar">
                    <img src="images/avatar-2.jpg" alt="true" />
                  </div>
                  <div className="user-details-card-name">
                    Stella Johnson{" "}
                    <span>
                      {" "}
                      Instructor <span> 1 year ago </span>{" "}
                    </span>
                  </div>
                </div>
                <article className="uk-article">
                  <p className="lead">
                    {" "}
                    Nam liber tempor cum soluta nobis eleifend option congue{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Nam liber tempor
                    cum soluta nobis eleifend option congue nihil imperdiet
                    doming id quod mazim placerat facer possim assum. Lorem
                    ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                    nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                    aliquip ex ea commodo consequat.
                  </p>
                </article>
              </li>
              {}
              <li>
                <div className="review-summary">
                  <h4 className="review-summary-title"> Student feedback </h4>
                  <div className="review-summary-container">
                    <div className="review-summary-avg">
                      <div className="avg-number">4.8</div>
                      <div className="review-star">
                        <div className="star-rating">
                          <span className="star" />
                          <span className="star" />
                          <span className="star" />
                          <span className="star" />
                          <span className="star half" />
                        </div>
                      </div>
                      <span>Course Rating</span>
                    </div>
                    <div className="review-summary-rating">
                      <div className="review-summary-rating-wrap">
                        <div className="review-bars">
                          <div className="full_bar">
                            <div
                              className="bar_filler"
                              style={{
                                width: "95%"
                              }}
                            />
                          </div>
                        </div>
                        <div className="review-stars">
                          <div className="star-rating">
                            <span className="star" />
                            <span className="star" />
                            <span className="star" />
                            <span className="star" />
                            <span className="star" />
                          </div>
                        </div>
                        <div className="review-avgs">95 %</div>
                      </div>
                      <div className="review-summary-rating-wrap">
                        <div className="review-bars">
                          <div className="full_bar">
                            <div
                              className="bar_filler"
                              style={{
                                width: "80%"
                              }}
                            />
                          </div>
                        </div>
                        <div className="review-stars">
                          <div className="star-rating">
                            <span className="star" />
                            <span className="star" />
                            <span className="star" />
                            <span className="star" />
                            <span className="star empty" />
                          </div>
                        </div>
                        <div className="review-avgs">80 %</div>
                      </div>
                      <div className="review-summary-rating-wrap">
                        <div className="review-bars">
                          <div className="full_bar">
                            <div
                              className="bar_filler"
                              style={{
                                width: "60%"
                              }}
                            />
                          </div>
                        </div>
                        <div className="review-stars">
                          <div className="star-rating">
                            <span className="star" />
                            <span className="star" />
                            <span className="star" />
                            <span className="star empty" />
                            <span className="star empty" />
                          </div>
                        </div>
                        <div className="review-avgs">60 %</div>
                      </div>
                      <div className="review-summary-rating-wrap">
                        <div className="review-bars">
                          <div className="full_bar">
                            <div
                              className="bar_filler"
                              style={{
                                width: "45%"
                              }}
                            />
                          </div>
                        </div>
                        <div className="review-stars">
                          <div className="star-rating">
                            <span className="star" />
                            <span className="star" />
                            <span className="star empty" />
                            <span className="star empty" />
                            <span className="star empty" />
                          </div>
                        </div>
                        <div className="review-avgs">45 %</div>
                      </div>
                      <div className="review-summary-rating-wrap">
                        <div className="review-bars">
                          <div className="full_bar">
                            <div
                              className="bar_filler"
                              style={{
                                width: "25%"
                              }}
                            />
                          </div>
                        </div>
                        <div className="review-stars">
                          <div className="star-rating">
                            <span className="star" />
                            <span className="star empty" />
                            <span className="star empty" />
                            <span className="star empty" />
                            <span className="star empty" />
                          </div>
                        </div>
                        <div className="review-avgs">25 %</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comments">
                  <h4>
                    Reviews <span className="comments-amount"> (4610) </span>{" "}
                  </h4>
                  <ul>
                    <li>
                      <div className="comments-avatar">
                        <img src="images/avatar-2.jpg" alt="true" />
                      </div>
                      <div className="comment-content">
                        <div className="comment-by">
                          Stella Johnson<span>Student</span>
                          <div className="comment-stars">
                            <div className="star-rating">
                              <span className="star" />
                              <span className="star" />
                              <span className="star" />
                              <span className="star" />
                              <span className="star" />
                            </div>
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat volutpat. Ut wisi
                          enim ad minim veniam, quis nostrud exerci tation
                          ullamcorper suscipit lobortis nisl ut aliquip ex ea
                          commodo consequat.
                        </p>
                        <div className="comment-footer">
                          <span> Was this review helpful? </span>
                          <button> Yes </button>
                          <button> No </button>
                          <a href="#"> Report</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="comments-avatar">
                        <img src="images/avatar-3.jpg" alt="true" />
                      </div>
                      <div className="comment-content">
                        <div className="comment-by">
                          {" "}
                          Adrian Mohani <span>Instructor </span>
                          <div className="comment-stars">
                            <div className="star-rating">
                              <span className="star" />
                              <span className="star" />
                              <span className="star" />
                              <span className="star" />
                              <span className="star half" />
                            </div>
                          </div>
                        </div>
                        <p>
                          {" "}
                          Ut wisi enim ad minim veniam, quis nostrud exerci
                          tation ullamcorper suscipit lobortis nisl ut aliquip
                          ex ea commodo consequat. Nam liber tempor cum soluta
                          nobis eleifend
                        </p>
                        <div className="comment-footer">
                          <span> Was this review helpful? </span>
                          <button> Yes </button>
                          <button> No </button>
                          <a href="#"> Report</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="comments-avatar">
                        <img src="images/avatar-3.jpg" alt="true" />
                      </div>
                      <div className="comment-content">
                        <div className="comment-by">
                          {" "}
                          Adrian Mohani <span>Student</span>
                          <div className="comment-stars">
                            <div className="star-rating">
                              <span className="star" />
                              <span className="star" />
                              <span className="star" />
                              <span className="star" />
                              <span className="star" />
                            </div>
                          </div>
                        </div>
                        <p>
                          {" "}
                          Nam liber tempor cum soluta nobis eleifend option
                          congue nihil imperdiet doming id quod mazim placerat
                          facer possim assum. Lorem ipsum dolor sit amet,
                          consectetuer adipiscing elit, sed diam nonummy nibh
                          euismod tincidunt ut laoreet dolore magna aliquam erat
                          volutpat.
                        </p>
                        <div className="comment-footer">
                          <span> Was this review helpful? </span>
                          <button> Yes </button>
                          <button> No </button>
                          <a href="#"> Report</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="comments-avatar">
                        <img src="images/avatar-2.jpg" alt="true" />
                      </div>
                      <div className="comment-content">
                        <div className="comment-by">
                          Stella Johnson<span>Student</span>
                          <div className="comment-stars">
                            <div className="star-rating">
                              <span className="star" />
                              <span className="star" />
                              <span className="star" />
                              <span className="star" />
                              <span className="star" />
                            </div>
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat volutpat. Ut wisi
                          enim ad minim veniam, quis nostrud exerci tation
                          ullamcorper suscipit lobortis nisl ut aliquip ex ea
                          commodo consequat.
                        </p>
                        <div className="comment-footer">
                          <span> Was this review helpful? </span>
                          <button> Yes </button>
                          <button> No </button>
                          <a href="#"> Report</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="comments">
                  <h3>Submit Review </h3>
                  <ul>
                    <li>
                      <div className="comments-avatar">
                        <img src="images/avatar-2.jpg" alt="true" />
                      </div>
                      <div className="comment-content">
                        <form className="uk-grid-small uk-grid" uk-grid="true">
                          <div className="uk-width-1-2@s">
                            <label className="uk-form-label">Name</label>
                            <input
                              className="uk-input"
                              type="text"
                              placeholder="Name"
                            />
                          </div>
                          <div className="uk-width-1-2@s">
                            <label className="uk-form-label">Email</label>
                            <input
                              className="uk-input"
                              type="text"
                              placeholder="Email"
                            />
                          </div>
                          <div className="uk-width-1-1@s">
                            <label className="uk-form-label">Comment</label>
                            <textarea
                              className="uk-textarea"
                              placeholder="Enter Your Comments her..."
                              style={{
                                height: "160px"
                              }}
                              defaultValue={""}
                            />
                          </div>
                          <div className="uk-grid-margin">
                            <input
                              type="submit"
                              defaultValue="submit"
                              className="btn btn-default"
                            />
                          </div>
                        </form>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>


          <div className="uk-width-1-3@m uk-grid-margin uk-first-column">
            <DonateCard />
          </div>

        </div>
      </div>
    );
  }
}

export default Container;
