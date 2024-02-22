import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="flex items-center gap-3">
      <Input placeholder="Buscar" />
      <Button className="p-0 w-10 h-10">
        <SearchIcon className="h-4 w-4" />
      </Button>

    </div>
  );
}

export default Search;