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

                      <p>سلام!</p>
                      <br />
                      <p>
                        من خضری هستم و من یک توسعه دهنده بک اند وبم من در نوشتن
                        بک اند ها و API های سریع و عالی توانایی دارم من عاشق
                        چالش ها، فان ها، پروژه های خلاقانه و فن آوری های جدید
                        برای ساخت چیزای جدید هست
                      </p>
                      <p>این هم داستان زندگی فنی من هست!</p>
                      <p>
                        من از 19 سالگی برنامه نویسی کرده ام! من بنا به رشته
                        تحصیلی خودم (الکترونیک) شروع به یادگیری برنامه نویسی C++
                        کرده ام برای برنامه نویسی برد های الکترونیکی و به
                        یادگیری زبان Python برای برد های رزبری پای پرداختم تا با
                        هوش مصنوعی کار خودمو حرفه ای تر کنم (من آموزش ندیدم و
                        این یک نکته اصلی در یادگیری من است) به این ترتیب من به
                        چالش کشیده شدم تا بیشتر فکرو امتحان کنم. برای یادگیری,
                        درک و آزمایش چیزهای جدید سخت تر.
                      </p>
                      <p>
                        سپس در 23 سالگی بعد از علاقه مند شدن به حوضه وب شروع به
                        یادگیری PHP کردم و با ترجمه و سفارشی سازی اسکریپت های از
                        قبل اماده شده شروع کردم.
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
                                طراحی صفر تا صد سایت های اختصاصی
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
                                طراحی سیستم های اتوماسیون اداری
                              </h3>
                              <p className="case-item__caption">
                              با استفاده از بروزترین زبان های برنامه نویسی و استفاده از پروتکل های امنیتی جهانی
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
                                طراحی سایت های شرکتی
                              </h3>
                              <p className="case-item__caption">
                              برای شرکت خود وب سایتی داشته باشید که در وحله اول اعتماد ببنده رو جلب کنید
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
