import React from "react";

function ThemeSwitch(props) {
  const switchWhite = "./switch-white.svg"
  const switchBlack = "./switch-black.svg"
  return (
    <img className="Switch" src={props.isDarkTheme?switchWhite:switchBlack} alt="switch" onClick={props.changeTheme}/>  
  )
}
export default ThemeSwitch;