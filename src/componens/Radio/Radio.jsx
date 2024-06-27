export default function RadioButton({ value, onChange }) {
  const handleSizeChange = (event) => {
    onChange(event.target.value);
    console.log(event.target.value);
  };
  return (
    <>
      <h1>Select coffee size</h1>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="sm"
          checked={value === "sm"}
          onChange={handleSizeChange}
        />
        Small
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="md"
          checked={value === "md"}
          onChange={handleSizeChange}
        />
        Meduim
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="lg"
          checked={value === "lg"}
          onChange={handleSizeChange}
        />
        Large
      </label>
    </>
  );
}
