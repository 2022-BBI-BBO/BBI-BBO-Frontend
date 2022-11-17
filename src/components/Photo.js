import Header from "./Header";
import Footer from "./Footer";
import Tr from "./Tr";
import Pagination from "./Pagination";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Photo.css";
import { Link } from "react-router-dom";
const Photo = () => {
    const [data,setData] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const url = "http://10.150.150.2:8080/api/test";
    const [dataId,setDataId] = useState([]);
    const [dataPath,setDataPath] = useState([]);
    const [dataDate,setDataDate] = useState([]);
    useEffect( () => {axios.get(url).then(function(response) {setData(response.data); console.log("SUCCESS!!!");}).catch(function(error) {console.log("FAILD!!! ");});},[]);
    useEffect( () => {
        data.forEach( item => {
            let id = String((item.substring(0,item.indexOf(','))));
            setDataId(dataId=>[...dataId,',',id]);
            let path = String( (item.substring( item.indexOf(',')+1,item.indexOf(',',item.indexOf(',')+1 ) ) ));
            setDataPath(dataPath=>[...dataPath,',',path]);
            let date = String(item.substring(item.lastIndexOf(',')));
            setDataDate(dataDate=>[...dataDate,date]);
        });
        },[data]);
    return (
    <div>
      <Header />
      <div className="gallery">
        <table className="sub_news">
          <colgroup>
            <col width="200"></col>
            <col width="500"></col>
          </colgroup>
          <thead className="justify-between">
            <tr className="bg-gray-800">
              <th className="text-gray-300 px-4 py-3">Id.</th>
              <th className="text-gray-300 px-4 py-3">Name</th>
            </tr>
          </thead>
            {/*<Tr posts={currentPosts(posts)} loading={loading}></Tr>*/}
        </table>
      </div>
        <div>
            I'm id { dataId }
        </div>
        <h2>
            This is path { dataPath }
        </h2>
        <h3>date {dataDate}</h3>

        {/*<Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={setCurrentPage}
        ></Pagination>*/}
    </div>
  );
}
export default Photo;