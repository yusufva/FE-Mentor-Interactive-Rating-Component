import Button from "../Elements/Button/Index";

const CardRating = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm p-8 bg-gradient-to-b from-[#202731] to-[#171e28] rounded-2xl">
      {children}
    </div>
  );
};

const Header = () => {
  return (
    <div className="justify-between items-center w-full mb-4">
      <svg
        className="mb-4"
        width="17"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
          fill="#FC7614"
        ></path>
      </svg>
      <h1 className="font-overpass font-bold text-lg text-white mb-4">
        How did we do?
      </h1>
      <p className="font-overpass text-sm font-normal text-[#959eac] mb-8">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    </div>
  );
};

const Body = ({ children }) => {
  return <div className="grid grid-cols-5 gap-8 w-[95%] mb-8 ">{children}</div>;
};

const Footer = () => {
  return (
    <Button
      classname="bg-orange-500 hover:bg-orange-700 focus:bg-white focus:text-orange-500 w-full rounded-full h-14"
      type="submit"
    >
      Submit
    </Button>
  );
};

CardRating.Header = Header;
CardRating.Body = Body;
CardRating.Footer = Footer;

export default CardRating;
