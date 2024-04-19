import React from 'react';
import './cv_tool.css';
const CvTool = ({showToolToast}) => {
    return (
        <div className='' style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
            {/* Mẫu 1 */}
            <div className="card_cv mt-4 mb-4" data-aos="zoom-in-up" data-aos-duration="1500">
                <div className="card_cv-headphone">
                    <img src="./img/CV_tool/cv_tool_1.png" alt="headphone" />
                </div>
                <div className="card_cv-infos">
                    <h3 className="card_cv-title">Mẫu 1</h3>
                    {/* <h2 className="price">$40.<small>99</small></h2> */}
                    <a href className="buy" onClick={showToolToast} style={{cursor:'pointer'}}>Dùng thử</a>
                </div>
            </div>

            {/* Mẫu 2 */}
            <div className="card_cv mt-4 mb-4" data-aos="zoom-in-down" data-aos-duration="1500">
                <div className="card_cv-headphone">
                    <img src="./img/CV_tool/cv_tool_2.png"  alt="headphone" />
                </div>
                <div className="card_cv-infos">
                    <h3 className="card_cv-title">Mẫu 2</h3>
                    {/* <h2 className="price">$40.<small>99</small></h2> */}
                    <a href className="buy" onClick={showToolToast} style={{cursor:'pointer'}}>Dùng thử</a>
                </div>
            </div>
            {/* Mẫu 3 */}
            <div className="card_cv mt-4 mb-4" data-aos="zoom-in-up" data-aos-duration="1500">
                <div className="card_cv-headphone">
                    <img src="./img/CV_tool/cv_tool_3.png" alt="headphone" />
                </div>
                <div className="card_cv-infos">
                    <h3 className="card_cv-title">Mẫu 3</h3>
                    {/* <h2 className="price">$40.<small>99</small></h2> */}
                    <a href className="buy" onClick={showToolToast} style={{cursor:'pointer'}}>Dùng thử</a>
                </div>
            </div>
            {/* Mẫu 4 */}
            <div className="card_cv mt-4 mb-4" data-aos="zoom-in-down" data-aos-duration="1500">
                <div className="card_cv-headphone">
                    <img src="./img/CV_tool/cv_tool_4.png" alt="headphone" />
                </div>
                <div className="card_cv-infos">
                    <h3 className="card_cv-title">Mẫu 4</h3>
                    {/* <h2 className="price">$40.<small>99</small></h2> */}
                    <a href className="buy" onClick={showToolToast} style={{cursor:'pointer'}}>Dùng thử</a>
                </div>
            </div>

        </div>
    );
}

export default CvTool;
