import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
interface RootState {
  home: {
    // Add your home state interface here
  };
}

interface Ref {
  focus: () => {};
}
const HomePage = () => {
  const native = useNavigate();
  const homeState = useSelector((state: RootState) => state.home);
  const ref = useRef(null);
  useEffect(() => {
    console.log("mounted");
  }, [homeState]);

  const handleClickChangePage = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    native("/farm", {
      state: { user: "abc" },
    });
  };
  return (
    <div
      id="bg"
      className="w-auto bg-[url('https://res.cloudinary.com/cuong/image/upload/v1677939051/avatar/bg-f_dy9g9t.jpg')] bg-no-repeat bg-cover bg-center"
    >
      <div className="flex justify-center items-center h-[100vh] min-w-[390px] ">
        <div
          onClick={handleClickChangePage}
          className=" animate-blink text-[45px] font-bold  w-32 h-3 m-2 flex justify-center items-center cursor-pointer"
        >
          farm
        </div>
        <div className="animate-blink text-[45px] font-bold  w-32 h-32 m-2 flex justify-center items-center  cursor-pointer">
          {/* <link href="/game">game</link> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
