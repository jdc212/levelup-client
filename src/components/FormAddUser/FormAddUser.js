import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./FormAddUser.module.css";
import api from "../../apis/api";

export function FormAddUser() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    customerEmail: "",
    pointsAccumulated: "",
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  }

  function clearForm() {
    setForm({
      customerEmail: "",
      pointsAccumulated: "",
    });
  }

  async function handleSubmit(event) {
    try {
      await event.preventDefault();
      await api.post("/user-points/create-card", form);
      clearForm();
      navigate("/");
      navigate("/businessdashboard");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Create User Points</h3>
        <label htmlFor="customerEmail">User Email</label>
        <input
          id="customerEmail"
          name="customerEmail"
          value={form.customerEmail}
          onChange={handleChange}
        />
        <label htmlFor="pointsAccumulated">Points to be Credit</label>
        <input
          id="pointsAccumulated"
          name="pointsAccumulated"
          value={form.pointsAccumulated}
          onChange={handleChange}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}
