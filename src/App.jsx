import "./assets/css/style.css"
import "./assets/css/all.min.css"
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Mainlayout from './Components/Mainlayout';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Checkout from './pages/Checkout'
import MyAccount from './pages/MyAccount'
import Wishlist from './pages/Wishlist'
import Categories from './pages/Categories';
import NewAddress from './pages/NewAddress'
import UpdateAddress from './pages/UpdateAddress'
import ContactUs from './pages/ContactUs'
import OrderHistory from './pages/OrderHistory'
import AboutUs from './pages/AboutUs';
import ShippingPolicy from './pages/ShippingPolicy'
import OnlineSupport from './pages/OnlineSupport'
import ReturnPolicy from './pages/ReturnPolicy'
import PrivacyPolicy from './pages/PrivacyPolicy'
import SpecificCategory from './pages/SpecificCategory'
import Information from './pages/Information'
import Cart from './pages/Cart'
import TermsCondition from './pages/TermsCondition'
import SubCategory from './pages/SubCategory';
import Products from './pages/Products';
import Blog from "./pages/Blog";
import OnlyAllowedNotAuth from "./Utils/ProtectedRoutes/OnlyAllowedNotAuth";
import RequireAuth from "./Utils/ProtectedRoutes/RequireAuth";
import ScrollToTop from "./Utils/scrolllToTop";
import BlogsTab from './pages/BlogsTab'
import Compare from './pages/Compare'
import Category from "./pages/Category";

const App = () => {
 
  const [isScrollValueMoreThanHeaderHeight, setIsScrollValueMoreThanHeaderHeight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollValueMoreThanHeaderHeight(window.scrollY > 10);
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  useEffect(() => {
    const header = document.getElementsByClassName('main-header')
    if(isScrollValueMoreThanHeaderHeight){
      if(header && header[0] && header[0]?.classList){
        header[0].classList.add('sticky-header')
      }
    }
    else {
      if(header && header[0] && header[0]?.classList){
        header[0].classList.remove('sticky-header')
      }
    }
  }, [isScrollValueMoreThanHeaderHeight])

  
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
      />
      <ScrollToTop />
      <Mainlayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<OnlyAllowedNotAuth />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
          </Route>
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:maincategoryid" element={<Category /> } />
          <Route path="/category/:maincategoryid/:categoryid" element={<SpecificCategory /> } />
          <Route path="/category/:maincategoryid/:categoryid/:subcategoryid" element={<SubCategory /> } />
          <Route path="/subcategory/:id" element={<SubCategory />} />
          <Route path="/products/:id"  element={<Products />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/online-support" element={<OnlineSupport />}/>
          <Route path="/shipping-policy" element={<ShippingPolicy />}/>
          <Route path="/return-policy" element={<ReturnPolicy />}/>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
          <Route path="/compare" element={<Compare />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/terms-condition" element={<TermsCondition /> }/>
          <Route path="/blogs" element={<BlogsTab/>} />
          <Route path="/blogs/:id" element={<Blog/>} />
          <Route element={<RequireAuth />}>
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/information" element={<Information />} />
            <Route path="/new-address" element={<NewAddress />}/>
            <Route path="/update-address/:id" element={<UpdateAddress />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/order-history" element={<OrderHistory/> } />
          </Route>
        </Routes>
      </Mainlayout>
    </>
  );
}

export default App;
