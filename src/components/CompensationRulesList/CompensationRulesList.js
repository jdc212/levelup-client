export function CompensationRulesList(props) {
  return (
    <>
      <div className="max-w-sm bg-white overflow-hidden shadow sm:rounded-md mt-5 md:mt-0">
        <div className="pt-3 pb-1 align-midle text-black bg-gray-100 text-center sm:px-6">
          <h4 className="text-base">{` ${props.service} Promotion`}</h4>
        </div>
        <div className="py-3">
          <p className="px-3 text-gray-700 text-sm">Rules: {props.rules}</p>
          {/*<p>Addicional Rules: {props.optionalAddition.addition}</p>*/}
          {/*<p>Addicional Date: {props.optionalAddition.additionDate}</p>*/}
          <p className="px-3 text-gray-700 text-sm">
            Launch Date:{" "}
            {props.launch
              ? `${props.launch.slice(8, 10)}/${props.launch.slice(
                  5,
                  7
                )}/${props.launch.slice(2, 4)}`
              : "Undefined"}
          </p>
          <p className="px-3 text-gray-700 text-sm">
            Expiration Date:{" "}
            {props.expirationDate
              ? `${props.expirationDate.slice(
                  8,
                  10
                )}/${props.expirationDate.slice(
                  5,
                  7
                )}/${props.expirationDate.slice(2, 4)}`
              : "Undefined"}
          </p>
        </div>
      </div>
    </>
  );
}
