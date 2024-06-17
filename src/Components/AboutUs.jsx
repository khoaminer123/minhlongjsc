import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col mt-10 px-5">
      <p className="text-4xl font-bold text-sky-600 text-shadow-y-2 text-shadow-black">Thông điệp công ty</p>
      <div className="flex flex-col md:flex-row justify-center mt-10 border-b-2 border-slate-300 md:border-b-0">
        <div className="w-full md:w-[50%]">
          <div className="border-b-2 border-sky-600">
            <p className="mt-5 text-xl font-bold text-sky-600 mb-3">Tầm nhìn</p>
          </div>
          <p className="mt-5 text-sm md:text-lg">
            Bằng nỗ lực lao động và sáng tạo, Công ty Cổ phần Đầu tư và Xây dựng
            Minh Long Việt Nam đặt mục tiêu trở thành đơn vị hàng đầu trong lĩnh
            vực: Đầu tư và xây dựng công trình dân dụng, công trình công nghiệp,
            hạ tầng kỹ thuật...
          </p>
          <br />
          <p className="mb-5 text-sm md:text-lg">
            Đào tạo và xây dựng đội ngũ nhân sự công ty năng động, có trình độ
            chuyên môn cao, thích ứng nhanh nhạy với thị trường và tâm huyết với
            nghề.
          </p>
        </div>
        <div className="mb-5 w-full md:w-[50%] ml-0 md:ml-10 justify-end flex">
            <img
            className="rounded-lg shadow-lg" 
            src="https://img.freepik.com/premium-photo/studio-portrait-proud-electrician-giving-thumbs-up-approval-optimistic-construction-worker-wearing-work-uniform-hard-hat-tool-belt-isolated-blue-background_482257-56767.jpg" alt="" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center mt-5 mb-5">
      <div className="mb-5 w-full md:w-[50%] justify-start flex">
            <img
            className="rounded-lg shadow-lg" 
            src="https://img.freepik.com/premium-photo/unrecognizable-construction-worker-holding-hard-hat-against-blue-background-studio-shot-handyman-carrying-tools-pocket-work-uniform-against-blue-isolated-background_482257-52320.jpg" alt="" />
        </div>
        <div className="w-full md:w-[50%] px-5">
          <div className="border-b-2 border-sky-600">
            <p className="mt-5 text-xl font-bold text-sky-600 mb-3">Sứ mệnh</p>
          </div>
          <br />
          <ul className="list-disc text-sm md:text-lg space-y-2">
            <li>Cung cấp sản phẩm và dịch vụ ưu việt. Nâng cao giá trị cuộc sống.</li>
            <li>Xây dựng hệ thống quản lý chuyên nghiệp, chuyên môn hóa theo xu thế hiện đại.</li>
            <li>Kiến tạo môi trường làm việc văn minh, trách nhiệm, tạo cơ hội thăng tiến  cho đội ngũ nhân viên.</li>
            <li>Hoạt động và phát triển vì cộng đồng văn minh, yêu thương và trách nhiệm.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
