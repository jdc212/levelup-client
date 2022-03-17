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
    <div className="max-w-full bg-white overflow-hidden shadow sm:rounded-md">
      <div className="block text-sm font-medium text-gray-700">
        <h4 className="">Customer Points</h4>
        <div className="">
        <div className="">
          <div className="mt-1 w-130 flex rounded-md shadow-sm grid grid-cols-3 gap-6">
            <section>
              <p className="block text-indigo-600 xl">Customer Email: {props.customerEmail}</p>
              <p className="block text-indigo-600">Points: {props.pointsAccumulated}</p>
            </section>

            <section >
              <form onSubmit={handleSubmitCredit} className="block text-sm font-medium text-gray-700">
                <h4>Credit Points</h4>
                <label htmlFor="credit" >Choose Program</label>
                <br></br>
                <select
                  id="credit"
                  name="points"
                  /*className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 cursor-default placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm pr-2"*/
                  className="relative w-full bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={credit.points}
                  
                  onChange={handleChangeCredit}
                >
                  <option value=""></option>
                  {props.services.map((service) => {
                    return (
                      <option
                        key={service.service}
                        value={Number(service.creditSystem)}
                      >{`Promotion: ${service.service} 
                   Points to Credit: ${service.creditSystem}`}</option>
                    );
                  })}
                </select>
                    <br></br>
                <button 
                type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Credit
                </button>
              </form>

            </section>

            <section>
              <form
                className="block text-sm font-medium text-gray-700"
                onSubmit={handleSubmitCompensate}
              >
                <h4>Compensate Points</h4>
                <label htmlFor="number" className="block text-sm font-medium text-gray-700">Points to Compensate</label>
                <input
                  id="number"
                  name="number"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  value={props.number}
                  onChange={handleChangeCompensate}
                />
                <br></br>
                <button 
                type="submit" 
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Compensate
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}