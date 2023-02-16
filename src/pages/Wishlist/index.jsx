import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faHome, faTrash } from '@fortawesome/free-solid-svg-icons'

const Wishlist = () => {
    return (
        <div className='wishlist-wrapper'>
            <div className='container'>
                <div className='pt-3'>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/my-account">My Account</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">My Wishlist</li>
                        </ol>
                    </nav>
                </div>
                <div className='wishlist-details'>
                    <div className='main-wishlist-wrapper'>
                        <div className='main-wishlist'>
                            <div>
                                <h2>New Wishlist</h2>
                            </div>
                            <div className='wishlist-input'>
                                <label>Name</label>
                                <input type="text" />
                            </div>
                            <button className='back-account ms-0 mt-4'>Save</button>
                        </div>
                        <div className="table-responsive mx-3">
                            <table className="table table-bordered wishlist-table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Qty.</th>
                                        <th scope="col">Viewed</th>
                                        <th scope="col">Created</th>
                                        <th scope='col'>Direct Link</th>
                                        <th scope='col'>Default</th>
                                        <th scope='col'>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>cdv</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>2022-08-08</td>
                                        <td>View</td>
                                        <td>Yes</td>
                                        <td className='main-del-icon'><FontAwesomeIcon icon={faTrash} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Link to='/my-account'>
                            <button className='back-account mt-4'>
                                <FontAwesomeIcon icon={faAngleLeft} className='me-2' />
                                <span>Back to Your Account</span>
                            </button>
                        </Link>
                        <Link to='/'>
                            <button className='back-account main-home-svg'>
                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                <span>Home</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wishlist