import styles from "./ClientList.module.css";
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
      props.reloadPage(true);/*precisava fazer um fetch do usuario (pontos)*/
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
    <div className={styles.clientList}>
      <section>
        <p>User Email: {props.customerEmail}</p>
        <p>Points: {props.pointsAccumulated}</p>
      </section>

      <section className={styles.creditAndCompensate}>
        <form onSubmit={handleSubmitCredit}>
          <h4>Credit Points</h4>
          <label htmlFor="credit">Choose Program</label>
          <select
            id="credit"
            name="points"
            value={credit.points}
            onChange={handleChangeCredit}
          ><option value=""></option>
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

          <button type="submit">Credit</button>
        </form>

        <form
          className={styles.compensateOrganizer}
          onSubmit={handleSubmitCompensate}
        >
          <h4>Compensate Points</h4>
          <label htmlFor="number">Points to Compensate</label>
          <input
            id="number"
            name="number"
            value={props.number}
            onChange={handleChangeCompensate}
          />
          <button type="submit">Compensate</button>
        </form>
      </section>
    </div>
  );
}
