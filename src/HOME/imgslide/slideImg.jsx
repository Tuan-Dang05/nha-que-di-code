import React, { forwardRef, useEffect, useRef } from "react";
// import Swiper from 'swiper';
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
import "./slide.css";
const SlideImg = ({ confidence }, ref) => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      slidesPerView: 1,
      spaceBetween: 50,
      loop: true,
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        clickable: true,
        el: ".swiper-pagination",
      },
    });
  }, []);
  return (
    <div className="">
      <div
        className="testimonial-container"
        style={{
          backgroundColor: "#001524",
          width: "105.8%",
          marginLeft: "-12px",
        }}
      >
        <h2 className="heading">
          <span ref={ref}>{confidence}</span>
        </h2>
        <div className="testimonial-wrapper">
          <div className="testimonial-box mySwiper" ref={swiperRef}>
            <div className="testimonial-content swiper-wrapper">
              <div className="testimonial-slide swiper-slide">
                <img src="./img/slideImg/tuan_slide.jpg" alt="anh_tuan" />
                <h3>Anh Tuấn</h3>
                <p>
                I just want to sit down and code!<br/>
                <span>@Tuan_developer</span>
                </p>
              </div>
              <div className="testimonial-slide swiper-slide">
                <img src="./img/slideImg/duc_slide.png" alt="quang_duc" />
                <h3>Quang Đức</h3>
                <p>
                  Trong cuộc sống, tôi muốn tự làm và tự ăn không ỷ lại vào người khác và thành công hơn trong cuộc sống. <br/>
                  Để cho kẻ <span style={{color:'cyan'}}>dại</span> nửa mừng, nửa lo
                </p>
              </div>
              <div className="testimonial-slide swiper-slide">
                <img src="./img/slideImg/duy_slide.jpg" alt="duc_duy" />
                <h3>Đức Duy</h3>
                <p>
                  Trong cuộc đời mỗi người đều có những hành trình và ngã rẽ cho
                  riêng mình. Việc chọn mỗi ngã rẽ đều mang đến cho ta những
                  trải nhiệm khác nhau trong cuộc sống. Hãy luôn tự tin hạnh
                  fuck với những gì mình đã và đang có.
                </p>
              </div>
              <div className="testimonial-slide swiper-slide">
                <img src="./img/slideImg/dat_slide.png" alt="xuan_dat" />
                <h3>Xuân Đạt</h3>
                <p>
                  Sống trong cuộc sống, cần có một đống tiền! Người <span style={{color:'cyan'}}>khôn</span> ăn nói nửa chừng<br/>
                  @dat_professor
                </p>
              </div>
            </div>
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
            <div className="swiper-pagination" style={{zIndex:0}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(SlideImg);
