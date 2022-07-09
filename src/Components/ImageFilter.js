import React from "react";
import alimentation from "../assets/images/alimentation.svg";
import other from "../assets/images/other.svg";
import health from "../assets/images/health.svg";
import transport from "../assets/images/transport.svg";
import utilities from "../assets/images/utilities.svg";
import { IconTheme } from "../Components/UI";


export default (type) => {
    const Images = {
        Restautant: <IconTheme src={alimentation} alt="Restaurant" />,
        Utilities: <IconTheme src={utilities} alt="Utilities" />,
        Health: <IconTheme src={health} alt="Health" />,
        Transport: <IconTheme src={transport} alt="Transport" />,
        default: <IconTheme src={other} alt="Other" />,
    };

    return Images[type] || Images.default;
};