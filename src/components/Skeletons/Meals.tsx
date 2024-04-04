import Skeleton from "../ui/Skeleton";

const Meals = () => {
  const skeletonItems = [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
    <Skeleton key={item} />
  ));
  return <>{skeletonItems}</>;
};

export default Meals;
