import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faHome } from '@fortawesome/free-solid-svg-icons'

const OrderHistory = () => {
    return (
        <div className='order-history-wrapper'>
            <div className="container">
                <div className='pt-3'>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/my-account">My Account</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Order History</li>
                        </ol>
                    </nav>
                </div>
                <div className='order-history-main-wrapper'>
                    <div className='order-history-wrapper2'>
                        <div className='order-history-para'>
                            <p>Here are the orders you've placed since your account was created.</p>
                        </div>
                        <div className="table-responsive mx-3">
                            <table className="table table-bordered wishlist-table">
                                <thead>
                                    <tr>
                                        <th scope="col">Order reference</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Total price</th>
                                        <th scope="col">Payment</th>
                                        <th scope='col'>Status</th>
                                        <th scope='col'>Invoice</th>
                                        <th scope='col'></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>MYCYBCBH</td>
                                        <td>08/08/2022</td>
                                        <td>$275.90</td>
                                        <td>Payments by check</td>
                                        <td>Awaiting check payment</td>
                                        <td>-</td>
                                        <td>DetailsReorder</td>
                                    </tr>
                                    <tr>
                                        <td>JDRBJ</td>
                                        <td>08/08/2022</td>
                                        <td>$75.90</td>
                                        <td>Bank transfer</td>
                                        <td>Awaiting bank wire payment</td>
                                        <td>-</td>
                                        <td>Details Reorder</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
    )
}

export default OrderHistory
