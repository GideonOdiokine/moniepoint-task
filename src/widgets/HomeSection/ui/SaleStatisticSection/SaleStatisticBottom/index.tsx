import { FC } from "react";

const SaleStatisticBottom: FC = () => {
  return (
    <div className="mt-16 pb-20 flex justify-center items-center gap-5">
      <p className="mt-[70px] pl-10">up to</p>
      <h1 className="text-8xl">45%</h1>
      <article className="text-sm font-medium">
        Increase your analytics by up to 45%. Unique <br /> algorithm provides
        insights from data, reducing time for analysis <br /> and saving time
        for making important informed decisions
      </article>
    </div>
  );
};

export default SaleStatisticBottom;
