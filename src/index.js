import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// ترتیب فایل های استایل برای این اپلیکیشن مهم می باشد
import './index.css';
import './assets/styles/swiper.min.css';
import './assets/styles/bootstrap.min.css';
import './assets/styles/style.css';
import './assets/styles/rtl.css';
// پایان وارد شدن فایل های استایل کاستوم شده

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
