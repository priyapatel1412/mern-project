import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import "./Home.css";
import image from "../../images/Profile.png";
const ProductCard = ({ product }) => {
  console.log("images", product.images);
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    aciveColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product ? product.ratings : 5,
    isHalf: true,
  };

  return (
    <Link className="productCard" to={`product/${product._id}`}>
      <img
        src={product.images.length > 0 ? product.images[0].url : image}
        alt={product.name}
      />
      <p>{product.name}</p>
      <div>
        <ReactStars {...options} />
        <span>({product.numOfReviews} Reviews)</span>
      </div>
      <span>$ {product.price}</span>
    </Link>
  );
};

export default ProductCard;
