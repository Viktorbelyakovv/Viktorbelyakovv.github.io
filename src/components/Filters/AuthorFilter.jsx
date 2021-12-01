import React from "react";
import {Select} from 'fwt-internship-uikit/'

function AuthorFilter(props) { 
  const title = [{id: 0, name: "Author"}]
  function onChange(author) {
    let id = 0
    props.authors.forEach(function(value) {
      if (author === value.name)
        id = value.id
    })
    props.setAuthorFilter({id: id, name: author})
    props.setCurrentPage(1)
  } 
  return(
    <Select 
      className={props.class}
      isDarkTheme={props.isDarkTheme} 
      value={props.authorFilter.name} 
      onChange={onChange} 
      options={(!props.authorFilter.id ? props.authors: title.concat(props.authors))}>
    </Select>
  )
}

export default AuthorFilter