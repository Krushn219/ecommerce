import React, { useEffect, useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import OrderItem from "./OrderItem";
import { toast } from "react-toastify";
import { getUserWithCart, postUpdateCart, putCart } from "../../Utils/APIs";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const [cartItems, setcartItems] = useState([]);
  
  const navigate = useNavigate();
  const handlecart = () => {
    navigate("/");
  };

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total = total +7.00 +(total+ item.productId.withDiscount * item.quantity);
    });
   
    setTotal(total);
  }, [cartItems]);

  const handleRemove = async (item) => {
		try{
      const res = await putCart(item.productId._id)
      if(res.status === 200){
        toast.info("Cart Deleted");
        getUserCart()
      } else {
        toast.error("Cart is not deleted");
      }
		} catch(e) {
			toast.error(e)
		}
	}

  useEffect(() => {
    getUserCart();
  }, []);

  const getUserCart = async () => {
    try {
      const res = await getUserWithCart();
      setcartItems(res?.data?.user[0].products || [])
    } catch (e) {
      toast.error(e);
    }
  };
  const postUpdateCarts = async (data) => {
    try {
      const res = await postUpdateCart({
        productId: data.productId._id,
        quantity: data.quantity,
      });
			if(res.status === 200) {
				getUserCart()
			} 
    } catch (e) {
      toast.error(e);
    }
  };

  return (
    <div className="cart-wrapper cart-main2">
      <div className="container">
        <div className="pt-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Cart
              </li>
            </ol>
          </nav>
        </div>
        <div className="row cart-padding">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="cart-item">
              <h4>SHOPPING CART</h4>
              <div className="cart-inner-wrapper">
                {cartItems.length ? (
                  cartItems.map((item, i) => {
                    return (
                      <OrderItem
                        key={i}
                        item={item}
                        postUpdateCarts={postUpdateCarts}
                        handleRemove={handleRemove} 
                      />
                    );
                  })
                ) : (
                  <p className="ps-3">No products</p>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="cart-checkout">
              <div className="d-flex align-item-center justify-content-between cart-shipping">
                <p>{cartItems.length} Item</p>
                <span>$ {total}</span>
              </div>
              <div className="d-flex align-item-center justify-content-between cart-shipping">
                <p>Shipping</p>
                <span>$7.00</span>
              </div>
              <div className="d-flex align-item-center justify-content-between cart-shipping">
                <p>Total (tax excl.)</p>
                <span>$ {total + 7.00}</span>
              </div>

              <Link to="/checkout">
                <button className="checkout-btn">Proceed To Checkout</button>
              </Link>
            </div>
          </div>
        </div>
        <button className="checkout-btn mt-0 shopping" onClick={handlecart}>
          Continue SHOPPING
        </button>
      </div>
    </div>
  );
};

export default Cart;
