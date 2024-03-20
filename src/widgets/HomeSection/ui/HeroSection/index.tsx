import { FC, useEffect, useRef, useState } from "react";
import Wave from "/images/wave.svg";
import Laptop from "/images/laptop.png";
import Image1 from "/images/ani.png";
import { AnimatePresence,  motion } from "framer-motion";
import { SplitText } from '@/helpers/SplitText';
import { useInView } from 'react-intersection-observer';



const HeroSection: FC = () => {
      const [isVisible, setIsVisible] = useState(false);

      const { ref, inView } = useInView({ threshold: 0.2 }); // adjust threshold as needed

      useEffect(() => {
        if (inView) {
          setIsVisible(true);
        }
      }, [inView]);
  return (
    <AnimatePresence>
      <motion.div className="hero min-h-[calc(100vh-64px)]" ref={ref}>
        <motion.div className="container flex-col lg:flex-row">
          <motion.section className="font-jost w-full text-slate-900">
            <div className="flex justify-between gap-10">
              <div>
                <div className="mt-10 flex h-fit items-center pl-44">
                  <motion.div className="h-[83px] w-[140px]">
                    <motion.img src={Image1} />
                  </motion.div>
                  <motion.h1 className="split pl-7 text-8xl">
                    <SplitText
                      initial={{ y: "100%" }}
                      animate={isVisible ? "visible" : "hidden"} // Only animate if visible
                      variants={{
                        visible: (i: any) => ({
                          y: 0,
                          opacity: 1,
                          transition: {
                            delay: i * 0.1,
                          },
                        }),
                        hidden: {
                          y: "100%",
                          opacity: 0,
                        },
                      }}
                    >
                      Analytics
                    </SplitText>{" "}
                  </motion.h1>
                </div>
                <div
                  className="split
"
                >
                  <h1 className=" pl-[40px] text-8xl">
                    <SplitText
                      initial={{ y: "100%" }}
                      animate={isVisible ? "visible" : "hidden"} // Only animate if visible
                      variants={{
                        visible: (i: any) => ({
                          y: 0,
                          opacity: 1,
                          transition: {
                            delay: i * 0.1,
                          },
                        }),
                        hidden: {
                          y: "100%",
                          opacity: 0,
                        },
                      }}
                    >
                      that
                    </SplitText>{" "}
                    <span className=" text-gray-400">
                      <SplitText
                        initial={{ y: "100%" }}
                        animate={isVisible ? "visible" : "hidden"} // Only animate if visible
                        variants={{
                          visible: (i: any) => ({
                            y: 0,
                            opacity: 1,
                            transition: {
                              delay: i * 0.1,
                            },
                          }),
                          hidden: {
                            y: "100%",
                            opacity: 0,
                          },
                        }}
                      >
                        helps
                      </SplitText>{" "}
                    </span>{" "}
                    <SplitText
                      initial={{ y: "100%" }}
                      animate={isVisible ? "visible" : "hidden"} // Only animate if visible
                      variants={{
                        visible: (i: any) => ({
                          y: 0,
                          opacity: 1,
                          transition: {
                            delay: i * 0.1,
                          },
                        }),
                        hidden: {
                          y: "100%",
                          opacity: 0,
                        },
                      }}
                    >
                      you
                    </SplitText>{" "}
                  </h1>
                </div>
              </div>
              <div className="split mt-2 rounded-full">
                <motion.img
                  src={Laptop}
                  alt="Laptop"
                  className="h-[300px] object-contain"
                />
              </div>
            </div>
            <div className="ml-32 flex justify-center text-right">
              <h1 className="split text-8xl">
                <SplitText
                  initial={{ y: "100%" }}
                  animate={isVisible ? "visible" : "hidden"} // Only animate if visible
                  variants={{
                    visible: (i: any) => ({
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: i * 0.1,
                      },
                    }),
                    hidden: {
                      y: "100%",
                      opacity: 0,
                    },
                  }}
                >
                  shape
                </SplitText>{" "}
              </h1>
              <div className="mx-2 mt-8 h-fit w-fit rounded-full bg-yellow-400 p-5 py-6 text-center">
                <div className="-mt-3 rounded-full object-contain font-bold">
                  <motion.img src={Wave} alt="logo" width={33} height={33} />
                </div>
              </div>
              <h1 className="split text-8xl">
                <SplitText
                  initial={{ y: "100%" }}
                  animate={isVisible ? "visible" : "hidden"} // Only animate if visible
                  variants={{
                    visible: (i: any) => ({
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: i * 0.1,
                      },
                    }),
                    hidden: {
                      y: "100%",
                      opacity: 0,
                    },
                  }}
                >
                  the future
                </SplitText>{" "}
              </h1>
            </div>
          </motion.section>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
export default HeroSection;
