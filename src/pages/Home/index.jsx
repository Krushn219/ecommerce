import { useNavigate } from "react-router-dom";
import HomePageBanner from "../../Components/HomePageBanner";
import Blogs from "../../Components/Blogs";
import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import Sidebanner2 from "../../assets/Images/Sidebanner2.png";
import Singlebanner from "../../assets/Images/Single banner.png";
import Twobanner1 from "../../assets/Images/Two banner 1.png";
import Twobanner2 from "../../assets/Images/Two banner 2.png";
import Slider from "react-slick";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { getProducts, getTestimonials } from "../../Utils/APIs";
import { toast } from "react-toastify";
import { filterProducts } from "../../Utils/Data";
import TrendingProductSingle from "../../Components/TrendingProductSingle";
import ShippingWrapperSingle from "../../Components/ShippingWrapperSingle";
import FeaturedProductSingle from "../../Components/FeaturedProductSingle";
import OurTestimonialsSingle from "../../Components/OurTestimonials";
import BestSeller from "../../Components/BestSeller";
import FeaturedProduct from "../../Components/FeaturedProduct";
import BestSellersSingle from "../../Components/BestSellerSingle";
import { productsSliderParams, support, testimonialSliderParams } from "./utils";
import Sidebar from "../../Components/Sidebar";
import SidebarAccordion from "../../Components/SidebarAccordion";
import Timer from "../../Components/Timer";

const Home = () => {

  const [productlist, setProductlist] = useState([]);
  const [trendingProducts, settrendingProducts] = useState([])
  const [specialProducts, setspecialProducts] = useState([])
  const [Testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    productAPI();
    trendingProductsAPI();
    testimonialAPI();
    specialProductsAPI();
  }, []);

  const productAPI = async () => {
    try {
      setProductlist([]);
      const res = await getProducts();
      setProductlist(filterProducts(res?.data?.productlist || []));
    } catch (error) {
      toast(error);
    }
  };

  const trendingProductsAPI = async () => {
    try {
      settrendingProducts([]);
      const res = await getProducts("istrending=true");
      settrendingProducts(filterProducts(res?.data?.productlist || []));
    } catch (error) {
      toast(error);
    }
  };

  const specialProductsAPI = async () => {
    try {
      setspecialProducts([]);
      const res = await getProducts("isspecial=true");
      setspecialProducts(filterProducts(res?.data?.productlist || []));
    } catch (error) {
      toast(error);
    }
  };

  const testimonialAPI = async () => {
    try {
      setTestimonials([]);
      const resp = await getTestimonials();
      setTestimonials(resp?.data?.Testimonials || []);
    } catch (error) {
      toast(error);
    }
  };

  // special products
  const specialProductsSlider = useRef();

  const next = () => {
    specialProductsSlider.current.slickNext();
  };
  const previous = () => {
    specialProductsSlider.current.slickPrev();
  };
  // trending products
  const trendingProductsSlider = useRef();

  const next2 = () => {
    trendingProductsSlider.current.slickNext();
  };
  const previous2 = () => {
    trendingProductsSlider.current.slickPrev();
  };
  // testimonial
  const testimonialSlider = useRef();

  const next3 = () => {
    testimonialSlider.current.slickNext();
  };
  const previous3 = () => {
    testimonialSlider.current.slickPrev();
  };

  return (
    <div>
      <HomePageBanner />
      <section className="shop-sidebar-wrapper">
        <div className="container">
          <div className="shop-sidebar-inner-wrapper">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12 order-main2 main-sidebar-wrapper">
                <Sidebar productlist={productlist} />
              </div>

              <div className="shop-accordion order-main2">
                <SidebarAccordion productlist={productlist} support={support} />
              </div>

              <div className="col-lg-9 col-md-12 col-sm-12 order-main1 main-sidebar2-wrapper">
                <div className="tabproduct-wrapper">
                  <div className="product-title">
                    <div>
                      <h4>TRENDING PRODUCTS</h4>
                    </div>
                    <div className="product-sub-title">
                      <p className="cursor-pointer">Featured </p> <span> |</span>
                      <p className="cursor-pointer">Latest </p> <span> |</span>
                      <p className="cursor-pointer">Best Seller</p>
                      <div className="next-btns">
                        <div className="product-left-btn" onClick={previous2}>
                          <FontAwesomeIcon icon={faAngleLeft} />
                        </div>
                        <div className="product-next-btn" onClick={next2}>
                          <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <div className="sub-tabproduct-wrapper">
                    <div className="row">
                      <Slider ref={trendingProductsSlider} {...productsSliderParams(trendingProducts.length)}>
                        {trendingProducts.length ? (
                          trendingProducts.map((item, i) => {
                            return (
                              <TrendingProductSingle key={i} item={item} />
                            );
                          })
                        ) : (
                          <p className="ps-3">No product yet</p>
                        )}
                      </Slider>
                    </div>
                  </div>
                </div>

                <div className="multibanner-wrapper">
                  <div className="multibanner-img">
                    <img src={Singlebanner} alt="png" className="img-fluid" />
                    <div className="multibanner-content">
                      <p>FLAUNT YOUR BEST</p>
                      <button className="shop-main-btn">Shop Now</button>
                    </div>
                  </div>
                  <div className="row m-left">
                    <div className="col-lg-6 col-md-6 col-sm-12 p-0">
                      <div className="multibanner-img1">
                        <img src={Twobanner1} alt="png" className="img-fluid" />
                        <div className="multibanner-content1">
                          <p>New Arrivals</p>
                          <span>Get. Set. Turbo</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 p-0">
                      <div className="multibanner-img1 multibanner-pro">
                        <img src={Twobanner2} alt="png" className="img-fluid" />
                        <div className="multibanner-content1">
                          <p>Seamless Studio Sound</p>
                          <span>Black Friday</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tabproduct-wrapper special-product">
                  <div className="product-title">
                    <div>
                      <h4>Special Products</h4>
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
                  <div className="sub-tabproduct-wrapper">
                    <div className="row">
                      <Slider ref={specialProductsSlider} {...productsSliderParams(productlist.length)}>
                        {specialProducts.length ? (
                          specialProducts.map((item, i) => {
                            return (
                              <TrendingProductSingle key={i} item={item} />
                            );
                          })
                        ) : (
                          <p className="ps-3">No product yet</p>
                        )}
                      </Slider>
                    </div>
                  </div>
                </div>

                <div className="testimonials-wrapper">
                  <div className="product-title">
                    <div>
                      <h4>Our Testimonials</h4>
                    </div>
                    <div className="product-sub-title">
                      <div className="product-left-btn" onClick={previous3}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                      </div>
                      <div className="product-next-btn" onClick={next3}>
                        <FontAwesomeIcon icon={faAngleRight} />
                      </div>
                    </div>
                  </div>
                  <div className="row m-left">
                    <Slider ref={testimonialSlider} {...testimonialSliderParams(Testimonials.length)}>
                      {Testimonials.length &&
                        Testimonials.map((item, i) => {
                          return <OurTestimonialsSingle key={i} item={item} />;
                        })}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Blogs />
    </div>
  );
}

export default Home;
