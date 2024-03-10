import { Logo } from "@/widgets";
import { FC } from "react";
import LogoIcon2 from "../../../../../public/images/logo2.png";
import QRcode from "../../../../../public/images/QRcode.png";

const items = [
  { id: 1, name: "About" },
  { id: 2, name: "Why Us" },
  { id: 3, name: "Platform" },
  { id: 4, name: "Pricing" },
  { id: 5, name: "Contacts" },
];

const socials = [
  { id: 1, name: "Linkedin" },
  { id: 2, name: "Instagram" },
  { id: 3, name: "Facebook" },
];

const LayoutFooter: FC = () => {
  return (
    <footer className="font-jost bg-[#0d0d0d] text-white ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between  py-20">
          <div className="mt-5 flex">
            {items.map((item, i) => (
              <ul
                key={item.id}
                className={`cursor-pointer ${
                  i === 0 ? "pl-0 pr-4" : "px-4"
                }  text-gray-400`}
              >
                {item.name}
              </ul>
            ))}
          </div>
          <h1 className="text-5xl">hello@ramos.com</h1>
        </div>
        <div className="my-20  border border-gray-300"></div>
        <section className="flex justify-between">
          <div className="flex justify-between gap-20">
            <div>
              <h1 className="text-xl font-semibold">Warrensville Heights</h1>
              <p className="text-lg font-light text-gray-400">
                14418 Vineyard Drive, NC <br />
                44128
              </p>
            </div>

            <div>
              <h1 className=" text-xl font-semibold">Saint Louis</h1>
              <p className=" text-lg font-light text-gray-400">
                1366 Penn Street <br /> 63101
              </p>
            </div>
          </div>

          <div className="space-y-3 text-right text-xl">
            {socials.map((social) => (
              <ul key={social.id} className="">
                {social.name}
              </ul>
            ))}
          </div>
        </section>
        <div className="flex items-center justify-between pt-12">
          <Logo>
            <img src={LogoIcon2} alt="Footerlogo" className="ml-[-100px]" />
          </Logo>

          <div className="flex gap-8 text-gray-400">
            <h1>Privacy policy</h1>
            <h1>License agreement</h1>
          </div>

          <img
            src={QRcode}
            alt="logo"
            width={80}
            height={80}
            className="rounded-2xl object-contain"
          />
        </div>
      </div>
    </footer>
  );
};
export default LayoutFooter;
