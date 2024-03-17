import { FaPlus } from "react-icons/fa";

type ProductsProps = {
    product_id: string,
    photo: string,
    name: string,
    price: number,
    stock: number,
    handler: () => void
};
const Product_card = (
    {
        product_id,
        photo,
        name,
        price,
        stock,
        handler
    }: ProductsProps
    ) => {
  return (
    <div className="product_card">
        <img src={photo} alt={name} />
        <p>{name}</p>
        <span>₹{price}</span>
        {/* <div className="product_div" onClick={() => handler()}>
        </div> */}
        <div className="product_footer d-flex justify-content-around mt-3">
            <span>Add to cart</span>
            <button><FaPlus /></button>
        </div>
    </div>
  )
}

export default Product_card