import styles from './CardPromoList.module.css';

export function CardPromoList(props){

    return(
        <div className={styles.cardPromoList}>
              <h4>{` ${props.service} Program`}</h4>

              <p>Program equivalency: {props.creditySystem}</p>
              <p>Start date: {props.launch}</p>
              <p>End date: {props.deadline}</p>
              <p>Program name: {props.service}</p>
              

        </div>
    )
}