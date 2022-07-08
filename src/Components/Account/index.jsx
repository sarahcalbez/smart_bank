import React, { useState } from "react";
import styled from "styled-components";
import privado from "../../assets/images/privado.svg";
import eye_icon from "../../assets/images/eye.svg";
import dinheiro from "../../assets/images/dinheiro.svg";
import { Icon, Box, Button, Balance, Detail } from "../../Components/UI/";

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
      <h2>Account</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Current balance{" "}
        <span>
          <Icon src={dinheiro} alt="Balance Icon" />
        </span>
        {toggleState ? (
          <Balance>
            <Detail>R$</Detail> 0,00{" "}
          </Balance>
        ) : null}
      </div>

      <Button onClick={toggleHandler}>
        <MarginIcon
          src={toggleState ? privado : eye_icon}
          alt="Balance privacy"
        />
      </Button>
    </Box>
  );
};

export default Account;
