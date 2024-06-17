import React from "react";
import { Carousel } from "antd";
import da1 from '../Assets/K7.png'
import da2 from '../Assets/GreenSymphony.png'
import da3 from '../Assets/Hinedocity.png'
import da4 from '../Assets/ChungCuHH1HH2.png'
import da5 from '../Assets/VegaCity.png'
import da6 from '../Assets/VinOceanP.png'
import da7 from '../Assets/NhaMayDienGio.png'
import da8 from '../Assets/TruongTH DuyTan.png'
import da9 from '../Assets/HoangHuyGrand.png'
import da10 from '../Assets/NhaMayDien.png'
import da11 from '../Assets/HoangHuy.png'
import da112 from '../Assets/HoangHuy2.png'

const contentStyle = {
  height: "450px",
  color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
  background: "#364d79",
};

const SlideGallery = () => {
  return (
    <div className="px-5">
        <div>
            <p className="text-3xl font-bold text-sky-600 mb-10 mt-10">DỰ ÁN TIÊU BIỂU</p>
        </div>
      <Carousel autoplay>
        <div className="1">
          <h3 className="py-3 md:py-5 px-3 md:px-5 h-[200px] md:h-[450px] bg-[#364d79]" 
        //   style={contentStyle}
          >
            <div className="flex flex-row">
                <div className="w-[70%] md:w-[45%]">
                    <img className="rounded-sm" src={da1} alt="" />
                </div>
                <div className="w-[30%] flex flex-col justify-start ml-3 md:ml-10">
                    <p className="text-sm md:text-xl text-white font-bold">DỰ ÁN K7 TÂY HỒ TÂY-DAEWO</p>
                    <p className="text-white mt-5">Địa chỉ: Hà Nội</p>
                </div>
            </div>
          </h3>
        </div>
        <div className="2">
          <h3 className="py-3 md:py-5 px-3 md:px-5 h-[200px] md:h-[450px] bg-[#364d79]" 
        //   style={contentStyle}
          >
            <div className="flex flex-row">
                <div className="w-[70%] md:w-[51%]">
                    <img className="rounded-sm" src={da2} alt="" />
                </div>
                <div className="w-[30%] flex flex-col justify-start ml-3 md:ml-10">
                    <p className="text-sm md:text-xl text-white font-bold">DỰ ÁN AN LẠC GREEN SYMPHONY</p>
                    <p className="text-white">Địa chỉ: Hoài Đức, Hà Nội</p>
                </div>
            </div>
          </h3>
        </div>
        <div className="3">
          <h3 className="py-3 md:py-5 px-3 md:px-5 h-[200px] md:h-[450px] bg-[#364d79]" 
        //   style={contentStyle}
          >
            <div className="flex flex-row">
                <div className="w-[55%] md:w-[37%]">
                    <img className="rounded-sm" src={da3} alt="" />
                </div>
                <div className="w-[30%] flex flex-col justify-start ml-3 md:ml-10">
                    <p className="text-sm md:text-xl text-white font-bold">CÔNG TRÌNH DỰ ÁN HINODECITY</p>
                    <p className="text-white">Địa chỉ: Số 201 Minh Khai, Hai Bà Trưng, Hà Nội</p>
                </div>
            </div>
          </h3>
        </div>
        <div className="4">
          <h3 className="py-3 md:py-5 px-3 md:px-5 h-[200px] md:h-[450px] bg-[#364d79]" 
        //   style={contentStyle}
          >
            <div className="flex flex-row">
                <div className="w-[40%] md:w-[25%]">
                    <img className="rounded-sm" src={da4} alt="" />
                </div>
                <div className="w-[30%] flex flex-col justify-start ml-3 md:ml-10">
                    <p className="text-sm md:text-xl text-white font-bold">DỰ ÁN CHUNG CƯ HH1, HH2 GOLDEN LAND 5</p>
                    <p className="text-white">Địa chỉ: Đổng Quốc Bình, Ngô Quyền, Hải Phòng</p>
                </div>
            </div>
          </h3>
        </div>
        <div className="5">
          <h3 className="py-3 md:py-5 px-3 md:px-5 h-[200px] md:h-[450px] bg-[#364d79]" 
        //   style={contentStyle}
          >
            <div className="flex flex-row">
                <div className="w-[40%] md:w-[25%]">
                    <img className="rounded-sm" src={da5} alt="" />
                </div>
                <div className="w-[30%] flex flex-col justify-start ml-3 md:ml-10">
                    <p className="text-sm md:text-xl text-white font-bold">DỰ ÁN VEGA CITY NHA TRANG</p>
                    <p className="text-white">Địa chỉ: Bãi Tiên, Phường Vĩnh Hòa, TP Nha Trang</p>
                </div>
            </div>
          </h3>
        </div>
        <div className="6">
          <h3 className="py-3 md:py-5 px-3 md:px-5 h-[200px] md:h-[450px] bg-[#364d79]" 
        //   style={contentStyle}
          >
            <div className="flex flex-row">
                <div className="w-[35%] md:w-[23%]">
                    <img className="rounded-sm" src={da6} alt="" />
                </div>
                <div className="w-[30%] flex flex-col justify-start ml-3 md:ml-10">
                    <p className="text-sm md:text-xl text-white font-bold">DỰ ÁN VIN OCEAN PARK GIA LÂM</p>
                    <p className="text-white">Địa chỉ: Gia Lâm, Hà Nội</p>
                </div>
            </div>
          </h3>
        </div>
        <div className="7">
          <h3 className="py-3 md:py-5 px-3 md:px-5 h-[200px] md:h-[450px] bg-[#364d79]" 
        //   style={contentStyle}
          >
            <div className="flex flex-row">
                <div className="w-[60%]">
                    <img className="rounded-sm" src={da7} alt="" />
                </div>
                <div className="w-[30%] flex flex-col justify-start ml-3 md:ml-10">
                    <p className="text-sm md:text-xl text-white font-bold">DỰ ÁN NHÀ MÁY ĐIỆN GIÓ ĐẮK NÔNG</p>
                    <p className="text-white">Địa chỉ: Đắk Nông</p>
                </div>
            </div>
          </h3>
        </div>
        <div className="8">
          <h3 className="py-3 md:py-5 px-3 md:px-5 h-[200px] md:h-[450px] bg-[#364d79]" 
        //   style={contentStyle}
          >
            <div className="flex flex-row">
                <div className="w-[70%] md:w-[60%]">
                    <img className="rounded-sm" src={da8} alt="" />
                </div>
                <div className="w-[30%] flex flex-col justify-start ml-3 md:ml-10">
                    <p className="text-sm md:text-xl text-white font-bold">DỰ ÁN TRƯỜNG TIỂU HỌC DUY TÂN</p>
                    <p className="text-white">Địa chỉ: Thị xã Bến Cát, Bình Dương</p>
                </div>
            </div>
          </h3>
        </div>
        <div className="9">
          <h3 className="py-3 md:py-5 px-3 md:px-5 h-[200px] md:h-[450px] bg-[#364d79]" 
        //   style={contentStyle}
          >
            <div className="flex flex-row">
                <div className="w-[35%] md:w-[24%]">
                    <img className="rounded-sm" src={da9} alt="" />
                </div>
                <div className="w-[30%] flex flex-col justify-start ml-3 md:ml-10">
                    <p className="text-sm md:text-xl text-white font-bold">DỰ ÁN HOÀNG HUY GRAND TOWER</p>
                    <p className="text-white">Địa chỉ: 02A Sở Dầu, Hồng bàng, Hải Phòng</p>
                </div>
            </div>
          </h3>
        </div>
        <div className="10">
          <h3 className="py-3 md:py-5 px-3 md:px-5 h-[200px] md:h-[450px] bg-[#364d79]" 
        //   style={contentStyle}
          >
            <div className="flex flex-row">
                <div className="w-[70%] md:w-[50%]">
                    <img className="rounded-sm" src={da10} alt="" />
                </div>
                <div className="w-[30%] flex flex-col justify-start ml-3 md:ml-10">
                    <p className="text-sm md:text-xl text-white font-bold">DỰ ÁN NHÀ MÁY ĐIỆN MẶT TRỜI KIÊN GIANG</p>
                    <p className="text-white">Địa chỉ: Kiên Giang</p>
                </div>
            </div>
          </h3>
        </div>
        <div className="11">
          <h3 className="py-3 md:py-5 px-3 md:px-5 h-[200px] md:h-[450px] bg-[#364d79]" 
        //   style={contentStyle}
          >
            <div className="flex flex-row">
                <div className="w-[25%] md:w-[17%]">
                    <img className="rounded-sm" src={da11} alt="" />
                </div>
                <div className="w-[35%] md:w-[24%] ml-3 md:ml-5">
                    <img className="rounded-sm" src={da112} alt="" />
                </div>
                <div className="w-[30%] flex flex-col justify-start ml-3 md:ml-10">
                    <p className="text-sm md:text-xl text-white font-bold">DỰ ÁN HOÀNG HUY GRANDTOWER</p>
                    <p className="text-white">Địa chỉ: Hải Phòng</p>
                </div>
            </div>
          </h3>
        </div>
      </Carousel>
      <br />
      {/* <Carousel arrows dotPosition="left" infinite={false}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel> */}
    </div>
  );
};

export default SlideGallery;
