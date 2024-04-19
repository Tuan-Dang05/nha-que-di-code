import './App.css';
import { useRef, useEffect } from 'react';
import Card from './HOME/Card/card';

import Footer from './HOME/Footer/footer';
import Footer2 from './HOME/Footer2/footer2';
import Main from './HOME/MainContent/main';
import SlideImg from './HOME/imgslide/slideImg';
import Service from './HOME/Our_service/service';
import Contruc from './HOME/contruction/contruc';
import Leader from './HOME/Leader/leader';
import Contact from './HOME/contact/contact';
import Product from './HOME/Product/product';
// import ProductCard from './HOME/Product/minigame/product_card';

// import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";
// import Signin from './component/SIGN_IN/signin';
// import Signup from './component/SIGN_UP/signup';
// import Header from './HOME/Header/header';
// daay la test
function App() {
  const familyRef = useRef(null)
  const confidenceRef = useRef(null)
  const serviceRef = useRef(null)
  const contructionRef = useRef(null)
  const leaderRef = useRef(null)
  const productRef = useRef(null)
  const family = () => {
    familyRef.current?.scrollIntoView({
      behavior: "smooth", block: "start", inline: "nearest"
    })
  }
  const confidence = () => {
    confidenceRef.current?.scrollIntoView({
      behavior: "smooth", block: "start", inline: "nearest"
    })
  }
  const service = () => {
    serviceRef.current?.scrollIntoView({
      behavior: "smooth", block: "start", inline: "nearest"
    })
  }
  const construc = () => {
    contructionRef.current?.scrollIntoView({
      behavior: "smooth", block: "center",
    })
  }
  const product = () => {
    productRef.current?.scrollIntoView({
      behavior: "smooth", block: "center",
    })
  }
  const leader = () => {
    leaderRef.current?.scrollIntoView({
      behavior: "smooth", block: "center",

    })
  }
  const anhtuan = () => {
    window.open("https://tuan-dang05.github.io/tuan_dang_profile/", "_blank");
  };
  const ducduy = () => {
    window.open("https://dduy07037.github.io/DuyPortfolio/", "_blank");
  };
  useEffect(() => {
    // Kích hoạt tooltip khi component được tải
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);
  
  // TOAST MESSENGER

    // Hàm hiển thị toast
    const ToastMessage = () => {
      const show = document.getElementById('show_toastmess');
    
      if (show.style.display !== 'block') { // Only proceed if toast isn't already visible
        show.style.opacity = 0; // Start with transparent toast
        show.style.display = 'block'; // Make it visible
        // Animate opacity for smooth fading in
        let opacity = 0;
        const fadeInInterval = setInterval(() => {
          opacity += 0.1; // Adjust increment for desired fading speed (0.1 for slower, 0.2 for faster)
          show.style.opacity = opacity;
    
          if (opacity >= 1) {
            clearInterval(fadeInInterval); // Stop animation when fully opaque
          }
        }, 20); // Adjust interval for desired animation speed (lower for faster, higher for slower)
    
        // Animate opacity for smooth fading out after a delay
        setTimeout(() => {
          let fadeOutOpacity = 1;
          const fadeOutInterval = setInterval(() => {
            fadeOutOpacity -= 0.1; // Adjust decrement for desired fading speed
            show.style.opacity = fadeOutOpacity;
    
            if (fadeOutOpacity <= 0) {
              clearInterval(fadeOutInterval);
              show.style.display = 'none'; // Hide toast when fully transparent
            }
          }, 20); // Adjust interval for desired animation speed
        }, 3000); // Adjust delay before fade out (in milliseconds)
      } else {
        console.log('Toast message already visible. Consider adding a close button for user interaction.');
      }
    };

  
  
  return (

    <div className="container-fluid App">
      {/* <BrowserRouter> */}
      {/* <Router> */}
      <div className='col-12 position-fixed' style={{ marginLeft: '-12px', marginTop: '0px', background: 'rgba(255,255,255)', zIndex: '10' }}>
        <div className='row border-info border-bottom border-2'>
          <div className='col-5 ps-3'>
            <img src="./img/logo.png" className='ms-1 logo' width={55} alt="logo" />
            <a href><img src='./img/name.png' width={170} className='ms-3 logo_nhaque' alt='nha_que_di_code' /></a>
          </div>

          <div className='col-7'>
            <nav className="navbar navbar-expand-lg float-end pe-2">

              <div className="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                  <div class="offcanvas-header">

                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
                  </div>
                  <div class="offcanvas-body">

                    <ul className="navbar-nav justify-content-center">
                      <li className="nav-item me-4 ">
                        <a className="nav-link active link-test_2 fs-6" aria-current="page" href="/home">
                          <span className='nav'>Nhà</span>
                        </a>
                      </li>
                      <li className="nav-item dropdown me-4">
                        <a className="nav-link link-test fs-6" data-bs-toggle="dropdown" aria-expanded="false" href='./'>
                          <span className='nav'>Portfolio</span>
                        </a>
                        <ul className="dropdown-menu">
                          <div className="flex-column" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <li><button className="nav-link fs-5" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" onClick={anhtuan}>Anh Tuấn</button></li>
                            <li><button className="nav-link fs-5" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false" onClick={ducduy} >Đức Duy</button></li>
                            <li><button className="nav-link fs-5" id="v-pills-duc-tab" data-bs-toggle="pill" data-bs-target="#v-pills-duc" type="button" role="tab" aria-controls="v-pills-duc" aria-selected="false" onClick={() => this.quangduc()}>Quang Đức</button></li>
                            <li><button className="nav-link fs-5" id="v-pills-dat-tab" data-bs-toggle="pill" data-bs-target="#v-pills-dat" type="button" role="tab" aria-controls="v-pills-dat" aria-selected="false" onClick={() => this.xuandat()}>Xuân Đạt</button></li>
                          </div>
                        </ul>
                      </li>
                      <li className="nav-item me-4">
                        <a className="nav-link link-test_4 fs-6" onClick={family}>
                          <span className='nav'>Thành Viên</span>
                        </a>
                      </li>
                      <li className="nav-item me-4">
                        <a className="nav-link link-test_5 fs-6" onClick={confidence}>
                          <span className='nav'>Lời tâm sự</span>
                        </a>
                      </li>
                      <li className="nav-item me-4">
                        <a className="nav-link link-test_6 fs-6 " onClick={service}>
                          <span className='nav'>Công cụ</span>
                        </a>
                      </li>
                      <li className="nav-item me-4">
                        <a className="nav-link link-test_7 fs-6" onClick={construc}>
                          <span className='nav'>Đội ngũ xây dựng</span>
                        </a>
                      </li>
                      <li className="nav-item me-4">
                        <a className="nav-link link-test_8 fs-6" onClick={product}>
                          <span className='nav'>Sản phẩm</span>
                        </a>
                      </li>
                      <li className="nav-item me-4">
                        <a className="nav-link link-test_3 fs-6" onClick={leader}>
                          <span className='nav'>Lãnh đạo</span>
                        </a>
                      </li>

                      <li className='icon me-4 fs-4 data-tooltip'>
                        {/* <Link to="/signin" ><i class="fas fa-sign-in-alt"></i> </Link> */}
                        <a href='https://login-form-rouge-rho.vercel.app/'
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Đăng nhập" data-animation="true" ><i className="fas fa-sign-in-alt mt-2"  ></i></a>
                      </li>
                      <li>
                        <button type='button' class="button" role="button"><a href='https://login-form-rouge-rho.vercel.app/' style={{ textDecoration: 'none' }}>Đăng nhập</a></button>
                      </li>
                    </ul>

                  </div>
                </div>

              </div>
            </nav>
            {/* TOAST MESS */}
            {/* <div className='' >
              <ProductCard showToast={ToastMessage}/>
              
            </div> */}
            <div className='show_toastmess' id='show_toastmess' >
            
            <div aria-live="polite" aria-atomic="true" className="position-relative bd-example-toasts rounded-3">
          <div className="toast-container p-3 top-0 end-0" id="toastPlacement" data-original-class="toast-container p-3">
            <div className="toast fade show" style={{backgroundColor:'#ffc021'}}>
              <div className="toast-header">
                {/* <svg className="bd-placeholder-img rounded me-2" width={20} height={20} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <rect width="100%" height="100%" fill="#007aff" />
                </svg> */}
                <img src='./img/gif/warning.gif' className='me-3' width={20} alt='warning.gif'/>
                <strong className="me-auto">Nhà quê đi code</strong>
                <small>Vừa xong</small>
                {/* <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" id='btn-close'/> */}
              </div>
              <div className="toast-body fs-5">
                Vui lòng đăng nhập!
              </div>
            </div>
          </div>
        </div>
            </div>
            {/* TOAST MESS */}

          </div>


        </div>
      </div>
      <div className='col-12' style={{ marginTop: '0px' }}>
        <Main />
      </div>
      <div className='col-12'>
        <Card ref={familyRef} text="Gia Đình Của Chúng Tớ" />
      </div>
      <div className='col-12'>
        <SlideImg ref={confidenceRef} confidence="Những lời tâm sự" />
      </div>
      <div className='col-12'>
        <Service ref={serviceRef} service="Công cụ chúng tớ sử dụng" />
      </div>
      <div className='col-12'>
        <Contruc ref={contructionRef} contruc="Đội ngũ xây dựng" />
      </div>
      <div className='col-12'>
        <Product showToast={ToastMessage} ref={productRef} product=""/>
      </div>
      <div className='col-12'>
        <Leader ref={leaderRef} leader="" />
      </div>
      <div className='col-12'>
        <Footer />
      </div>
      <div className='col-12'>
        <Contact />
      </div>
      <div className='col-12'>
        <Footer2 />
      </div>

      {/* <Routes>
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
