import React from "react";
import ThemeOn from "../../assets/images/themeOn.svg";
import ThemeOff from "../../assets/images/themeOff.svg";
import { Icon } from "../UI";

const softTheme = <Icon src={ThemeOn} alt="Soft Mode"/>
const darkTheme = <Icon src={ThemeOff} alt="Dark Mode"/>

export default ({theme}) => (theme ? darkTheme : softTheme);