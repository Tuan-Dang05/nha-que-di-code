import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
const Contact = () => {
    const form = useRef();
    // const check = () => {
    //     var check = document.getElementById('check_value').value;
        
    // }
    const sendEmail = (e) => {
        var check = document.getElementById('check_value').value;
        e.preventDefault();
        
        if (check !== ''){
            document.getElementById('check_err2').innerHTML = 'Email đã được gửi đi!'
            document.getElementById('check_err').innerHTML = ''
            e.preventDefault();
            emailjs
            .sendForm('service_j1mhyuc', 'template_ghg7094', form.current, {
                publicKey: 'rOx95VhffxYSvu-lc',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        }else{
            document.getElementById('check_err').innerHTML = 'Vui lòng nhập một vài kí tự !'
            document.getElementById('check_err2').innerHTML = ''
        }
        
    }
    return (
        <div>
            {/* <!-- footer --> */}
            <section className="footerweb">
                <div className="container">
                    <div className="row" style={{ paddingTop: '4rem' }}>
                        <div className="col-lg-4">
                            <img src="./img/name_white.png" alt='' />
                            <p style={{ color: 'white', width: '80%' }} className="mt-5">
                                We’re a team of strategic creator and digital innovator, united
                                focus in our pursuit of mastery and joyful.
                            </p>
                            <div className="map_container">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.0418074056156!2d105.5153171747133!3d20.99096118907674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345b9969c77693%3A0xc5d4515efce8ffba!2zxJDhuqFpIEjhu41jIFF14buRYyBHaWEgSMOgIE7hu5lpIC0gQ8ahIHPhu58gSMOyYSBM4bqhYw!5e0!3m2!1svi!2s!4v1714210240477!5m2!1svi!2s" width={350} height={250} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                            </div>
                        </div>
                        <div className="col-lg-2">
                            <h5 style={{ color: 'cyan' }}>Pages</h5>
                            <p className="mt-5 text-white" >Home</p>
                            <p className="text-white">Members</p>
                            <p className="text-white">My family</p>
                            <p className="text-white">Confidence</p>
                            <p className="text-white">Our service</p>
                            <p className="text-white">Construction</p>
                            <p className="text-white">Leader</p>
                        </div>
                        <div className="col-lg-2">
                            <h5 style={{ color: 'cyan' }}>Account</h5>
                            <p className="mt-5 text-white">Sign In</p>
                            <p className="text-white">Sign Up</p>

                        </div>
                        <div className="col-lg-4">
                            <h5 style={{ color: 'cyan' }}>Subscribe</h5>
                            <div className='text-center' id='check_err' style={{ color: 'red', margin: '-1rem 0px' }}></div>
                            <div className='text-center' id='check_err2' style={{ color: 'green', margin: '-1rem 0px' }}></div>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="search">

                                    <div className="search-kiri">
                                        <input type="text" id='check_value' name='message' placeholder="Lời nhắn nhủ tới chúng tớ" />
                                    </div>
                                    <div className="kanan-search text-white" style={{ cursor: 'pointer' }}>
                                        <button type='submit' onClick={sendEmail}>Subscribe</button>
                                    </div>
                                </div>
                            </form>
                            {/* <div className='text-danger fs-6 mt-3 ms-3'>Lưu ý khi gửi email cho chúng tớ:</div>
                            <div className='text-info fs-6 mt-1 ms-5'>Cú pháp: Email của cậu / nội dung cậu muốn gửi</div> */}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Contact;
