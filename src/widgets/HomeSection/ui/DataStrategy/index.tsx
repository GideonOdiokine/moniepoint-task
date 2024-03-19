import {FC} from "react";

const DataStrategy:FC = () => {
  return (
    <div className="max-text">
      <div>
        <span>
          We give full <br />
          <span className="grey-text"> control </span>
          over your data
        </span>
      </div>
      //{" "}
      <div>
        //{" "}
        {/* <img
    //       className="animation-eleven"
    //     //   src={AnimationEleven}
    //       alt="AnimationEleven"
    //     /> */}
        //{" "}
      </div>
      <div className="started-wrapper">
        <img
          //   style={springFive}
          className="animation-twelve"
          //   src={AnimationTwelve}
          alt="AnimationTwelve"
        />
        <div>
          <span className="banner-text">
            Get Started <br />
          </span>
          <span className="grey-text">
            Turn information into advantage! Start using <br />
            Ramos today. Sign up for a free trail.
          </span>
        </div>
        <div className="flex gap-2">
          <button className="flex h-fit w-fit items-center justify-center rounded-xl border bg-gray-200 px-8 py-3 text-center text-sm text-black transition-all">
            Request a demo
          </button>
          <button className="flex h-fit w-fit items-center justify-center rounded-xl border bg-[#fe4a23] px-8 py-3 text-center text-sm text-white transition-all">
            Start for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataStrategy;
