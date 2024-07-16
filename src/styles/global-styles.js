import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --background-color1: #f5f5f5;
        --background-color2: #f6f6f9;
        --text-color: black;
        --primary-color: #e9300b;
        --secondary-color: #ffb01e;
        --border-radius-small: 5px;
        --border-radius-large: 10px;


        --primary: #1976D2;
        --light-primary: #CFE8FF;
        --dark-grey: #AAAAAA;
        --danger: #D32F2F;
        --light-danger: #FECDD3;
        --warning: #FBC02D;
        --light-warning: #FFF2C6;
        --success: #388E3C;
        --light-success: #BBF7D0;
/*
        --light: #f6f6f9;
        --grey: #eee;
        --dark: #363949;
**/
        --light: #181a1e;
        --grey: #25252c;
        --dark: #fbfbfb;

    }

    body{
        margin: 0;
        padding: 0;
        font-family: Helvetica, sans-serif;
        display: flex;
        justify-content: center;
        background-color: var(--background-color1);
    }

    h1{
        text-align: center;
        margin: 0;
        padding-top: 50px;
        color: var(--primary-color);
    }
    h2{
        color: var(--primary-color);
    }
    `;
