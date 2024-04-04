import { ArrowDownAZ, ArrowDownZA } from "lucide-react";
import ToggleButton from "./ToggleButton";

interface SortProps {
  sort: "DESC" | "ASC" | undefined;
  setSort: React.Dispatch<React.SetStateAction<"DESC" | "ASC" | undefined>>;
}

const Sort = ({ sort, setSort }: SortProps) => {
  return (
    <ToggleButton
      isToggled={Boolean(sort)}
      onClick={() => setSort(sort === "DESC" ? "ASC" : "DESC")}
      aria-label="Filter by Ratings:"
    >
      Sort:
      {sort === "DESC" ? (
        <ArrowDownZA size={"16px"} />
      ) : (
        <ArrowDownAZ size={"16px"} />
      )}
    </ToggleButton>
  );
};

export default Sort;
