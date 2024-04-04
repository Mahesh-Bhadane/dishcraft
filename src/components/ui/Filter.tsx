import { Settings2 } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./Select";

interface FilterProps {
  areasData: { strArea: string }[] | undefined;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Filter = ({ areasData, filter, setFilter }: FilterProps) => {
  return (
    <Select onValueChange={(value) => setFilter(value)} defaultValue={filter}>
      <SelectTrigger
        aria-label="Filter by Area:"
        className="flex items-center justify-between gap-2 px-4 py-2 text-sm border border-gray-200 rounded-full shadow-sm font-archivo"
      >
        Filter By Area:
        <Settings2 size={"16px"} />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {areasData?.map((area) => (
          <SelectItem key={area?.strArea} value={area?.strArea}>
            {area?.strArea}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Filter;
