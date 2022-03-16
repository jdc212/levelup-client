import styles from './CardPromoList.module.css';

export function CardPromoList(props){

    return(
        
        <div className={styles.sectionfaq}>
            <h3 className={styles.title}>Card Promo List</h3>
            <div className={styles.faqbox}>
                <div className={styles.faqitem}>
                    <div className={styles.cardPromoList}>
                        <h4>{` ${props.service} Program`}</h4>
                        <p>Program equivalency: {props.creditSystem}</p>
                        <p>Start date: {props.launch}</p>
                        <p>End date: {props.deadline}</p>
                        <p>Program name: {props.service}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}