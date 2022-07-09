import React, { useState } from "react";
import styled from "styled-components";
import eye_icon from "../../assets/images/eye.svg";
import privateImg from "../../assets/images/privateImg.svg";
import dinheiro from "../../assets/images/dinheiro.svg";
import { Icon, Box, Button, Balance, Detail, IconTheme } from "../../Components/UI/";

const Account = () => {
  const [toggleState, untoggle] = useState(true);

  const MarginIcon = styled(Icon)`
  margin-top: 2px;
  `

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>SmartBank Account</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Current balance{" "}
        <span>
          <IconTheme src={dinheiro} alt="Balance Icon" />
        </span>
        {toggleState ? (
          <Balance>
            <Detail>R$</Detail> 0,00{" "}
          </Balance>
        ) : null}
      </div>

      <Button onClick={toggleHandler}>
        <MarginIcon
          src={toggleState ? privateImg : eye_icon}
          alt="Balance privacy"
        />
      </Button>
    </Box>
  );
};

export default Account;
