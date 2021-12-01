import React, {useEffect} from "react"

export function UploadPaintings(nameFilter, authorFilter, locationFilter, createdFilter, currentPage, paintingsPerPage, setPaintingsAmount) {
  const [paintings, setPaintings] = React.useState([])    
  useEffect(() => {
    var str = ""
    if (nameFilter !== "") {
      str+= `name=${nameFilter}`
    }
    if (authorFilter.id !== 0) {
      str+= `&authorId=${authorFilter.id}`
    }
    if (locationFilter.id !== 0) {
      str+= `&locationId=${locationFilter.id}`
    }
    if (createdFilter.from !== "") {
      str+= `&created_gte=${createdFilter.from}`
    }
    if (createdFilter.before !== "") {
      str+= `&created_lte=${createdFilter.before}`
    }
    fetch(`https://test-front.framework.team/paintings?${str}`, {mode: 'cors'})
      .then(response => response.json())
      .then(paintings => {
      setPaintingsAmount(paintings.length)    
    })
    fetch(`https://test-front.framework.team/paintings?_page=${currentPage}&_limit=${paintingsPerPage}&${str}`, {mode: 'cors'})
      .then(response => response.json())
      .then(paintings => {
      setPaintings(paintings)
    })
  }, [nameFilter, authorFilter, locationFilter, createdFilter, currentPage, paintingsPerPage, setPaintingsAmount])
  return paintings;
}

export function UploadAuthors() {  
  const [authors, setAuthors] = React.useState([])
  useEffect(() => {
    fetch('https://test-front.framework.team/authors', {mode: 'cors'})
    .then(response => response.json())
    .then(authors => {
    setAuthors(authors)    
    })
  }, [])
  return authors;
}

export function UploadLocations() {
  const [locations, setLocations] = React.useState([])
  useEffect(() => {
    fetch('https://test-front.framework.team/locations')
    .then(response => response.json())
    .then(locations => {
      setLocations(locations)                
    })     
  })  
  return locations;
}