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
            </tr>
          </thead>
          <Tr posts={currentPosts(posts)} loading={loading}></Tr>
        </table>
      </div>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={setCurrentPage}
      ></Pagination>
    </div>
  );
}

export default Photo;
