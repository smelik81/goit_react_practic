export default function LoginForm({ onLogin }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const { login, password } = form.elements;
    onLogin({
      login: login.value,
      password: password.value,
    });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" />
      <input type="password" name="password" />
      <button type="submit">Log in</button>
    </form>
  );
}
