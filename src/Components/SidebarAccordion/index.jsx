import React from 'react'
import './style.css'
import { Accordion } from 'react-bootstrap';
import Sidebanner2 from "../../assets/Images/Sidebanner2.png";
import BestSeller from '../BestSeller';
import FeaturedProduct from '../FeaturedProduct';
import ShippingWrapperSingle from '../ShippingWrapperSingle';
import CategoryPanel from '../CategoryPanel';

const SidebarAccordion = ({ productlist, support, categories, toggleCategory, handleCategoryVisibility, goToSubcategory, mainCategories }) => {
  console.log(toggleCategory);

  return (
    <div className='sidebar-accordion-wrapper'>
      <Accordion className='main-sidebar-accordion'>
        <Accordion.Item eventKey="1">
          <Accordion.Header>BEST SELLERS</Accordion.Header>
          <Accordion.Body>
            <BestSeller productlist={productlist} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className='free-shipping-accordion'>
          <Accordion.Header>FREESHIPPING</Accordion.Header>
          <Accordion.Body>
            <div className="shipping-wrapper">
              {support?.length &&
                support.map((item, i) => {
                  return (
                    <ShippingWrapperSingle key={i} item={item} />
                  );
                })}
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>FEATURED PRODUCT</Accordion.Header>
          <Accordion.Body>
            <FeaturedProduct productlist={productlist} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default SidebarAccordion