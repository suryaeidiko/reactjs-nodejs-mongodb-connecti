import React, { useState } from 'react'

const FetchDataDb = () => {
    useState [getStudData, setGetStudData] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/getdata")
      .then(getStudData => setGetStudData(getStudData.data))
      .catch(err => console.log(err))
    }, [])
    
  return (
    <>

    </>
  )
}

export default FetchDataDb