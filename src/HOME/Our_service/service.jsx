import React, { forwardRef } from 'react';
import './service.css';
const Service = ({ service }, ref) => {
    return (
        <div>
            {/* <!-- service --> */}
   <section className="services">
  <div className="row mt-5">
    <div className="col-12" data-aos="fade-up" data-aos-duration={500}>
      <p style={{color: '#64ccc5', fontWeight: 600, fontSize: '2.5rem'}} className="text-center" ref={ref}>
        {service}
      </p>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-4 offset-lg-4" data-aos="fade-up" data-aos-duration={500}>
      <h1 className="text-center judul-service">
        Sử dụng các công cụ hỗ trợ giúp website mượt mà hơn!
      </h1>
    </div>
  </div>
  <div className="container">
    <div className="row mt-5">
      <div className="col-lg-4 mb-2" data-aos="fade-up" data-aos-duration={500}>
        <div className="kartu">
          <div className="kartu-icon">
            <i className="fa-regular fa-pen-to-square icon-dalam" />
          </div>
          <p className="kartu-judul">Nội dung</p>
          <p className="kartu-des">
          "Content hay giống như người bạn đồng hành đáng tin cậy, giúp bạn dẫn lối khách hàng đến với thương hiệu. #contentstrategy"
          </p>
        </div>
      </div>
      <div className="col-lg-4 mb-2" data-aos="fade-up" data-aos-duration={1000}>
        <div className="kartu">
          <div className="kartu-icon">
            <i className="fa-solid fa-pen-nib icon-dalam" />
          </div>
          <p className="kartu-judul">Thiết kế đồ hoạ</p>
          <p className="kartu-des">
          "Thiết kế đồ họa: giải quyết vấn đề bằng cách khiến mọi thứ trở nên đẹp mắt."
          </p>
        </div>
      </div>
      <div className="col-lg-4 mb-2" data-aos="fade-up" data-aos-duration={1500}>
        <div className="kartu">
          <div className="kartu-icon">
            <i className="fa-solid fab fa-bootstrap icon-dalam" />
          </div>
          <p className="kartu-judul">Boostrap 5</p>
          <p className="kartu-des">
          Bootstrap 5: Nâng tầm thiết kế web của bạn với các thành phần và giao diện hiện đại.<br/>
          #Bootstrap5 #CSS #WebDesign #Responsive #Frontend #Development
          </p>
        </div>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-lg-4 mb-2" data-aos="fade-up" data-aos-duration={500}>
        <div className="kartu">
          <div className="kartu-icon">
            <i className="fa-solid fa-palette icon-dalam" />
          </div>
          <p className="kartu-judul">Thiết kế website</p>
          <p className="kartu-des">
            We specialize in creating visually stunning, user-friendly
            websites that align with your brand identity and deliver an
            exceptional.
          </p>
        </div>
      </div>
      <div className="col-lg-4 mb-2" data-aos="fade-up" data-aos-duration={1000}>
        <div className="kartu">
          <div className="kartu-icon">
            <i className="fa-solid fa-users-line icon-dalam" />
          </div>
          <p className="kartu-judul">Đội ngũ IT</p>
          <p className="kartu-des">
           Tất cả các thành viên trong team sẽ cố gắng phát triển website hướng tới các dịch vụ và nhu cầu của người dùng. <br/> @Tuan_Dang
          </p>
        </div>
      </div>
      <div className="col-lg-4 mb-2" data-aos="fade-up" data-aos-duration={1500}>
        <div className="kartu">
          <div className="kartu-icon">
            <i className=" fas fa-poo icon-dalam" />
          </div>
          <p className="kartu-judul">AOS animation</p>
          <p className="kartu-des">
            Sử dụng thư viện AOS giúp cho website trở nên sinh động và mượt mà hơn.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    );
}

export default forwardRef(Service);
