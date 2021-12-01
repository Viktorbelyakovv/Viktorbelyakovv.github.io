import React, {useState} from "react";
import PropTypes from 'prop-types';
import ThemeSwitch from "./ThemeSwitch";
import Loader from "./Loader";
import {UploadPaintings, UploadAuthors, UploadLocations} from "../../utils/api.js";
import Filters from "../Filters";
import Gallery from "../Gallery"
import Pagination from "../Pagination";
import classNames from 'classnames/bind';
import styles from './App.css';

let cx = classNames.bind(styles);

function App() {
  const [isDarkTheme, setDarkTheme] = useState(false)
  const [isLoading, setLoading] = useState(true)

  const [nameFilter, setNameFilter] = useState("")
  const [authorFilter, setAuthorFilter] = useState({id : 0, name: "Author"})
  const [locationFilter, setLocationFilter] = useState({id : 0, location: "Location"})
  const [createdFilter, setCreatedFilter] = useState({from:"",before:""})

  const [currentPage, setCurrentPage] = useState(1)
  const [paintingsPerPage, setPaintingsPerPage] = useState(9)
  const [paintingsAmount, setPaintingsAmount] = useState(0)

  const paintings = UploadPaintings(
    nameFilter, 
    authorFilter, 
    locationFilter, 
    createdFilter, 
    currentPage, 
    paintingsPerPage, 
    setPaintingsAmount
  )
  const authors = UploadAuthors()
  const locations = UploadLocations()
  setTimeout(() => {
    setLoading(false) 
    }, 2000
  )

  function changeTheme() {
    setDarkTheme(!isDarkTheme)
  }
  return(
    <div className={cx('Page', {'Page--dark': isDarkTheme})}>  
      <div className="Container">          
        <div className="Header">
          <img className={cx('Logo', {'Logo--dark': isDarkTheme})} src="./logo.svg" alt="logo"/>
          <ThemeSwitch isDarkTheme={isDarkTheme} changeTheme={changeTheme}/>       
        </div> 
        {isLoading?<Loader/>: 
          <div className="Content"> 
            <Filters 
              nameFilter={nameFilter} setNameFilter={setNameFilter} 
              authorFilter={authorFilter} setAuthorFilter={setAuthorFilter}
              locationFilter={locationFilter} setLocationFilter={setLocationFilter}
              createdFilter={createdFilter} setCreatedFilter={setCreatedFilter}
              authors={authors} locations={locations} isDarkTheme={isDarkTheme}
              setCurrentPage={setCurrentPage}
            />
            <Gallery
              paintings={paintings}
              authors={authors}
              locations={locations}
            />         
            <Pagination 
              isDarkTheme={isDarkTheme} 
              paintings={paintings}
              paintingsAmount={paintingsAmount}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              paintingsPerPage={paintingsPerPage}
              setPaintingsPerPage={setPaintingsPerPage}
            />
          </div>
        }
      </div>        
    </div> 
  )
}

App.propTypes = {
  isDarkTheme: PropTypes.bool,
  isLoading: PropTypes.bool,

  nameFilter: PropTypes.string,
  authorFilter: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  locationFilter: PropTypes.shape({
    id: PropTypes.number,
    location: PropTypes.string,
  }),
  createdFilter: PropTypes.objectOf(PropTypes.string),

  currentPage: PropTypes.number,
  paintingsPerPage: PropTypes.number,
  paintingsAmount: PropTypes.number,

  paintings: PropTypes.array,
  authors: PropTypes.array,
  locations: PropTypes.array,
}

export default App;
