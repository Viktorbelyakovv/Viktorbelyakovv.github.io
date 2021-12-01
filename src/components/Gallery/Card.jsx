import React from "react";
import classNames from 'classnames/bind';
import styles from './Gallery.css';

let cx = classNames.bind(styles);

function Card(props) {
  return (
    <div className="Card">
      <img className="Img col-tab-6 col-lap-4 col-desk-4" 
        src ={"https://test-front.framework.team"+ props.paintings.imageUrl} 
        alt="no" />
      <div className="Overlay">
        <div className="Text">
          <div className={cx('Text', 'Text__name')}>{props.paintings.name} </div>
          <div className={cx('Text', 'Text__info')}>
            <div><b>Author: </b>{props.authors[props.paintings.authorId-1].name}</div>
            <div><b>Created: </b>{props.paintings.created}</div>
            <div><b>Location: </b>{props.locations[props.paintings.locationId-1].location}</div>
          </div>          
        </div>
      </div>
    </div>      
  );
}

export default Card;