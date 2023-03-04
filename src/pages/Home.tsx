import { useSelector } from "react-redux";

interface RootState {
  home: {
    // Add your home state interface here
  };
}

const HomePage = () => {
  const homeState = useSelector((state: RootState) => state.home);
  console.log(homeState);
  return (
    <div className="flex justify-center items-center h-[100vh] min-w-[390px]">
      <div className="w-32 h-32 bg-slate-400 m-2 flex justify-center items-center">
        farm
      </div>
      <div className="w-32 h-32 bg-slate-400 m-2 flex justify-center items-center">
        game
      </div>
    </div>
  );
};

export default HomePage;
