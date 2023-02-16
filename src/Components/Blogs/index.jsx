import React, { useEffect, useRef } from "react";
import "./style.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { blog } from "./utils";
import { toast } from "react-toastify";
import { getBlogs } from "../../Utils/APIs";
import { useState } from "react";
import { filterBlogs } from "../../Utils/Data";
import BlogSingle from "./BlogSingle";

const Blogs = () => {

  const blogSlider = useRef();
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    BlogsAPI();
  }, []);

  const next = () => {
    blogSlider.current.slickNext();
  };

  const previous = () => {
    blogSlider.current.slickPrev();
  };

  const BlogsAPI = async () => {
    try {
      setblogs([]);
      const res = await getBlogs();
      setblogs(filterBlogs(res?.data?.blogs) || []);
    } catch (error) {
      toast(error);
    }
  };


  return (
    <div className="main-blog-wrapper">
      <div className="container">
        <div className="blog-wrapper">
          <div className="product-title">
            <div>
              <h4>Our Blogs</h4>
            </div>
            <div className="product-sub-title">
              <div className="product-left-btn" onClick={previous}>
                <FontAwesomeIcon icon={faAngleLeft} />
              </div>
              <div className="product-next-btn" onClick={next}>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </div>
          </div>
          <div className="row  blog-item1">
            <Slider ref={blogSlider} {...blog}>
              {blogs.length ?
                blogs.map((item, i) => {
                  return <BlogSingle key={i} item={item} />;
                }) : <p className="pb-2 ps-3">No blogs yet</p>}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
