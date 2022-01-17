import {
  LocalHotel,
  PaidOutlined,
  Pool,
  Security,
  Wifi,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
const ShowHostels = () => {
  return (
    <div className="container show-hostels">
      <img
        src="https://media.istockphoto.com/photos/shes-a-diligent-student-picture-id538032738?b=1&k=20&m=538032738&s=170667a&w=0&h=Rhwm5Co55g0VMX--I-HXvLImJx2Tb9qXlh0XWjrnZyE="
        alt=""
        className="hostel-img"
      />
      <div className="hostel-details p10 flex">
        <div className="info flexXC">
          <LocalHotel className="mr5" /> 1 in a room, 2 in a room
        </div>
        <div className="info flexXC">
          <PaidOutlined className="mr5" /> 1400, 2500, ...
        </div>
        <div className="flex flexXC">
          <div className="form-checks flex flexXC mr20">
            <Wifi className="mr5" />
            <input type="checkbox" name="" id="" checked />
          </div>
          <div className="form-checks flex flexXC mr20">
            <Pool className="mr5" />
            <input type="checkbox" name="" id="" checked />
          </div>
          <div className="form-checks flex flexXC">
            <Security className="mr5" /> <input type="checkbox" name="" id="" />
          </div>
        </div>
      </div>
      <div className="hostel-links flex">
        <Link to="/hostel/1">
          <button className="btn blue">View details</button>
        </Link>
        <button className="btn red">Book now</button>
      </div>
    </div>
  );
};

export default ShowHostels;
