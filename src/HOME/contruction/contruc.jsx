import React, { forwardRef } from 'react';
import './contruc.css';
const Contruc = ({contruc},ref) => {
    return (
        <div>
            {/* <!-- about us --> */}
            <section className="aboutUs">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5" data-aos="fade-up" data-aos-duration={1000}>
                            <img src="./img/contruction.jpg" className="img-fluid img-thumbnail mt-5" alt='' style={{borderRadius:'25px'}} />
                        </div>
                        <div className="col-lg-7 ps-4" data-aos="fade-up" data-aos-duration={1500}>
                            <p style={{ color: '#64ccc5', marginTop: '10rem', fontSize: 50 }} ref={ref}>
                                {contruc}
                            </p>
                            <h1 className="text-dark" style={{ width: '100%', fontSize: '3rem' }}>
                                Sứ mệnh cốt lõi đằng sau công việc chúng tôi!
                            </h1>
                            <p style={{ color: 'black', width: '80%' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit metus ut
                                tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.
                            </p>
                            <div className="angka" style={{ display: 'flex', gap: '3rem' }}>
                                <div className="angka1">
                                    <h2 style={{ color: '#64ccc5' }}>4 +</h2>
                                    <p className="text-dark">Thành viên nhóm</p>
                                </div>
                                <div className="angka1">
                                    <h2 style={{ color: '#64ccc5' }}>330 +</h2>
                                    <p className="text-dark">Thời gian hoàn thành                                                                                                                      (giờ)</p>
                                </div>
                            </div>
                            <div className="start mt-3">
                                <a href className='btn-hover color-7 p-3'>Xem chi tiết về chúng tớ!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default forwardRef(Contruc);
