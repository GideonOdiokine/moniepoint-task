import {FC} from 'react'
import { MdAdd } from "react-icons/md";
import Image from './../../../../../public/images/devices.png'


  const points = [
    { id: 1, name: "Instant Insights", icon: <MdAdd className="h-3 w-3" /> },
    { id: 2, name: "AI technology", icon: <MdAdd className="h-3 w-3" /> },
    { id: 3, name: "Easy Integration", icon: <MdAdd className="h-3 w-3" /> },
  ];
const DataAnalytic: FC = () => {
  return (
    <section className="font-jost rounded-[80px] bg-slate-50 p-4 pb-72 pt-24">
      <div className="container mx-auto px-8">
        <div className="flex justify-between">
          <h1 className="my-4 text-4xl text-black">
            Turning data into real <br /> actions and ideas
          </h1>
        </div>

        <div className="relative flex justify-between">
          <div>
            {points.map((point) => (
              <ul key={point.id} className="py-3">
                <div className="flex cursor-pointer justify-between items-center gap-12 rounded-2xl bg-white p-3 px-4 shadow-lg">
                  <h1 className='text-black'>{point.name}</h1>
                  <span className="-mt-1 rounded-full bg-gray-200 p-3 text-black">
                    {point.icon}
                  </span>
                </div>
              </ul>
            ))}
          </div>
        </div>
        <div className="relative top-0">
          <div className="bg-bookmark-purple lg: absolute  right-[-150px] top-[-352px]">
            <img
              src={Image}
              alt="logo"
              width={600}
              height={600}
              className="rounded-xl object-contain"
            />
          </div>
        </div>

        {/* <div className="flex justify-center">
        <div className="ramos_text main text-[#fe4a23]">
          Ramo <span className="absolute z-30">s</span>
        </div>
      </div> */}
      </div>
    </section>
  );
};

export default DataAnalytic;
