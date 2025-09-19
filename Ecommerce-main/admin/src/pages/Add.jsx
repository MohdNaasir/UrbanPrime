import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import upload from "../assets/upload image.png"
import { AuthDataContext } from '../context/AuthContext'
import axios from "axios"
import Loading from '../components/Loading'
import { toast } from "react-toastify"   // ✅ import toast only

export const Add = () => {

  let [image1, setImage1] = useState(false)
  let [image2, setImage2] = useState(false)
  let [image3, setImage3] = useState(false)
  let [image4, setImage4] = useState(false)
  let [name, setName]= useState("")
  let [description, setDescription]= useState("")
  let [category, setCategory]= useState("Men")
  let [price, setPrice]= useState("")
  let [subCategory, setSubCategory]= useState("TopWear")
  let [bestSeller, setBestSeller]= useState(false)
  let [sizes, setSizes]= useState([])
  let {serverUrl}= useContext(AuthDataContext)
  const [loading , setLoading] = useState(false)

  const handleAddProduct = async (e) => {
    setLoading(true)
    e.preventDefault()
    try {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestSeller", bestSeller);
      formData.append("sizes", JSON.stringify(sizes));
      formData.append("image1", image1);
      formData.append("image2", image2);
      formData.append("image3", image3);
      formData.append("image4", image4);

      let result = await axios.post(
        serverUrl + "/api/product/addproduct", 
        formData, 
        { withCredentials:true }
      )
      
      console.log(result.data)
      toast.success("Product Added Successfully!")   // ✅ success toast
      setLoading(false)

      if(result.data){
        setName("")
        setDescription("")
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice("")
        setBestSeller(false)
        setCategory("Men")
        setSubCategory("TopWear")
        setSizes([])
      }

    } catch (error) {
      console.log(error) 
      setLoading(false)
      toast.error("❌ Failed to Add Product")   // ✅ error toast
    }
  }

  return (
    <div className="w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white overflow-x-hidden ">
      <Navbar/>
      <Sidebar/>

      <div className="w-[82%] h-[100%] flex items-center justify-start overflow-x-hidden absolute right-0 bottom-[2%]">

        {/* Add Product Form */}
        <form 
          onSubmit={handleAddProduct} 
          className='w-[100%] md:w-[90%] h-[100%] mt-[70px] flex flex-col gap-[30px] py-[90px] px-[30px] md:px-[60px]'
        >
          <div className="w-[400px] h-[50px] text-[25px] md:text-[40px] text-white">
            Add Product Page
          </div>

          {/* Upload Images */}
          <div className="w-[80%] h-[130px] flex items-start justify-center flex-col mt-[20px] gap-[10px]">
            <p className="text-[20px] md:text-[25px] font-semibold">
              Upload Images
            </p>

            <div className="w-[100%] h-[100%] flex items-center justify-start gap-3">
              {[1,2,3,4].map((num) => (
                <label 
                  key={num} 
                  htmlFor={`image${num}`} 
                  className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#46d1f7]"
                >
                  <img 
                    className="w-[100%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px] h-[80%]" 
                    src={!eval(`image${num}`) ? upload : URL.createObjectURL(eval(`image${num}`))} 
                    alt="" 
                  />
                  <input 
                    type="file"  
                    id={`image${num}`} 
                    hidden 
                    onChange={(e)=> eval(`setImage${num}(e.target.files[0])`)} 
                    required 
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Product Name */}
          <div className="w-[80%] flex items-start justify-center flex-col gap-[10px]">
            <p className="text-[20px] md:text-[25px] font-semibold">Product Name</p>
            <input
              type="text"
              placeholder="Type here"
              className="w-[600px] max-w-[98%] h-[40px] rounded-lg hover:border-[#46d1f7] border-[2px] cursor-pointer bg-slate-600 px-[20px] text-[18px] placeholder:text-[#ffffc2]" 
              onChange={(e)=>setName(e.target.value)} 
              value={name}
              required
            />
          </div>

          {/* Product Description */}
          <div className="w-[80%] flex items-start justify-center flex-col gap-[10px]">
            <p className="text-[20px] md:text-[25px] font-semibold">Product Description</p>
            <textarea
              placeholder="Type here"
              className="w-[600px] max-w-[98%] h-[100px] rounded-lg hover:border-[#46d1f7] border-[2px] cursor-pointer bg-slate-600 px-[20px] py-[10px] text-[18px] placeholder:text-[#ffffc2]" 
              onChange={(e)=>setDescription(e.target.value)} 
              value={description}
              required
            />
          </div>

          {/* Product Category + Subcategory */}
          <div className='w-[80%] flex items-center gap-[10px] flex-wrap'>
            <div className="md:w-[30%] w-[100%] flex flex-col gap-[10px]">
              <p className="text-[20px] md:text-[25px] font-semibold">Product Category</p>
              <select
                className="bg-slate-600 w-[60%] px-[10px] py-[7px] rounded-lg hover:border-[#46d1f7] border-[2px]" 
                onChange={(e)=>setCategory(e.target.value)} 
                value={category}
                required
              >
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>
            </div>

            <div className="md:w-[30%] w-[100%] flex flex-col gap-[10px]">
              <p className="text-[20px] md:text-[25px] font-semibold">Sub Category</p>
              <select
                className="bg-slate-600 w-[60%] px-[10px] py-[7px] rounded-lg hover:border-[#46d1f7] border-[2px]" 
                onChange={(e)=>setSubCategory(e.target.value)} 
                value={subCategory}
                required
              >
                <option value="TopWear">TopWear</option>
                <option value="BottomWear">BottomWear</option>
                <option value="WinterWear">WinterWear</option>
              </select>
            </div>
          </div>

          {/* Price */}
          <div className='w-[80%] h-[100px] flex flex-col gap-[10px]'>
            <p className='text-[20px] md:text-[25px] font-semibold'>Product Price</p>
            <input
              type="text"
              placeholder="2000"
              className="w-[600px] max-w-[98%] h-[40px] rounded-lg hover:border-[#46d1f7] border-[2px] cursor-pointer bg-slate-600 px-[20px] text-[18px] placeholder:text-[#ffffc2]" 
              onChange={(e)=> setPrice(e.target.value)} 
              value={price}
              required
            />
          </div>

          {/* Sizes */}
          <div className='w-[80%] flex flex-col gap-[10px]'>
            <p className='text-[20px] md:text-[25px] font-semibold'>Product Sizes</p>
            <div className='flex items-center gap-[15px] flex-wrap'>
              {["S","M","L","XL","XXL"].map(size => (
                <div 
                  key={size}
                  className={`px-[20px] font-semibold py-[7px] rounded-lg bg-slate-700 text-[18px] hover:border-[#46d1f7] border-[2px] cursor-pointer ${sizes.includes(size) ? "bg-green-200 text-black border-black" : ""}`}
                  onClick={() => setSizes(prev => prev.includes(size) ? prev.filter(item => item !== size) : [...prev, size])}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Bestseller */}
          <div className='w-[80%] flex items-center gap-[10px] mt-[20px]'>
            <input
              type="checkbox"
              id="checkbox"
              className="w-[25px] h-[25px] cursor-pointer" 
              onChange={()=>setBestSeller(prev => !prev)}
              checked={bestSeller}
            />
            <label htmlFor="checkbox" className="text-[18px] md:text-[22px] font-semibold">
              Add to BestSeller
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-[147px] px-[20px] py-[20px] rounded-xl bg-[#65d8f7] flex items-center justify-center gap-[10px] text-[18px] text-black font-semibold active:bg-slate-700 active:text-white active:border-[2px] border-white"
          >
            {loading ? <Loading/> : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  )
}
