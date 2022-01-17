import "./contact.css";
import {
  Email,
  Facebook,
  Instagram,
  MyLocation,
  PhoneAndroid,
  Twitter,
  WhatsApp,
  EmailOutlined,
} from "@mui/icons-material";
const Contact = () => {
  return (
    <div className="container contact-container flex">
      <div className="footer-items flex mb20">
        <div className="social mb20">
          <Facebook className="footer-social-icon" />
          <Twitter className="footer-social-icon" />
          <Instagram className="footer-social-icon" />
          <Email className="footer-social-icon" />
        </div>
        <div className="footer-address">
          <div className="footer-key mb10">
            <PhoneAndroid className="footer-social-icon" /> 0244XXXXXX
          </div>
          <div className="footer-key mb10">
            <WhatsApp className="footer-social-icon" /> 0244XXXXXX
          </div>
          <div className="footer-key mb10">
            <EmailOutlined className="footer-social-icon" /> company@gmail.com
          </div>
          <div className="footer-key mb10">
            <MyLocation className="footer-social-icon" /> Yankey Street 18,
            Sefwi-Wiawso
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
