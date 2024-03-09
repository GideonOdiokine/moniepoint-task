import { FC } from "react";
import { Logo } from "@/widgets";
import Menu from "../Menu/Menu";
import LogoIcon from "../../../../../public/images/logo.png";

const LayoutHeader: FC = () => {
  return (
    <>
      <header>
        <nav className="flex items-center p-1 justify-between mx-auto my-[1rem] w-[95%] rounded-2xl bg-black">
          <Logo>
            <img src={LogoIcon} alt="logo" />
          </Logo>
          <Menu
            links={[
              { name: "Dashboard", href: "/" },
              { name: "Reports", href: "/reports" },
              { name: "Documents", href: "/document" },
              { name: "History", href: "/history" },
              { name: "Settings", href: "/settings" },
            ]}
          />
          <div className="">
            <button className="btn-ghost bg-white px-6 text-black rounded-xl btn">
              Sign Up
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default LayoutHeader;
