const Button = (props) => {
  return (
    <div className="flex justify-center w-full  rounded-md">
      <button
        onClick={props.handleFunction}
        className="bg-[#3C82F6] w-fit text-white rounded-md px-[10px] py-[5px] w-full text-xl font-semibold"
      >
        + Add Note
      </button>
    </div>
  );
};
export default Button;
