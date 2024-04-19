import React from 'react';
import './member.css';
const Member = () => {
    const tuan = function () {
        window.location.href = 'https://tuan-dang05.github.io/tuan/';
    }
    const duc = function () {
        window.location.href = 'https://tuan-dang05.github.io/duc/';
    }
    const duy = function () {
        window.location.href = 'https://tuan-dang05.github.io/duy/';
    }
    const dat = function () {
        window.location.href = 'https://tuan-dang05.github.io/dat/';
    }
    return (
        <div>
            {/* Anh Tuan */}
            <div className="cards" >
                <div className="card tuan" data-aos="fade-up" data-aos-duration="1500" onClick={() => tuan()}>
                    <div className="wrapper">
                        <img src="./img/card/Tuan_dang.jpg" alt="" className="cover-image" />
                    </div>
                    <p className="title fs-5">Đặng Anh Tuấn</p>
                    <img style={{ width: '200px' }} src="./img/card/tuan.png" alt="" className="character" />
                </div>
                {/* Quang Duc */}
                <div className="card duc" data-aos="fade-down" data-aos-duration="1500" onClick={() => duc()}>
                    <div className="wrapper">
                        <img src="./img/card/quang_duc.jpg" alt="" className="cover-image" />
                    </div>
                    <p className="title fs-4">Lê Quang Đức</p>
                    <img style={{ width: '480px', display: 'inline-block', left: '-190px' }} src="./img/card/duc.png" alt="" className="character" />
                </div>
                {/* DUC DUY */}
                <div className="card duy" data-aos="fade-up" data-aos-duration="1500" onClick={() => duy()}>
                    <div className="wrapper">
                        <img src="./img/card/duc_duy.jpg" alt="" className="cover-image" />
                    </div>
                    <p className="title fs-4">Đinh Đức Duy</p>
                    <img style={{ width: '370px', display: 'inline-block', left: '-100px' }} src="./img/card/duy.png" alt="" className="character" />
                </div>

                {/* Xuan Dat */}
                <div className="card dat" data-aos="fade-down" data-aos-duration="1000" onClick={() => dat()}>
                    <div className="wrapper">
                        <img src="./img/card/xuan_dat.jpg" alt="" className="cover-image" />
                    </div>
                    <p className="title">Lê Xuân Đạt</p>
                    <img style={{ width: '150px', display: 'inline-block', left: '-10px' }} src="./img/card/dat.png" alt="" className="character" />
                </div>
            </div>

        </div>
    );
}

export default Member;
