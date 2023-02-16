import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar'
import { toast } from "react-toastify";
import { filterFilterSubcategories, filterMainCategories, filterProducts } from '../../Utils/Data';
import { getCategories, getCategory, getMainCategories, getProducts } from '../../Utils/APIs';
import SidebarAccordion from '../../Components/SidebarAccordion';
import Slider from 'react-slick';
import SubCategorySingle from '../Categories/SubCategorySingle';
import { subCategorySliderParams } from '../Categories/utils';
import CategoryFilter from '../../Components/CategoryFilter';

const SpecificCategory = ({ support }) => {

  const navigate = useNavigate()
  const { categoryid, maincategoryid } = useParams();
  const subcategorySlider = useRef();

  const [categoryDetail, setCategoryDetail] = useState({
    id: '',
    categoryName: '',
    subCategories: []
  });
  const [productlist, setProductlist] = useState([]);
  const [mainCategories, setmainCategories] = useState([])
  const [mainCategoryName, setmainCategoryName] = useState("")

  useEffect(() => {
    productAPI();
    getCategoryAPI();
    mainCategoriesAPI()
  }, []);

  useEffect(() => {
    mainCategories.forEach((cat) => {
      if(cat.id === maincategoryid) {
        setmainCategoryName(cat.mainCategoryName)
      }
    })
  }, [maincategoryid, mainCategories])

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
      let temporaryMainCategories = filterMainCategories(res.data.mainCategories)
      setmainCategories(temporaryMainCategories)
    } else {
      toast.error("Internal server error")
    }
  }

  const getCategoryAPI = async () => {
    try {
      const res = await getCategory(categoryid);
      if (res.status === 200) {
        const {
          _id,
          name,
          subCategories
        } = res.data.category
        setCategoryDetail({
          id: _id,
          categoryName: name,
          subCategories: subCategories
        })
      } else {
        toast.error("internal server error")
      }
    } catch (error) {
      toast(error);
    }
  }

  const goToSubcategory = (subcategoryid) => {
    mainCategories.forEach((cat) => {
      if(cat.mainCategoryName === mainCategoryName) {
        navigate(`/category/${cat.id}/${categoryid}/${subcategoryid}`)
        return
      }
    })
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
                <Link to={`/category/${maincategoryid}`}>{mainCategoryName}</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {categoryDetail.categoryName}
              </li>
            </ol>
          </nav>
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div className="mainsidebar-category-wrapper">
                <div className="cloths-category">
                  <h3 className="categories-main-title-visible">{categoryDetail.categoryName}</h3>
                  {
                    categoryDetail.subCategories?.length ? categoryDetail.subCategories.map((item) => {
                      return <div>
                        <p className='maincategory-title' onClick={() => goToSubcategory(item.subcategory._id)}>{item.subcategory.name}</p>
                      </div>
                    }) : <p className='ps-3 category-not-found'>No sub categories found</p>
                  }
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
                    <div className="maincategory-slider">
                      <div className="mb-4">
                        <div className="row">
                          <h4 className="subcategory-title pt-3">{categoryDetail.categoryName}</h4>
                          <Slider ref={subcategorySlider} {...subCategorySliderParams(categoryDetail.subCategories.length)}>
                            {categoryDetail.subCategories?.length ?
                              categoryDetail.subCategories.map((element, i) => {
                                return (
                                  <div>
                                    <SubCategorySingle
                                      key={i}
                                      element={element}
                                      categoryid={categoryDetail.id}
                                      mainCategoryName={categoryDetail.categoryName}
                                      goToSubcategory={goToSubcategory}
                                    />
                                  </div>
                                )
                              }) : <p>No Subcategory Found</p>
                            }
                          </Slider>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <CategoryFilter  categories={filterFilterSubcategories(categoryDetail.subCategories)}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecificCategory