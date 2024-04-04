import { useGetMealDetailsQuery } from "../../services/mealsApi";
import MealDetailsSkeleton from "../Skeletons/MealDetails";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "./Dialog";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectedItemId: string;
}

const RecipeDialog = ({ isOpen, onClose, selectedItemId }: Props) => {
  const { currentData: selectedItem, isLoading } = useGetMealDetailsQuery(
    selectedItemId,
    {
      skip: !selectedItemId,
    }
  );
  return (
    <Dialog
      onOpenChange={(open: boolean) => {
        if (!open) {
          onClose();
        }
      }}
      open={isOpen}
    >
      <DialogContent className="max-h-[90vh] max-w-[80vw] overflow-auto p-4 bg-white shadow-md rounded-lg font-archivo">
        {isLoading ? (
          <MealDetailsSkeleton />
        ) : (
          <>
            <DialogHeader className="text-xl font-bold text-center text-gray-900">
              {selectedItem?.strMeal}
            </DialogHeader>
            <img
              src={`${selectedItem?.strMealThumb}`}
              alt="food"
              loading="eager"
              className="object-cover w-full mb-4 h-96 rounded-xl"
            />
            <div className="flex justify-between mb-6 text-gray-800 md:justify-start md:gap-4">
              <p className="font-semibold text-md">
                Category:{" "}
                <span className="font-normal">{selectedItem?.strCategory}</span>
              </p>
              <p className="font-semibold text-md">
                Area:{" "}
                <span className="font-normal">{selectedItem?.strArea}</span>
              </p>
            </div>
            <div>
              <div className="overflow-x-auto rounded-lg">
                <table className="w-full border-collapse table-auto">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-sm font-semibold tracking-wider text-left text-gray-800 uppercase border-b">
                        Ingredient
                      </th>
                      <th className="px-6 py-3 text-sm font-semibold tracking-wider text-left text-gray-800 uppercaseborder-b">
                        Measure
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-300">
                    {Array(20)
                      .fill(0)
                      .map((_, index) => {
                        const ingredient =
                          selectedItem?.[`strIngredient${index + 1}`];
                        const measure =
                          selectedItem?.[`strMeasure${index + 1}`];
                        if (!ingredient) return null;
                        return (
                          <tr key={index}>
                            <td className="px-6 py-2 text-sm font-medium text-gray-600 whitespace-nowrap">
                              {ingredient}
                            </td>
                            <td className="px-6 py-2 text-sm text-gray-600 whitespace-nowrap">
                              {measure}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>

            <DialogDescription className="py-4 mt-6 text-sm text-gray-700 whitespace-pre-line border-t border-gray-200">
              {selectedItem?.strInstructions}
            </DialogDescription>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default RecipeDialog;
