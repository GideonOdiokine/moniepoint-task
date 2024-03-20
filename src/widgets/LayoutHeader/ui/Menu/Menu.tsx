import { FC } from "react";
import { Menu } from "../../model/types";
import { Link } from "react-router-dom";

const Menu: FC<Menu> = ({ links }: Menu) => {
  return (
    <>
      <ul
        tabIndex={0}
        className="dropdown-content rounded-box menu-sm z-50 flex bg-[#333131]  p-[12px] shadow"
      >
        {links.map((link, i) => (
          <li
            data-aos="fade-down"
            className={`text-white ${
              i !== links.length - 1 ? "pr-[20px]" : ""
            }  `}
            key={link.name}
          >
            <Link to={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
