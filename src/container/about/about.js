import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

// صفحه درباره ما

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
                          <Link className="active" to="/about">
                            درباره من
                          </Link>
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

                    <div className="pb-0 pb-sm-2">
                      <h1 className="title title--h1 title__separate">
                        درباره من
                      </h1>

                      <p>از کجا شکل گرفت ... !</p>
                      <br />
                      <p>
                        توی دوران بچگی بعد اینکه فکر بمب ساختن منم از بین رفت
                        عاشق کارهای خفن برنامه نویسی الکترونیک شدم
                      </p>
                      <p>
                        و اما نه کامپیوتری بود و نه شخصی که منو وارد این راه
                        کنه! بعد ها گذشت و دبیرستان به سمت طراحی مدارات
                        الکترونیکی پیدا کردم و فعالیتم به عنوان طراح در شرکت های
                        مختلف شروع شد… چند سالی رو با این عنوان سپری میکردم
                      </p>
                      <p>
                        اما این رویای بچگی من نبود یک سایت میخواستم برای
                        الکترونیک درست کنم تا کسب و کار خودم رو راه بندازم ولی
                      </p>
                    </div>

                    <div className="box-inner pb-0">
                      <h2 className="title title--h3">چه کاری انجام می دهم</h2>
                      <div className="row">
                        <div className="col-12 col-lg-6">
                          <div className="case-item box box__second">
                            <img
                              src={require('../../assets/icons/icon-design.svg')}
                              className="case-item__icon"
                              alt=""
                            />
                            <div>
                              <h3 className="title title--h5">
                                طراحی رابط کاربری وب و اپلیکیشن
                              </h3>
                              <p className="case-item__caption">
                                ظاهر وب سایت و اپلیکیشن شما نشان دهنده برند شما
                                در برداشت اول می باشد. با طراحی رابط کاربری حرفه
                                ای بازدیدکنندگان و نرخ مشتریان خود را افزایش
                                دهید.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-lg-6">
                          <div className="case-item box box__second">
                            <img
                              className="case-item__icon"
                              src={require('../../assets/icons/icon-dev.svg')}
                              alt=""
                            />
                            <div>
                              <h3 className="title title--h5">
                                طراحی و صفر تا صد سایت های Php و Node.Js
                              </h3>
                              <p className="case-item__caption">
                                یک وب ‌سایت زیبا و کارآمد برای کسب و کار خود
                                طراحی کنید و پشتیبانی و توسعه وب سایت را با خیال
                                راحت واگذار کنید.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-lg-6">
                          <div className="case-item box box__second">
                            <img
                              className="case-item__icon"
                              src={require('../../assets/icons/icon-app.svg')}
                              alt=""
                            />
                            <div>
                              <h3 className="title title--h5">
                                برنامه های موبایل Android و iOS{' '}
                              </h3>
                              <p className="case-item__caption">
                                با استفاده از بروز ترین زبان های برنامه نویسی
                                ReactNative
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-lg-6">
                          <div className="case-item box box__second">
                            <img
                              className="case-item__icon"
                              src={require('../../assets/icons/icon-photo.svg')}
                              alt=""
                            />
                            <div>
                              <h3 className="title title--h5">
                                پلاگین نویسی وردپرس و ووکامرس
                              </h3>
                              <p className="case-item__caption">
                                وب سایت خود را ارتقا دهید! با پلاگین اختصاصی هر
                                قابلیت و سیستمی را به وب سایت خود اضافه کنید.
                              </p>
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
export default about;
