import React, { useState,useEffect } from "react";
import axios from "./axios";

function Row({ title,fetchURL }) {
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    async  function fetchData(){
     const request= await axios.get(fetchURL);
     console.log(request.data.results);
     setMovies(request.data.results)
     return request;
      }
      fetchData();
  },[fetchURL])


  
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default Row;
