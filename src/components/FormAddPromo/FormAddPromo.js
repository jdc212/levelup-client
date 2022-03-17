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
      return { ...prevForm, [event.target.name]: event.target.value };
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
    <div className="w-50">
      <form onSubmit={handleSubmit}>
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-1 sm:col-span-1">
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700"
                >
                  Service
                </label>
                <div className="mt-1 w-48 h-5 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-48 h-5 shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="col-span-1 sm:col-span-1">
                <label
                  htmlFor="creditSystem"
                  className="block text-sm font-medium text-gray-700"
                >
                  Credits per Service
                </label>
                <div className="mt-1 w-48 h-5 flex rounded-md shadow-sm">
                  <select
                    name="creditSystem"
                    id="creditSystem"
                    value={form.creditSystem}
                    onChange={handleChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-48 h-5 shadow-sm sm:text-sm border-gray-300 rounded-md"
                  >
                    <option></option>
                    <option value="1">1</option>
                    <option value="1.5">1.5</option>
                    <option value="2">2</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="py-4 grid grid-cols-2 gap-6">
              <div className="col-span-1 sm:col-span-1">
                <label
                  htmlFor="launch"
                  className="block text-sm font-medium text-gray-700"
                >
                  Start Date
                </label>
                <div className="mt-1 w-48 h-5 flex rounded-md shadow-sm">
                  <input
                    type="date"
                    id="launch"
                    name="launch"
                    value={form.launch}
                    onChange={handleChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-48 h-5 shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="col-span-1 sm:col-span-1">
                <label
                  htmlFor="launch"
                  className="block text-sm font-medium text-gray-700"
                >
                  End Date
                </label>
                <div className="mt-1 w-48 h-5 flex rounded-md shadow-sm">
                  <input
                    type="date"
                    id="deadline"
                    name="deadline"
                    value={form.deadline}
                    onChange={handleChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-48 h-5 shadow-sm sm:text-sm border-gray-300 rounded-md"
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
  );
}
