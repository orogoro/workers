export default function WorkersForm() {
  return (
    <form action="">
      <label htmlFor="">
        <span>firstName</span>
        <input type="text" />
      </label>

      <label htmlFor="">
        <span>lastName</span>
        <input type="text" />
      </label>

      <label htmlFor="">
        <span>department</span>
        <input type="text" />
      </label>

      <label htmlFor="">
        <span>salary amount</span>
        <input type="number" />
      </label>

      <button type="submit">add</button>
    </form>
  );
}
