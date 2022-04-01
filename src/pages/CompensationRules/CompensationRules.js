import { useState, useEffect } from "react";
import api from "../../apis/api";
import { FormAddCompensationRules } from "../../components/FormAddCompensationRules/FormAddCompensationRules";
import { CompensationRulesList } from "../../components/CompensationRulesList/CompensationRulesList";

export default function CompensationRules() {
  const [form, setForm] = useState([]);

  useEffect(() => {
    async function fetchCompensation() {
      try {
        const response = await api.get("/compensation-rule/compensation");
        setForm([...response.data]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCompensation();
  }, []);

  return (
    <>
      <FormAddCompensationRules />
      <div className="bg-gray-50 px-16">
          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900" id="promotions">
                    Registered Compensation Rules
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Use a permanent address where you can receive mail.
                  </p>
                </div>
              </div>

              <div className="mt-5 md:mt-0 shadow overflow-hidden sm:rounded-md px-8 py-4 sm:p-3 ">
                <div className="grid grid-cols-2 grid-rows-3 gap-6 col-span-1 sm:col-span-2">
                  {form.map((current) => {
                    return (
                      <CompensationRulesList
                        key={current._id}
                        launch={current.launch}
                        expirationDate={current.expirationDate}
                        rules={current.rules}
                    />);
                  })}
                </div>
              </div>
              <div className="hidden sm:block py-0" aria-hidden="true" />
            </div>
          </div>
        </div>
    </>
  );
}
