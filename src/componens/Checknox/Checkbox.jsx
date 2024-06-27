const Checkbox = ({ value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.checked);
    console.log("event.target.checked", event.target.checked);
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="terms"
          value={value}
          onChange={handleChange}
        />
        I accept terms and conditions
      </label>
      <button type="button">Proceed</button>
    </div>
  );
};

export default Checkbox;
