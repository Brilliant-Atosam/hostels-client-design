import {
  FilterAltOutlined,
  LocalHotel,
  PaidOutlined,
  Pool,
  Security,
  Wifi,
} from "@mui/icons-material";
const Filters = () => {
  return (
    <div>
      <form action="" className="filters flex px20">
        <div className="filter-input-container input-container flex">
          <LocalHotel className='mr10' />
          <select type="text" className="input2 filter-input">
            <option value="">1 in a room</option>
            <option value="">2 in a room</option>
            <option value="">3 in a room</option>
            <option value="">3+ in a room</option>
            <option value="">All categories</option>
          </select>
        </div>
        <div className="filter-input-container input-container flex">
          <PaidOutlined className='mr10' />
          <select className="input2 filter-input">
            <option>Price (Asc)</option>
            <option>Price (Desc)</option>
            <option>All Prices</option>
          </select>
        </div>
        <div className="form-checks flex flexXC mr20">
          <Wifi className="mr5" /> <input type="checkbox" name="" id="" />
        </div>
        <div className="form-checks flex flexXC mr20">
          <Pool className="mr5" /> <input type="checkbox" name="" id="" />
        </div>
        <div className="form-checks flex flexXC">
          <Security className="mr5" /> <input type="checkbox" name="" id="" />
        </div>
        <div className="filter flex pointer btn">
          <FilterAltOutlined /> Filter
        </div>
      </form>
    </div>
  );
};

export default Filters;
