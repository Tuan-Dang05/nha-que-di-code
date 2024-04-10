
import React, { forwardRef } from 'react';
import './background.css';
import './member.css';
import Member from './member';
const Card = ({text},ref) => {
    return (
        <div>
            <section className="stars-container">
                <div className="container">
                    <div id="stars" />
                    <div id="stars2" />
                    <div id="stars3" />
                    <div className="row">
                        <div className="col-sm-6 col-xs-12" />
                    </div>
                </div>
            <div className='text-center text-light family' style={{marginTop:'90px',fontSize:'80px'}}><p ref={ref}>{text}</p></div>
            <div className='col'>
                <Member/>
            </div>
            </section>
        </div>
    );
}

export default forwardRef(Card);
