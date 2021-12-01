import React from "react";
import {Select} from 'fwt-internship-uikit/'

function LocationFilter(props) {
  const title = [{id: 0, name: "Location"}]
  function onChange(location) {
    let id = 0
    props.locations.forEach(function(value) {
      if (location === value.location)
        id = value.id
    })
    props.setLocationFilter({id: id, location: location})
    props.setCurrentPage(1)
  }
  const locations = props.locations.map(function(value) {
    return {id : value.id, name: value.location};
  });
  return(
    <Select 
      className={props.class}
      isDarkTheme={props.isDarkTheme} 
      value={props.locationFilter.location} 
      onChange={onChange} 
      options={(!props.locationFilter.id ? locations: title.concat(locations))}>
    </Select>
  )
}

export default LocationFilter