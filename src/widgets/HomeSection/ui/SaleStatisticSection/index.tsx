import { FC } from "react";
import Image1 from './../../../../../public/images/total1.png'
import slider from "./../../../../../public/images/slider.png";
import rateIcon from "./../../../../../public/images/rateIcon.png";
import visitStatistic from "./../../../../../public/images/visit-statistics.png";
import people from "./../../../../../public/images/people.png";

const SaleStatistic: FC = () => {
  return (
    <div className="mb-16 mt-10  rounded-[80px] bg-[#f9f9f9] pt-20">
      <div className="container mx-auto px-[28px] text-black">
        <div className="flex items-center justify-between pr-[30px]">
          <p className="text-5xl font-normal">
            Your key to strategic
            <br /> success through analytics
          </p>
          <p className="text-base font-semibold ">
            Ready to exciting, instantenous
            <br /> all-accessible insights in real time?
          </p>
        </div>
        <div className="flex items-center justify-between gap-5">
          <div className="box-shadow my-8 w-3/5 rounded-[2rem] border border-[#eaeaea] bg-white pt-8">
            <div className="flex items-center justify-between">
              <div className="w-[50%] pb-8 pl-8">
                <button className="box-shadow  mx-[10px] h-12 cursor-pointer rounded-2xl  border-none bg-yellow-400 px-[1rem] py-0  ">
                  Setting up reports
                </button>
                <p className="mt-10 text-[24px] font-normal">
                  Fast and easy access
                  <br /> to analytics
                </p>
                <p className="mt-6 text-[18px] font-light text-[#999]">
                  One platform is a comprehensive <br /> system of solutions
                  that will be the <br />
                  first step towards the digitalization of <br /> your business!
                </p>
              </div>
              <div className="w-3/6 rounded-tl-[48px] border-l-[1px] border-t-[1px] p-4">
                <p className="px-4 pt-4 text-base font-normal">
                  Sales statistics
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <img
                    //   style={springTwo}
                    className="h-[15%] w-[20%]"
                    src={Image1}
                    alt="stats-icon"
                  />
                  <div className="flex-1 px-2">
                    <p className="text-base font-normal text-[#999]">
                      Total profit
                    </p>
                    <div className="flex text-sm">
                      <span>
                        $
                        {/* {countdownSpring.number.to((num) => `$${num.toFixed(1)}k`)} */}{" "}
                        <span className="text-xl"> 264k.26</span>
                      </span>
                    </div>
                  </div>
                  <div className="w-28 flex-1 rounded-2xl bg-[#f6f6f6] p-3">
                    <span className="text-[#565656]">Vistors</span>
                    <img
                      //   style={springTwo}
                      className="my-[10px] w-[80%]"
                      src={slider}
                      alt="slider"
                    />
                    <span className="flex text-xl">
                      56k
                      <img
                        // style={springTwo}
                        className="ml-2 h-[30%] w-[30%]"
                        src={rateIcon}
                        alt="rateIcon"
                      />
                    </span>
                  </div>
                </div>
                <img
                  //   style={springTwo}
                  className="h-[50%] w-full"
                  src={visitStatistic}
                  alt="visitStatistic"
                />
              </div>
            </div>
          </div>
          <div className="box-shadow w-[40%] h-[424.84] my-8 rounded-[2rem] border border-[#eaeaea] bg-[#0d0d0d]  pt-8">
            <div className="w-[80%] mx-auto flex items-center justify-between">
              <img
                //   style={springTwo}
                className="h-[30%] w-[50%]"
                src={people}
                alt="people-image"
              />
              <div className="border-1 mt-2  h-[10rem] w-[45%] border border-[#322f2f] bg-[#121211] ">
                <p className="p-4 text-base text-white">Transactions</p>
                <img
                  //   style={springTwo}
                  className="m-auto flex w-[30%]"
                  src={rateIcon}
                  alt="rateIcon"
                />
                <span className="pl-4 text-6xl text-white">
                  {/* {countdownSpringTwo.number.to((num) => num.toFixed(1))} */}{" "}
                  5
                </span>
              </div>
            </div>
            <p className="text-2xl my-3 font-normal text-center text-white">
              Widget control
            </p>
            <p className="text-[#999] py-5 pb-14 text-xl font-normal text-center">
              Reports provides a comprehensive overview <br />
              of important aspects of web analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleStatistic;
