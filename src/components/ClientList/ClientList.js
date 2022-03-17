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
    <div className="max-w-sm bg-white overflow-hidden shadow sm:rounded-md">
      <div className="">
    <h3 className="">Customer Points</h3>
      <div className="">
        <div className="">
          <div className="mt-1 w-130 flex rounded-md shadow-sm">
            <section>
              <p className="mt-1 flex rounded-md shadow-sm">Customer Email: {props.customerEmail}</p>
              <p className="mt-1 flex rounded-md shadow-sm">Points: {props.pointsAccumulated}</p>
            </section>

            <section className="">
              <form onSubmit={handleSubmitCredit} className="block text-sm font-medium text-gray-700">
                <h4>Credit Points</h4>
                <label htmlFor="credit">Choose Program</label>
                <br></br>
                <select
                  id="credit"
                  name="points"
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

                <button 
                type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Credit
                </button>
              </form>

              <form
                className="block text-sm font-medium text-gray-700"
                onSubmit={handleSubmitCompensate}
              >
                <h4>Compensate Points</h4>
                <label htmlFor="number" className="block text-sm font-medium text-gray-700">Points to Compensate</label>
                <input
                  id="number"
                  name="number"
                  value={props.number}
                  onChange={handleChangeCompensate}
                />
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