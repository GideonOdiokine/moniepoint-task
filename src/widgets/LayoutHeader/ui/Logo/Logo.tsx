import { FC } from "react";
import { Logo } from "@/widgets/LayoutHeader/model/types";

const Logo: FC<Logo> = ({ children }: Logo) => {
  return (
    <div className="navbar-center"
        data-aos="fade-down"

    >
      <a href='/' className="btn-ghost btn text-xl normal-case">{children}</a>
    </div>
  );
};

export default Logo;
