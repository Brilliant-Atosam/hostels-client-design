import Filters from "../components/hostels/Filters";
import "../components/hostels/hostels.css";
import ShowHostels from "../components/hostels/ShowHostels";
const Hostels = () => {
  return (
    <div className="container hostels-container">
      <Filters />
      <div className="flex hostels">
        <ShowHostels />
        <ShowHostels />
        <ShowHostels />
        <ShowHostels />
        <ShowHostels />
        <ShowHostels />
      </div>
    </div>
  );
};

export default Hostels;
