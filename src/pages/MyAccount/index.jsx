import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { LOGOUT_REQUEST } from '../../store/actions/types'
import { useDispatch } from 'react-redux'

const MyAccount = () => {

	const dispatch = useDispatch()

	const logout = () => {
		dispatch({ type: LOGOUT_REQUEST })
	}

	return (
		<div className='myaccount-wrapper'>
			<div className="container">
				<div className='pt-3'>
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb">
							<li className="breadcrumb-item"><Link to="/">Home</Link></li>
							<li className="breadcrumb-item active" aria-current="page">My Account</li>
						</ol>
					</nav>
				</div>
				<div className='my-account-main-wrapper'>
					<div className='myaccount-item'>
						<div className='row'>
							<div className="col-lg-4 col-md-6 col-sm-12">
								<Link to='/information'>
									<div className='user-informationmain text-center'>
										<FontAwesomeIcon icon={faUser} />
										<h4>Information</h4>
									</div>
								</Link>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12">
								<Link to='/wishlist'>
									<div className='user-information text-center'>
										<FontAwesomeIcon icon={faHeart} />
										<h4>My Wishlist</h4>
									</div>
								</Link>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12">
								<Link to='/order-history'>
									<div className='user-information text-center mt-main3'>
										<FontAwesomeIcon icon={faCalendar} />
										<h4>Order History And Details</h4>
									</div>
								</Link>
							</div>
						</div>
					</div>

					<div className='text-center ms-0 mt-5'>
						<button type='button' className='back-account' onClick={logout}>Sign out</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MyAccount