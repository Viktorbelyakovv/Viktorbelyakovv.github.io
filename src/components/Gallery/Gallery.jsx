import React from "react";
import PropTypes from 'prop-types';
import Card from "./Card";
import './Gallery.css';

function Gallery(props) {
  const paintings = props.paintings
  const authors = props.authors
  const locations = props.locations
  return(
    <div className="Gallery">
      {paintings.map((paintings) => {
        return <Card paintings={paintings} authors={authors} locations={locations} key={paintings.id}/>  
      })}
    </div>    
  )
}

Gallery.propTypes = {
  paintings: PropTypes.array,
  authors: PropTypes.array,
  locations: PropTypes.array,
}

export default Gallery;