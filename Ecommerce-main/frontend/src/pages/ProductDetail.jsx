import React, { useContext, useEffect, useState } from "react";
import { ShopDataContext } from "../context/ShopContext";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import RelatedProduct from "../components/RelatedProduct";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { productId } = useParams();
  let { products, currency, addtoCart } = useContext(ShopDataContext);
  let [productData, setProductData] = useState(false);

  const [image, setImage] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage1(item.image1);
        setImage2(item.image2);
        setImage3(item.image3);
        setImage4(item.image4);
        setImage(item.image1);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025]">
      {/* Product Section */}
      <div className="flex flex-col lg:flex-row gap-[20px] px-[20px] lg:px-[60px] pt-[80px]">
        {/* Images */}
        <div className="lg:w-[50%] flex flex-col-reverse lg:flex-row items-center gap-4">
          <div className="flex lg:flex-col gap-3">
            {[image1, image2, image3, image4].map((img, idx) => (
              <div
                key={idx}
                className="w-[60px] h-[60px] md:w-[100px] md:h-[110px] bg-slate-300 border rounded-md"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover rounded-md cursor-pointer"
                  onClick={() => setImage(img)}
                />
              </div>
            ))}
          </div>

          <div className="w-[80%] lg:w-[70%] h-[300px] md:h-[500px] border rounded-md overflow-hidden">
            <img
              className="w-full h-full object-contain"
              src={image}
              alt=""
            />
          </div>
        </div>

        {/* Details */}
        <div className="lg:w-[50%] flex flex-col gap-3 text-white">
          <h1 className="text-[28px] md:text-[40px] font-semibold">
            {productData.name.toUpperCase()}
          </h1>

          <div className="flex items-center gap-1">
            <FaStar className="text-[20px] fill-[#FFD700]" />
            <FaStar className="text-[20px] fill-[#FFD700]" />
            <FaStar className="text-[20px] fill-[#FFD700]" />
            <FaStar className="text-[20px] fill-[#FFD700]" />
            <FaStarHalfAlt className="text-[20px] fill-[#FFD700]" />
            <p className="pl-2 text-[16px]">124 Reviews</p>
          </div>

          <p className="text-[24px] md:text-[30px] font-semibold">
            {currency} {productData.price}
          </p>

          <p className="text-[15px] md:text-[18px] text-gray-200 max-w-[90%]">
            {productData.description} Stylish, breathable cotton shirt with a modern slim fit. Easy to wash, super comfortable, and designed for effortless style.
          </p>

          <div className="mt-4">
            <p className="text-[18px] font-semibold">Select Size</p>
            <div className="flex gap-2 mt-2 flex-wrap">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  className={`border py-2 px-4 rounded-md ${
                    item === size ? "bg-black text-[#2f97f1]" : "bg-slate-300 text-black"
                  }`}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
className="mt-6 px-6 py-3 bg-[#495b61c9] text-white rounded-xl shadow-md shadow-black hover:bg-red-600 transition-colors"
              onClick={() => addtoCart(productData._id, size)}
            >
              Add To Cart
            </button>
          </div>

          <div className="w-full h-[1px] bg-slate-700 my-3"></div>
          <div className="text-sm md:text-[16px] text-gray-200">
            <p>✅ 100% Original Product.</p>
            <p>📦 Cash on delivery available</p>
            <p>🔄 Easy return & exchange within 7 days</p>
          </div>
        </div>
      </div>

      {/* Description & Reviews */}
   <div className="w-full px-5 md:px-20 lg:px-40 mt-10 flex flex-col items-center">
  {/* Tabs */}
  <div className="flex gap-4 mb-4">
    <p className="border px-5 py-2 text-sm text-white cursor-pointer rounded-md hover:bg-[#db1717] transition-colors">
      Description
    </p>
    <p className="border px-5 py-2 text-sm text-white cursor-pointer rounded-md hover:bg-[#db1717] transition-colors">
      Reviews (124)
    </p>
  </div>

  {/* Description Box */}
  <div className="bg-[#336397c] text-white text-[14px] md:text-[16px] lg:text-[18px] p-6 md:p-8 w-full md:w-4/5 rounded-lg shadow-md shadow-black text-center">
    Upgrade your wardrobe with this stylish slim-fit cotton shirt, available now on OneCart. Crafted from breathable, high-quality fabric, it offers all-day comfort and effortless style.
  </div>

  {/* Example Button */}
  
</div>


      {/* Related Products */}
      <div className="px-[20px] lg:px-[100px] mt-[60px] pb-[60px]">
        <RelatedProduct
          category={productData.category}
          subCategory={productData.subCategory}
          currentProductId={productData._id}
        />
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default ProductDetail;
