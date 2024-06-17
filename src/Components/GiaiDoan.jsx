import React from "react";

const GiaiDoan = () => {
  return (
    <div className="flex flex-col px-5">
      <div>
        <p className="text-3xl font-bold text-sky-600 mt-10">
          LỊCH SỬ HÌNH THÀNH
        </p>
        <p className="mt-10 mb-10 text-sky-600">GIAI ĐOẠN 2020-2023</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center mb-10">
        <div className="w-full">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col w-full">
              <div className="relative h-full">
                <div className="absolute inset-0 z-0">
                  {/* <div className="absolute inset-0 bg-gray-900 opacity-50"></div> */}
                  <img
                    src="https://i.pinimg.com/736x/d8/3d/73/d83d739d07a3afab37e05515554c187e.jpg"
                    alt="Background Image"
                    className="h-full w-full object-cover shadow-lg rounded-lg"
                  />
                </div>
                <div className="relative z-10 flex w-full h-full">
                  <div className="w-full flex ">
                    <div className="mt-32 bg-gradient-to-r from-blue-950 w-full rounded-b-lg">
                      <p className="text-white text-center text-xl py-2">
                        THÀNH LẬP
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <p>
              Công ty cổ phần Đầu tư và Xây dựng Minh Long Việt Nam được thành
              lập theo giấy phép số 0108723893 do sở kế hoạch và đầu tư Tp. Hà
              Nội cấp vào ngày 04 tháng 05 năm 2019, là một trong những doanh
              nghiệp tiêu biểu trong lĩnh vực xây dựng công trình tại Hà Nội nói
              riêng cũng như khu vực Bắc Bộ nói chung.
            </p>
            <br />
            <p>
              Trải qua quá trình hình thành và phát triển, các dự án do Minh
              Long thực hiện đều được khách hàng đánh giá cao về chất lượng,
              tiến độ và về cả giá thành.
            </p>
          </div>
        </div>
        <div className="w-full mt-20 md:mt-0 ml-0 md:ml-10">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col w-full">
              <div className="relative h-full">
                <div className="absolute inset-0 z-0">
                  {/* <div className="absolute inset-0 bg-gray-900 opacity-50"></div> */}
                  <img
                    src="https://t4.ftcdn.net/jpg/02/20/67/65/360_F_220676590_4zfuo3TKXbys7xkC4Nx0YYFcMzkCkHTf.jpg"
                    alt="Background Image"
                    className="h-full w-full object-cover shadow-lg rounded-lg"
                  />
                </div>
                <div className="relative z-10 flex w-full h-full">
                  <div className="w-full flex ">
                    <div className="mt-32 bg-gradient-to-r from-blue-950 w-full rounded-b-lg">
                      <p className="text-white text-center text-xl py-2">
                        XÂY DỰNG
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <p>
              Tiếp tục nhận được sự tín nhiệm từ khách hàng. Minh Long không
              ngừng vươn lên mạnh mẽ. Công ty đã có những bước đi phù hợp cho
              từng giai đoạn phát triển. Hiện nay địa bàn hoạt động của chúng
              tôi đã phủ khắp cả nước (từ Hà Nội, Hải Phòng đến các tỉnh thuộc
              khu vực Nam Bộ.)
            </p>
          </div>
        </div>
        <div className="w-full mt-20 md:mt-0 ml-0 md:ml-10">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col w-full">
              <div className="relative h-full">
                <div className="absolute inset-0 z-0">
                  {/* <div className="absolute inset-0 bg-gray-900 opacity-50"></div> */}
                  <img
                    src="https://t4.ftcdn.net/jpg/00/91/32/87/360_F_91328725_zdst7zcQcytqXIAg8PfxAREVrPbaSenH.jpg"
                    alt="Background Image"
                    className="h-full w-full object-cover shadow-lg rounded-lg"
                  />
                </div>
                <div className="relative z-10 flex w-full h-full">
                  <div className="w-full flex ">
                    <div className="mt-32 bg-gradient-to-r from-blue-950 w-full rounded-b-lg">
                      <p className="text-white text-center text-xl py-2">
                        BỀN VỮNG
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <p>
              Minh Long chọn "Dấu ấn qua từng công trình" làm phương châm hành
              động xuyên suốt. Chúng tôi cam kết đáp ứng yêu cầu chất lượng thẩm
              mỹ, mang đến sự hài lòng cao nhất cho khách hàng và có giá trị bền
              vững theo thời gian.
            </p>
            <br />
            <p>
              Năm 2021 chính là năm bứt phá của công ty, khi Minh Long tập trung
              nâng cao năng lực tài chính và bổ sung thêm nhân sự, định vị
              thương hiệu lên một tầm cao mới.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiaiDoan;
