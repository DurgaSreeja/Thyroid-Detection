import React, { useState } from "react";
import authApi from "../apis/authApi";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

const Userconfirm = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({ email: "" });

  const [Message, setMessage] = useState({
    text: "",
    type: "",
  });

  const HandleClick = async () => {
    const res = await authApi.forgot(data);
    if (res?.success === true) {
      navigate("/forget");
    } else {
      setMessage({
        text: res?.msg,
        type: "danger",
      });
    }
  };

  return (
    <div className="home" style={{ padding: "50px" }}>
      <div className="form_container2" style={{ maxHeight: "280px" }}>
        <div className="form profile_form">
          <div className="profile_form">
            <div style={{ display: "flex" }}>
              <h4
                style={{
                  paddingLeft: "140px",
                  paddingRight: "130px",
                  color: "black",
                }}
              >
                Reset
              </h4>
              <a
                href="/logged"
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                x
              </a>
            </div>
            {Message && Message?.text && (
              <Alert variant={Message?.type}>{Message?.text}</Alert>
            )}
            <div className="pro_input_box">
              <input
                type="email"
                id="age"
                placeholder="Enter username"
                required
                value={data?.email}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>
            <button className="pro_sub_btn" onClick={HandleClick}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userconfirm;
