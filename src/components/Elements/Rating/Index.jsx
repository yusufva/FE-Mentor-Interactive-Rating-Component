const Rating = (props) => {
  const {
    id = 0,
    handleChoice = () => {},
    children,
    classname = "bg-[#7c8798] opacity-50 hover:bg-[#959eac] ",
    type = "button",
  } = props;
  return (
    <button
      className={`h-11 w-11 rounded-full text-[#959eac] ${classname}`}
      onClick={() => handleChoice(id)}
      type={type}
    >
      {children}
    </button>
  );
};

export default Rating;
