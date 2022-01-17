import "./intro.css";
import {
  School,
  MyLocation,
  Male,
  LocalHotel,
  Wifi,
  Pool,
  Security,
} from "@mui/icons-material";
const Intro = () => {
  return (
    <div className="container intro-container flex p20">
      <div className="intro-left">
        <div className="intro-message flex">
          <h1 className="heading-light intro-title mb20">
            Browse and book hostels from university campuses in Ghana
          </h1>
          <p className="message mb20">
            Create an account or login to get a personalized experience
          </p>
          <div className="intro-btn">
            <button className="btn">Register now</button>
            <button className="btn btn-outline">Login to continue</button>
          </div>
        </div>
      </div>
      <div className="intro-right flex">
        <form action="" className="form-container br10 intro-form">
          <h1 className="headingLight tc mb20 form-title">Quick Browse</h1>
          <div className="input-container mb20">
            <School />
            <select name="" id="" className="input1">
              <option value="">UEW</option>
              <option value="">UCC</option>
              <option value="">UG</option>
              <option value="">KNUST</option>
              <option value="">UDS</option>
              <option value="">UENR</option>
              <option value="">UMaT</option>
            </select>
          </div>
          <div className="input-container mb20">
            <MyLocation />
            <select name="" id="" className="input1">
              <option value="">Campus</option>
            </select>
          </div>
          <div className="input-container mb20">
            <Male />
            <select name="" id="" className="input1">
              <option value="">Male</option>
              <option value="">Female</option>
              <option value="">Mixed</option>
            </select>
          </div>
          <div className="input-container mb20">
            <LocalHotel />
            <select name="" id="" className="input1">
              <option value="">1 in a room</option>
              <option value="">2 in a room</option>
              <option value="">3 in a room</option>
              <option value="">3+ in a room</option>
              <option value="">All categories</option>
            </select>
          </div>
          <div className="input-container mb20">
            <div className="form-checks flex flexXC mr20">
              <Wifi className="mr5" /> <input type="checkbox" name="" id="" />
            </div>
            <div className="form-checks flex flexXC mr20">
              <Pool className="mr5" /> <input type="checkbox" name="" id="" />
            </div>
            <div className="form-checks flex flexXC mr20">
              <Security className="mr5" />
              <input type="checkbox" name="" id="" />
            </div>
          </div>
          <button className="btn form-btn">Browse Now</button>
        </form>
      </div>
    </div>
  );
};

export default Intro;
