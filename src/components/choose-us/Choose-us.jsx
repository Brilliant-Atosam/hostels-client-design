import {
  Security,
  AbcOutlined,
  Chair,
  SavedSearchOutlined,
} from "@mui/icons-material";
import "./choose-us.css";
const Choose = () => {
  return (
    <div className="container choose-us bg-dark text-light">
      <h1 className="hLight title tc p20">Book with us!</h1>
      <div className="choose-items flex p20">
        <div className="flex choose-item mb10">
          <AbcOutlined className="choose-icon mb20" />
          <h1 className="title-sm">Easy booking</h1>
          <p className="tc">
            Tap! Tap! Tap! And you are done booking a hostel without having to
            go to campus.
          </p>
        </div>
        <div className="flex choose-item mb10">
          <Chair className="choose-icon mb20" />
          <h1 className="title-sm">Convenient</h1>
          <p className="tc">
            Living room, washroom, street, bar? You choose your convenience and
            book on phone, tablet or PC.
          </p>
        </div>
        <div className="flex choose-item mb10">
          <SavedSearchOutlined className="choose-icon mb20" />
          <h1 className="title-sm">Variety</h1>
          <p className="tc">
            Make your choice, we have all the utilities and categories type.
            Make use of the filter and you're a few seconds away from booking
            your choice hostel.
          </p>
        </div>
        <div className="flex choose-item mb10">
          <Security className="choose-icon mb20" />
          <h1 className="title-sm">Safe booking</h1>
          <p className="tc">
            Scammed, or fear being scammed? Worry no more. We verify
            managers/owners before allowing their hostels on our platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
