import { DataAnalytic, Efficiency, HeroSection, SaleStatistic } from '@/widgets/HomeSection';
import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <HeroSection/>
      <SaleStatistic/>
      <Efficiency/>
      <DataAnalytic/>
    </>
  );
};

export default Home;
