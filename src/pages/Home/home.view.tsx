interface HomeComponentProps {
  handleClickChangePage: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const HomeView = (props: HomeComponentProps) => {
  const { handleClickChangePage } = props;
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

export default HomeView;
