import styles from "./BusinessProfileInfo.module.css";
import { useState, useEffect } from "react";
import api from "../../apis/api";


export default function EditBusinessProfile() {
  
  const [form, setForm] = useState({
    name: "",
    dba: "",
    CNPJ: "",
    email: "",
    phone: "",
    address: "",
    /*img: "",*/
  });

  useEffect(() => {
    async function fetchBusiness() {
      try {
        const response = await api.get("business/profile");
        setForm({ ...response.data });
    } catch (error) {
        console.error(error);
      }
    }
    fetchBusiness();
  }, []);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
      try {
        event.preventDefault();

       /* for (let key in form) {
          if (!form[key]) {
            window.alert(`Please fill out ${key} correctly`);
            return;
          }
        }*/
    
        delete form._id;
    
        await api.patch("/business/profile/update", form)
          

      } catch(error) {
        console.log(error)
      };
}

  return (
    <div className={styles.divPage}>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <h2 className={styles.title}>Profile:</h2>
          <label htmlFor="name">Business name:</label>
          <input
            maxlength="32"
            id="name"
            placeholder="Company Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <label htmlFor="dba">Doing business as</label>
          <input
            maxlength="32"
            id="dba"
            placeholder="DBA"
            name="dba"
            value={form.dba}
            onChange={handleChange}
          />
          <label htmlFor="CNPJ">CNPJ</label>
          <input
            maxlength="64"
            id="CNPJ"
            placeholder="CNPJ"
            name="description"
            value={form.CNPJ}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="string"
            placeholder="E-mail"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            placeholder="Phone"
            name="phone"
            type="number"
            step="0.01"
            min="1"
            value={form.phone}
            onChange={handleChange}
          />
          <label htmlFor="address">Address</label>
          <input
            maxlength="128"
            id="address"
            placeholder="Enter full address"
            name="address"
            maxLength={50}
            type="text"
            value={form.address}
            onChange={handleChange}
          />
          {/*<label htmlFor="img">Link para logo ou imagem de seu projeto:</label>
          <input id="img" name="img" value={form.img} onChange={handleChange} />*/}
          <button type="submit">
            <span>Update Profile</span>
          </button>
        </div>
      </form>
    </div>
  );
};