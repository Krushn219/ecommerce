import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const OrderItem = ({ item, handleRemove, postUpdateCarts }) => {
  const { quantity } = item;
  const { image, title, originalPrice, withDiscount } = item.productId

  let incNum = () => {
    postUpdateCarts({
      ...item,
      quantity: quantity + 1,
    });
  };

  let decNum = () => {
    if (quantity > 1) {
      postUpdateCarts({
        ...item,
        quantity: quantity - 1,
      });
    } else{
      toast.error("quantity we shude be not 0")
    }
  };

  let handleChange = (e) => {
    postUpdateCarts({
      ...item,
      quantity: e.target.value,
    });
  };

  return (
    <>
      <div className="cart-inner-wrapper">
        <div className="row align-items-center">
          <div className="col-lg-2 col-md-2 col-sm-2">
            <div className="cart-product-img">
              <img src={image} alt="img" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-7">
            <div className="iphone-cart-info">
              <div className="text-start iphone-cart">
                <h5>{title}</h5>
                <div className="product-quantity quantity-cart d-flex align-items-center">
                  <p>QUANTITY:</p>
                  <div className="d-flex">
                    <button onClick={decNum}>-</button>
                    <input
                      type="text"
                      value={quantity}
                      onChange={handleChange}
                    />
                    <button onClick={incNum}>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2">
            <div className="cart-input text-start">
              <div>
                <p className="cart-pricemain">${withDiscount}</p>
                <p className="cart-discount">
                  -${originalPrice - withDiscount}
                </p>
                <del className="remove-price">${originalPrice}</del>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1">
            <div className="text-end trash-main">
              <FontAwesomeIcon
                icon={faTrash}
                className="trashicon"
                onClick={() => handleRemove(item)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderItem;
