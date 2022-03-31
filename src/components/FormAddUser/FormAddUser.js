import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
    <>
    <div className="sm:block" aria-hidden="true">
      <div className="py-5">
        <div className="border-t border-gray-200" />
      </div>
    </div>
    <div className="bg-gray-50">
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900" id="createPoints">Create Customer Points</h3>
              <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-4 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="customerEmail"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Customer Email
                      </label>
                        <input
                          id="customerEmail"
                          name="customerEmail"
                          value={form.customerEmail}
                          onChange={handleChange}
                          className="relative w-full bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-0 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="pointsAccumulated"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Points to be Credit
                      </label>
                        <input
                          id="pointsAccumulated"
                          name="pointsAccumulated"
                          type="number"
                          value={form.pointsAccumulated}
                          className="relative w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-left cursor-default focus:outline-none focus:ring-0 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    Create
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
