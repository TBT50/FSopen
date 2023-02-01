export const InputField = ({ name, value, handleChange }: any) => {
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div>
      <label htmlFor={name}>{capitalizeFirstLetter(name)}:</label>
      <input type="text" id={name} value={value} onChange={handleChange} />
    </div>
  );
};
