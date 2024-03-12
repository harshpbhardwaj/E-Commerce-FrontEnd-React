import { Link } from "react-router-dom"
import Product_card from "../components/product-card"

const Home = () => {
  const addToCartHandler = () => {};
  return (
    <div className="home">
      <section></section>
      <h1>Latest Products <Link to={"/search"} className="findmore">More</Link></h1>
      <main>
        <Product_card product_id="123"
        photo="data:image/jpeg;base64,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"
        name="MacBook Air" price={120000} stock={12} handler={addToCartHandler} />
        <Product_card product_id="123"
        photo="data:image/jpeg;base64,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"
        name="MacBook Air" price={120000} stock={12} handler={addToCartHandler} />
      </main>
      <div></div>
    </div>
  )
}

export default Home