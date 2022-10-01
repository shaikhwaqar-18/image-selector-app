import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [photo, setPhoto] = useState("");
  const [result, setResult]= useState([]);

const changePhoto= async()=>{
  axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=_psbIGSHyK_Lyl29WVgYQYEqyw00ZY9hOqXzA9jUu_0`)
  .then((res)=>{
    // console.log(res.data)
   setResult(res.data.results);
  })

}
  return (
    <>
    <div className="container text-center my-5">
      <input type='text' className='form-control' value={photo} onChange={(e)=>{
        setPhoto(e.target.value);
      }}></input>
      <button type='submit' onClick={changePhoto} className='btn btn-primary my-2'>Get Photo</button>
   
    </div>

  <div className='container'>
    <div className='row text-center text-lg-start'>
     {result.map((obj) => {
      return (
        <div className='col-lg-3 col-md-4 col-6'>
        <a href='#' className='d-block mb-4 h-100'>
          <img className='img-fluid img-thumbnail' src={obj.urls.small}></img>
        </a>
      </div>
      )
     })}
    </div>
  </div>
    </>
  );
}

export default App;
