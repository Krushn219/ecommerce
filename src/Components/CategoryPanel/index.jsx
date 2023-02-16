import React from 'react'

const CategoryPanel = ({ categories, toggleCategory, handleCategoryVisibility, goToSubcategory }) => {
  
  return (
    <>
    {Object.keys(categories || {}).map((categoryName) => {
      return <div className="cloths-category">
        <h3 className="categories-main-title-visible">{categoryName} :</h3>
        {categories[categoryName]?.length ?
          categories[categoryName].map((item, index) => {
            console.log(item);
            return (
              <div key={item.id}>
                <div className="d-flex justify-content-between visible-title-category" onClick={() => handleCategoryVisibility(categoryName, index)} >
                  <h4>{item.name}</h4>
                  <div className='visible-categories'>{toggleCategory[categoryName][index] ? '-' : '+ '}</div>
                </div>
                <div className={toggleCategory[categoryName][index] ? 'category-subtitle active' : 'category-subtitle'}>
                  {item?.subCategories?.length ?
                    item.subCategories.map((element, i) => {
                      return (
                        <div key={i} >
                          <p onClick={() => goToSubcategory(categoryName, item.id, element.subcategory._id)} >
                            {element?.subcategory.name}
                          </p>
                        </div>
                      );
                    }) : <p className="ps-3 category-not-found">No SubCategory Found</p>}
                </div>
              </div>
            );
          }) : <p className="ps-3">No Category Found</p>}
      </div> 
      })}
    </>
  )
}

export default CategoryPanel