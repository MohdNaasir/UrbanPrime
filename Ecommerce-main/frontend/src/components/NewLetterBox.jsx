import React, { useState } from "react";

const NewLetterBox = () => {
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === "") return;

    setShowPopup(true);
    setMessage(""); // Clear input

    // Hide popup after 2 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="w-[100%] h-[40vh] flex items-center justify-start flex-col bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[10px] relative">
      <p className="md:text-[30px] text-[20px] text-[#a5faf7] font-semibold px-[20px]">
        Subscribe now & get 20% off
      </p>
      <p className="md:text-[18px] text-[14px] text-center text-blue-100 font-semibold px-[20px]">
        Subscribe now and enjoy exclusive savings, special deals, and early access to new collections.
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-[100%] h-[30%] md:h-[50%] flex items-center justify-center mt-[20px] gap-[20px] px-[20px]"
      >
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="placeholder:text-[black] bg-slate-300 w-[600px] max-w-[60%] h-[40px] px-[20px] rounded-lg shadow-sm shadow-black"
          required
        />
        <button
          type="submit"
          className="text-[15px] md:text-[16px] px-[10px] md:px-[30px] py-[12px] md:py-[10px] bg-[#db1717c9] hover:bg-[#b91313] text-white flex items-center justify-center gap-[20px] border border-[#80808049] rounded-lg shadow-sm shadow-black cursor-pointer font-semibold"
        >
          Subscribe
        </button>
      </form>

      {/* Popup */}
      {showPopup && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/50">
          <div className="bg-white text-black text-[22px] md:text-[28px] font-bold px-[40px] py-[30px] rounded-xl shadow-lg shadow-black">
            ✅ Successfully Submitted
          </div>
        </div>
      )}
    </div>
  );
};

export default NewLetterBox;
