import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, fonts } from "../../styles/appStyles";

import PriceSkeleton from './FarmPriceSkeleton';


const BluePanel = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.style.blueBackground};
  color: ${(props) => props.theme.style.primaryFontColor};
  font-family: ${fonts.headerFont};
  padding: 2.5rem .7rem 3.3rem .7rem;
  margin-top: 2.4rem;
  border: ${(props) => props.theme.style.mainBorder};
  border-radius: .5rem;
  box-sizing: border-box;
  box-shadow: ${(props) => props.theme.style.panelBoxShadow};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  
  

  h1 {
    font-size: 2.4rem;
    text-align: center;
    margin-right: 1rem;
  }

  span {
    font-size: 1.3rem;
  }

  @media(max-width: 1107px) {
    padding: 3.65rem .7rem 6.9rem 1.5rem;
    margin-right: 0px;
    h1 {
      font-size:2.2rem;
      position: relative;
      top:1.2rem;
    }
    span {
      font-size:1.1rem;
      position: relative;
      top:1.2rem;
    }
  }
`;

const FarmPrice = ({ price, display, theme }) => {
    return (
        
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      {display ? <BluePanel>
        <h1>${price}</h1>
        <span>FARM price</span>
      </BluePanel> :
        <PriceSkeleton theme={theme} />}
    </ThemeProvider>
            
        
    );
}

export default FarmPrice;
