import styles from './CardPromoList.module.css';

export function CardPromoList(props){

    return(

        <div className={styles.cardPromoList}>
          <section className={styles.creditAndCompensate}>
              <h4>Create Points Program</h4>

              <p>Program equivalency: {props.creditySystem}</p>
              <p>Start date: {props.launch}</p>
              <p>End date: {props.deadline}</p>
              <p>Name your program: {props.service}</p>
              <label htmlFor="credit">Choose Program</label>
              <select id="credit" name="credit" value={props.program} onChange={props.onChangeCredit} >
                {props.services.map((service) => {
                  return <option key={service} value={service}>{service}</option>})}
              </select>
              <p>Points to Credit: {props.creditSystem}</p>
              <button type="submit">Credit</button>  
        </section>

        </div>
    )
}