import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Pagination from 'react-js-pagination';
import {useState} from 'react';
import "../Photo.css";
import { Link } from "react-router-dom";

function Photo() {
    const[page, setPage] = useState(1);

    const handlePageChange = (page) => { setPage(page); };

    return (
      <div>
        <Header />
        <form className="photo">
          <div className="image1"></div>
          <div className="image2"></div>
          <div className="image3"></div>
          <div className="image4"></div>
          <br></br>
          <div className="image5"></div>
          <div className="image6"></div>
          <div className="image7"></div>
          <div className="image8"></div>
        </form>


        <div className="page">
          {/* <Pagination 
            activePage={1}
            itemsCountPerPage={8}
            totalItemsCount={300}
            pageRangeDisplayed={8}
            onChange={handlePageChange}
          ></Pagination> */}

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
            </ul>

         </div> 
        {/*<Footer /> */}
      </div>
    );
  }

export default Photo;