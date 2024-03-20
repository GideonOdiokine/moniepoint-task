import { FC, useEffect, useState } from "react";
import { TbWaveSawTool } from "react-icons/tb";
import { AnimatePresence, motion } from "framer-motion";
import { SplitText } from "@/helpers/SplitText";
import { useInView } from "react-intersection-observer";

const Efficiency: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.2 }); // adjust threshold as needed

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  return (
    <AnimatePresence>
      <section ref={ref} className="font-jost my-24 w-full text-slate-900">
        <motion.div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }} // Only show if visible
            exit={{ opacity: 0 }}
          >
            <h1 className="text-8xl">
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
                Maximize
              </SplitText>{" "}
              <span className="text-gray-400">
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
                  efficiency
                </SplitText>
              </span>
            </h1>
            <br />
            <h1 className="mt-3 text-8xl">
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
                with our intuitive
              </SplitText>
            </h1>
          </motion.div>

          <div className=" mt-8 flex justify-between px-4">
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
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-ignore */}
              <marquee>Analytics service</marquee>
            </div>
          </div>

          <div className="my-12 mt-24 border-t border-gray-300"></div>

          <div className="my-4 flex justify-between p-4">
            <h1 className="text-xl">
              Explore traffic sources, page behaviour, conversions and more to
              gain deep insight <br /> into your audience. With us, your
              business doesn't just adapt - it evolves
            </h1>

            <div className="flex gap-2">
              <button className="flex h-fit w-fit items-center justify-center rounded-xl border bg-gray-200 px-8 py-3 text-center text-sm text-black transition-all">
                Request a demo
              </button>
              <button className="flex h-fit w-fit items-center justify-center rounded-xl border bg-[#fe4a23] px-8 py-3 text-center text-sm text-white transition-all">
                Start for free
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </AnimatePresence>
  );
};

export default Efficiency;
