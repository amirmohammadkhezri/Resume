import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

// صفحه نمونه کار شماره 3

class Singlepost3 extends Component {
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
                          <Link to="/contact">تماس با من</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="pb-3">
                      <header className="header-post">
                        <h1 className="title title--h1">spotify</h1>
                      </header>

                      <div>
                        <p className="right-p">
                          {' '}
                          طراحی رابط کاربری وب سایت spotify و پیاده سازی رابط
                          کاربری طراحی شده در بستر :
                        </p>
                        <ul>
                          <li>
                            <span>Node.js</span>
                          </li>

                          <li>
                            <span>Material-Ui</span>
                          </li>
                          <li>
                            <span>React</span>
                          </li>
                        </ul>
                        <p>
                          <img
                            className="title-icon-icon"
                            src={require('../../assets/images/spotify.jpg')}
                            alt=""
                          />
                        </p>
                      </div>

                      <footer className="footer">
                        © 2019 AmirMohammadKhezri
                      </footer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </Wrapper>
    );
  }
}
export default Singlepost3;
