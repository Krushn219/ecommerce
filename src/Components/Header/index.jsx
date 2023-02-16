import React, { useEffect, useState } from "react";
import "./style.css";
import Png from "../../assets/Images/Icon 1.png";
import Callheadericon from "../../assets/Images/CallHeaderIcon.png";
import shippingHeader from "../../assets/Images/shippingHeader.png";
import Logo from "../../assets/Images/Logo.png";
import Headersearch from "../../assets/Images/HeaderSearch.png";
import HeaderUser from "../../assets/Images/HeaderUser.png";
import HeaderCart from "../../assets/Images/HeaderCart.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  COMPLETE,
  LOGOUT_REQUEST,
  NOT_ACTIVE,
  SET_LOGOUT_REQUEST_STATUS,
} from "../../store/actions/types";
import { useDetectClickOutside } from "react-detect-click-outside";
import { getUserWithCart } from "../../Utils/APIs";

const Header = ({ handleModalBackdrop }) => {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [isActive, setisActive] = useState(false);
  const [show, setshow] = useState(false);
  const [isshow, setisshow] = useState(false);
  const [isshowmore, setisshowmore] = useState(false);
  const [cartItems, setcartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const { isAuthenticated, logoutRequestStatus } = useSelector((state) => state.auth);
    
  const headerUserClose = () => {
    if (isshow) {
    // console.log("ref");
    // handleModalBackdrop(false)
    // setisshow(false)
    }
  };
  const userRef = useDetectClickOutside({ onTriggered: headerUserClose });

  useEffect(() => {
    getUserCart();
  }, []);
  
  const getUserCart = async () => {
    try {
      const res = await getUserWithCart();
      setcartItems(res?.data?.user[0].products)
    } catch (e) {
      toast.error(e);
    }
  };
  
  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total =
        total + 7.0 + (total + item.productId.withDiscount * item.quantity);
    });
    setTotal(total);
  }, [cartItems]);

  useEffect(() => {
    if (logoutRequestStatus === COMPLETE) {
      toast.info("Logout successfully");
      navigate("/login");
      dispatch({ type: SET_LOGOUT_REQUEST_STATUS, payload: NOT_ACTIVE });
    }
  }, [logoutRequestStatus]);

  const toggleHandler = () => {
    setisActive(!isActive);
  };

  const HeaderSearch = () => {
    handleModalBackdrop(!show);
    setshow(!show);
  };

  const Headeruser = () => {
    // console.log("onClick");
    handleModalBackdrop(!isshow);
    setisshow(!isshow);
  };

  const btnmodal = () => {
    if(isAuthenticated) {
      handleModalBackdrop(true);
      setisshowmore(!isshowmore);
    } else {
      toast.error("You have to login first to access cart...!!")
    }
  };

	const signIn = () => {
		setisshow(false)
		handleModalBackdrop(false)
		navigate(`/login`)
	}

	const signUp = () => {
		setisshow(false)
		handleModalBackdrop(false)
		navigate(`/register`)
	}

	const goToAccount = () => {
		setisshow(false)
		handleModalBackdrop(false)
		navigate(`/my-account`)
	}

	const logout = () => {
		setisshow(false)
		handleModalBackdrop(false)
		dispatch({ type: LOGOUT_REQUEST })
	}

  const closeCartModal = () => {
    handleModalBackdrop(false);
    setisshowmore(false);
  };


  return (
    <header className="header-wrapper">
      <div className="header-topbar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="shipping-header">
                <img src={shippingHeader} className="" alt="png" />
                <p>Free exress international delivery + Easy return</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="d-flex align-items-center justify-content-end call-infomain">
                <div className="call-info">
                  <img src={Callheadericon} alt="png" />
                  <p>Phone:00 0000 0000</p>
                </div>
                <div className="emailsubscription">
                  <img src={Png} alt="png" />
                  <p>info@prestashopdemo.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="header-logo">
                <Link to="/">
                  <img src={Logo} alt="png" className="img-fluid" />
                </Link>
              </div>
              <div className="order-lg-1 d-flex align-items-center megamenu-main">
                <div
                  className="collapse navbar-collapse navbar-main menu"
                  id="navbarSupportedContent"
                ></div>
                <button
                  className="navbar-toggler order-lg-1"
                  onClick={toggleHandler}
                  type="button"
                >
                  <FontAwesomeIcon icon={faBars} className="bars" />
                </button>
                <div> 
                    <input
                      type="search"
                      className={
                        show
                          ? "form-control active click-text"
                          : "form-control click-text"
                      }
                      placeholder="Search"
                    />
                </div>
                <div className="d-flex align-items-center">
                  <div className="header-icon header-search-icon">
                    <div className="form-group has-search">
                      <img
                        src={Headersearch}
                        onClick={HeaderSearch}
                        alt="img"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="header-icon header-usermain">
                    <div className="nav-item">
                      <img
                        src={HeaderUser}
                        onClick={Headeruser}
                        alt="png"
                        className="img-fluid"
                      />
                    </div>
                    <div
                      ref={userRef}
                      className={
                        isshow
                          ? "sign-header click-user active"
                          : "sign-header click-user"
                      }
                    >
                      {!isAuthenticated ? (
                        <ul>
                          {location.pathname !== "/login" && (
                            <li key="sign-in" className="nav-item">
                              <p className="cursor-pointer" onClick={signIn}>
                                Sign In
                              </p>
                            </li>
                          )}
                          {location.pathname !== "/register" && (
                            <li key="sign-up" className="nav-item">
                              <p className="cursor-pointer" onClick={signUp}>
                                Register
                              </p>
                            </li>
                          )}
                        </ul>
                      ) : (
                        <ul>
                          {location.pathname !== "/my-account" && (
                            <li key="my-account" className="nav-item">
                              <p
                                className="cursor-pointer"
                                onClick={goToAccount}
                              >
                                My Account
                              </p>
                            </li>
                          )}
                          <li key="sign-out" className="nav-item">
                            <p className="cursor-pointer" onClick={logout}>
                              Log Out
                            </p>
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                  <div className="header-icon header-cart">
                    <img
                      src={HeaderCart}
                      alt="png"
                      onClick={btnmodal}
                      className="img-fluid"
                      data-toggle="modal"
                      data-target="#myModal2"
                    />
                  </div>
                  {/* Modal */}
                  <div
                    className={
                      isshowmore
                        ? "modal-cart click-cart active"
                        : "modal-cart click-cart"
                    }
                  >
                    <div key="main">
                      <div className="close-title-count">
                        <div key="head">
                          <h5>SHOPPING CART</h5>
                        </div>
                        <div key="icon">
                          <FontAwesomeIcon
                            icon={faClose}
                            onClick={() => closeCartModal()}
                          />
                        </div>
                      </div>
                      <div className="modal-cart-body">
                        {cartItems.length ? (
                          cartItems.map((item) => {
                            return (
                              <div
                                key={item.id}
                                className="d-flex align-items-center modal-item-cart"
                              >
																
                                <div className="modal-cart-img">
                                  <img
                                    src={item.productId.image}
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </div>
                                <div className="modal-cart-info">
                                  <h4>{item.productId.title }</h4>
                                  <p>Qty: {item.quantity}</p>
                                  <span className="main-price-cart">
                                    ${item.productId.withDiscount}
                                  </span>
                                  <del className="cartwith-discount-price">
                                    ${item.productId.originalPrice}
                                  </del>
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <p className="ps-4">Cart is Empty</p>
                        )}
                      </div>
                      <div className="sub-total-cart">
                        <div className="d-flex align-item-center justify-content-between cart-main-subtotal main-total">
                          <p>Sub Total</p>
                          <span>${total}</span>
                        </div>
                        <div className="d-flex align-item-center justify-content-between cart-main-subtotal">
                          <p>Shipping</p>
                          <span>$7.00</span>
                        </div>
                        <div className="d-flex align-item-center justify-content-between cart-main-subtotal">
                          <p>Total (tax excl.)</p>
                          <span>${total + 7.0}</span>
                        </div>
                        <div className="mt-4 modal-main-btns">
                          <Link to="/cart">
                            <button
                              variant="secondary"
                              className="cart-modal-btn"
                              onClick={closeCartModal}
                            >
                              view cart
                            </button>
                          </Link>
                          <Link to="/checkout">
                            <button
                              variant="primary"
                              className="checkout-modal-btn"
                              onClick={closeCartModal}
                            >
                              checkout
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  isActive
                    ? "collapse navbar-collapse navbar-main menu active"
                    : "collapse navbar-collapse navbar-main menu"
                }
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about-us">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/categories">
                      <div className="nav-link pointer">Categories</div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/blogs" className="nav-link">
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact-us" className="nav-link">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
