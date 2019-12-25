import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

// صفحه تماس با ما

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
                          <Link to="/portfolio">نمونه کار ها</Link>
                        </li>

                        <li className="nav__item">
                          <Link className="active" to="/contact">
                            تماس با من
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="pb-2">
                      <h1 className="title title--h1 title__separate">
                        تماس با من
                      </h1>
                    </div>

                    <form
                      id="contact-form"
                      className="contact-form"
                      data-toggle="validator"
                    >
                      <div className="row">
                        <div className="form-group col-12 col-md-6">
                          <i className="font-icon icon-user"></i>
                          <input
                            type="text"
                            className="input input__icon form-control"
                            id="nameContact"
                            name="nameContact"
                            placeholder="نام و نام خانوادگی"
                            required="required"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group col-12 col-md-6">
                          <i className="font-icon icon-envelope"></i>
                          <input
                            type="email"
                            className="input input__icon form-control"
                            id="emailContact"
                            name="emailContact"
                            placeholder="آدرس ایمیل"
                            required="required"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group col-12 col-md-12">
                          <textarea
                            className="textarea form-control"
                            id="messageContact"
                            name="messageContact"
                            placeholder="پیام ..."
                            rows="4"
                            required="required"
                          ></textarea>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-md-6 order-2 order-md-1 text-center text-md-left">
                          <div id="validator-contact" className="hidden"></div>
                        </div>
                        <div className="col-12 col-md-6 order-1 order-md-2 text-left">
                          <button type="submit" className="btn">
                            <i className="font-icon icon-send"></i> ارسال پیام
                          </button>
                        </div>
                      </div>
                    </form>
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
