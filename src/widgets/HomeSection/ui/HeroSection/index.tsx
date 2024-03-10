import { FC } from "react";
import Wave from "../../../../../public/images/wave.svg";
import Laptop from "../../../../../public/images/laptop.png";
import Image1 from "../../../../../public/images/ani.png";

const HeroSection: FC = () => {
  return (
    <section>
      <div className="hero min-h-[calc(100vh-64px)]">
        <div className="container flex-col lg:flex-row">
          <section className="font-jost w-full text-slate-900">
            <div className="flex justify-between gap-10">
              <div>
                <div className="mt-10 flex h-fit items-center pl-44">
                  <div className="h-[83px] w-[140px]">
                    <img src={Image1} />
                  </div>
                  <h1 className="pl-7 text-8xl">Analytics</h1>
                </div>
                <h1 className="pl-[40px] text-8xl">
                  that <span className=" text-gray-400">helps</span> you
                </h1>
              </div>
              <div className="mt-2 rounded-full">
                <img
                  src={Laptop}
                  alt="Laptop"
                  className="h-[300px] object-contain"
                />
              </div>
            </div>
            <div className="ml-32 flex justify-center text-right">
              <h1 className="text-8xl">shape</h1>
              <div className="mx-2 mt-8 h-fit w-fit rounded-full bg-yellow-400 p-5 py-6 text-center">
                <div className="-mt-3 rounded-full object-contain font-bold">
                  <img src={Wave} alt="logo" width={33} height={33} />
                </div>
              </div>
              <h1 className=" text-8xl">the future</h1>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
