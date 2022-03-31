import { useState, useEffect } from "react";
import api from "../../apis/api";
import DashboardNavBar from "../../pages/BusinessDashboard/DashboardNavBar";

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

      await api.patch("/business/profile/update", form);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <DashboardNavBar />
      <div className="px-16 bg-gray-50 md:grid md:grid-cols-3 md:gap-6 pt-6">
        <div className="sm:block" aria-hidden="true">
          <div className="py-4">
            <div className="border-t border-gray-200" />
          </div>
        </div>
        <div className="bg-gray-50">
          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Business Profile
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    
                  </p>
                </div>
              </div>

              <div className="mt-5 md:mt-0 md:col-span-3 text-right">
                <form onSubmit={handleSubmit}>
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-4 bg-white space-y-6 sm:p-6">
                      <div className="grid grid-cols-1 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Business name
                          </label>
                          <input
                            className="relative w-full bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-0 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            id="name"
                            placeholder="Company Name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                          />
                          <label htmlFor="dba" className="block text-sm font-medium text-gray-700 pt-3">
                            Doing Business As
                          </label>
                          <input
                            className="relative w-full bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-0 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            type="text"
                            id="dba"
                            placeholder="DBA"
                            name="dba"
                            value={form.dba}
                            onChange={handleChange}
                          />
                          <label htmlFor="CNPJ" className="block text-sm font-medium text-gray-700 pt-3">
                            CNPJ
                          </label>
                          <input
                            className="relative w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-left cursor-default focus:outline-none focus:ring-0 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            type="number"
                            id="CNPJ"
                            placeholder="CNPJ"
                            name="CNPJ"
                            value={form.CNPJ}
                            onChange={handleChange}
                          />
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 pt-3">
                            Email
                          </label>
                          <input
                            className="relative w-full bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-0 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            id="email"
                            type="string"
                            placeholder="E-mail"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                          />
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 pt-3">
                            Phone
                          </label>
                          <input
                            className="relative w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-left cursor-default focus:outline-none focus:ring-0 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            id="phone"
                            placeholder="Phone"
                            name="phone"
                            type="number"
                            value={form.phone}
                            onChange={handleChange}
                          />
                          <label
                            htmlFor="address"
                            className="block text-sm font-medium text-gray-700 pt-3"
                          >
                            Address
                          </label>
                          <input
                            className="relative w-full bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-0 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            id="address"
                            placeholder="Enter full address"
                            name="address"
                            maxLength={50}
                            type="text"
                            value={form.address}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Update Profile
                        </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="hidden sm:block py-0" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
