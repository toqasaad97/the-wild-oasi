import { getCountries } from "../lib/data-service";

async function SelectCountry({ defaultCountry, name, id, className }) {
  const countries = await getCountries();
  const flag =
    countries.find((country) => country.name === defaultCountry)?.flag ?? "";

  return (
    <select
      name={name}
      id={id}
      defaultValue={`${defaultCountry}%${flag}`}
      className={className}
    >
      <option value="">Select country...</option>
      {countries.map((coun) => (
        <option key={coun.name} value={`${coun.name}%${coun.flag}`}>
          {coun.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
