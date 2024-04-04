import { useMemo, useState, useCallback } from "react";
import {
  useGetAreasListQuery,
  useGetMealsByAreaQuery,
} from "./services/mealsApi";
import Header from "./components/layouts/Header";
import MealCard from "./components/ui/MealCard";
import FavoriteMeals from "./components/ui/FavoriteMeals";
import debounce from "./utils/debouce";
import { MealsResponse } from "./services/types";
import Filter from "./components/ui/Filter";
import Sort from "./components/ui/Sort";
import RecipeDialog from "./components/ui/RecipeDialog";
import Meals from "./components/Skeletons/Meals";

const App = () => {
  const [filter, setFilter] = useState("Indian");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState("");
  const [sort, setSort] = useState<"DESC" | "ASC" | undefined>();
  const [favorites, setFavorites] = useState<MealsResponse["meals"]>([]);
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const { data: mealsData, isLoading: mealsLoading } =
    useGetMealsByAreaQuery(filter);
  const { data: areasData } = useGetAreasListQuery(undefined);

  const filteredMealsData = useMemo(() => {
    if (!mealsData) return [];

    const sortedMeals = mealsData.toSorted((a, b) => {
      const nameA = a.strMeal.toUpperCase();
      const nameB = b.strMeal.toUpperCase();
      if (sort === "DESC") {
        return nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
      } else {
        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
      }
    });

    if (!debouncedSearchQuery) {
      return sortedMeals;
    }

    return sortedMeals.filter((meal) =>
      meal.strMeal.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
    );
  }, [mealsData, debouncedSearchQuery, sort]);

  const handleSearch = useCallback(
    debounce((query: string) => {
      setDebouncedSearchQuery(query);
    }, 500),
    []
  );

  const handleClick = (mealId: string) => {
    setSelectedItemId(mealId);
    setIsOpen(true);
  };

  const toggleFavorite = (clickedMeal: MealsResponse["meals"][0]) => {
    const mealId = clickedMeal.idMeal;
    setFavorites((prevFavorites: MealsResponse["meals"]) => {
      const favourite = prevFavorites.find((meal) => meal.idMeal === mealId);
      if (favourite) {
        return prevFavorites.filter((meal) => meal.idMeal !== mealId);
      } else {
        return [...prevFavorites, clickedMeal];
      }
    });
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <main className="container py-10">
        <h1 className="text-2xl font-bold font-archivo">
          What's on your mind?
        </h1>
        <div className="flex gap-4 py-4">
          <Filter areasData={areasData} filter={filter} setFilter={setFilter} />
          <Sort sort={sort} setSort={setSort} />
        </div>
        {favorites.length > 0 && (
          <FavoriteMeals
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            handleMealDetailsOpen={handleClick}
          />
        )}
        <h2 className="text-xl font-bold mb-4"> Recipes</h2>

        <section className="grid grid-cols-2 gap-8 my-8 md:grid-cols-3 lg:grid-cols-4">
          {mealsLoading ? (
            <Meals />
          ) : !filteredMealsData.length ? (
            <>Nothing to show here!</>
          ) : (
            filteredMealsData.map((meal) => {
              const isFavorite = favorites.some(
                (favorite) => favorite.idMeal === meal?.idMeal
              );

              return (
                <MealCard
                  key={meal?.idMeal}
                  meal={meal}
                  isFavorite={isFavorite}
                  toggleFavorite={toggleFavorite}
                  handleMealDetailsOpen={handleClick}
                  showFavoriteIcon
                />
              );
            })
          )}
        </section>
      </main>
      <RecipeDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        selectedItemId={selectedItemId}
      />
    </>
  );
};

export default App;
