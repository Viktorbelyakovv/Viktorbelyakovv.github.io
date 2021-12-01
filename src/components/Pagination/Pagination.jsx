import React, {useEffect} from "react";
import {Pagination as PaginationComponent} from 'fwt-internship-uikit/'
import './Pagination.css';

function Pagination(props) {
  var pagesAmount = Math.ceil(props.paintingsAmount/props.paintingsPerPage)
  var width = window.innerWidth
  useEffect(() => {
    if (width > 1023) {
      props.setPaintingsPerPage(9)
    }
    else if (width > 767) {
      props.setPaintingsPerPage(8)
    }
    else {
      props.setPaintingsPerPage(6)
    }
    if (props.currentPage > pagesAmount) {
      props.setCurrentPage(pagesAmount)
    }
  }, [width, props, pagesAmount])

  function onChange(page) {    
    props.setCurrentPage(page)
    return 0;
  }
  return (
    <PaginationComponent
      isDarkTheme = {props.isDarkTheme}
      pagesAmount = {pagesAmount}
      currentPage = {props.currentPage}
      onChange = {onChange}
    >
    </PaginationComponent>
  )
}

export default Pagination;