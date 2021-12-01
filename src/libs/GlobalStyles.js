import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`


body {
  font-family: 'Merriweather', serif;
  line-height: normal;
  padding: 0px;
  margin: 0px;
  background: url("/images/backdrop.png");
  color:var(--primaryTextColor);
  font-size: var(--body1);
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: stretch;
 * { 
    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
    box-sizing: border-box; 
}
  path, circle {
  fill: var(--primaryColor);
}
}

#root {
    --primaryColor: #804B9D;
    --backgroundColor: #ffffff;
    --navBarBackgound: #E0E0E0;
    --primaryTextColor: #000000;
    --icons: #000000;
    
    // Font sizes
    --title1: 32px;
    --title2: 24px;
    --headline: 22px;
    --body1: 18px;
    --body2: 14px;

    *{ 
    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
    box-sizing: border-box;
    scroll-behavior: smooth;
      ::-webkit-scrollbar {
        width: 12px;
      }
      ::-webkit-scrollbar-track {
        background: none; 
      }
      ::-webkit-scrollbar-thumb {
        background-color: var(--primaryColor);
        border-radius: 4px;        
      }
    }
}

button{
  font-family: 'Merriweather', serif;
  background: none;
  cursor: pointer;
  border: none;
  margin: 0px;
  padding: 0px;
}

`
export default GlobalStyle
