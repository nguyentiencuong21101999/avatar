import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

interface RootState {
  home: {
    // Add your home state interface here
  };
}

interface Ref {
  focus: () => {};
}
const HomePage = () => {
  const homeState = useSelector((state: RootState) => state.home);
  const ref = useRef(null);
  useEffect(() => {
    console.log("mounted");
  }, [homeState]);
  return (
    <div
      id="bg"
      className="bg-[url('https://res.cloudinary.com/cuong/image/upload/v1677939051/avatar/bg-f_dy9g9t.jpg')] bg-no-repeat bg-cover bg-center "
    >
      <div className="flex justify-center items-center h-[100vh] min-w-[390px] ">
        <div className="w-32 h-32 bg-slate-400 m-2 flex justify-center items-center">
          farm
        </div>
        <div className="w-32 h-32 bg-slate-400 m-2 flex justify-center items-center">
          game
        </div>
      </div>
    </div>
  );
};

export default HomePage;
