import CardRating from "../components/Fragments/CardRating";
import CardThankyou from "../components/Fragments/CardThankyou";
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
    const [isSubmited, setIsSubmited] = useState(false);

    useEffect(() => {}, [isChoice]);

    const handleChoice = (id) => {
        setIsChoice(id);
    };
    const handleSubmit = () => {
        setIsSubmited(true);
    };
    return (
        <div className="flex justify-center min-h-screen items-center bg-[#121417]">
            {isSubmited ? (
                <CardThankyou id={isChoice} />
            ) : (
                <CardRating>
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
                    <CardRating.Footer
                        id={isChoice}
                        handleSubmit={handleSubmit}
                    />
                </CardRating>
            )}
        </div>
    );
};

export default RatingPage;
