import React from "react";
import "./Footer.css"; // Import your CSS file
import Logo from "./logo.png";
import Logo1 from "./Logo/Georgia.png";
import Logo2 from "./Logo/cloud.png";
import "font-awesome/css/font-awesome.min.css";


const Footer = () => {
    // Hàm để cuộn lên đầu trang
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  
  return (
    <footer>
      <div className="footer-content">
        <div className="connect">
          <div style={{ marginLeft: "20%" }} className="social-icons">
            <span>Kết nối với chúng tôi:</span>
            <a href="https://www.facebook.com/">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com/">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/">
              <i className="fab fa-youtube"></i>
            </a>
          </div>


          <div className="scroll-to-top">
            <button id="scrollToTopButton" onClick={scrollToTop}>
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>


          <div className="right-section">
            <div className="image-container">
              <img src={Logo} alt="Logo" style={{ height: "50px" }} />
            </div>
          </div>
        </div>
        <div>
          <div className="contact-info">
            <div>
              <a href="https://support.weather.com/s/?language=en_US&type=TWC">
                Phản hồi
              </a>
            </div>
            <div>
              <a href="https://www.wunderground.com/login?action=member-apikeys">
                API thời tiết
              </a>
            </div>
            <div>
              <a href="https://newsroom.ibm.com/the-weather-company">
                Phòng họp báo
              </a>
            </div>
          </div>
          <div className="contact-info horizontal">
            <div className="contact-item">
              {" "}
              <a href="https://weather.com/vi-VN/legal">
                Điều Khoản Sử Dụng
              </a>{" "}
            </div>
            <div className="contact-item">
              <a href="https://weather.com/vi-VN/intl-privacy">
                Chính sách về quyền riêng tư
              </a>
            </div>
            <div className="contact-item">
              <a href="https://weather.com/?Goto=Redirected">
                Tuyên bố về khả năng truy cập
              </a>
            </div>
            <div className="contact-item">
              <a href="https://weather.com/vi-VN/data-vendors">
                Nhà cung cấp dữ liệu
              </a>
            </div>
          </div>
          <div>
            <a href="http://www.exploregeorgia.org/weather-and-travel-tips">
              <img
                src={Logo1}
                alt="Logo"
                style={{ width: "100px", height: "50px", marginLeft: "45%" }}
              />
            </a>
          </div>

          <div className="contact-info horizontal">
            <div className="contact-item centered-text">
              Chúng tôi công nhận trách nhiệm sử dụng dữ liệu và công nghệ của
              mình vĩnh viễn. Chúng tôi có thể sử dụng hoặc chia sẻ dữ liệu của
              bạn với các nhà cung cấp dữ liệu của chúng tôi. Quản lý dữ liệu
              của bạn:
            </div>
          </div>

          <div className="new-contact-info horizontal">
            <div className="new-contact-item">
              <a href="https://weather.com/vi-VN/data-rights">Quyền dữ liệu</a>
            </div>
            <div className="new-contact-item">
              © Bản quyền TWC Product and Technology LLC 2014, 2023
            </div>
            <div className="new-contact-item">
              <a href="https://www.ibm.com/cloud">
                Cung cấp bởi
                <img src={Logo2} style={{ width: "50px", height: "40px" }} />
                IBM Cloud
              </a>
            </div>
          </div>
        </div>
      </div>
    
    </footer>
  );
};

export default Footer;
