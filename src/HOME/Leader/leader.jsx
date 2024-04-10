import React, { forwardRef } from 'react';
import './leader.css';
const Leader = ({leader},ref) => {
    return (
        <div>
            <section className="user mt-5" data-aos="fade-up" data-aos-duration={1500} ref={ref}>{leader}
                <div className="container" >
                    <div className="kartu-user mt-5" >
                        <div className="foto-user text-center mt-5">
                            <img src="./img/leader.jpg" alt="leader_tuan" />
                        </div>
                        <p className="text-center mt-5 mb-2" style={{ fontWeight: 700, fontSize: 25 }} >
                            “Là một leader của đội <span style={{color:'red'}}>Nhà quê đi code</span> tớ muốn cả team cùng nhau phát triển hơn và đạt nhiều thành tựu trong tương lai!”
                        </p>
                        <p className="mt-4 fw-bold text-center" style={{ fontSize: 40 }}>
                            Tuấn Đặng
                        </p>
                        <p className="text-center" style={{ marginTop: '-1rem' }}>@Tuan_developer</p>
                        <div className="iconbungkus mt-4 mb-5" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
                            <a href='https://www.facebook.com/tundz05' target='_blank' rel="noopener noreferrer">
                            <div className="kiri" style={{ backgroundColor: 'black', padding: '0.5rem 1rem', color: 'white', borderRadius: '50%',cursor:'pointer' }}>
                            <i className="fab fa-facebook-f"></i>
                            </div>
                            </a>
                            <a href='https://github.com/Tuan-Dang05'  target='_blank' rel="noopener noreferrer">
                            <div className="kiri" style={{ backgroundColor: 'black', padding: '0.5rem 0.8rem', color: 'white', borderRadius: '50%',cursor:'pointer' }}>
                        <i className="fab fa-github"></i>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default forwardRef(Leader);
