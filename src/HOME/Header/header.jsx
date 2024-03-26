import React, { Component } from 'react';
import './header.css'
// day la test
class Header extends Component {
    showContact = () => {
        alert('0988282936')
    }
    anhtuan = () => {
        window.location.href = 'https://tuan-dang05.github.io/tuan/';
    };
    ducduy = () =>{
        window.location.href = 'https://tuan-dang05.github.io/duy/';
    }

    quangduc = () =>{
        window.location.href = 'https://tuan-dang05.github.io/duc/';
    }

    xuandat = () =>{
        window.location.href = 'https://tuan-dang05.github.io/dat/';
    }

    render() {
        return (
            <div className=''>
                <div className='row border-info border-bottom border-2'>
                    <div className='col-10 ps-3'>
                        <img src="./img/logo.png" className='ms-1' width={55} alt="logo" />
                        <a href={<Header />}><img src='./img/name.png' width={170} className='ms-3' alt='nha_que_di_code' /></a>
                    </div>
                    <div className='col-2'>
                        <nav className="navbar navbar-expand-lg float-end pe-2">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item me-4">
                                            <a className="nav-link active link-test_2 fs-6" aria-current="page" href={<Header />}>Home</a>
                                        </li>
                                        <li className="nav-item dropdown me-4">
                                            <button className="nav-link link-test fs-6" data-bs-toggle="dropdown" aria-expanded="false">
                                                Members
                                            </button>
                                            <ul className="dropdown-menu">
                                                <div className="flex-column" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                    <li><button className="nav-link fs-5" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" onClick={() => this.anhtuan()}>Anh Tuấn</button></li>
                                                    <li><button className="nav-link fs-5" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false" onClick={() => this.ducduy()} >Đức Duy</button></li>
                                                    <li><button className="nav-link fs-5" id="v-pills-duc-tab" data-bs-toggle="pill" data-bs-target="#v-pills-duc" type="button" role="tab" aria-controls="v-pills-duc" aria-selected="false" onClick={() => this.quangduc()}>Quang Đức</button></li>
                                                    <li><button className="nav-link fs-5" id="v-pills-dat-tab" data-bs-toggle="pill" data-bs-target="#v-pills-dat" type="button" role="tab" aria-controls="v-pills-dat" aria-selected="false" onClick={() => this.xuandat()}>Xuân Đạt</button></li>
                                                </div>
                                            </ul>
                                        </li>
                                        <li className="nav-item me-4">
                                            <button className="nav-link link-test_3 fs-6" onClick={this.showContact}>Contact</button>
                                        </li>
                                        <li className='icon mt-1 me-4 fs-5'>
                                            <i class="fas fa-bell"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex={0}></div>
                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0"></div>
                    <div class="tab-pane fade" id="v-pills-duc" role="tabpanel" aria-labelledby="v-pills-duc-tab" tabindex="0"></div>
                    <div class="tab-pane fade" id="v-pills-dat" role="tabpanel" aria-labelledby="v-pills-dat-tab" tabindex="0"></div>
                </div>
            </div>
        );
    }
}

export default Header;
