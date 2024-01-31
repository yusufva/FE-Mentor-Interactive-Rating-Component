import CardRating from "../components/Fragments/CardRating";
import Rating from "../components/Elements/Rating/Index";
import { useEffect, useState } from "react";

const rating = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];

const RatingPage = () => {
  const [isChoice, setIsChoice] = useState();

  useEffect(() => {}, [isChoice]);

  const handleChoice = (id) => {
    setIsChoice(id);
  };
  return (
    <div>
      <div className="flex justify-center min-h-screen items-center bg-[#121417]">
        <CardRating>
          {console.log(isChoice)}
          <CardRating.Header />
          <CardRating.Body>
            {rating.map((rating) => {
              return (
                <Rating
                  key={rating.id}
                  id={rating.id}
                  classname={
                    isChoice === rating.id
                      ? "bg-orange-500 text-white"
                      : "hover:bg-[#959eac] hover:text-white bg-gray-800"
                  }
                  handleChoice={handleChoice}
                >
                  {rating.id}
                </Rating>
              );
            })}
          </CardRating.Body>
          <CardRating.Footer />
        </CardRating>
      </div>
    </div>
  );
};

export default RatingPage;
