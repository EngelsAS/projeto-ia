const SelectInput = ({
  options,
}: {
  options: {
    label: string;
    value: string | number;
  }[];
}) => {
  return (
    <select className="w-full border border-zinc-400 outline-none rounded-md p-1">
      {options.map((item, index) => (
        <option key={index} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
