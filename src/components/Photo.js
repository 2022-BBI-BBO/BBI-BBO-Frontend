import Header from "./Header";
import Footer from "./Footer";
import Tr from "./Tr";
import Pagination from "./Pagination";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Photo.css";
import { Link } from "react-router-dom";

function Photo() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  console.log(posts);

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
              {/* <th className="text-gray-300 px-4 py-3">Email</th>
              <th className="text-gray-300 px-4 py-3">Phone No.</th>
              <th className="text-gray-300 px-4 py-3">Website</th> */}
            </tr>
          </thead>
          <Tr posts={currentPosts(posts)} loading={loading}></Tr>
        </table>
      </div>

      {/*<Posts posts={currentPosts(posts)} loading={loading}></Posts>*/}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={setCurrentPage}
      ></Pagination>
      {/* <form className="photo">
          <div className="image1"></div>
          <div className="image2"></div>
          <div className="image3"></div>
          <div className="image4"></div>
          <br></br>
          <div className="image5"></div>
          <div className="image6"></div>
          <div className="image7"></div>
          <div className="image8"></div>
        </form> */}

      <div className="page">
        {/* <Pagination 
            activePage={1}
            itemsCountPerPage={8}
            totalItemsCount={300}
            pageRangeDisplayed={8}
            onChange={handlePageChange}
          ></Pagination> */}
        {/* 
            <ul className="pagenation">
              <a href="#" class="first">이전</a>&nbsp;&nbsp;
              <a href="#" class="num">1</a>&nbsp;
              <a href="#" class="num">2</a>&nbsp;
              <a href="#" class="num">3</a>&nbsp;
              <a href="#" class="num">4</a>&nbsp;
              <a href="#" class="num">5</a>&nbsp;
              <a href="#" class="num">6</a>&nbsp;
              <a href="#" class="num">7</a>&nbsp;
              <a href="#" class="num">8</a>&nbsp;
              <a href="#" class="num">9</a>&nbsp;&nbsp;
              <a href="#" class="last">다음</a>
            </ul> */}
      </div>
      {/*<Footer /> */}
    </div>
  );
}

export default Photo;
