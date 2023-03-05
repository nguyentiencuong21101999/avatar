import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HomeView from "./home.view";
interface RootState {
  home: {
    // Add your home state interface here
  };
}

const HomeComponent = () => {
  const native = useNavigate();
  const homeState = useSelector((state: RootState) => state.home);
  useEffect(() => {
    console.log("mounted");
  }, [homeState]);

  const handleClickChangePage = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    native("/farm", {
      state: { user: "abc" },
    });
  };
  return <HomeView handleClickChangePage={handleClickChangePage} />;
};

export default HomeComponent;
