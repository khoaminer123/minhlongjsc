import React from "react";
import data from "./BangcapChungchi";
import bc1 from '../../Assets/bangcap1.png'
import bc2 from '../../Assets/bangcap2.png'
import bc3 from '../../Assets/bangcap3.png'
import bc4 from '../../Assets/bangcap4.png'
import bc5 from '../../Assets/bangcap5.png'
import bc6 from '../../Assets/bangcap6.png'
import bc7 from '../../Assets/bangcap7.png'
import bc8 from '../../Assets/bangcap8.png'
import bc9 from '../../Assets/bangcap9.png'
import bc10 from '../../Assets/bangcap10.png'
import bc11 from '../../Assets/bangcap11.png'
import bc12 from '../../Assets/bangcap12.png'
import bc13 from '../../Assets/bangcap13.png'
import bc14 from '../../Assets/bangcap14.png'
import bc15 from '../../Assets/bangcap15.png'
import bc16 from '../../Assets/bangcap16.png'

const BangCap = () => {
  return (
    // <div className="grid grid-rows-2 md:grid-rows-4">
    //   {data.map((item) => (
    //     <div key={item.id} className="">
    //       <div>
    //         <img className="w-full" src={item.img} alt="" />
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
            <img 
            className="rounded-md border-2 border-sky-600"
            src={bc1} alt="" />
        </div>
        <div>
            <img 
            className="rounded-md border-2 border-sky-600"
            src={bc2} alt="" />
        </div>
        <div>
            <img 
            className="rounded-md border-2 border-sky-600"
            src={bc3} alt="" />
        </div>
        <div>
            <img 
            className="rounded-md border-2 border-sky-600"
            src={bc4} alt="" />
        </div>
        <div>
            <img 
            className="rounded-md border-2 border-sky-600"
            src={bc5} alt="" />
        </div>
        <div>
            <img 
            className="rounded-md border-2 border-sky-600"
            src={bc6} alt="" />
        </div>
        <div>
            <img 
            className="rounded-md border-2 border-sky-600"
            src={bc7} alt="" />
        </div>
        <div>
            <img 
            className="rounded-md border-2 border-sky-600"
            src={bc8} alt="" />
        </div>
        <div>
            <img 
            className="rounded-md border-2 border-sky-600"
            src={bc9} alt="" />
        </div>
        <div>
            <img 
            className="rounded-md border-2 border-sky-600"
            src={bc10} alt="" />
        </div>
        <div>
            <img 
            className="rounded-md border-2 border-sky-600"
            src={bc11} alt="" />
        </div>
        <div>
            <img 
            className="rounded-md border-2 border-sky-600"
            src={bc12} alt="" />
        </div>
        <div>
            <img 
            className="rounded-md border-2 border-sky-600"
            src={bc13} alt="" />
        </div>
        <div>
            <img 
            className="rounded-md border-2 border-sky-600"
            src={bc14} alt="" />
        </div>
        <div>
            <img 
            className="rounded-md border-2 border-sky-600"
            src={bc15} alt="" />
        </div>
        <div>
            <img 
            className="rounded-md border-2 border-sky-600"
            src={bc16} alt="" />
        </div>
    </div>
  );
};

export default BangCap;
