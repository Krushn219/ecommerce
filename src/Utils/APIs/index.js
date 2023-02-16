import api, { apiWithToken } from "./axios";

// user management
export const signUp = (data) => api('user/register', 'POST', data);
export const signIn = (data) => api('user/login', 'POST', data);
export const verifyOTP = (data) => api ('user/verifyOTP', 'POST', data);

// product
export const getProducts = (filter = null) => api(filter === null ? 'products' : `products/?${filter}`, 'GET');

// category
export const getMainCategories = () => api('mainCategory/all', 'GET');
export const getCategories = (data) => api('category/all', 'GET', data);
export const getMainCategory = () => api('mainCategory/all', 'GET')
export const getCategory = (id) => api(`category/single/${id}`, 'GET')
export const getSubCategory = (id) => api(`admin/subcategory/single/${id}`, 'GET')

// testimonials
export const getTestimonials = () => api('testimonial/all', 'GET' )

// blogs
export const getBlogs = () => api('blogs/all','GET')
export const getSingleBlog = (id) => api(`blogs/single?id=${id}`,'GET')

// account
export const postAddress = (data) => apiWithToken(`address/create`, 'POST',data)
export const getAddress = () => apiWithToken('address/all','GET')
export const addressDelete = (id) => apiWithToken(`address/${id}`,"DELETE")
export const addressUpdate = (id, data) => apiWithToken(`address/${id}`, 'PUT', data)
export const getAddressUser = (addressID) => apiWithToken(`address/user/${addressID}`, 'GET')
export const userUpdate = (data) => apiWithToken('user/update', 'PUT', data)
export const getSingleUser = () => apiWithToken('user/singleUser','GET')
export const getUserSelect = (id) => apiWithToken(`user/select/${id}`, 'GET') 

// usercart
export const getUserWithCart = () => apiWithToken(`cart/userCart`,'GET')
export const postUpdateCart = (data) => apiWithToken('cart/updatecart', 'POST', data)
export const putCart = (id) => apiWithToken(`cart/${id}`, 'PUT')

//review
export const postReview = (data) => apiWithToken(`products/review`, 'POST', data)

// checkout payment
export const postnewOrder = (data) => apiWithToken('order/new', 'POST', data)