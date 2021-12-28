import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
    }

    html,
    body {
      margin: 0;
      padding: 0;
      font-family: 'Merriweather', serif;
      background: #FBFBFB;
      color: #474747;
      margin-left:15%;
      margin-right:15%;
    }
  `;
