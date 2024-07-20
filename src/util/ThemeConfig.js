import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  backgroundColor1: "#f5f5f5",
  backgroundColor2: "#f6f6f9",
  text: "#363537",
  primaryColor: "#e9300b",
  secondaryColor: "#ffb01e",
};

export const darkTheme = {
  backgroundColor1: "#181a1e",
  backgroundColor2: "#25252c",
  text: "#fbfbfb",
  primaryColor: "#e9300b",
  secondaryColor: "#ffb01e",
};

export const GlobalStyles = createGlobalStyle`
    :root{
        --border-radius-small: 5px;
        --border-radius-large: 10px;

        --dark-grey: #AAAAAA;
        --light-grey: lightgrey;
        --danger: #D32F2F;
        --light-danger: #FECDD3;
        --warning: #FBC02D;
        --light-warning: #FFF2C6;
        --success: #388E3C;
        --light-success: #BBF7D0;

    }

    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        padding: 0;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: ${({ theme }) => theme.backgroundColor1};
        color: ${({ theme }) => theme.text};
        font-family: Helvetica, Tahoma, Arial, Roboto, sans-serif;
        

        width: 100vw;
        min-height: 100vh;
            
        overflow-y: auto;
        overflow-x: hidden;
    }

    h1{
        text-align: center;
        margin: 0;
        padding: 20px;
        color: ${({ theme }) => theme.primaryColor};
    }

    h2{
        color: ${({ theme }) => theme.primaryColor};
    }

 

  `;
