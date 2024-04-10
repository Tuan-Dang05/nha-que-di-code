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
          <p className="kartu-judul">Content</p>
          <p className="kartu-des">
            Our team creates engaging and shareable content that resonates
            with your audience, drives organic traffic
          </p>
        </div>
      </div>
      <div className="col-lg-4 mb-2" data-aos="fade-up" data-aos-duration={1000}>
        <div className="kartu">
          <div className="kartu-icon">
            <i className="fa-solid fa-pen-nib icon-dalam" />
          </div>
          <p className="kartu-judul">Graphic Design</p>
          <p className="kartu-des">
            Unlock the power of visual storytelling with our expert graphic
            design services tailored to elevate your brand and captivate.
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
            Elevate your brand's online presence with our data-driven
            digital marketing strategies. From SEO and content marketing
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
          <p className="kartu-judul">Web Design</p>
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
          <p className="kartu-judul">IT Team</p>
          <p className="kartu-des">
            IT consulting, or information technology consulting, refers to
            the practice of providing advisory and implementation services
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
            It involves creating a unique and recognizable identity that
            sets the brand apart from competitors and resonates with the
            target audience.
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
