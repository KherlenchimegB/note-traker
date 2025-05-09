const Note = (props) => {
  return (
    <div className="w-[600px] flex flex-col items-center justify-between bg-white size-fit rounded-md p-[16px] gap-[13px] ">
      <div className="w-full m-0 border border-gray-400 rounded-md">
        <div className="flex items-center justify-between w-full gap-1 p-2 bg-gray-100 rounded-md">
          <span className="text-2xl font-semibold">Note #{props.id}</span>

          <div className="flex justify-center">
            <img className="red-400" src="./delete.svg" alt="" />
            <button
              onClick={() => props.handleFunction(props.id)}
              className="border-none font-semibold text-red-400 rounded-md px-[10px] py-[5px] border"
            >
              Delete
            </button>
          </div>
        </div>
        <div className="w-full gap-2 p-2">
          <div className="flex gap-[10px] ">
            <p
              className={`h-[60px] text-xl ${
                props.status ? "h-fit" : "line-clamp-2"
              } text-md text-wrap`}
            >
              {props.name}
            </p>
          </div>
          <button
            className="border-2 border-green-200 rounded-md p-[8px] text-green-400 font-semibold"
            onClick={() => props.toggleStatus(props.id)}
          >
            {props.status ? "Hide details" : "Show details"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Note;
