import "./account.css";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { DirectionsRun } from "@mui/icons-material";
import { useState } from "react";
const Accounts = () => {
  const [login, setLogin] = useState("login");
  const handleChange = (e) => {
    setLogin(e.target.value);
  };
  return (
    <div className="container account-container flex">
      <form className="account-form form-container">
        <h1 className="headingLight tc mb20 form-title">
          {login === "login" ? "Login to continue" : "Create account"}
        </h1>

        <div className="input-container2 p10">
          <select className="input2">
            <option value="">
              {login === "login" ? "Login as..." : "Register as..."}
            </option>
            <option>Student</option>
            <option>Manager</option>
            {login === "login" && <option>Admin</option>}
          </select>
        </div>
        <button className="form-btn btn">
          Go on <DirectionsRun />
        </button>

        <ToggleButtonGroup
          color="primary"
          value={login}
          exclusive
          onChange={handleChange}
          className="mt20"
        >
          <ToggleButton value="login">Login</ToggleButton>
          <ToggleButton value="register">Register</ToggleButton>
        </ToggleButtonGroup>
      </form>
    </div>
  );
};

export default Accounts;
