import { Meal, MealsResponse } from "../../services/types";
import MealCard from "./MealCard";

interface FavoriteMealsProps {
  favorites: MealsResponse["meals"];
  toggleFavorite: (meal: Meal) => void;
  handleMealDetailsOpen: (mealId: string) => void;
}

const FavoriteMeals = ({
  favorites,
  toggleFavorite,
  handleMealDetailsOpen,
}: FavoriteMealsProps) => {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Favorite Recipes</h2>
      <div className="grid grid-cols-2 gap-8 my-8 md:grid-cols-3 lg:grid-cols-4">
        {favorites.map((meal) => (
          <MealCard
            key={meal.idMeal}
            meal={meal}
            isFavorite
            toggleFavorite={toggleFavorite}
            handleMealDetailsOpen={handleMealDetailsOpen}
            showFavoriteIcon={false}
          />
        ))}
      </div>
    </section>
  );
};

export default FavoriteMeals;
