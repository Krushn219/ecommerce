import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar'
import { toast } from "react-toastify";
import { filterFilterCategories, filterMainCategories, filterProducts } from '../../Utils/Data';
import { getCategories, getMainCategories, getProducts } from '../../Utils/APIs';
import SidebarAccordion from '../../Components/SidebarAccordion';
import Slider from 'react-slick';
import SubCategorySingle from '../Categories/SubCategorySingle';
import { subCategorySliderParams } from '../Categories/utils';
import CategoryFilter from '../../Components/CategoryFilter';

const Category = ({ support }) => {

  const { maincategoryid } = useParams()
  const subcategorySlider = useRef();
  const navigate = useNavigate()

  const [productlist, setProductlist] = useState([]);
  const [categories, setcategories] = useState([]);
  const [mainCategoryName, setmainCategoryName] = useState("")
  const [toggleCategory, settoggleCategory] = useState([]);

  useEffect(() => {
    productAPI();
    mainCategoriesAPI()
  }, []);

  useEffect(() => {
    console.log(categories);
  }, [categories])

  const productAPI = async () => {
    try {
      setProductlist([]);
      const res = await getProducts();
      setProductlist(filterProducts(res?.data?.productlist) || []);
    } catch (error) {
      toast(error);
    }
  };

  const mainCategoriesAPI = async () => {
    const res = await getMainCategories();
    if (res.status === 200) {
      let maincategoryname
      filterMainCategories(res.data.mainCategories).forEach((cat) => {
        if (cat.id === maincategoryid) {
          maincategoryname = cat.mainCategoryName
          setmainCategoryName(cat.mainCategoryName)
        }
      })
      const RES = await getCategories();
      if (RES.status === 200) {
        let temp = []
        let arr = []
        RES.data.categories.forEach((category) => {
          if (maincategoryname === category.maincategory.name) {
            temp.push({
              id: category._id,
              name: category.name,
              subCategories: category?.subCategories || []
            })
            arr.push(false)
          }
        })
        settoggleCategory(arr)
        setcategories(temp)
      } else {
        toast.error("Internal server error")
      }
    } else {
      toast.error("Internal server error")
    }
  }

  const handleCategoryVisibility = (i) => {
    let arr = []
    toggleCategory.forEach((item, index) => {
      if (index === i) {
        arr[index] = !item;
      } else {
        arr[index] = item;
      }
    })
    settoggleCategory([...arr])
  }

  const goToSpecificCategory = (categoryid) => {
    navigate(`/category/${maincategoryid}/${categoryid}`)
  }

  const goToSubcategory = (categoryid, subcategoryid) => {
    navigate(`/category/${maincategoryid}/${categoryid}/${subcategoryid}`)
  }


  return (
    <div className="category-main-wrapper">
      <div className="container">
        <div className="py-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <Link to="/categories">Categories</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {mainCategoryName}
              </li>
            </ol>
          </nav>
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div className="mainsidebar-category-wrapper">
                <div className="mainsidebar-category-wrapper me-0">
                  <div className="cloths-category">
                    <h3 className="categories-main-title-visible">{mainCategoryName}</h3>
                    {categories?.length ? categories?.map((item, index) => {
                      return (
                        <div key={item.id}>
                          <div className="d-flex justify-content-between visible-title-category" onClick={() => handleCategoryVisibility(index)} >
                            <h4>{item.name}</h4>
                            <div className='visible-categories'>{toggleCategory[index] ? '-' : '+ '}</div>
                          </div>
                          <div className={toggleCategory[index] ? 'category-subtitle active' : 'category-subtitle'}>
                            {item?.subCategories?.length ?
                              item.subCategories.map((element, i) => {
                                return (
                                  <div key={i} >
                                    <p onClick={() => goToSubcategory(item.id, element.subcategory._id)}>
                                      {element?.subcategory.name}
                                    </p>
                                  </div>
                                );
                              }) : <p className="ps-3 category-not-found">No SubCategory Found</p>}
                          </div>
                        </div>
                      );
                    }) : <p className="ps-3 category-not-found">No Category Found</p>}
                  </div>
                </div>
                <Sidebar productlist={productlist} />
              </div>
            </div>

            <div className="shop-accordion order-main2 mt-0 mb-4">
              <SidebarAccordion productlist={productlist} support={support} />
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12">
              <div className="subcategory-wrapper">
                <div className="subcategory">
                  <div className="mainCategory-info">
                    <div className="mb-4">
                      <h4 className="maincategory-name pt-3">{mainCategoryName}</h4>
                      {categories?.length ? categories?.map((item, index) => {
                        return <div key={index} className='row'>
                          <div className='maincategory-slider pt-3'>
                            <h4 className='subcategory-title' onClick={() => goToSpecificCategory(item.id)}>{item.name}</h4>
                            <Slider ref={subcategorySlider} {...subCategorySliderParams(categories?.subCategories?.length)}>
                              {item.subCategories?.length ? item.subCategories.map((element, i) => {
                                return <div>
                                  <SubCategorySingle
                                    key={i}
                                    element={element}
                                    categoryid={item.id}
                                    mainCategoryName={categories.categoryName}
                                    goToSubcategory={(subcategoryid) => goToSubcategory(item.id, subcategoryid)}
                                  />
                                </div>
                              }) : <p className='ps-3 category-not-found'>No subcategory found</p>}
                            </Slider>
                          </div>
                        </div>
                      }) : <p className='ps-3 category-not-found'>No category Found</p>}
                    </div>
                  </div>
                </div>
                <CategoryFilter categories={filterFilterCategories(categories)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category