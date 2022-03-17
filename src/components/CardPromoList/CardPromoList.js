export function CardPromoList(props) {
  return (
    <div className="max-w-sm bg-white overflow-hidden shadow sm:rounded-md">
      <div className="pt-3 pb-1 align-midle text-white bg-indigo-600 text-center sm:px-6">
        <h4 className="text-base">{` ${props.service} Promotion`}</h4>
      </div>
      <div className="py-3">
        <p className="px-3 text-gray-700 text-sm">
          Credits per Service: {props.creditSystem}
        </p>
        <p className="px-3 text-gray-700 text-sm">
          Start date:{" "}
          {props.launch
            ? `${props.launch.slice(8, 10)}/${props.launch.slice(
                5,
                7
              )}/${props.launch.slice(2, 4)}`
            : "Undefined"}
        </p>
        <p className="px-3 text-gray-700 text-sm">
          End date:{" "}
          {props.deadline
            ? `${props.deadline.slice(8, 10)}/${props.deadline.slice(
                5,
                7
              )}/${props.deadline.slice(2, 4)}`
            : "Undefined"}
        </p>
      </div>
    </div>
  );
}
