import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../apis/api";
import styles from "./FormAddPromo.module.css";

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
    <div className={styles.sectionfaq}>
      <form onSubmit={handleSubmit}>
        <h3 className={styles.title}>Create Promotion</h3>
        <div className={styles.faqbox}>
          <div className={styles.faqitem}>
            <div className={styles.clientList}>
              <div className={styles.creditAndCompensate}>
                <label htmlFor="creditSystem" className={styles.faqitemcontentinner}>Your Credit</label>
                <select name="creditSystem" id="creditSystem" value={form.creditSystem} onChange={handleChange} className={styles.faqitemcontentinner}>
                  <option ></option>
                  <option value="1">1</option>
                  <option value="1.5">1.5</option>
                  <option value="2">2</option>
                </select>

                <label htmlFor="launch" className={styles.faqitemcontentinner}>Start Date</label>
                <input
                  type="date"
                  id="launch"
                  name="launch"
                  value={form.launch}
                  onChange={handleChange}
                  className={styles.faqitemcontentinner}
                />
                <label htmlFor="launch" className={styles.faqitemcontentinner}>Deadline</label>
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  value={form.deadline}
                  onChange={handleChange}
                  className={styles.faqitemcontentinner}
                />
                <label htmlFor="launch" className={styles.faqitemcontentinner}>Service</label>
                <input
                  type="text"
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={styles.faqitemcontentinner}
                />
                <button type="submit" className={styles.signupbutton}>Create</button>
              </div>
            </div>
          </div>  
        </div>  
      </form>
    </div>
  );
}
