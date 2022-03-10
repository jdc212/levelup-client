export function CompensationRulesList(props){

    return(
        <div>
            <h4>Compensation Rules</h4>
            <p>Launch Date: {props.launch}</p>
            <p>Expiration Date: {props.expirationDate}</p>
            <p>Rules: {props.rules}</p>
            {/*<p>Addicional Rules: {props.optionalAddition.addition}</p>*/}
            {/*<p>Addicional Date: {props.optionalAddition.additionDate}</p>*/}
        </div>
    )
}