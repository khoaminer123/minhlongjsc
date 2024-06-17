import React from "react";
import thongtincty from "../../Assets/thongtincty.png";
import chungchi from "../../Assets/chungchinangluc.png";
import BangCap from "./BangCap";

const ThongTinCty = () => {
  return (
    <div className="px-5 py-5">
      <p className="text-3xl text-sky-600 font-bold">THÔNG TIN CÔNG TY</p>
      <div className="flex flex-col md:flex-row mt-10 justify-center">
        <div className="md:border-r-2 border-slate-300 md:px-10">
          <p className="font-bold text-sky-700">Tên giao dịch tiếng Việt:</p>
          <p>Công ty Cổ phần Đầu tư và Xây dựng Minh Long Việt Nam</p>
          <br />
          <p className="font-bold text-sky-700">Tên giao dịch tiếng Anh:</p>
          <p>
            Minh Long Viet Nam Construction And Investment Joint Stock Company
          </p>
          <br />
          <p className="font-bold text-sky-700">Tên viết tắt:</p>
          <p>Minh Long Viet Nam</p>
          <br />
          <p className="font-bold text-sky-700">Trụ sở chính:</p>
          <p>
            Số 195 đường Cầu Giấy, tổ 16, Phường Dịch Vọng, Quận Cầu Giấy, Tp.
            Hà Nội
          </p>
          <br />
        </div>
        <div className="md:px-10">
          <p className="font-bold text-sky-700">Số điện thoại:</p>
          <p>0979150157</p>
          <br />
          <p className="font-bold text-sky-700">Email:</p>
          <p>xdminhlong.jsc@gmail.com</p>
          <br />
          <p className="font-bold text-sky-700">Mã số thuế:</p>
          <p>C0108723893</p>
          <br />
          <p className="font-bold text-sky-700">Vốn điều lệ:</p>
          <p>15.000.000.000 (Mười lăm tỷ đồng)</p>
          <br />
          <p className="font-bold text-sky-700">Đại diện pháp lý:</p>
          <p>Ông TRẦN PHI LONG - Giám đốc</p>
          <br />
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <img className="w-full md:w-[50%]" src={thongtincty} alt="" />
      </div>
      <div className="py-10">
        <p className="text-3xl font-bold text-sky-600">CHỨNG CHỈ NĂNG LỰC</p>
        <div className="py-5 flex justify-center">
          <img className="w-full md:w-[50%]" src={chungchi} alt="" />
        </div>
      </div>
      <div>
        <p className="text-3xl text-sky-600 font-bold mb-10 mt-10">BẰNG CẤP VÀ CHỨNG CHỈ</p>
      </div>
      <BangCap/>
      <div className="py-5 mt-10">
        <p className="text-3xl text-sky-600 font-bold">LĨNH VỰC HOẠT ĐỘNG</p>
        <div className="flex flex-col md:flex-row h-[1100px] justify-center items-center mt-10">
          <div className="w-full md:w-[50%] h-[1100px] bg-sky-600 flex justify-center items-center">
            <p className="text-white font-bold md:mr-5 mt-11">
              THIẾT KẾ & THI CÔNG CÔNG TRÌNH DÂN DỤNG
            </p>
          </div>
          <div className="absolute flex justify-center flex-col items-center">
            <img
              className="w-[300px] h-[300px] rounded-tl-3xl rounded-br-3xl"
              src="https://png.pngtree.com/background/20230611/original/pngtree-architect-design-3d-visualisation-picture-image_3170395.jpg"
              alt=""
            />

            <img
              className="w-[300px] h-[300px] rounded-tl-3xl rounded-br-3xl mt-10"
              src="https://images.pexels.com/photos/227675/pexels-photo-227675.jpeg"
              alt=""
            />

            <img
              className="w-[300px] h-[300px] rounded-tl-3xl rounded-br-3xl mt-10"
              src="https://t4.ftcdn.net/jpg/02/29/28/41/360_F_229284105_t8PtHndw0AEXJadQHHdD06QLm2TRUEGE.jpg"
              alt=""
            />
          </div>
          <div className="w-full md:w-[50%] md:h-[1100px] bg-sky-700 flex flex-col justify-center items-center">
            <div className="md:h-[30%]">
              <p className="text-white font-bold md:mt-32 mb-[320px]">
                TƯ VẤN VÀ THIẾT KẾ XÂY DỰNG
              </p>
            </div>
            <div className="md:h-[30%]">
              {/* <p>TƯ VẤN VÀ THIẾT KẾ XÂY DỰNG</p> */}
            </div>
            <div className="md:h-[30%]">
              <p className="text-white font-bold text-wrap md:mt-36 md:ml-10 mb-5">
                THIẾT KẾ & THI CÔNG CÔNG TRÌNH CÔNG NGHIỆP
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <p className="text-3xl font-bold text-sky-600">NĂNG LỰC TÀI CHÍNH</p>
        <div className="flex flex-col md:flex-row mt-10 justify-center">
          <div className="w-full md:w-[50%]">
            <p>
              Minh Long luôn nỗ lực và tự hào khi kết quả hoạt động kinh doanh
              đều đạt tỷ lệ tăng trưởng tốt. Riêng trong năm vừa qua, Công ty đã
              vượt chỉ tiêu về doanh thu với lợi nhuận tăng trưởng dương.
            </p>
            <br />
            <p>
              Minh Long đề ra chỉ tiêu duy trì mức tăng trưởng ổn định, tiến tới
              là một công ty lớn mạnh trong ngành dịch vụ xây dựng.
            </p>
            <br />
            <p>
              Minh Long hiểu rằng nguồn lực tài chính mạnh mẽ sẽ giúp chúng tôi
              trang bị tốt nhất về nhân lực và vật lực để đảm bảo cung ứng những
              dịch vụ và dự án chất lượng nhất cho Quý khách hàng.
            </p>
          </div>
          <div className="mt-5 md:mt-0 w-full md:w-[50%] md:ml-10 flex justify-center">
            <img
              className="w-full md:w-[70%] rounded-lg border-2 border-sky-600"
              src="https://img.freepik.com/premium-photo/3d-rendering-coin-stack-with-stock-market-chart-digital-background_795422-6533.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#068CC3] to-[#04457B] px-5 py-5 flex flex-col justify-center items-center text-slate-300">
        <div className="py-10">
          <p className="text-3xl font-bold text-center">KẾT QUẢ TÀI CHÍNH QUA CÁC NĂM</p>
        </div>
        <div className="text-xs md:text-lg flex justify-center mb-10">
          <table class="table-fixed md:table-fixed w-full md:w-[70%] ">
            <thead>
              <tr>
                <th>NĂM</th>
                <th>SẢN LƯỢNG</th>
                <th>DOANH THU</th>
                <th>LỢI NHUẬN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2021</td>
                <td>50.480.101.234 VND</td>
                <td>45.891.001.122 VND</td>
                <td>2.294.550.056 VND</td>
              </tr>
              <tr>
                <td>2022</td>
                <td>79.206.449.287 VND</td>
                <td>72.005.862.988 VND</td>
                <td>3.600.293.149 VND</td>
              </tr>
              <tr>
                <td>2023</td>
                <td>88.901.400.889 VND</td>
                <td>80.813.455.353 VND</td>
                <td>4.040.972.768 VND</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ThongTinCty;
