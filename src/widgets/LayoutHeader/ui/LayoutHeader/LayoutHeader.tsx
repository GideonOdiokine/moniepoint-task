import { FC } from "react";
import { Logo } from "@/widgets";
import Menu from "../Menu/Menu";
import LogoIcon from "../../../../../public/images/logo.png";

const LayoutHeader: FC = () => {
  return (
    <>
      <header>
        <nav className="mx-auto my-[1rem] flex w-[95%] items-center justify-between rounded-2xl bg-black p-1">
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
          <div data-aos="fade-down">
            <button className="btn-ghost btn rounded-xl bg-white px-6 text-black">
              Sign Up
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default LayoutHeader;
