import "./hostel.css";
import {
  ChevronLeft,
  ChevronRight,
  LocalHotel,
  PhoneAndroid,
  ExpandMore,
  MonetizationOnOutlined,
  PersonAddAltOutlined,
  VerifiedOutlined,
  CancelOutlined,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
const Hostel = () => {
  return (
    <div className="container p20 hostel-container flex">
      <div className="hostel">
        <div className="hostel-imgs">
          <div className="sliders flex">
            <ChevronLeft className="slider" />
            <ChevronRight className="slider" />
          </div>
          <img
            src="https://media.istockphoto.com/photos/studying-is-a-cruise-when-you-love-your-majors-picture-id1215927063?k=20&m=1215927063&s=612x612&w=0&h=WKlfOo_h6X1-dlBxHAgHUTbTDpiiiUqgva_Sm54P-xA="
            alt=""
            className="hostel-details-img"
          />
        </div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Hostel Details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <div className="categories">
          <div className="cat flex">
            <LocalHotel />: <div className="cat-pill">1 in a room</div>
            <div className="cat-pill">2 in a room</div>
            <div className="cat-pill">3 in a room</div>
          </div>
          <div className="cat flex">
            <MonetizationOnOutlined />: <div className="cat-pill">GHS 3400</div>
            <div className="cat-pill">GHS 1430</div>
            <div className="cat-pill">GHS 2030</div>
          </div>
        </div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Management Details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="management-details flex">
              <PersonAddAltOutlined className="mr10" />
              <span className="value"> Brilliant Atosam</span>
            </div>
            <div className="management-details flex">
              <PhoneAndroid className="mr10" />
              <span className="value"> 0544006865</span>
            </div>
          </AccordionDetails>
        </Accordion>
        <div className="other-details flex flexXC">
          <span className="other mr20">Pool</span>
          <VerifiedOutlined className="other-icon mr20" />
          <span className="other mr20">Wifi</span>
          <VerifiedOutlined className="other-icon mr20" />
          <span className="other mr20">Security Personel</span>
          <CancelOutlined className="other-icon mr20 unverified" />
        </div>
        <div className="hostel-btns flex">
          <button className="btn book-btn">Book Now</button>
          <button className="btn report-btn">Report Hostel</button>
          <button className="btn call-btn">Call manager</button>
        </div>
      </div>
    </div>
  );
};

export default Hostel;
