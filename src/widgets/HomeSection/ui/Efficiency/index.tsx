import {FC} from 'react'
import { TbWaveSawTool } from "react-icons/tb";

const Efficiency:FC = () => {
  return (
    <section className="font-jost my-24 w-full text-slate-900">
      <div className="mx-12">
        <h1 className="text-8xl">
          Maximize <span className=" text-gray-400">efficiency</span>
        </h1>{" "}
        <br />
        <h1 className="mt-3 text-8xl">with our intuitive</h1>
      </div>

      <div className="ml-32 mt-8 flex justify-between px-4">
        <section className="relative flex w-1/2">
          <div className="absolute z-10 h-fit w-fit rounded-full bg-gray-200 p-8">
            <p className="h-fit w-fit rounded-md bg-[#fe4a23]">
              <TbWaveSawTool className="h-8 w-8 text-white" />
            </p>
          </div>

          <div className="absolute left-20 h-fit w-fit rounded-full bg-yellow-500 p-5 text-center">
            <h1 className="text-xs text-black">
              {" "}
              <span className="text-lg">45%</span> <br /> System grow <br />{" "}
              faster
            </h1>
          </div>
        </section>

        <div className="h-fit w-fit rounded-full bg-yellow-500 p-4 text-5xl text-white">
          <marquee>Analytics service</marquee>
        </div>
      </div>

      <div className="mx-auto my-12 mt-24 w-[80%] border-t border-gray-300"></div>

      <div className="mx-20 my-4 flex justify-between p-4">
        <h1 className="text-xl">
          Explore traffic sources, page behaviour, conversions and more to gain
          deep insight <br /> into your audience. With us, your business doesn't
          just adapt - it evolves
        </h1>

        <div className="flex gap-2">
          <button className="flex h-fit w-fit items-center justify-center rounded-xl border bg-gray-200 px-8 py-3 text-center text-sm text-black transition-all">
            Request a demo
          </button>
          <button className="flex h-fit w-fit items-center justify-center rounded-xl border bg-yellow-500 px-8 py-3 text-center text-sm text-black transition-all">
            Start for free
          </button>
        </div>
      </div>
    </section>
  );
};

export default Efficiency;
