import React from "react";
import NameFilter from "./NameFilter"
import AuthorFilter from "./AuthorFilter"
import LocationFilter from "./LocationFilter"
import CreatedFilter from "./CreatedFilter"
import './Filters.css';

function Filters(props) {
  return (
    <div className="Filters">
      <NameFilter
        nameFilter={props.nameFilter}
        setNameFilter={props.setNameFilter}
        class={"Filter col-tab-3 col-lap-3 col-desk-3 "}
        isDarkTheme={props.isDarkTheme}
        setCurrentPage={props.setCurrentPage}
      />
      <AuthorFilter 
        authors={props.authors}
        authorFilter={props.authorFilter}
        setAuthorFilter={props.setAuthorFilter}        
        class={"Filter col-tab-3 col-lap-3 col-desk-3 "}
        isDarkTheme={props.isDarkTheme}
        setCurrentPage={props.setCurrentPage}
      />
      <LocationFilter
        locations={props.locations}
        locationFilter={props.locationFilter}
        setLocationFilter={props.setLocationFilter}
        class={"Filter col-tab-3 col-lap-3 col-desk-3 "}
        isDarkTheme={props.isDarkTheme}
        setCurrentPage={props.setCurrentPage}
      />
      <CreatedFilter
        createdFilter={props.createdFilter}
        setCreatedFilter={props.setCreatedFilter}
        class={"Filter col-tab-3 col-lap-3 col-desk-3 "}
        isDarkTheme={props.isDarkTheme}
        setCurrentPage={props.setCurrentPage}
      />
    </div>   
  )
}

export default Filters;