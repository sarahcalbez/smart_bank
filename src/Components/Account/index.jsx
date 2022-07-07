import React, { useState } from "react";

import privado from "../../assets/images/privado.svg";
import eye_icon from "../../assets/images/eye.svg";
import dinheiro from "../../assets/images/dinheiro.svg";

const Account = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <div className="box">
      <h2>Account</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Current balance{" "}
        <span>
          <img className="img-icone" src={dinheiro} alt="Balance Icon" />
        </span>
        {toggleState ? (
          <div className="balance">
            <span className="detail">R$</span> 0,00{" "}
          </div>
        ) : null}
      </div>

      <button className="btn" onClick={toggleHandler}>
        <img
          style={{ marginTop: "2px" }}
          className="img-icone"
          src={toggleState ? privado : eye_icon}
          alt="Balance privacy"
        />
      </button>
    </div>
  );
};

export default Account;
