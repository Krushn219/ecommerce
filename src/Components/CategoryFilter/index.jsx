import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import CategoriesProducts from '../../pages/Categories/CategoriesProducts';
import Grid2 from '../../pages/Categories/Grid2';
import List1 from '../../pages/Categories/List1';
import List2 from '../../pages/Categories/List2';
import Catlog from '../../pages/Categories/Catlog';
import grid from '../../assets/Images/grid.svg'
import grid2main from '../../assets/Images/grid2.svg'
import listmain from '../../assets/Images/list.svg'
import listmain2 from '../../assets/Images/listmain2.svg'
import catelog from '../../assets/Images/catelog.svg'
import filter from '../../assets/Images/filter.png'
import { getProducts } from '../../Utils/APIs';
import { filterProducts } from '../../Utils/Data';
import { toast } from "react-toastify";
import RangeSlider from 'react-bootstrap-range-slider';
import { color, size, brand, demension, availability, price } from "../../pages/Categories/utils"

const CategoryFilter = ({ categories }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [productlist, setProductlist] = useState([]);
  const [isshowmain, setisshowmain] = useState(false);
  const [value, setValue] = useState(0);
  const [activeColor, setactiveColor] = useState([]);
  const [filterCat, setfilterCat] = useState([])

  useEffect(() => {
    productAPI()
  }, [])

  useEffect(() => {
    let arr = []
    if(categories?.length) {
      categories?.forEach((cat) => {
        arr.push({
          ...cat,
          productsCount: 10,
          status: false,
        })
      })
    }
    setfilterCat(arr)
  }, [categories])

  const productAPI = async () => {
    try {
      setProductlist([])
      const res = await getProducts()
      setProductlist(filterProducts(res?.data?.productlist) || [])
    } catch (error) {
      toast(error)
    }
  }

  const filterColor = (id) => {
    if (activeColor.length && activeColor.includes(id)) {
      const temp = activeColor.filter((element) => element !== id)
      setactiveColor(temp)
    } else {
      setactiveColor([...activeColor, id])
    }
  }

  const Filter = () => {
    setisshowmain(!isshowmain)
  }

  return (
    <div>
      <div className="products-main-category d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <div className="filter-btn">
            <button onClick={Filter}>
              <img src={filter} alt="" />
              <span>Filter</span>
            </button>
          </div>
          <div>
            <p>16 products</p>
          </div>
        </div>
        <div className="main-grid-section">
          <p onClick={() => setTabIndex(0)}>
            <img className={tabIndex === 0 ? 'grid-img active' : 'grid-img'} src={grid} alt='img' />
          </p>
          <p onClick={() => setTabIndex(1)}>
            <img className={tabIndex === 1 ? 'grid2-img active' : 'grid2-img'} src={grid2main} alt='img' />
          </p>
          <p onClick={() => setTabIndex(2)}>
            <img className={tabIndex === 2 ? 'list-img active' : 'list-img'} src={listmain} alt='img' />
          </p>
          <p onClick={() => setTabIndex(3)}>
            <img className={tabIndex === 3 ? 'list2-img active' : 'list2-img'} src={listmain2} alt='img' />
          </p>
          <p onClick={() => setTabIndex(4)}>
            <img className={tabIndex === 4 ? 'catelog-img active' : 'catelog-img'} src={catelog} alt='img' />
          </p>
        </div>
        <div className="dropdown-category d-flex align-items-center">
          <p>Sort By : </p>
          <select className="ms-2">
            <option>Best Sellers</option>
            <option>Relavance</option>
            <option>Name, A to Z</option>
            <option>Price, low to high</option>
            <option>Price, high to low</option>
          </select>
        </div>
      </div>
      {/* Filter */}
      <div className={isshowmain ? 'filter-wrapper active' : 'filter-wrapper'}>
        <div className="filter-main-wrapper">
          <h4>FILTER</h4>
          <div className="filter-inner-wrapper">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="filter-category">
                  <p>CATEGORIES</p>
                  {filterCat?.length ? filterCat.map((element) => {
                    return <div className="filter-label-checkbox" key={element.id}>
                      <div className="filter-checkbox">
                        <input type="checkbox" checked={element.status} />
                        <label>{element.name}</label>
                      </div>
                      <div>
                        <span>({element.productsCount})</span>
                      </div>
                    </div>
                  }) : <p>No Categories</p>}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="filter-category">
                  <p>AVAILABILITY</p>
                  {availability.length ? availability.map((element) => {
                    return <div className="filter-label-checkbox">
                      <div className="filter-checkbox">
                        <input type="checkbox" />
                        <label>{element.title}</label>
                      </div>
                      <div>
                        <span>({element.quantity})</span>
                      </div>
                    </div>
                  }) : <p>Not Available</p>}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="filter-category mt-sm-top mt-remove">
                  <p>BRAND</p>
                  <div className="filter-brand">
                    {brand?.length ? brand.map((item) => {
                      return <div className="filter-label-checkbox" key={item.id}>
                        <div className="filter-checkbox">
                          <input type="checkbox" />
                          <label>{item.title}</label>
                        </div>
                        <div>
                          <span>({item.quantity})</span>
                        </div>
                      </div>
                    }) : <p>No Brands</p>}
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="filter-category mt-sm-top mt-remove">
                  <p>PRICE</p>
                  {price?.length && price.map((item) => {
                    return <div key={item.id}>
                      <div>
                        <span>${item.price}</span>
                      </div>
                      <div>
                        <RangeSlider
                          value={value}
                          onChange={changeEvent => setValue(changeEvent.target.value)}
                        />
                      </div>
                    </div>
                  })}

                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="filter-category my-3 mt-remove">
                  <p>SIZE</p>
                  {size.length ? size.map((index) => {
                    return <div className="filter-label-checkbox" key={index.id}>
                      <div className="filter-checkbox">
                        <input type="checkbox" />
                        <label>{index.size}</label>
                      </div>
                      <div>
                        <span>({index.quantity})</span>
                      </div>
                    </div>
                  }) : <p>No size available</p>}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="filter-category my-3 mt-remove">
                  <p>COLOR</p>
                  <div className="filter-color">
                    {color.length ? color.map((element) => {
                      return <div className="filter-label-checkbox" key={element.id} onClick={() => filterColor(element.id)}>
                        <div className="filter-checkbox">
                          <div className="filter-main-color">
                            <p className={element.className}></p>
                            <div className={activeColor.includes(element.id) ? 'filter-check active' : 'filter-check'}>
                              <FontAwesomeIcon icon={faCheck} />
                            </div>
                          </div>
                          <label>{element.color}</label>
                        </div>
                        <div>
                          <span>({element.quantity})</span>
                        </div>
                      </div>
                    }) : <p>No Choose Color</p>}
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="filter-category my-3 mt-remove">
                  <p>DIMENSION</p>
                  {demension.length && demension.map((element) => {
                    return <div className="filter-label-checkbox">
                      <div className="filter-checkbox" key={element.id}>
                        <input type="checkbox" />
                        <label>{element.size}</label>
                      </div>
                      <div>
                        <span>({element.quantity})</span>
                      </div>
                    </div>
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="products-main-grid-category">
        {/* grid-wrapper */}
        <div
          className={
            tabIndex === 0 ? "grid-wrapper active" : "grid-wrapper"
          }
        >
          <div className="row">
            {productlist.length ? (
              productlist.map((item, i) => {
                return <CategoriesProducts key={i} item={item} />;
              })
            ) : (<p>No product Found</p>
            )}
          </div>
        </div>
        {/* grid-2 wrapper */}
        <div
          className={
            tabIndex === 1 ? "grid2-wrapper active" : "grid2-wrapper"
          }
        >
          <div className="row">
            {productlist.length ?
              productlist.map((item, i) => {
                return <Grid2 key={i} item={item} />;
              }) : <p>No product Found</p>}
          </div>
        </div>
        {/* list wrapper */}
        <div
          className={
            tabIndex === 2 ? "list-wrapper active" : "list-wrapper"
          }
        >
          {productlist.length ?
            productlist.map((item, i) => {
              return <List1 key={i} item={item} />;
            }) : <p>No product Found</p>}
        </div>
        {/* list 2 wrapper */}
        <div
          className={
            tabIndex === 3
              ? "list2-main-wrapper active"
              : "list2-main-wrapper"
          }
        >
          <div className="row">
            {productlist.length ?
              productlist.map((item, i) => {
                return <List2 key={i} item={item} />;
              }) : <p>No product Found</p>}
          </div>
        </div>
        {/* catelog wrapper */}
        <div
          className={
            tabIndex === 4
              ? "catelog-main-wrapper active"
              : "catelog-main-wrapper"
          }
        >
          {productlist.length ?
            productlist.map((item, i) => {
              return <Catlog key={i} item={item} />;
            }) : <p>No product Found</p>}
        </div>
      </div>
    </div>
  )
}

export default CategoryFilter