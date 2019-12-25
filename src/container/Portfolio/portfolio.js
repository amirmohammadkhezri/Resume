import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

// صفحه نمونه کار ها

class about extends Component {
  render() {
    return (
      <Wrapper>
        <div className="bg-triangles">
          <main className="main">
            <div className="container gutter-top">
              <div className="row sticky-parent">
                {/* وارد شدن لایه اصلی سیستم */}
                <Layout />
                {/* پایان لایه اصلی */}
                <div className="col-12 col-md-12 col-xl-9">
                  <div className="box pb-0">
                    <div className="menu">
                      {/* منو */}
                      <ul className="nav">
                        <li className="nav__item">
                          <Link to="/about">درباره من</Link>
                        </li>
                        <li className="nav__item">
                          <Link to="/">رزومه من</Link>
                        </li>
                        <li className="nav__item">
                          <Link className="active" to="/portfolio">
                            نمونه کار ها
                          </Link>
                        </li>

                        <li className="nav__item">
                          <Link to="/contact">تماس با من</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="pb-2">
                      <h1 className="title title--h1 title__separate">
                        نمونه کار ها
                      </h1>
                    </div>

                    <div className="pb-0">
                      <div className="gallery-grid js-masonry js-filter-container">
                        <div className="gutter-sizer"></div>
                        <div className="select">
                          <div
                            className="gallery-grid js-masonry js-filter-container"
                            // style="position: relative; height: 761.4px;"
                          >
                            <div
                              className="gutter-sizer"
                              // style="position: absolute; left: 0px; top: 0px;"
                            ></div>
                            <figure className="gallery-grid__item category-concept">
                              <div className="gallery-grid__image-wrap">
                                <Link to="/singlepost">
                                  <img
                                    src={require('../../assets/images/salam1.jpg')}
                                    className="gallery-grid__image cover lazyload"
                                    data-zoom
                                    alt=""
                                  />
                                </Link>
                              </div>
                              <figcaption className="gallery-grid__caption">
                                <h4 className="title gallery-grid__title">
                                  نمونه کار شماره 1
                                </h4>
                              </figcaption>
                            </figure>

                            <div
                              className="gutter-sizer"
                              // style="position: absolute; left: 0px; top: 0px;"
                            ></div>
                            <figure className="gallery-grid__item category-concept">
                              <div className="gallery-grid__image-wrap">
                                <Link to="/singlepost2">
                                  <img
                                    src={require('../../assets/images/yaraplus1.jpg')}
                                    className="gallery-grid__image cover lazyload"
                                    data-zoom
                                    alt=""
                                  />
                                </Link>
                              </div>
                              <figcaption className="gallery-grid__caption">
                                <h4 className="title gallery-grid__title">
                                  نمونه کار شماره 2
                                </h4>
                              </figcaption>
                            </figure>

                            <div
                              className="gutter-sizer"
                              // style="position: absolute; left: 0px; top: 0px;"
                            ></div>
                            <figure className="gallery-grid__item category-concept">
                              <div className="gallery-grid__image-wrap">
                                <Link to="/singlepost3">
                                  <img
                                    src={require('../../assets/images/spotify1.jpg')}
                                    className="gallery-grid__image cover lazyload"
                                    data-zoom
                                    alt=""
                                  />
                                </Link>
                              </div>
                              <figcaption className="gallery-grid__caption">
                                <h4 className="title gallery-grid__title">
                                  نمونه کار شماره 3
                                </h4>
                              </figcaption>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <footer className="footer">© 2019 AmirMohammadKhezri</footer>
                </div>
              </div>
            </div>
          </main>
        </div>
      </Wrapper>
    );
  }
}
export default about;
