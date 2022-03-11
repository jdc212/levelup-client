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
        const response = await api.get("/business/profile");
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
          <h2 className={styles.title}>Business Profile</h2>
          <label htmlFor="name">Business name</label>
          <input
            id="name"
            placeholder="Company Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <label htmlFor="dba">Doing Business As</label>
          <input
            id="dba"
            placeholder="DBA"
            name="dba"
            value={form.dba}
            onChange={handleChange}
          />
          <label htmlFor="CNPJ">CNPJ</label>
          <input
            id="CNPJ"
            placeholder="CNPJ"
            name="CNPJ"
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
            value={form.phone}
            onChange={handleChange}
          />
          <label htmlFor="address">Address</label>
          <input
            id="address"
            placeholder="Enter full address"
            name="address"
            maxLength={50}
            type="text"
            value={form.address}
            onChange={handleChange}
          />

          {/*<label htmlFor="address">Address</label>
          <input
            id="street"
            placeholder="Enter street name"
            name="street"
            maxLength={50}
            type="text"
            value={form.address.street}
            onChange={handleChange}
          />
          <input
            id="number"
            placeholder="number"
            name="number"
            type="Number"
            value={form.address.number}
            onChange={handleChange}
          />
          <input
            id="neighborhood"
            placeholder="neighborhood"
            name="neighborhood"
            maxLength={50}
            type="text"
            value={form.address.neighborhood}
            onChange={handleChange}
          />
          <input
            id="city"
            placeholder="city"
            name="city"
            maxLength={50}
            type="text"
            value={form.address.city}
            onChange={handleChange}
          />
          <input
            id="state"
            placeholder="State"
            name="state"
            maxLength={50}
            type="text"
            value={form.address.state}
            onChange={handleChange}
          />
          <input
            id="zipcode"
            placeholder="zipcode"
            name="zipcode"
            maxLength={50}
            type="text"
            value={form.address.zipcode}
            onChange={handleChange}
          /> */}
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