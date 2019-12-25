import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

// صفحه رزومه

class Resume extends Component {
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
                          <Link className="active" to="/">
                            رزومه من
                          </Link>
                        </li>
                        <li className="nav__item">
                          <Link to="/portfolio">نمونه کار ها</Link>
                        </li>

                        <li className="nav__item">
                          <Link to="/contact">تماس با من</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="pb-0">
                      <div className="row">
                        <div className="col-12 col-lg-6">
                          <h2 className="title title--h3">
                            <img
                              className="title-icon"
                              src={require('../../assets/icons/icon-education.svg')}
                              alt=""
                            />
                            تحصیلات
                          </h2>
                          <div className="timeline">
                            <article className="timeline__item">
                              <h5 className="title title--h5 timeline__title">
                                دوره کاردانی دانشگاه شهید منتظری مشهد{' '}
                              </h5>
                              <span className="timeline__period">
                                1391-1393
                              </span>
                              <p className="timeline__description">
                                فارغ التحصیل رشته الکترونیک عمومی
                              </p>
                            </article>

                            <article className="timeline__item">
                              <h5 className="title title--h5 timeline__title">
                                دوره کارشناسی دانشگاه شهید منتظری مشهد
                              </h5>
                              <span className="timeline__period">
                                1393 — 1395
                              </span>
                              <p className="timeline__description">
                                فارغ التحصیل رشته تکنولوژی الکترونیک
                              </p>
                            </article>

                            <article className="timeline__item">
                              <h5 className="title title--h5 timeline__title">
                                دبیرستان هنر و طراحی
                              </h5>
                              <span className="timeline__period">
                                1390 — 1392
                              </span>
                              <p className="timeline__description">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                صنعت چاپ و با استفاده از طراحان گرافیک است.{' '}
                              </p>
                            </article>
                          </div>
                        </div>

                        <div className="col-12 col-lg-6">
                          <h2 className="title title--h3">
                            <img
                              className="title-icon"
                              src={require('../../assets/icons/icon-experience.svg')}
                              alt=""
                            />
                            تجربیات
                          </h2>
                          <div className="timeline">
                            <article className="timeline__item">
                              <h5 className="title title--h5 timeline__title">
                                برنامه نویس سمت سرور - BackEnd Developer{' '}
                              </h5>
                              <span className="timeline__period">
                                1397 — اکنون
                              </span>
                              <p className="timeline__description">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                صنعت چاپ و با استفاده از طراحان گرافیک است.{' '}
                              </p>
                            </article>

                            <article className="timeline__item">
                              <h5 className="title title--h5 timeline__title">
                                برنامه نویس سمت کاربر - FrontEnd Developer{' '}
                              </h5>
                              <span className="timeline__period">
                                1395 — 1397
                              </span>
                              <p className="timeline__description">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                صنعت چاپ و با استفاده از طراحان گرافیک است.{' '}
                              </p>
                            </article>

                            <article className="timeline__item">
                              <h5 className="title title--h5 timeline__title">
                                مهندس الکترونیک - Electronic Engineer
                              </h5>
                              <span className="timeline__period">
                                1390 — 1395
                              </span>
                              <p className="timeline__description">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                صنعت چاپ و با استفاده از طراحان گرافیک است.{' '}
                              </p>
                            </article>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="box-inner box-inner--rounded">
                      <div className="row">
                        <div className="col-12 col-lg-6">
                          <h2 className="title title--h3">Back-End Skills</h2>
                          <div className="box box__second">
                            <div className="progress">
                              <div
                                className="progress1"
                                role="progressbar"
                                aria-valuenow="80"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div className="progress-text">
                                  <span>Laravel</span>
                                  <span>80%</span>
                                </div>
                              </div>
                            </div>

                            <div className="progress">
                              <div
                                className="progress2"
                                role="progressbar"
                                aria-valuenow="80"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div className="progress-text">
                                  <span>Php</span>
                                  <span>78%</span>
                                </div>
                              </div>
                            </div>

                            <div className="progress">
                              <div
                                className="progress3"
                                role="progressbar"
                                aria-valuenow="80"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div className="progress-text">
                                  <span>OOP</span>
                                  <span>65%</span>
                                </div>
                              </div>
                            </div>

                            <div className="progress">
                              <div
                                className="progress4"
                                role="progressbar"
                                aria-valuenow="80"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div className="progress-text">
                                  <span>MVC</span>
                                  <span>80%</span>
                                </div>
                              </div>
                            </div>

                            <div className="progress">
                              <div
                                className="progress5"
                                role="progressbar"
                                aria-valuenow="80"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div className="progress-text">
                                  <span>Node.js</span>
                                  <span>50%</span>
                                </div>
                              </div>
                            </div>

                            <div className="progress">
                              <div
                                className="progress6"
                                role="progressbar"
                                aria-valuenow="80"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div className="progress-text">
                                  <span>Api</span>
                                  <span>60%</span>
                                </div>
                              </div>
                            </div>

                            <div className="progress">
                              <div
                                className="progress7"
                                role="progressbar"
                                aria-valuenow="80"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div className="progress-text">
                                  <span>My Sql</span>
                                  <span>80%</span>
                                </div>
                              </div>
                            </div>

                            <div className="progress">
                              <div
                                className="progress8"
                                role="progressbar"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div className="progress-text">
                                  <span>Sql Server</span>
                                  <span>60%</span>
                                </div>
                              </div>
                            </div>

                            <div className="progress">
                              <div
                                className="progress9"
                                role="progressbar"
                                aria-valuenow="90"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div className="progress-text">
                                  <span>Design Patern</span>
                                  <span>50%</span>
                                </div>
                              </div>
                            </div>

                            <div className="progress">
                              <div
                                className="progress10"
                                role="progressbar"
                                aria-valuenow="50"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div className="progress-text">
                                  <span>Git</span>
                                  <span>65%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-lg-6 mt-4 mt-lg-0">
                          <h2 className="title title--h3">Front-End Skills</h2>
                          <div className="box box__second">
                            <div className="progress">
                              <div
                                className="progress11"
                                role="progressbar"
                                aria-valuenow="70"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div className="progress-text">
                                  <span>Html 5 & Css 3</span>
                                  <span>40%</span>
                                </div>
                              </div>
                            </div>

                            <div className="progress">
                              <div
                                className="progress12"
                                role="progressbar"
                                aria-valuenow="70"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div className="progress-text">
                                  <span>Bootstrap</span>
                                  <span>50%</span>
                                </div>
                              </div>
                            </div>

                            <div className="progress">
                              <div
                                className="progress13"
                                role="progressbar"
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div className="progress-text">
                                  <span>Javascript</span>
                                  <span>80%</span>
                                </div>
                              </div>
                            </div>

                            <div className="progress">
                              <div
                                className="progress14"
                                role="progressbar"
                                aria-valuenow="30"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div className="progress-text">
                                  <span>React</span>
                                  <span>77%</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <h2 className="title title--h3">Other Skills</h2>
                          <div className="box box__second">
                            <div className="progress">
                              <div
                                className="progress15"
                                role="progressbar"
                                aria-valuenow="70"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div className="progress-text">
                                  <span>Language English</span>
                                  <span>46%</span>
                                </div>
                              </div>
                            </div>

                            <div className="progress">
                              <div
                                className="progress16"
                                role="progressbar"
                                aria-valuenow="70"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div className="progress-text">
                                  <span>Time Managment</span>
                                  <span>78%</span>
                                </div>
                              </div>
                            </div>

                            <div className="progress">
                              <div
                                className="progress17"
                                role="progressbar"
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div className="progress-text">
                                  <span>SEO</span>
                                  <span>43%</span>
                                </div>
                              </div>
                            </div>

                            <div className="progress">
                              <div
                                className="progress18"
                                role="progressbar"
                                aria-valuenow="30"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div className="progress-text">
                                  <span>Problem Solving</span>
                                  <span>74%</span>
                                </div>
                              </div>
                            </div>
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
export default Resume;
