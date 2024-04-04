import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  AreasResponse,
  MealDetails,
  MealDetailsResponse,
  MealsResponse,
} from "./types";

export const mealsApi = createApi({
  reducerPath: "mealsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/api/json/v1/1/",
  }),
  endpoints: (builder) => ({
    getMealsByArea: builder.query<MealsResponse["meals"], string>({
      query: (area) => `filter.php?a=${area}`,
      transformResponse: (response: MealsResponse) => {
        return response.meals;
      },
    }),
    getMealDetails: builder.query<MealDetails, string>({
      query: (id) => `lookup.php?i=${id}`,
      transformResponse: (response: MealDetailsResponse) => {
        return response.meals[0];
      },
    }),
    getAreasList: builder.query<AreasResponse["meals"], undefined>({
      query: () => "list.php?a=list",
      transformResponse: (response: AreasResponse) => {
        return response.meals;
      },
    }),
  }),
});

export const {
  useGetMealsByAreaQuery,
  useGetMealDetailsQuery,
  useGetAreasListQuery,
} = mealsApi;
