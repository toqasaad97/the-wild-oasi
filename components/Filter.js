"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Button from "./Button";

const filters = [
  { name: "all", label: "All cabins" },
  { name: "small", label: "2-3 guests" },
  { name: "medium", label: "4-7 guests" },
  { name: "large", label: "8-12 guests" },
];

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") || "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      {filters.map((filter) => (
        <Button
          key={filter.name}
          filter={filter.name}
          handleFilter={handleFilter}
          activeFilter={activeFilter}
          label={filter.label}
        />
      ))}
    </div>
  );
}

export default Filter;
