import React from 'react'
import './style.css'
import Sidebanner2 from "../../assets/Images/Sidebanner2.png";
import { support } from '../../pages/Home/utils';
import BestSeller from '../BestSeller';
import FeaturedProduct from '../FeaturedProduct';
import ShippingWrapperSingle from '../ShippingWrapperSingle';

const Sidebar = ({ productlist }) => {
  return (
    <div className="main-sidebar3">
      <div className='bestseller'>
        <BestSeller productlist={productlist} />
      </div>
      <div className="shipping-wrapper">
        {support.length &&
          support.map((item, i) => {
            return <ShippingWrapperSingle key={i} item={item} />;
          })}
      </div>

      <div className="sidebanner-main">
        <img alt="png" src={Sidebanner2} className="img-fluid" />
      </div>
      <FeaturedProduct productlist={productlist} />
    </div>
  )
}

export default Sidebar