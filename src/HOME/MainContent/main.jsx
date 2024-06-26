import React, { Component } from 'react';
import AOS from 'aos';
import './main.css';
// day la test
class Main extends Component {
    componentDidMount() {
        AOS.init();
    }
    render() {
        return (
            <div>
                <div className='video' style={{ marginLeft: '0px' }}>
                    {/* <video className="object-fit-cover"  width={'100%'} muted autoPlay loop>
                    <source src='./video/bg2.mp4' type='video/mp4' />
                </video> */}
                    <img src='./video/bg2.gif' alt='' className="object-fit-cover village" width={'100%'} />
                    <div className='nha_que text-center text-light' style={{ position: 'absolute', top: '40rem', left: '50%', transform: 'translate(-50%,-20rem)' }}><p>NHÀ QUÊ ĐI CODE</p></div>
                    <div className='text-light hoi_anh_em' style={{ position: 'absolute', top: '50rem', left: '50%', transform: 'translate(-50%,-20rem)', fontSize: 'clamp(15px,2vw,30px)' }}><p>Hội anh em nhà quê lên phố</p></div>
                    {/* <button className='comic-button' type='button' style={{ position: 'absolute', top: '37rem', left: '50%', transform: 'translate(-50%,0)' }}>Khám phá ngay!</button> */}
                </div>
            </div>
        );
    }
}

export default Main;
