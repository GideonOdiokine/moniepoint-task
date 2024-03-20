import { FC } from "react";
import analysisImage from "../../../../../public/assets/images/analysis.png";
import { AiOutlineLink } from "react-icons/ai";

const DataAndSaleSection: FC = () => {
  return (
    <section>
      <div className="container mx-auto px-8">
        <div className="my-20  text-[90px]">
          <span className="text-black">
            We give full <br />
            <span className="!text-[#a7a5a5]"> control </span>
            over your data
          </span>
        </div>
        <img className="w-full" src={analysisImage} alt="analysisImage" />
        <div className="mx-auto mt-28 text-center">
          <span className="mx-auto flex w-fit justify-center rounded-2xl bg-[#fe4a23] p-2 text-white">
            <AiOutlineLink className="h-20 w-20" />
          </span>
          <h1 className="my-5 text-9xl text-black">Get Started</h1>
          <p className=" text-xl font-light">
            Turn information into advantage! Start using <br /> Ramos today.
            Sign up for a free trial.
          </p>

          <div className="flex justify-center mt-[50px] mb-[150px] gap-2">
            <button   className="flex h-fit w-fit items-center justify-center rounded-xl border bg-gray-200 px-8 py-3 text-center text-sm text-black transition-all">
              Request a demo
            </button>
            <button className="flex h-fit w-fit items-center justify-center rounded-xl border bg-[#fe4a23] px-8 py-3 text-center text-sm text-white transition-all">
              Start for free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAndSaleSection;
