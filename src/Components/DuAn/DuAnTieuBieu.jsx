import React from "react";
import anlac from "../../Assets/AnLacFull.png";
import hino from "../../Assets/HinodecityFull.png";
import goldenland from "../../Assets/GoldenLand5.png";
import vegacity from "../../Assets/VegaCityFull.png";
import oceanpark from "../../Assets/OceanPark.png";
import daknong from "../../Assets/DakNong.png";
import duytan from "../../Assets/TruongTH.png";
import grandtower1 from "../../Assets/HoangHuyGrandFull.png";
import kiengiang from "../../Assets/KienGiang.png";
import commerce from "../../Assets/HoangHuyComFull.png";
import grandtower2 from "../../Assets/HoangHuyTower.png";
import daewo from "../../Assets/Daewo.png";
import anlac2 from "../../Assets/anlac3.jpg";
import commerce2 from "../../Assets/commerce3.jpg";
import ditrach from "../../Assets/ditrach.jpg";

const DuAnTieuBieu = () => {
  return (
    <div className="px-5">
      <div>
        <p className="text-3xl text-sky-600 font-bold mt-10 mb-10">
          DỰ ÁN TIÊU BIỂU
        </p>
      </div>
      <div className="flex flex-col md:flex-row space-x-5 mb-10">
        <div>
          <div className="space-y-2">
            <p className="text-sky-600 font-bold">
              DỰ ÁN AN LẠC GREEN SYMPHONY
            </p>
            <p className="text-sm ">
              Địa chỉ: Vân Canh, An Khánh, Hoài Đức, Hà Nội
            </p>
            <div className="rounded-md border-2 border-sky-600">
              <img className="p-4" src={anlac2} alt="" />
              <img className="" src={anlac} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="space-y-2">
            <p className="text-sky-600 font-bold">
              CÔNG TRÌNH DỰ ÁN HINODECITY
            </p>
            <p className="text-sm ">
              Địa chỉ: Số 201 Minh Khai, Hai Bà Trưng, Hà Nội
            </p>
            <img
              className="rounded-md border-2 border-sky-600 "
              src={hino}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-x-5 mb-10">
        <div>
          <div className="space-y-2">
            <p className="text-sky-600 font-bold">
              DỰ ÁN CHUNG CƯ HH1, HH2 DỰ ÁN GOLDEN LAND 5
            </p>
            <p className="text-sm ">
              Địa chỉ: Đổng Quốc Bình, Ngô Quyền, Hải Phòng
            </p>
            <img
              className="rounded-md border-2 border-sky-600"
              src={goldenland}
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="space-y-2">
            <p className="text-sky-600 font-bold">DỰ ÁN VEGA CITY NHA TRANG</p>
            <p className="text-sm ">
              Địa chỉ: Bãi Tiên, Phường Vĩnh Hòa, TP Nha Trang, Tỉnh Khánh Hóa
            </p>
            <img
              className="rounded-md border-2 border-sky-600 "
              src={vegacity}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-x-5 mb-10">
        <div>
          <div className="space-y-2">
            <p className="text-sky-600 font-bold">
              DỰ ÁN NHÀ MÁY ĐIỆN GIÓ ĐẮK NÔNG
            </p>
            <p className="text-sm ">Địa chỉ: Đắk Nông</p>
            <img
              className="rounded-md border-2 border-sky-600"
              src={daknong}
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="space-y-2">
            <p className="text-sky-600 font-bold">
              DỰ ÁN TRƯỜNG TIỂU HỌC DUY TÂN
            </p>
            <p className="text-sm ">Địa chỉ: Thị Xã Bến Cát, Bình Dương</p>
            <img
              className="rounded-md border-2 border-sky-600 "
              src={duytan}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-x-5 mb-10">
        <div>
          <div className="space-y-2">
            <p className="text-sky-600 font-bold">
              DỰ ÁN HOÀNG HUY GRAND TOWER
            </p>
            <p className="text-sm ">
              Địa chỉ: 02A Sở Dầu, Hồng Bàng, Hải Phòng
            </p>
            <img
              className="rounded-md border-2 border-sky-600"
              src={grandtower1}
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="space-y-2">
            <p className="text-sky-600 font-bold">
              DỰ ÁN NHÀ MÁY ĐIỆN MẶT TRỜI KIÊN GIANG
            </p>
            <p className="text-sm ">Địa chỉ: Kiên Giang</p>
            <img
              className="rounded-md border-2 border-sky-600 "
              src={kiengiang}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-x-5 mb-10">
        <div>
          <div className="space-y-2">
            <p className="text-sky-600 font-bold">DỰ ÁN HOÀNG HUY COMMERCE</p>
            <p className="text-sm ">
              Địa chỉ: Phường Kênh Dương và phường Vĩnh Niệm, Q Lê Chân, TP Hải
              Phòng
            </p>
            <div className="rounded-md border-2 border-sky-600">
              <img className="p-4" src={commerce2} alt="" />
              <img className="" src={commerce} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="space-y-2">
            <p className="text-sky-600 font-bold">DỰ ÁN HOÀNG HUY GRANDTOWER</p>
            <p className="text-sm ">Địa chỉ: Hải Phòng</p>
            <img
              className="rounded-md border-2 border-sky-600 "
              src={grandtower2}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-x-5 mb-10">
        <div>
          <div className="space-y-2">
            <p className="text-sky-600 font-bold">
              DỰ ÁN K7 TÂY HỒ TÂY - DAEWO
            </p>
            <p className="text-sm ">Địa chỉ: Hà Nội</p>
            <img
              className="rounded-md border-2 border-sky-600"
              src={daewo}
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="space-y-2">
            <p className="text-sky-600 font-bold">
              CÔNG TRÌNH VIN OCEAN PARK GIA LÂM
            </p>
            <p className="text-sm ">Địa chỉ: Gia Lâm, Hà Nội</p>
            <img
              className="rounded-md border-2 border-sky-600 "
              src={oceanpark}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-x-5 mb-10">
        <div>
          <div className="space-y-2">
            <p className="text-sky-600 font-bold">
              DỰ ÁN KHU ĐÔ THỊ MỚI KIM CHUNG DI TRẠCH
            </p>
            <p className="text-sm ">
              Địa chỉ: Xã Kim Chung, Xã Di Trạch, Huyện Hoài Đức, Hà Nội
            </p>
            <div className="rounded-md border-2 border-sky-600 p-4">
              <img
                className=""
                src={ditrach}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* <div>
          <div className="space-y-2">
            <p className="text-sky-600 font-bold">
              CÔNG TRÌNH DỰ ÁN HINODECITY
            </p>
            <p className="text-sm ">Địa chỉ: Số 201 Minh Khai, Hai Bà Trưng, Hà Nội</p>
            <img
              className="rounded-md border-2 border-sky-600 "
              src={hino}
              alt=""
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DuAnTieuBieu;
