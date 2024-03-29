import {  useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "@/app/Layout";
import { Home, NoMatch } from "@/pages";
//npm install --save aos@next
//aos
import AOS from "aos"
import "aos/dist/aos.css"


const App= () => {

      useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
