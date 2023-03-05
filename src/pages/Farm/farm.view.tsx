interface FarmComponentProps {
  state: { user: string };
}

const FarmView = (props: FarmComponentProps) => {
  const { state } = props;
  const land = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5, 6],
  ];

  return (
    <div className="min-w-[400px]  w-[100%] h-[100vh] border-solid border-4 border-red-200">
      <div className="flex p-2">
        <div className="bg-red-300 h-[100%] basis-1/3">Shop {state.user}</div>
        <div className=" basis-2/3 flex">
          {land.map((e, i) => {
            return (
              <div key={i} className="basis-1/5">
                {e}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FarmView;
