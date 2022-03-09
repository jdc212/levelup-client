import styles from './ClientList.module.css';

export function ClientList(props){

    return(
        <div className={styles.clientList}>
          <section>  
            <p>User Email: {props.customerEmail}</p>
            <p>Points: {props.pointsAccumulated}</p>
          </section>

          <section className={styles.creditAndCompensate}>
            <form onSubmit={props.handleSubmitCredit}>
              <h4>Credit Points</h4>
              <label htmlFor="credit">Choose Program</label>
              <select id="credit" name="credit" value={props.program} onChange={props.onChangeCredit} >
                {props.services.map((service) => {
                  return <option key={service} value={service}>{service}</option>})}
              </select>
              <p>Points to Credit: {props.creditSystem}</p>
              <button type="submit">Credit</button>  
            </form>
            
            <form className={styles.compensateOrganizer} onSubmit={props.handleSubmitCompensate}>
              <h4>Compensate Points</h4>
              <label htmlFor="number">Points to Compensate</label>
              <input id="number" name="number" value={props.number} onChange={props.onChangeCompensate}/>
              <button type="submit">Compensate</button>
            </form>
          </section>

        </div>
    )
}