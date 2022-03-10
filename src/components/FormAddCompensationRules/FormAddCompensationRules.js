import { useState } from "react";
import api from "../../apis/api";

export function FormAddCompensationRules(props) {

  const [form, setForm] = useState({
    launch: "",
    expirationDate: "",
    rules: "",
    optionalAddition: { addition: "", additionDate: "" },
  });

  function handleChange(event) {
    setForm((form) => {
      return { ...form, [event.target.name]: event.target.value };
    });
  }

  function clearForm() {
    setForm({
      launch: "",
      expirationDate: "",
      rules: "",
      optionalAddition: { addition: "", additionDate: "" },
    });
  }

  async function handleSubmit(event) {
    try {
      await event.preventDefault();
      await api.post("/compensation-rule/create-rule", form);
      clearForm();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Create Compensation Rules</h3>
        <label htmlFor="launch">Launch Date:</label>
        <input
          name="launch"
          id="launch"
          value={form.launch}
          onChange={handleChange}
          type="date"
        />

        <label htmlFor="expirationDate">Expiration Date:</label>
        <input
          name="expirationDate"
          id="expirationDate"
          value={form.expirationDate}
          onChange={handleChange}
          type="date"
        />

        <label htmlFor="rules">Rules</label>
        <input
          type="text"
          id="rules"
          name="rules"
          value={form.rules}
          onChange={handleChange}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}
