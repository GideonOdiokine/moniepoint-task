import { Efficiency, HeroSection, SaleStatistic } from '@/widgets/HomeSection';
import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <HeroSection/>
      <SaleStatistic/>
      <Efficiency/>
    </>
  );
};

export default Home;
