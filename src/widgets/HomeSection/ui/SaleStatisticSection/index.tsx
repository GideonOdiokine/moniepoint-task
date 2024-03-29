import { FC, useEffect, useState } from "react";
import Image1 from '/images/total1.png'
import slider from "/images/slider.png";
import rateIcon from "/images/rateIcon.png";
import visitStatistic from "/images/visit-statistics.png";
import people from "/images/people.png";
import rate2 from "/images/rate2.png";
import SaleStatisticBottom from './SaleStatisticBottom';
import SaleStatisiticTop from './SaleStatisticTop';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SaleStatistic: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({ threshold: 0.2 }); // adjust threshold as needed
    useEffect(() => {
      AOS.init();
    }, []);
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  return (
    <div
      className="mb-16 mt-10  rounded-[80px] bg-[#f9f9f9] pt-20"
      data-aos="fade-up"
      ref={ref}
    >
      <div className="container mx-auto px-[28px] text-black">
        <SaleStatisiticTop />
        <div className="flex items-center justify-between gap-5">
          <div className="box-shadow my-8 w-3/5 rounded-[2rem] border border-[#eaeaea] bg-white pt-8">
            <div className="flex items-center justify-between">
              <div className=" w-[50%] pb-8 pl-8">
                <button className="box-shadow  mx-[10px] h-12 cursor-pointer  rounded-2xl border-none bg-yellow-400 px-[1rem] py-0 ">
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

                      className="my-[10px] w-[80%]"
                      src={slider}
                      alt="slider"
                    />
                    <span className="flex text-xl">
                      56k
                      <img

                        className="ml-2 h-[30%] w-[30%]"
                        src={rateIcon}
                        alt="rateIcon"
                      />
                    </span>
                  </div>
                </div>
                <img

                  className="h-[50%] w-full"
                  src={visitStatistic}
                  alt="visitStatistic"
                />
              </div>
            </div>
          </div>
          <div className="box-shadow my-8 h-[424.84] w-[40%] rounded-[2rem] border border-[#eaeaea] bg-[#0d0d0d]  pt-8">
            <div className="mx-auto flex w-[80%] items-center justify-between">
              <img
                className="h-[30%] w-[50%]"
                src={people}
                alt="people-image"
              />
              <div className="border-1 mt-2 h-[10.6rem]  w-[45%] rounded-3xl border border-[#322f2f] bg-[#121211] pl-5 ">
                <p className="p-4 text-base text-white">Transactions</p>
                <img
                  className="relative left-5 m-auto flex w-[30%]"
                  src={rate2}
                  alt="rateIcon"
                />
                <span className="pl-4 text-6xl text-white">
                  {/* {countdownSpringTwo.number.to((num) => num.toFixed(1))} */}{" "}
                  5K
                </span>
              </div>
            </div>
            <p className="my-3 text-center text-2xl font-normal text-white">
              Widget control
            </p>
            <p className="py-5 pb-14 text-center text-xl font-normal text-[#999]">
              Reports provides a comprehensive overview <br />
              of important aspects of web analytics.
            </p>
          </div>
        </div>
        <SaleStatisticBottom />
      </div>
    </div>
  );
};

export default SaleStatistic;
