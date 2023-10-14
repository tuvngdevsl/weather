import React from "react";
import "./Footer.css"; // Import your CSS file
import Logo from "./R.png";
import Logo1 from "./Logo/Georgia.png";
import Logo2 from "./Logo/cloud.png";
const Footer = () => {
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

          <div className="right-section">
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "50px", height: "50px" }}
            />
          </div>
        </div>
        <div>
          <div className="contact-info">
            <div>
              <a href="#">Phản hồi</a>
            </div>
            <div>
              <a href="#">API thời tiết</a>
            </div>
            <div>
              <a href="#">Phòng họp báo</a>
            </div>
          </div>
          <div className="contact-info horizontal">
            <div className="contact-item">
              {" "}
              <a href="#">Điều Khoản Sử Dụng</a>{" "}
            </div>
            <div className="contact-item">
              <a href="#">Chính sách về quyền riêng tư</a>
            </div>
            <div className="contact-item">
              <a href="#">Tuyên bố về khả năng truy cập</a>
            </div>
            <div className="contact-item">
              <a href="#">Nhà cung cấp dữ liệu</a>
            </div>
          </div>
          <div>
            <img
              src={Logo1}
              alt="Logo"
              style={{ width: "100px", height: "50px", marginLeft: "45%" }}
            />
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
              <a href="#">Quyền dữ liệu</a>
            </div>
            <div className="new-contact-item">
              © Bản quyền TWC Product and Technology LLC 2014, 2023
            </div>
            <div className="new-contact-item">
              Cung cấp bởi<img src={Logo2} style={{width:"50px", height: "40px"}}/>IBM Cloud
            </div>
            {/* nrew */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
