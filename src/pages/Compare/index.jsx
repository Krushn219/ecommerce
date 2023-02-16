import React, { useEffect, useState } from 'react'
import './style.css'
import pro1 from '../../assets/Images/Products/1.jpg'
import pro2 from '../../assets/Images/Products/2.jpg'
import pro3 from '../../assets/Images/Products/3.jpg'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getProducts } from "../../Utils/APIs";
import { filterProducts } from '../../Utils/Data';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import SidebarAccordion from '../../Components/SidebarAccordion'
import Sidebar from '../../Components/Sidebar'

let productCompare = [{
  id: 1,
  image: pro1,
  title: "MacBook Air",
  withDiscountPrice: 35.90,
  discription: "Lorem ipsum dolor sit amet, mel paulo sonet latine ad, vis te ridens oporteat, tale ipsum facilis pro ei.",
}, {
  id: 2,
  image: pro2,
  title: "Ear Birds",
  withDiscountPrice: 35.90,
  discription: "Lorem ipsum dolor sit amet, mel paulo sonet latine ad, vis te ridens oporteat, tale ipsum facilis pro ei.",
}, {
  id: 3,
  image: pro3,
  title: "Lenovo",
  withDiscountPrice: 35.90,
  discription: "Lorem ipsum dolor sit amet, mel paulo sonet latine ad, vis te ridens oporteat, tale ipsum facilis pro ei.",
}]

let Composition = [{
  id: 1,
  composition: 'basic'
},{
  id: 2,
  composition: 'basic'
},{
  id: 3,
  composition: 'basic'
}]

let Color = [{
  id: 1,
  color: 'Black'
},{
  id: 2,
  color: 'Purple'
},{
  id: 3,
  color: 'Green'
}]

let Size = [{
  id: 1,
  size:	'720×1280'
},{
  id: 2,
  size:	'750×1300'
},{
  id: 3,
  size:	'750×1350'
}]

let frameSize = [{
  id: 1,
  framesize: 'Cotton'
},{
  id: 2,
  framesize: 'Big'
},{
  id: 3,
  framesize: 'Small'
}]

const Compare = ({ support }) => {
  const { id } = useParams;
  const [productlist, setProductlist] = useState([]);
  const [product, setproduct] = useState({})
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/products/${id}`)
  }
  useEffect(() => {
    productAPI();
  }, []);

  const productAPI = async () => {
    try {
      setProductlist([]);
      const res = await getProducts();
      setProductlist(filterProducts(res?.data?.productlist) || []);
    } catch (error) {
      toast(error);
    }
  };

  useEffect(() => {
    setproduct(productlist.filter((element) => element.id === id)[0] || {})
  }, [productlist])

  return (
    <div className="compare-wrapper">
      <div className="container">
        <div className="py-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Product Compare
              </li>
            </ol>
          </nav>
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div className="mainsidebar-category-wrapper">
                <Sidebar productlist={productlist} />
              </div>
            </div>

            <div className="shop-accordion order-main2 mt-0 mb-4">
              <SidebarAccordion productlist={productlist} support={support} />
            </div>

            <div className='col-lg-9 col-md-12 col-sm-12'>
              <div className='page-content card card-block'>
                <div className='products_block table-responsive'>
                  <table className='table table-bordered active product-comparision'>
                    <tbody>
                      <tr>
                        <td className='product-compare-title-main'>
                          <span>Features</span>
                        </td>
                        {productCompare.length ? productCompare.map((element) => {
                          return <td key={id} className='product-compare-info-main w-22'>
                            <div className='remove'>
                              <FontAwesomeIcon icon={faCircleMinus} />
                            </div>
                            <div className="category-spaecialtrend">
                              <div className="main-category-spacialimg">
                                <div className="category-sider-img">
                                  <div className="selling-main-img-box" onClick={() => handleClick()}>
                                    <img
                                      src={element.image}
                                      className="img-fluid selling-img1"
                                      alt="jpg"
                                    />
                                    <img src={element.image} alt="img" className="selling-img2 img-fluid" />
                                  </div>
                                </div>
                              </div>
                              <div className='compare-pro-info'  onClick={() => handleClick()}>
                                <h4>{element.title}</h4>
                                <span>${element.withDiscountPrice}</span>
                                <p>{element.discription}</p>
                              </div>
                            </div>
                          </td>
                        }) : <p>No Product Found</p>}
                      </tr>
                      
                      <tr>
                        <td className='compare-composition'>Composition</td>
                        { Composition.length && Composition.map((item) => {
                          return <td key={item.id} className='compare-composition'>{item.composition}</td>
                        }) }
                      </tr>

                      <tr>
                        <td className='compare-composition'>Color</td>
                        { Color.length && Color.map((item) => {
                          return <td key={item.id} className='basic-compare'>{item.color}</td>
                        })}
                      </tr>
                      <tr>
                        <td className='compare-composition'>Size</td>
                        { Size.length && Size.map((item) => {
                          return <td key={item.id} className='basic-compare'>{item.size}</td>
                        })}
                      </tr>
                      <tr>
                        <td className='compare-composition'>Frame Size</td>
                        { frameSize.length && frameSize.map((item) => {
                          return <td key={item.id} className='basic-compare'>{item.framesize}</td>
                        })}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Compare