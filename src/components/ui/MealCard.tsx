import { Heart, HeartHandshake } from "lucide-react";
import Ratings from "../../assets/rating.svg?react";
import { Meal } from "../../services/types";

interface MealCardProps {
  meal: Meal;
  isFavorite: boolean;
  toggleFavorite: (mealId: Meal) => void;
  handleMealDetailsOpen: (mealId: string) => void;
  showFavoriteIcon: boolean;
}

const MealCard = ({
  meal,
  isFavorite,
  toggleFavorite,
  handleMealDetailsOpen,
  showFavoriteIcon,
}: MealCardProps) => {
  return (
    <div key={meal.idMeal} className=" grid rounded-xl text-start">
      <img
        className="object-cover w-full h-32 overflow-hidden rounded-2xl hover:cursor-pointer hover:shadow-xl"
        src={`${meal.strMealThumb}/preview`}
        alt="food"
        loading="eager"
        onClick={() => handleMealDetailsOpen(meal?.idMeal)}
      />
      <div className="py-4 ml-3 font-bold flex justify-between">
        <div>
          <p className="text-lg">{meal.strMeal}</p>
          <p className="flex text-base">
            <span className="flex gap-1">
              <Ratings />
              {Math.floor(Math.random() * (5 - 3 + 1) + 3) / 1}
              &nbsp;•&nbsp;
            </span>
            <span>35-40 mins</span>
          </p>
        </div>

        {showFavoriteIcon && (
          <div>
            {isFavorite ? (
              <HeartHandshake
                className={`text-red-500 fill-current ml-2 cursor-pointer`}
                onClick={() => toggleFavorite(meal)}
              />
            ) : (
              <Heart
                color="red"
                className="ml-2 cursor-pointer"
                onClick={() => toggleFavorite(meal)}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MealCard;
