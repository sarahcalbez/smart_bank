import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";

const BankHeader = () => {
  return (
    <div className="bank-header">
      <img className="img-logo" src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <a className="second-btn" href="https://google.com">
          Help
        </a>
        <a className="first-btn" href="https://google.com">
          Exit
        </a>
      </div>
    </div>
  );
};

export default BankHeader;
