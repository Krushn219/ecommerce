import React, { useEffect, useState } from "react";
import './style.css'
import "../Categories/style.css";
import { Link, useParams } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import { getCategories, getCategory, getMainCategories, getProducts, getSubCategory } from "../../Utils/APIs";
import { toast } from "react-toastify";
import { filterMainCategories, filterProducts } from "../../Utils/Data";
import Sidebar from "../../Components/Sidebar";
import SidebarAccordion from "../../Components/SidebarAccordion";
import CategoryFilter from "../../Components/CategoryFilter";

const SubCategory = ({ support }) => {

  const { categoryid, maincategoryid, subcategoryid } = useParams()
  const [categoryDetail, setCategoryDetail] = useState({
    id: '',
    categoryName: '',
    subCategories: []
  });
  const [subCategoryDetail, setsubCategoryDetail] = useState({
    id: "",
    subCategoryName: ""
  });
  const [mainCategories, setmainCategories] = useState([])
  const [mainCategoryName, setmainCategoryName] = useState("")
  const [categories, setcategories] = useState({});

  useEffect(() => {
    getSubCategoryAPI()
    getCategoryAPI()
    mainCategoriesAPI()
  }, [])

  const getSubCategoryAPI = async () => {
    try {
      const res = await getSubCategory(subcategoryid);
      if (res.status === 200) {
        const {
          _id,
          name
        } = res.data.result
        setsubCategoryDetail({
          subCategoryId: _id,
          subCategoryName: name
        })
      } else {
        toast.error("internal server error")
      }
    } catch (error) {
      toast(error);
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

  const [productlist, setProductlist] = useState([])
  useEffect(() => {
    productAPI()
  }, [])

  useEffect(() => {
    mainCategories.forEach((cat) => {
      if(cat.id === maincategoryid) {
        setmainCategoryName(cat.mainCategoryName)
      }
    })
  }, [maincategoryid, mainCategories])

  const mainCategoriesAPI = async () => {
    const res = await getMainCategories();
    if (res.status === 200) {
      let temporaryMainCategories = filterMainCategories(res.data.mainCategories)
      setmainCategories(temporaryMainCategories)
      const RES = await getCategories();
      if (RES.status === 200) {
        setcategories({})
        let temp = {}
        temporaryMainCategories.forEach((mainCategory) => {
          temp[mainCategory.mainCategoryName] = []
        })
        Object.keys(temp).forEach((item) => {
          RES.data.categories.forEach((category) => {
            if (item === category.maincategory.name) {
              temp[item] = [...temp[item], {
                id: category._id,
                name: category.name,
                subCategories: category.subCategories
              }]
            }
          })
        })
        setcategories(temp)
      } else {
        toast.error("Internal server error")
      }
    } else {
      toast.error("Internal server error")
    }
  }

  const productAPI = async () => {
    try {
      setProductlist([])
      const res = await getProducts()
      setProductlist(filterProducts(res?.data?.productlist) || [])
    } catch (error) {
      toast(error)
    }
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
              <li className="breadcrumb-item" aria-current="page">
                <Link to="/categories">Categories</Link>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                <Link to={`/category/${maincategoryid}`}>{mainCategoryName}</Link>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                <Link to={`/category/${maincategoryid}/${categoryid}`}>{categoryDetail.categoryName}</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {subCategoryDetail.subCategoryName}
              </li>
            </ol>
          </nav>
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div className="mainsidebar-category-wrapper">
                <div className="cloths-category">
                  <div>
                    <h4>{subCategoryDetail.subCategoryName}</h4>
                  </div>
                </div>
                <Sidebar productlist={productlist} />
              </div>
            </div>
            <div className="shop-accordion order-main2 mt-0 mb-4">
              <SidebarAccordion productlist={productlist} support={support} />
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12">
              <CategoryFilter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
