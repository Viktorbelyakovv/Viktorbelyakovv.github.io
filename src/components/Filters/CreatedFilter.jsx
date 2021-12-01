import React from 'react'
import {Range, Input} from 'fwt-internship-uikit/'
import classNames from 'classnames/bind';
import styles from './Filters.css';

let cx = classNames.bind(styles);

function CreatedFilter(props) {
  function onChangeFrom(value) {
    props.setCreatedFilter({...props.createdFilter, from: value})   
    props.setCurrentPage(1)
  }
  function onChangeBefore(value) {
    props.setCreatedFilter({...props.createdFilter, before: value})
    props.setCurrentPage(1)
  }
  function onClose() {    
    return 0;    
  }
  return(
    <div>
      <Range 
        onClose={onClose}
        isDarkTheme={props.isDarkTheme} 
        aria-hidden="true" 
        className={props.class}>        
        <Input
          isDarkTheme={props.isDarkTheme}
          className={cx('input', 'input--from', {
            'input--dark': props.isDarkTheme
          })}
          placeholder="from"
          onChange={(e) => onChangeFrom(e.target.value)}
          value={props.createdFilter.from}
          type="number"
        />
        <div
          className={cx('separator', {
            'separator--dark': props.isDarkTheme
          })}
        />
        <Input
          isDarkTheme={props.isDarkTheme}
          className={cx('input', 'input--before', {
            'input--dark': props.isDarkTheme
          })}
          placeholder="before"
          onChange={(e) => onChangeBefore(e.target.value)}
          value={props.createdFilter.before}
          type="number"
        />
      </Range>
    </div>
  )
}

export default CreatedFilter
