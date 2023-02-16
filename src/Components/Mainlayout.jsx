import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';


const Mainlayout = ({ children }) => {
	const [isAnyModalOpen, setisAnyModalOpen] = useState(false)

  const handleModalBackdrop = (value) => {
    setisAnyModalOpen(value)
  }
	return (
		<div>
			<Header handleModalBackdrop={handleModalBackdrop} />
			<div className={ isAnyModalOpen ? "app-active" : "app"}>{children}</div>
			<Footer />
		</div>
	);
}

export default Mainlayout;