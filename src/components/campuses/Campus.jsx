import "./campus.css";
import { campuses } from "../../dummy";
console.log(campuses[0]);
const Campus = () => {
  return (
    <div className="container p20 campus-container">
      <h1 className="hLight title tc intro-title newsletter-title pb20">
        Browse hostels from pupolar campuses
      </h1>
      <div className="campuses flex">
        {campuses.map((campus) => (
          <img src={campus} alt="campus logo" className="campus-logo pointer" />
        ))}
      </div>
    </div>
  );
};

export default Campus;
