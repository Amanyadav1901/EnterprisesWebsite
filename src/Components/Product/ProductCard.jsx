import React, { useEffect } from "react";
import "./ProductCard.css";
import { useNavigate, useParams } from "react-router-dom";

const ProductCard = ({ productItem, category, subCategory }) => {
  // const [category, setcategory] = useState();
  const cat = useParams();
  const navigate = useNavigate();

  useEffect(() => {}, [cat]);

  return (
    <div
      onClick={() =>
        navigate(`/product/${category}/${subCategory}/${productItem.id}`)
      }
    >
      <div className="productCard w-[15rem] m-3 transition-all cursor-pointer max-h-96">
        <div className="h-[20rem] bg-white ">
          <img
            className="h-full w-full object-contain"
            src={productItem.imageUrl}
            alt=" "
          />
        </div>
        <div className="textPart bg-white p-3">
          <div>
            <p className="font-bold opacity-60 ">{productItem.brand}</p>
            <p>{productItem.imageTitle}</p>
          </div>
          <div className=" font-semibold flex items-center space-x-2">
            <p className="font-semibold"> {productItem.discountedPrice}</p>
            <p className="line-through opacity-50 "> {productItem.price}</p>
            <p className="text-green-600">{productItem.discountPersent}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
