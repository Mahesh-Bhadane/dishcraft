export type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export type MealsResponse = {
  meals: Meal[];
};

export type AreasResponse = { meals: [{ strArea: string }] };
export type MealBase = {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string;
  strSource: string;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
};

export type IngredientsAndMeasures = {
  [key in `strIngredient${number}` | `strMeasure${number}`]: string;
};

export type MealDetails = MealBase & IngredientsAndMeasures;

export type MealDetailsResponse = { meals: MealDetails[] };
