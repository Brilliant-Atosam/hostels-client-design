import "./newsletter.css";
import { Email, Person } from "@mui/icons-material";
const Newsletter = () => {
  return (
    <div className="container intro-container newsletter-container flex p20">
      <div className="intro-left">
        <div className="intro-message flex">
          <h1 className="hLight heading intro-title newsletter-title mb20">
            Stay connected with us!
          </h1>
          <p>
            Subscribe to our newsletter to receive updates on campuses
          </p>
        </div>
      </div>
      <div className="intro-right flex">
        <form action="" className="form-container br10 intro-form">
         
          <div className="input-container input-container2 mb20">
            <Person />
            <input type="text" className="input2" placeholder="Eg. Jon Snow" />
          </div>
          <div className="input-container input-container2 mb20">
            <Email />
            <input
              type="text"
              className="input2"
              placeholder="Eg. jonsnow@winterfell.north"
            />
          </div>

          <button className="btn form-btn">Subscribe Now</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
