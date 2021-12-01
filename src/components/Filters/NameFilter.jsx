import React from "react";
import {Input} from 'fwt-internship-uikit/'

function NameFilter(props) {  
  function onChange(event) {
    props.setNameFilter(event.target.value)
    props.setCurrentPage(1)
  } 
  return(
    <Input 
      placeholder="Name"
      className={props.class} 
      isDarkTheme={props.isDarkTheme} 
      value={props.nameFilter} 
      onChange={onChange}>  
    </Input>
  )
}

export default NameFilter