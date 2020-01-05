import React from 'react';
import Wrapper from '../../hoc/Wrapper';

// لایه ثابت سیستم - لایه ساید بار
const Layout = props => (
  <Wrapper>
    <aside className="col-12 col-md-12 col-xl-3">
      <div className="sidebar box pb-0 sticky-column">
        {/* عکس پروفایل */}
        <img
          className="avatar avatar--180"
          alt="google"
          src={require('../../assets/img/avatar-1.jpg')}
        />
        <div className="text-center">
          <h3 className="title title--h4">
            <span className="weight--500"></span>امیر محمد خضری
          </h3>
          <div className="badge badge--gray">برنامه نویس وب</div>

          <div className="social">
            <a
              className="social__link"
              href="https://github.com/amirmohammadkhezri"
            >
              <i className="font-icon icon-github"></i>
            </a>
            <a
              className="social__link"
              href="https://www.linkedin.com/in/amir-mohammad-khezri-6b819a19b"
            >
              <i className="font-icon icon-linkedin2"></i>
            </a>
            <a
              className="social__link"
              href="https://www.instagram.com/armin__khezri/"
            >
              <i className="font-icon icon-instagram"></i>
            </a>
          </div>
        </div>

        <div className="sidebar__info box-inner box-inner--rounded">
          <ul className="contacts-block">
            <li
              className="contacts-block__item"
              data-toggle="tooltip"
              data-placement="top"
              title="تاریخ تولد"
            >
              <i className="font-icon icon-calendar"></i>3 دی 1373
            </li>
            <li
              className="contacts-block__item"
              data-toggle="tooltip"
              data-placement="top"
              title="آدرس"
            >
              <i className="font-icon icon-location"></i>ایران, مشهد
            </li>
            <li
              className="contacts-block__item"
              data-toggle="tooltip"
              data-placement="top"
              title="ایمیل"
            >
              <a href="mailto:example@mail.com">
                <i className="font-icon icon-envelope"></i>
                BueCode@gmail.com
              </a>
            </li>
            <li
              className="contacts-block__item"
              data-toggle="tooltip"
              data-placement="top"
              title="تلفن"
            >
              <i className="font-icon icon-phone"></i>09367788810
            </li>
          </ul>
          <a
            className="btn btn--blue-gradient"
            href={require('../../assets/img/resume.pdf')}
            download
          >
            <i className="font-icon icon-download"></i> دانلود رزومه
          </a>
        </div>
      </div>
    </aside>
  </Wrapper>
);

export default Layout;
