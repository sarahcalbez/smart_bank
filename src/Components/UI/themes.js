import { 
    softMode, 
    softModeContent, 
    softModeText, 
    darkMode, 
    darkModeContent, 
    darkModeText,
} from "./variables";

export const softModeTheme = {
    body: softMode,
    inside: softModeContent,
    text: softModeText,
    filter: '',
};

export const darkModeTheme = {
    body: darkMode,
    inside: darkModeContent,
    text: darkModeText,
    filter: "invert(100%)",
};
