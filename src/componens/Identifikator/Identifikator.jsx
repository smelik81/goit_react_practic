import css from "./Identifikator.module.css";
import { useId } from "react";

function Identifikator({ onAdd }) {
  const id = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    onAdd({
      username: form.elements.username.value,
      role: form.elements.role.value,
    });

    form.reset();
  };
  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <div className={css.userblock}>
        <label htmlFor={`username-${id}`}>UserName</label>
        <input type="text" name="username" id={`username-${id}`} />
      </div>
      <div className={css.roleblock}>
        <label htmlFor={`role-${id}`}>Role</label>
        <select name="role" id={`role-${id}`}>
          <option value="Guest">Guest</option>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Identifikator;
