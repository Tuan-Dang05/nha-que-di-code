import './App.css';
import { useRef } from 'react';
import Card from './HOME/Card/card';
import Footer from './HOME/Footer/footer';
import Footer2 from './HOME/Footer2/footer2';
import Main from './HOME/MainContent/main';
import SlideImg from './HOME/imgslide/slideImg';
import Service from './HOME/Our_service/service';
import Contruc from './HOME/contruction/contruc';
import Leader from './HOME/Leader/leader';
import Contact from './HOME/contact/contact';
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

  return (

    <div className="container-fluid App">
      {/* <BrowserRouter> */}
      {/* <Router> */}
        <div className='col-12 position-fixed' style={{ marginLeft: '-12px', marginTop: '0px', background: 'rgba(255,255,255)', zIndex: '10' }}>
          <div className='row border-info border-bottom border-2'>
            <div className='col-6 ps-3'>
              <img src="./img/logo.png" className='ms-1 logo' width={55} alt="logo" />
              <a href><img src='./img/name.png' width={170} className='ms-3 logo_nhaque' alt='nha_que_di_code' /></a>
            </div>

            <div className='col-6'>
              <nav className="navbar navbar-expand-lg float-end pe-2">
                <div className="container-fluid">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item me-4">
                        <a className="nav-link active link-test_2 fs-6" aria-current="page" href="/home">Home</a>
                      </li>
                      <li className="nav-item dropdown me-4">
                        <button className="nav-link link-test fs-6" data-bs-toggle="dropdown" aria-expanded="false">
                          Members
                        </button>
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
                        <button className="nav-link link-test_4 fs-6 " onClick={family}>
                          My family
                        </button>
                      </li>
                      <li className="nav-item me-4">
                        <button className="nav-link link-test_5 fs-6 " onClick={confidence}>
                          Confidence
                        </button>
                      </li>
                      <li className="nav-item me-4">
                        <button className="nav-link link-test_6 fs-6 " onClick={service}>
                          Our service
                        </button>
                      </li>
                      <li className="nav-item me-4">
                        <button className="nav-link link-test_7 fs-6 " onClick={construc}>
                          Construction
                        </button>
                      </li>
                      <li className="nav-item me-4">
                        <button className="nav-link link-test_3 fs-6" onClick={leader}>
                          Leader
                        </button>
                      </li>
                      
                        <li className='icon me-4 fs-4'>
                          {/* <Link to="/signin" ><i class="fas fa-sign-in-alt"></i> </Link> */}
                          <a href='https://login-form-rouge-rho.vercel.app/'><i class="fas fa-sign-in-alt"></i></a>
                        </li>
                      
                      

                    </ul>
                  </div>
                </div>
              </nav>
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
