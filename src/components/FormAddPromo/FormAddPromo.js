import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../apis/api";

export function FormAddPromo() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    creditSystem: "",
    launch: "",
    deadline: "",
    service: "",
    businessId: "",
  });

  function handleChange(event) {
    setForm((prevForm) => {
        return {...prevForm, [event.target.name]: event.target.value};
    });
    console.log(form);
  }

  function clearForm() {
    setForm({
        creditSystem: "",
        launch: "",
        deadline: "",
        service: "",
    });
  }

  async function handleSubmit(event) {
    try {
      await event.preventDefault();
      await api.post("/points/create-points", form);
      clearForm();
      navigate("/businessdashboard");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Create Promotion</h3>
        <label htmlFor="creditSystem">Your Credit:</label>
        <select name="creditSystem" id="creditSystem" value={form.creditSystem} onChange={handleChange}>
          <option ></option>
          <option value="1">1</option>
          <option value="1.5">1.5</option>
          <option value="2">2</option>
        </select>

        <label htmlFor="launch">Start Date</label>
        <input
          type="date"
          id="launch"
          name="launch"
          value={form.launch}
          onChange={handleChange}
        />
        <label htmlFor="launch">Deadline</label>
        <input
          type="date"
          id="deadline"
          name="deadline"
          value={form.deadline}
          onChange={handleChange}
        />
        <label htmlFor="launch">Service</label>
        <input
          type="text"
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}
