interface ButtonProps {
  filter: string;
  handleFilter: (filter: string) => void;
  activeFilter: string;
  label: string;
}

function Button({ filter, handleFilter, activeFilter, label }: ButtonProps) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {label}
    </button>
  );
}

export default Button;
