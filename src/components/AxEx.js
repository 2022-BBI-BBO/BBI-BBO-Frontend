import React , { useState } from 'react';
import axios from 'axios'
function AxEx(){

  const [data,setData] = useState([]);

  const url = "http://10.150.150.2:8080/api/test";
  axios.get(url).then(function(response) { setData(response.data); console.log("성공"); }).catch(function(error) { console.log("실패"); })

  return (
    <div className="App">
      <div>
        <h1>hello world!!!</h1>
        <p>{data}</p>
      </div>
    </div>
  );
}

export default AxEx;