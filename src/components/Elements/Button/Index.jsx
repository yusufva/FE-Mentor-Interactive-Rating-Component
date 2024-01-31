const Button = (props) => {
  const {
    children,
    classname = "bg-orange-500 text-white",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      className={`h-10 px-6 font-overpass font-normal ${classname}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
