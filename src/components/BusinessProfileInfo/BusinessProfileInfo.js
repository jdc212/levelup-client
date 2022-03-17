
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
    <> 

    <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        
    </div>

    <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h2 className="text-lg font-medium leading-6 text-gray-900">Business Profile</h2>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>

      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
      <form onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="name" className="mt-1 text-sm text-gray-600">Business name</label>
          <input
            id="name"
            placeholder="Company Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <label htmlFor="dba" className="mt-1 text-sm text-gray-600">Doing Business As</label>
          <input
            id="dba"
            placeholder="DBA"
            name="dba"
            value={form.dba}
            onChange={handleChange}
          />
          <label htmlFor="CNPJ" className="mt-1 text-sm text-gray-600">CNPJ</label>
          <input
            id="CNPJ"
            placeholder="CNPJ"
            name="CNPJ"
            value={form.CNPJ}
            onChange={handleChange}
          />
          <label htmlFor="email" className="mt-1 text-sm text-gray-600">Email</label>
          <input
            id="email"
            type="string"
            placeholder="E-mail"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <label htmlFor="phone" className="mt-1 text-sm text-gray-600">Phone</label>
          <input
            id="phone"
            placeholder="Phone"
            name="phone"
            type="number"
            value={form.phone}
            onChange={handleChange}
          />
          <label htmlFor="address" className="mt-1 text-sm text-gray-600">Address</label>
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
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button 
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span>Update Profile</span>
          </button>
          </div>
        </div>
      </form>
      </div>

      </div>
    </div>
     

    </>
  
    
  );
};