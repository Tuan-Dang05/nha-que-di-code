
import React, { forwardRef } from 'react';

// import './background.css';
import './member.css';
import Member from './member';

const Card = ({ text }, ref) => {
    return (
        <div>

            <div className='text-center text-dark family fw-medium' style={{ marginTop: '90px', fontSize: '80px' }}><p ref={ref}>{text}</p></div>
            <div className='col my_family'>
                <Member />
            </div>


        </div>
    );
}

export default forwardRef(Card);
