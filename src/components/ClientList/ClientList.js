import api from "../../apis/api";
import { useState } from "react";

export function ClientList(props) {
  const [credit, setCredit] = useState({ points: 0 });
  const [compensate, setCompensate] = useState({ number: 0 });

  function handleChangeCredit(event) {
    setCredit({ [event.target.name]: event.target.value });
    console.log(credit);
  }

  async function handleSubmitCredit(event) {
    event.preventDefault();
    try {
      const response = await api.patch(
        `/user-points/add-points/${props.id}`,
        credit
      );
      console.log(response.data);
      props.reloadPage(true); /*precisava fazer um fetch do usuario (pontos)*/
    } catch (error) {
      console.log(error);
    }
  }

  function handleChangeCompensate(event) {
    setCompensate({ [event.target.name]: event.target.value });
    console.log(credit);
  }

  async function handleSubmitCompensate(event) {
    event.preventDefault();
    try {
      const response = await api.patch(
        `/user-points/credit-points/${props.id}`,
        compensate
      );
      console.log(response.data);
      props.reloadPage(true);
    } catch (error) {
      console.log(error);
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
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Customer Points
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Use a permanent address where you can receive mail.
                </p>
              </div>

              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-4 bg-white sm:p-6">
                    <div className="grid grid-cols-1 gap-6">
                      <div className="col-span-1 sm:col-span-2">
                        <div>
                          <p className="block text-indigo-600">
                            Customer Email: {props.customerEmail}
                          </p>
                        </div>
                        <div>
                          <p className="block  text-indigo-600">
                            Points: {props.pointsAccumulated}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form onSubmit={handleSubmitCredit}>
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="px-4 py-4 bg-white space-y-6 sm:p-6">
                      <div className="grid grid-cols-1 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label
                            htmlFor="credit"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Choose promotion and credit points
                          </label>
                          <select
                            id="credit"
                            name="points"
                            className="relative w-full bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-0 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={credit.points}
                            onChange={handleChangeCredit}
                          >
                            <option value=""></option>
                            {props.services.map((service) => {
                              return (
                                <option
                                  key={service.service}
                                  value={Number(service.creditSystem)}
                                >{`Promotion: ${service.service} /
                              Points to Credit: ${service.creditSystem}`}</option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Credit
                      </button>
                    </div>
                  </div>
                </form>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <form onSubmit={handleSubmitCompensate}>
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                      <div className="px-4 py-4 bg-white space-y-6 sm:p-6">
                        <div className="grid grid-cols-1 gap-6">
                          <div className="col-span-3 sm:col-span-2">
                            <label
                              htmlFor="number"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Points to Compensate
                            </label>
                            <input
                              id="number"
                              name="number"
                              type="number"
                              className="relative w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-left cursor-default focus:outline-none focus:ring-0 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              value={props.number}
                              onChange={handleChangeCompensate}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Compensate
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="sm:block py-5" aria-hidden="true" />
    </>
  );
}
