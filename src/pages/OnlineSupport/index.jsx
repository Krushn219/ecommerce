import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import onlinesupport from '../../assets/Images/online-support.svg'

const OnlineSupport = () => {
	return (
		<div className='online-support-wrapper terms-condition-use-wrapper'>
			<div className="container">
				<div className='pt-3'>
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb">
							<li className="breadcrumb-item"><Link to="/">Home</Link></li>
							<li className="breadcrumb-item active" aria-current="page">Online Support</li>
						</ol>
					</nav>
				</div>
				<div className='terms-condition-use-main-wrapper'>
					<div className='terms-codition-use-wrapper2'>
						<div className='text-center terms-of-use-img'>
							<img src={onlinesupport} alt="img" className='img-fluid' />
						</div>
						<div className='terms-title'>
							<h4>Demo Template Online Support</h4>
						</div>
						<div>
							<h5>Generate Online Support for e-commerce stores</h5>
							<p>This document is an electronic record in terms of Information Technology Act, 2000 and rules there under as applicable and the amended provisions pertaining to Electronic Records In Various statutes as amended by the Information Technology Act, 2000. This electronic record is generated by a computer system and does not require any physical or digital signatures.Your use of the Platform and services and tools are governed by the following terms and conditions ("Terms of Use") as applicable to the Platform including the applicable policies which are incorporated herein by way of reference. If You transact on the Platform, You shall be subject to the policies that are applicable to the Platform for such transaction</p>
						</div>
						<div>
							<h5 className='mt-4'>Membership Eligibility</h5>
							<p>Transaction on the Platform is available only to persons who can form legally binding contracts under Indian Contract Act, 1872. Persons who are "incompetent to contract" within the meaning of the Indian Contract Act, 1872 including un-discharged insolvents etc. are not eligible to use the Platform. If you are a minor i.e. under the age of 18 years, you may use the Platform or access content on the Platform only under the supervision and prior consent/ permission of a parent ormlegal guardian.</p>
							<p className='mt-3'>As a minor if you wish to transact on the Platform, such transaction on the Platform may be made by your legal guardian or parents. Template reserves the right to terminate your membership and / or refuse to provide you with access to the Platform if it is brought to Template's notice or if it is discovered that You are under the age of 18 years and transacting on the Platform</p>
						</div>
						<div className='terms-title'>
							<h4>Services</h4>
						</div>
						<div>
							<h5>Payment</h5>
							<ul className='mt-2 lack-of-authorization'>
								<li>Lack of authorization for any transaction/s, or</li>
								<li>Exceeding the preset limit mutually agreed by You and between "Bank/s", or</li>
								<li>Any payment issues arising out of the transaction, or</li>
								<li>Decline of transaction for any other reason/s</li>
							</ul>
							<p className='mt-4'>All payments made against the purchases/services on Platform by you shall be compulsorily in Indian Rupees acceptable in the Republic of India. Platform will not facilitate transaction with respect to any other form of currency with respect to the purchases made on Platform.</p>
							<p className='mb-4 mt-4'>Transactions, Transaction Price and all commercial terms such as Delivery, Dispatch of products and/or services are as per principal to principal bipartite contractual obligations between Buyer and Seller and payment facility is merely used by the Buyer and Seller to facilitate the completion of the Transaction. Use of the payment facility shall not render Template liable or responsible for the non-delivery, non-receipt, non-payment, damage, breach of representations and warranties, non-provision of after sales or warranty services or fraud as regards the products and /or services listed on Template's Platform.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OnlineSupport
