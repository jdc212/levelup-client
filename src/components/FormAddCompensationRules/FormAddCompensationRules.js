import { useState } from "react";
import api from "../../apis/api";
import DashboardNavBar from "../../pages/BusinessDashboard/DashboardNavBar";

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
    <>
      <DashboardNavBar />
      <div className="px-16 bg-gray-50 md:grid md:grid-cols-3 md:gap-6 pt-6">
        <div className="sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>
       
          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3
                    className="text-lg font-medium leading-6 text-gray-900"
                    id="createPromotion"
                  >
                    Create Compensation Rules
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    
                  </p>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-3">
                <form onSubmit={handleSubmit}>
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-4 bg-white sm:p-6">
                      <div className="grid grid-cols-1 gap-6">
                        <div className="col-span-1 sm:col-span-2">
                          <label
                            htmlFor="rules"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Rules
                          </label>
                          <input
                            type="text"
                            id="rules"
                            name="rules"
                            value={form.rules}
                            onChange={handleChange}
                            className="relative w-full bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-0 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="py-3 grid grid-cols-2 md:grid-cols-1 gap-6">
                          <div className="col-span-1 sm:col-span-1">
                            <label
                              htmlFor="launch"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Launch Date:
                            </label>
                            <input
                              name="launch"
                              id="launch"
                              value={form.launch}
                              onChange={handleChange}
                              type="date"
                              className="relative w-full bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-0 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>

                          <div className="col-span-1 sm:col-span-1">
                            <label
                              htmlFor="expirationDate"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Expiration Date:
                            </label>
                            <input
                              name="expirationDate"
                              id="expirationDate"
                              value={form.expirationDate}
                              onChange={handleChange}
                              type="date"
                              className="relative w-full bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-0 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Create
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="hidden sm:block py-0" aria-hidden="true" />
            </div>
          </div>
      </div>
    </>
  );
}
