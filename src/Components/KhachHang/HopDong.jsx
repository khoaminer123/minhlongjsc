import React from "react";
import hd1 from "../../Assets/hopdong1.png";
import hd12 from "../../Assets/hopdong1-2.png";
import hd2 from "../../Assets/hopdong2.png";
import hd22 from "../../Assets/hopdong2-2.png";
import hd3 from "../../Assets/hopdong3.png";
import hd32 from "../../Assets/hopdong3-2.png";
import hd4 from "../../Assets/hopdong4.png";
import hd42 from "../../Assets/hopdong4-2.png";
import hd5 from "../../Assets/hopdong5.png";
import hd52 from "../../Assets/hopdong5-2.png";
import hd6 from "../../Assets/hopdong6.png";
import hd62 from "../../Assets/hopdong6-2.png";
import hd7 from "../../Assets/hopdong7.png";
import hd72 from "../../Assets/hopdong7-2.png";

const HopDong = () => {
  return (
    <div className="px-5">
      <div>
        <p className="text-3xl text-sky-600 font-bold mt-10 mb-10">
          HỢP ĐỒNG TIÊU BIỂU
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 md:gap-10 mb-10">
        <div className="flex flex-row space-x-2 w-[50%]">
          <img className="rounded-l-md" src={hd1} alt="" />
          <img className="rounded-r-md" src={hd12} alt="" />
        </div>
        <div className="flex flex-row space-x-2 w-[50%]">
          <img src={hd2} alt="" />
          <img src={hd22} alt="" />
        </div>
        <div className="flex flex-row space-x-2 w-[50%]">
          <img src={hd3} alt="" />
          <img src={hd32} alt="" />
        </div>
        <div className="flex flex-row space-x-2 w-[50%]">
          <img src={hd4} alt="" />
          <img src={hd42} alt="" />
        </div>
        <div className="flex flex-row space-x-2 w-[50%]">
          <img src={hd5} alt="" />
          <img src={hd52} alt="" />
        </div>
        <div className="flex flex-row space-x-2 w-[50%]">
          <img src={hd6} alt="" />
          <img src={hd62} alt="" />
        </div>
        <div className="flex flex-row space-x-2 w-[50%]">
          <img src={hd7} alt="" />
          <img src={hd72} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HopDong;
