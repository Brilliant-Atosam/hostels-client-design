import {
  Email,
  Facebook,
  Instagram,
  MyLocation,
  PhoneAndroid,
  Twitter,
  WhatsApp,
  EmailOutlined
} from "@mui/icons-material";
import "./footer.css";
const Footer = () => {
  return (
    <div className="container footer-container flex p20">
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
      <div className="footer-items flex mb20">
        <h1 className="hLight mb10">Useful links</h1>
        <li className="mb10 footer-links pointer">Link</li>
        <li className="mb10 footer-links pointer">Link</li>
        <li className="mb10 footer-links pointer">Link</li>
        <li className="mb10 footer-links pointer">Link</li>
        <li className="mb10 footer-links pointer">Link</li>
        <li className="mb10 footer-links pointer">Link</li>
      </div>
      <div className="footer-items flex mb20">
        <h1 className="hLight mb10">About us</h1>
        <li className="mb10 footer-links pointer">Link</li>
        <li className="mb10 footer-links pointer">Link</li>
        <li className="mb10 footer-links pointer">Link</li>
        <li className="mb10 footer-links pointer">Link</li>
        <li className="mb10 footer-links pointer">Link</li>
        <li className="mb20 footer-links pointer">Link</li>
        Copyright &copy;2022
      </div>
     
    </div>
  );
};

export default Footer;
