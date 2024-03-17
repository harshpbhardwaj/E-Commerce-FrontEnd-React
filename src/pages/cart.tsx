import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItems from "../components/cart-item";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: '33a',
    photo: "https://m.media-amazon.com/images/I/61bX2AoGj2L._SL1500_.jpg",
    name: "Mackbook Pro",
    price: 169000,
    quantity: 2,
    stock: 12
  }
];
const subtotal = 120000;
const tax = 1000;
const shippingCharges = 50;
const discount = 500;
const total = subtotal+tax+shippingCharges-discount;



const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);
  
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) {
        setIsValidCouponCode(true);
      }else{
        setIsValidCouponCode(false);
      }
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
      setIsValidCouponCode(false);
    };
  }, [couponCode]);
  
  return (
    <div className="cart">
      <main>
        {
          cartItems.length > 0 ?
          (
            cartItems.map((i, idx) => <CartItems key={idx} cartItem={i} />)
          ):(
            <h1>No Items Added!</h1>
          )
        }
      </main>
      <aside>
        <p>Sub Total: ₹{subtotal}</p>
        <p>Tax: ₹{tax}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>
          Discount: <em className="red"> - ₹{discount}</em>
        </p>
        <p><b>Total: ₹{total}</b></p>
        <input type="text" value={couponCode} placeholder="Coupon Code" onChange={(e) => setCouponCode(e.target.value)} />
        {
          couponCode && (
            isValidCouponCode ? (
              <span className="green">Discount of ₹{discount} using the <code>{couponCode}</code></span>
            ) : (
              <span className="red">Invalid <VscError /></span>
            )
          )
        }
        {
          cartItems.length > 0 && (
            <Link to={`/shipping`}>Checkout</Link>
          )
        }
      </aside>
    </div>
  );
};

export default Cart;